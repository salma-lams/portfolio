/**
 * In-memory rate limiter for server action protection.
 *
 * NOTE ON SERVERLESS ENVIRONMENTS:
 * In a distributed, multi-region serverless deployment (e.g. Vercel Lambdas),
 * in-memory state is maintained per warm instance. For high-scale distributed
 * state, an external store like Upstash Redis should be used.
 * For this single-author portfolio, this provides sufficient protection
 * against naive automated spam and repeated bursts on warm lambdas.
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const cache = new Map<string, RateLimitRecord>();

export interface RateLimitOptions {
  intervalMs: number;
  maxRequests: number;
}

export function isRateLimited(
  identifier: string,
  options: RateLimitOptions = { intervalMs: 60 * 1000, maxRequests: 5 }
): boolean {
  const now = Date.now();
  const record = cache.get(identifier);

  if (!record || now > record.resetAt) {
    cache.set(identifier, {
      count: 1,
      resetAt: now + options.intervalMs,
    });
    return false;
  }

  if (record.count >= options.maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}
