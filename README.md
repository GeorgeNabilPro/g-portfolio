

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
- [x] Run the simulation on Ansys and Add the results.
- [x] Get images for any other MEP project from my father.
- [x] Add my image and the website description to the meta tags so that it appears in Facebook, Twitter, and Whatsapp.
- [x] Add the website icon.
- [x] Finish the responsiveness problems
- [x] Make date appear
- [x] Add UI features like a gear in the hero and some gears in the footer.
  - [x] Make the Gear component with configurable geometry and colors.
  - [x] Animate Gear Components
  - [x] Position the gears in the hero and footer.
- [x] Add team size UI to the project cards.
- [x] Add links UI to the project cards.
- [x] Add icons to role, date, tags, and team size.
- [x] Finish the modal design - first version
- [x] Finish the carrousel design - first version
- [x] ~~Get images for CFC from my father~~.
- [ ] Write the date, descrption, and add more images for each project.
   - [x] three-wheel
   - [x] workshop
   - [x] cfd-on-formula
   - [x] trommel-screem
   - [ ] mep-projects
   - [ ] union-powder
   - [ ] hoist-mechanism
   - [ ] pressure-vessel
   - [ ] hypercone
   - [ ] process-tree
   - [ ] tccd
   - [ ] jib-crane
- [ ] Add the fallback image
- [ ] Finalize the tools and technologies used.
  - [x] UI
  - [ ] Content
- [ ] Add the skills section
  - [ ] UI
  - [ ] Content
  - [ ] Images
- [ ]**Submit the portfolio**
- [ ] Add the other projects section
  - [ ] Wind shield wiper
  - [ ] Data sheet for Mechanical Design
  - [ ] CV builder
  - [ ] Crane lift design
  - [ ] Gear testing design
  - [ ] Jack screw design
- [ ] Make the Testimonial section.
  - [ ] Get a testimonial from Dr. Emad El-Kashef.
  - [ ] Get a testimonial from Dr. Emad El-Sherbiny.
  - [ ] Get a testimonial from Dr. Sahor.
- [ ] Optimize images
- [ ] Add some code splitting and dynamic imports.
- [ ] Add link to the Process Tree project.
- [ ] Make tabs and view transitions for the tabs.
- [ ] Add filters for projects.
- [ ] Add a contact form.
- [ ] Connect with MechaPuzzle.
- [ ] Add the experience section.
- [ ] Implement a dark mode toggle.
- [ ] Add smart animation for the hero section.

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

## Important Links

- The Gear component is from [sw1227/gear-svg](https://github.com/sw1227/gear-svg)