# 🚀 Culyte Next.js Boilerplate

A modern, scalable boilerplate built with **Next.js**, **Tailwind CSS**, **ShadCN UI**, and **TypeScript**. Designed for rapid prototyping and production-ready web applications.

---

## ✨ Features

- ✅ Next.js App Router (based in `app/` directory)
- 🎨 Tailwind CSS with PostCSS integration
- 🧩 ShadCN UI components (Radix-based)
- ⚙️ Customizable CSS variables via `globals.css`
- 💅 Font support with `@next/font` (Geist + Geist Mono)
- 🌗 Light & dark mode with theme tokens
- 💾 Fully typed with TypeScript
- 🧠 Clean folder structure for hooks, store, and utils

---

## 📁 Folder Structure

````bash
culyte-nextjs-boilerplate/
├── app/                   # Next.js app directory
├── components/            # Shared UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── public/                # Static files (images, fonts, etc.)
├── store/                 # State management (e.g. Zustand/Redux)
├── utils/                 # Helper functions

├── .gitignore             # Git ignore rules
├── components.json        # shadcn/ui components config
├── next-env.d.ts          # Next.js TypeScript declarations
├── next.config.ts         # Next.js configuration
├── package-lock.json      # NPM lockfile
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration


---

## 🎨 Custom Theming

Custom theme tokens are defined in `globals.css` using `:root` and `.dark` scopes.

### 🎯 Key Tokens

```css
:root {
  --radius: 24px;
  --primary: #096BD8;
  --primary-gradient: linear-gradient(to right, #086AD8, #6ED9F8);
  --text-primary: #000000;
  --text-secondary: rgba(0, 0, 0, 0.6);
}

## Using Custom Tokens with Tailwind

````

<div
  className="
    bg-[image:var(--primary-gradient)]
    rounded-[var(--radius)]
    text-[var(--text-primary)]
    shadow-[0_3.33px_10px_rgba(0,0,0,0.1)]
  "
>
  Styled Component
</div>```

```

## Getting Started

```

# Clone the repository

git clone https://github.com/Culyte/culyte-nextjs-boileplate

```

# Navigate to the project

```

cd culyte-nextjs-boilerplate

```

# Install dependencies

```

npm install

```

# Start the development server

```

npm run dev

```

# Build for production

```

npm run build

```

```
