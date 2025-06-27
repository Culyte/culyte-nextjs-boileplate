# 🚀 Culyte Next.js Boilerplate

A modern, scalable boilerplate built with **Next.js**, **Tailwind CSS**, **ShadCN UI**, and **TypeScript**. Designed for rapid prototyping and production-ready web applications.

---

## ✨ Features

- ✅ Next.js App Router (`app/` directory)
- 🎨 Tailwind CSS with PostCSS integration
- 🧩 ShadCN UI components (Radix-based)
- ⚙️ Customizable CSS variables via `globals.css`
- 💅 Font support with `@next/font` (Geist + Geist Mono)
- 🌗 Light & dark mode with theme tokens
- 💾 Fully typed with TypeScript
- 🧠 Organized folder structure (hooks, store, utils)
- 🧹 Prettier + Tailwind + Sorted Imports
- ✅ Commit linting + Git hook enforcement via Husky

---

## 📁 Folder Structure

````bash
culyte-nextjs-boilerplate/
├── .husky/                # Git hooks managed by Husky
├── .next/                 # Next.js build output (auto-generated)
├── .vscode/               # VSCode settings
├── app/                   # Next.js App Router
├── components/            # Shared UI components
├── hooks/                 # Custom React hooks
├── node_modules/          # Installed npm packages
├── public/                # Static files (images, icons, etc.)
├── store/                 # Global state management
├── utils/                 # Utility functions and helpers

├── .gitignore             # Git ignore rules
├── .prettierignore        # Ignore rules for Prettier
├── .prettierrc.json       # Prettier config (with Tailwind and import sort)
├── commitlint.config.js   # Commit message linting rules
├── eslint.config.mjs      # ESLint configuration
├── next-env.d.ts          # Next.js types
├── next.config.ts         # Next.js configuration
├── package-lock.json      # Auto-generated lockfile
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # Tailwind/PostCSS config
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration



## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/Culyte/culyte-nextjs-boilerplate.git

# Navigate to project
cd culyte-nextjs-boilerplate

# Install dependencies
npm install  # or yarn/pnpm

# Start dev server
npm run dev

```
````
