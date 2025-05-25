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
    description: 'I use mathematical modeling to simulate and analyze complex systems.',
  },
  {
    title: 'Research and Development',
    image: <Search className="text-green-300" />,
    description: 'I conduct research and development to create innovative solutions.',
  },
  {
    title: 'Problem Solving',
    image: <Lightbulb className="text-green-300" />,
    description:
      'I excel at problem-solving, finding creative and effective solutions to challenges.',
  },
  {
    title: 'Programming',
    image: <Code className="text-green-300" />,
    description: 'I am proficient in programming, developing software and applications.',
  },
  {
    title: 'Manufacturing',
    image: <Factory className="text-green-300" />,
    description: 'I have experience in manufacturing processes, ensuring efficient production.',
  },
  {
    title: 'Mechanical Design',
    image: <Ruler className="text-green-300" />,
    description: 'I specialize in mechanical design, creating functional and efficient designs.',
  },
  {
    title: 'Academic Writing',
    image: <Book className="text-green-300" />,
    description:
      'I am skilled in academic writing, producing clear and concise reports and papers.',
  },
];

const SKILLS_SOFT = [
  {
    title: 'Communication',
    image: <MessageSquare className="text-green-300" />,
    description: 'I am an effective communicator, conveying ideas clearly and concisely.',
  },
  {
    title: 'Team Leadership',
    image: <Users className="text-green-300" />,
    description: 'I provide team leadership, guiding and motivating teams to achieve goals.',
  },
  {
    title: 'Mindset',
    image: <Brain className="text-green-300" />,
    description: 'I have a growth mindset, always seeking to learn and improve.',
  },
  {
    title: 'Self Resilience',
    image: <Flame className="text-green-300" />,
    description: 'I am self-resilient, bouncing back from setbacks and challenges.',
  },
  {
    title: 'Planning and Organization',
    image: <Calendar className="text-green-300" />,
    description:
      'I am skilled in planning and organization, managing tasks and projects effectively.',
  },
  {
    title: 'Systems Thinking',
    image: <Shuffle className="text-green-300" />,
    description:
      'I employ systems thinking, understanding how different parts of a system interact.',
  },
  {
    title: 'Self Learning',
    image: <GraduationCap className="text-green-300" />,
    description: 'I am a self-learner, continuously acquiring new knowledge and skills.',
  },
];

export { SKILLS_TECHNICAL, SKILLS_SOFT };
