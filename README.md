# WNRS (We're Not Really Strangers) - Digital Adaptation

A digital adaptation of the "We're Not Really Strangers" (WNRS) card game, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The application presents three levels of relationship-building questions designed to help people connect at different depths.

## 🌟 Features

- **Three Levels of Connection**: 
  - Level 1: Perception (Surface-level)
  - Level 2: Connection (Personal)
  - Level 3: Reflection (Deep)
- **Bilingual Support**: Full English and Japanese translations for all questions.
- **Randomized Gameplay**: Questions appear randomly without repetition within each level to maintain engagement.
- **Beautiful Animations**: Smooth card interactions and swipe navigation powered by Framer Motion.
- **Responsive Design**: Mobile-first approach ensuring a great experience on any device.
- **Dark/Light Mode**: System-aware theme support for comfortable reading in any environment.

## 💻 Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and your preferred package manager (npm, yarn, pnpm, or bun) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JohnPevien/wnrs.git
   cd wnrs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Next.js App Router files, including the main application logic (`page.tsx`) and reusable components (`components/`).
- `wnrs-questions.json`: The core data file containing all questions categorized by level with their respective English and Japanese texts.
- `public/`: Static assets.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!