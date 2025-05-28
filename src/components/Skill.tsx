import type React from 'react';

import styles from './styles.module.css';
import { cn } from '@/lib/utils';

export default function Skill({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: React.ReactNode;
}) {
  return (
    <li className="list-none mb-2 flex align-center justify-start">
      {typeof image === 'string' ? (
        <img src={image} alt={title} className="w-16 h-16 inline" />
      ) : (
        <span
          className={cn(
            'block sm:inline mr-2 rounded-full text-muted-foreground',
            styles['inline-icon-green'],
          )}
        >
          {image}
        </span>
      )}
      <div className="max-w-[80ch]">
        <strong className="font-semibold text-foreground pr-2">{title}</strong>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </li>
  );
}
