import type React from 'react';

import styles from './styles.module.css';
import { cn } from '@/lib/utils';

import { TOOLS } from '@/data/tools';

export function Tool({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: React.ReactNode;
}) {
  return (
    <li className="list-none mb-2">
      {typeof image === 'string' ? (
        <img src={image} alt={title} className="w-16 h-16 inline" />
      ) : (
        <div
          className={cn(
            'flex sm:flex mr-2 rounded-full text-muted-foreground flex-wrap gap-1 shrink',
            styles['inline-icon'],
          )}
        >
          {image}
        </div>
      )}
      <div className="mt-1">
        <strong className="font-semibold text-foreground pr-2">{title}</strong>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </li>
  );
}

export default function Tools() {
  return (
    <ul className="list-disc list-inside text-left grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
      {TOOLS.map((tool) => (
        <Tool {...tool} key={tool.title} />
      ))}
    </ul>
  );
}
