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
      'I use SOLIDOWRKS as my main CAD software to create 3D models and simulations for my engineering projects.',
    image: <SiDassaultsystemes />,
  },
  {
    title: 'Simulation',
    description: 'I use ANSYS for FEA and CFD simulations to analyze and optimize my designs.',
    image: <SiAnsys />,
  },
  {
    title: 'AutoCAD',
    description:
      'I use AutoCAD for 2D drafting and MEP designs. I also use it for simple 3D modeling in some cases.',
    image: <SiAutocad />,
  },
  {
    title: 'AnyLogic',
    description:
      'I use AnyLogic for simulation modeling and analysis. I also use it for system dynamics and agent-based modeling.',
    image: <SiCustomAnyLogic />,
  },
  {
    title: 'MITCalc',
    description: 'I use MITCalc for engineering calculations and preliminary design',
    image: <SiCustomMITCalc />,
  },
  {
    title: 'MATLAB',
    description: 'I use MATLAB for numerical analysis and simple control systems.',
    image: <SiCustomMatlab />,
  },
  {
    title: 'Python',
    description:
      'I use python to automate tasks and solve complex problems in everyday life and specially in engineering.',
    image: (
      <>
        <SiPython />
      </>
    ),
  },
  {
    title: 'Numpy, Sympy, Matplotlib',
    description: 'These are my favorite tools for engineering calculations and data visualization.',
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
      'I use C and C++ for other programming tasks and projects, and also I have some experience with embedded systems and embedded C',
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
      'I use LaTeX and Overleaf to write important documents with academic writing standards. I also use Zotero for reference management.',
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
      'I use Microsoft Office for documentation and presentations. I also use Excel for data analysis and calculations.',
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
      'I use Visual Studio Code as my main code editor. I also use it for web development and Python programming.',
    image: <VscVscodeInsiders />,
  },
  {
    title: 'Web Development',
    description:
      'Web development is my hobby and a tool I use to showcase my work and do side projects.',
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
      'I use Git and GitHub to manage my projects and collaborate with others. I also use it to showcase my work.',
    image: <SiGithub />,
  },
  {
    title: 'Professional Presentation',
    description:
      'I use Figma, Adobe Illustrator, and Microsoft Office to create professional presentations and documents.',
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
      'I use Markdown and MDX to write fast and easy documentation for my projects. I also use it to write blog posts and content in my websites.',
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
