export function extractFirstUrl(text: string, fallback: string): string {
  const match = text.match(/https?:\/\/[^\s]+/);
  return match ? match[0] : fallback;
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(typeof date === "string" ? new Date(date) : date);
}
