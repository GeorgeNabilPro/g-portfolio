

# G Portfolio

A sleek and responsive one-page portfolio website showcasing my expertise in mechanical engineering, programming, and design. Built with modern web technologies to ensure optimal performance and user experience.

## Roadmap

- [x] Start with a basic layout and structure.
- [x] Implement Cards with Modal functionality for projects.
- [x] Implement the hero section
  - [x] ~~Use bulleted list~~
  - [x] Add key information
  - [x] Add the name
  - [x] Add a photo
- [x] Make Sections of cards
  - [x] Projects
  - [x] Skills
  - [x] Tools
- [x] Get images for TCCD from Abdullah.
- [x] Get images for Unio Powder.
- [x] Get images for the Workshop
- [x] Finish the card design
- [x] Add the tools section with images for used software.
- [x] Add links to my social media accounts and other contact methods.
- [x] Add University Logo in the Hero
- [x] Implement an Image viewer for the images in the modal.
- [ ] Finish the responsiveness problems
- [ ] Add UI features like a gear in the heor and some gears in the footer.
- [ ] Write the date and the descrption for each project.
   - [ ] three-wheel
   - [ ] trommel-screem
   - [ ] cfd-on-formula
   - [ ] workshop
   - [ ] cfc-mep
   - [ ] union-powder
   - [ ] jack-screw
   - [ ] hoist-mechanism
   - [ ] pressure-vessel
   - [ ] hypercone
   - [ ] process-tree
   - [ ] tccd
   - [ ] datasheet-1
   - [ ] jib-crane
- [ ] Make date appear
- [ ] Add the fallback image
- [ ] Finalize the tools and technologies used.
- [ ] Add images for the Datasheet I made.
- [x] Run the simulation on Ansys and Add the results.
- [ ] Get images for CFC from my father.
- [x] Get images for any other MEP project from my father.
- [ ] Finish the modal design
- [ ] Finish the carrousel design
- [ ] Add the skills section with skill levels and icons.
- [ ] Make the Testimonial section.
  - [ ] Get a testimonial from Dr. Emad El-Kashef.
  - [ ] Get a testimonial from Dr. Emad El-Sherbiny.
  - [ ] Get a testimonial from Dr. Sahor.

- [ ] Add the website icon.
- [ ] Add link to the Process Tree project.
- [ ] **Submit the portfolio**

Advanced Features:

- [ ] Make tabs and view transitions for the tabs.
- [ ] Add filters for projects.
- [ ] Add a contact form.
- [ ] Connect with MechaPuzzle.
- [ ] Add the experience section.
- [ ] Implement a dark mode toggle.



## 🚀 Tech Stack

* **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for rapid development.
* **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for custom designs.
* **[shadcn/ui](https://ui.shadcn.com/)**: Beautifully designed components built with Tailwind CSS.
* **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript for enhanced code quality.
* **[GitHub Pages](https://pages.github.com/)**: Hosting platform for deploying static websites.

## 📁 Project Structure

```
my-portfolio/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (About, Projects, etc.)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project metadata and scripts
```

## 📦 Getting Started

### Prerequisites

* **Node.js** (v14 or higher)
* **npm** or **pnpm**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using pnpm:

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using pnpm:

   ```bash
   pnpm dev
   ```

4. **Open in browser:**

   Navigate to `http://localhost:5173` to view the website.

## 🛠️ Available Scripts

* **`dev`**: Starts the development server.
* **`build`**: Builds the app for production.
* **`preview`**: Previews the production build locally.
* **`deploy`**: Deploys the app to GitHub Pages.([GitHub][1])

## 🚀 Deployment

To deploy the website to GitHub Pages:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

Ensure the `homepage` field in `package.json` is set to:

```json
"homepage": "https://yourusername.github.io/my-portfolio"
```

Replace `yourusername` with your GitHub username.

## 🎨 Customization

* **Tailwind CSS**: Modify `tailwind.config.js` to customize themes, colors, and breakpoints.
* **shadcn/ui Components**: Customize components in the `components/ui` directory as needed.
* **Content**: Update content in the `sections` directory to reflect your personal information and projects.

## 📄 License

This project is licensed under the [MIT License](LICENSE)
