import { Brain, Search, Code, Factory, Ruler, Book } from 'lucide-react';
import {
  MessageSquare,
  Users,
  Lightbulb,
  Flame,
  Calendar,
  Shuffle,
  GraduationCap,
} from 'lucide-react';

const SKILLS_TECHNICAL = [
  {
    title: 'Mathematical Modeling',
    image: <Brain className="text-green-300" />,
    description:
      "I enjoy using mathematical modeling to understand and approach engineering problems. It's a skill I've been developing throughout my studies, and I find it helpful to create a model to guide my thinking before turning to code to analyze and visualize the results",
  },
  {
    title: 'Research and Development',
    image: <Search className="text-green-300" />,
    description:
      "I have a keen interest in research as a tool for learning and problem-solving. For my projects, I dedicate time to researching new technologies and methods to ensure I'm choosing a well-informed path. I enjoy the process of adapting ideas from my research to fit the specific challenges I'm working on.",
  },
  {
    title: 'Problem Solving',
    image: <Lightbulb className="text-green-300" />,
    description:
      "I've created a systematic and robust problem-solving framework that enables me to tackle engineering challenges with efficiency, effectiveness, and consistency. This living framework is continually refined with new techniques, methodologies, and tools, ensuring that my approach to finding sustainable solutions is always evolving and improving",
  },
  {
    title: 'Mechanical Design',
    image: <Ruler className="text-green-300" />,
    description:
      'I have gained valuable experience in mechanical design through my academic projects and workshop activities. I am well-versed in advanced topics such as Design for X (DFX)—including Design for Manufacturing (DFM) and Design for Assembly (DFA)—as well as conceptual design and system optimization. I enjoy bringing together different skills to tackle a design challenge.',
  },
  {
    title: 'Programming',
    image: <Code className="text-green-300" />,
    description:
      ' started learning to program at a young age and have built a solid foundation in it. I use my skills in Python and JavaScript to support my engineering work, whether for running calculations and plotting data, automating tasks, or exploring simple data analysis',
  },
  {
    title: 'Manufacturing',
    image: <Factory className="text-green-300" />,
    description:
      "Manufacturing is a field I'm truly passionate about, and I've gained a good foundational knowledge of various manufacturing processes and systems through my studies. I'm always excited for opportunities to learn more about this field",
  },
  {
    title: 'Academic Writing',
    image: <Book className="text-green-300" />,
    description:
      'I strive to communicate my work in a clear, organized, and professional manner. When writing important documents, I aim for the clarity and structure found in research papers and textbooks. I use tools like LaTeX to help ensure my documents are presented effectively.',
  },
];

const SKILLS_SOFT = [
  {
    title: 'Communication',
    image: <MessageSquare className="text-green-300" />,
    description:
      'I understand that clear communication is critical to successful engineering projects. In my team-based work, I focus on practicing active listening and ensuring my own ideas are articulated clearly, both in written documentation and verbal discussions. My goal is to foster mutual understanding and alignment, which helps in preventing misunderstandings and keeping collaborative work on track.',
  },
  {
    title: 'Team Leadership',
    image: <Users className="text-green-300" />,
    description:
      'In group settings, I am comfortable stepping into leadership roles to help guide the team toward our collective goals. I enjoy the added responsibility, as it allows me to practice skills in project coordination, task delegation, and goal setting. This experience, even on a smaller academic scale, is valuable for learning how to keep a team motivated and focused on finding effective solutions.',
  },
  {
    title: 'Mindset Development',
    image: <Brain className="text-green-300" />,
    description:
      'I am a strong believer in the importance of a growth mindset. I actively work on being more self-aware and open to constructive feedback, as I see challenges and setbacks as valuable learning opportunities. This commitment to continuous improvement helps me refine my habits and approach to problem-solving.',
  },
  {
    title: 'Self Resilience',
    image: <Flame className="text-green-300" />,
    description:
      'I have been actively developing my resilience and perseverance to navigate the challenges inherent in demanding engineering coursework and projects. When faced with unexpected setbacks, I practice adaptability and focus on maintaining consistency and a positive approach, allowing me to stay engaged and find alternative paths forward',
  },
  {
    title: 'Planning and Organization',
    image: <Calendar className="text-green-300" />,
    description:
      'I enjoy bringing structure to projects through careful planning and organization. I have experience developing project timelines, practicing prioritization, and defining clear objectives. I believe that creating an organized environment and establishing an efficient workflow are key to enabling a team to perform at its best.',
  },
  {
    title: 'Systems Thinking',
    image: <Shuffle className="text-green-300" />,
    description:
      'I naturally approach problems with a systems thinking perspective, viewing components not in isolation but as part of a larger, interconnected whole. This holistic approach—understanding the relationships and feedback loops within a system—allows me to develop a deeper and more comprehensive analysis, which is fundamental to modeling and solving complex engineering challenges.',
  },
  {
    title: 'Self Learning',
    image: <GraduationCap className="text-green-300" />,
    description:
      'I am a proactive and resourceful self-learner, driven by a commitment to lifelong learning. To expand my knowledge, I consistently engage with technical literature, including textbooks and scientific papers, explore online resources, and seek guidance from experienced peers and mentors. This curiosity is key to my continuous skill acquisition and staying current in my field.',
  },
];

export { SKILLS_TECHNICAL, SKILLS_SOFT };
