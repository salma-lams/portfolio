import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "vitest.config.mts",
    ],
  },
  // Inward dependency rule: Domain and Content layers cannot import from Presentation or React/Next
  {
    files: [
      "src/features/*/data/**",
      "src/features/*/types.ts",
      "src/features/*/types/**",
      "src/features/*/use-cases/**",
    ],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["react", "react-dom", "next/*", "@/components/*"],
              message:
                "Domain and Application layers must remain pure and point inward. No UI or Next.js imports.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
