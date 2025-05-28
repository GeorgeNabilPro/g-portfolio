import {
  SiAnsys,
  SiAutocad,
  SiDassaultsystemes,
  SiNumpy,
  SiSympy,
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiCss,
  SiVite,
  SiHtml5,
  SiTailwindcss,
  SiLatex,
  SiOverleaf,
  SiZotero,
  SiCplusplus,
  SiC,
  SiFigma,
  SiCanva,
  SiGithub,
  SiPayloadcms,
  SiMarkdown,
  SiMdx,
  SiObsidian,
  SiMermaid,
} from '@icons-pack/react-simple-icons';

import { SiAdobeillustrator } from 'react-icons/si';
import {
  PiMicrosoftPowerpointLogo,
  PiMicrosoftExcelLogo,
  PiMicrosoftWordLogo,
} from 'react-icons/pi';
import { VscVscodeInsiders } from 'react-icons/vsc';
import {
  SiCustomMatplotlib,
  SiCustomAnyLogic,
  SiCustomMITCalc,
  SiCustomMatlab,
  SiCustomVisio,
} from '@/icons/Logos';

// MS Visio

const TOOLS = [
  {
    title: '3D Modeling',
    description:
      'Utilizing SOLIDWORKS as my primary CAD software for creating 3D models and performing simulations for engineering projects.',
    image: <SiDassaultsystemes />,
  },
  {
    title: 'Simulation',
    description:
      'Employing ANSYS for Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) simulations to analyze and optimize designs.',
    image: <SiAnsys />,
  },
  {
    title: 'AutoCAD',
    description:
      'Leveraging AutoCAD for 2D drafting, Mechanical, Electrical, and Plumbing (MEP) designs. And other trivial tasks that require 2D drawings.',
    image: <SiAutocad />,
  },
  {
    title: 'AnyLogic',
    description:
      'Utilizing AnyLogic for the simulation and optimization of complex systems, particularly queuing systems such as production lines.',
    image: <SiCustomAnyLogic />,
  },
  {
    title: 'MITCalc',
    description:
      'Employing MITCalc for engineering calculations and supporting preliminary design phases.',
    image: <SiCustomMITCalc />,
  },
  {
    title: 'MATLAB',
    description:
      'Using MATLAB for numerical analysis and the development of simple control systems.',
    image: <SiCustomMatlab />,
  },
  {
    title: 'Python',
    description:
      'Leveraging Python to automate tasks and solve complex problems, with a specific focus on engineering applications.',
    image: (
      <>
        <SiPython />
      </>
    ),
  },
  {
    title: 'Numpy, Sympy, Matplotlib',
    description:
      'Utilizing Numpy, Sympy, and Matplotlib for engineering calculations and effective data visualization.',
    image: (
      <>
        <SiNumpy />
        <SiSympy />
        <SiCustomMatplotlib />
      </>
    ),
  },
  {
    title: 'C and C++',
    description:
      'Employing C and C++ for diverse programming tasks and projects, including experience with embedded systems and embedded C programming.',
    image: (
      <>
        <SiCplusplus />
        <SiC />
      </>
    ),
  },
  {
    title: 'Academic Writing',
    description:
      'Utilizing LaTeX and Overleaf for producing documents adhering to academic writing standards, complemented by Zotero for reference management.',
    image: (
      <>
        <SiLatex />
        <SiOverleaf />
        <SiZotero />
      </>
    ),
  },
  {
    title: 'MS Office',
    description:
      'Employing the Microsoft Office suite for documentation, presentations, and leveraging Excel for data analysis and calculations.',
    image: (
      <>
        <PiMicrosoftWordLogo />
        <PiMicrosoftExcelLogo />
        <SiCustomVisio />
      </>
    ),
  },
  {
    title: 'VS Code',
    description:
      'Utilizing Visual Studio Code as my primary code editor for various development tasks, including web development and Python programming.',
    image: <VscVscodeInsiders />,
  },
  {
    title: 'Web Development',
    description:
      'Engaging in web development to showcase work and undertake auxiliary projects, utilizing a range of modern technologies.',
    image: (
      <>
        <SiNextdotjs />
        <SiTypescript />
        <SiJavascript />
        <SiCss />
        <SiHtml5 />
        <SiTailwindcss />
        <SiVite />
        <SiReact />
        <SiPayloadcms />
      </>
    ),
  },
  {
    title: 'Git and GitHub',
    description:
      'Using Git and GitHub for version control, project management, collaboration, and showcasing completed work.',
    image: <SiGithub />,
  },
  {
    title: 'Professional Presentation',
    description:
      'Leveraging Figma, Canva, Adobe Illustrator, and Microsoft PowerPoint to create professional and visually compelling presentations and documents.',
    image: (
      <>
        <SiFigma />
        <SiCanva />
        <SiAdobeillustrator />
        <PiMicrosoftPowerpointLogo />
      </>
    ),
  },
  {
    title: 'Markdown and MDX',
    description:
      'Utilizing Markdown and MDX for efficient creation of project documentation, blog posts, and website content.',
    image: (
      <>
        <SiMarkdown />
        <SiMdx />
        <SiObsidian />
        <SiMermaid />
      </>
    ),
  },
];

export { TOOLS };
