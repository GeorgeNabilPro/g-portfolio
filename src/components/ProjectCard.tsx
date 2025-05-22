import { useState, useEffect } from 'react';
import frontMatter from 'front-matter';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import type { Project } from '@/types/project';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Project as ProjectData } from '@/types/project';

export function ProjectCardWithModal({ projectPath }: { projectPath: string }) {
  const [data, setData] = useState<ProjectData>({
    title: '',
    description: '',
    tags: [],
    date: '',
    role: '',
  });
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/g-portfolio/projects/' + projectPath + '/index.md')
      .then((response) => response.text())
      .then((markdownContent) => {
        const { attributes, body } = frontMatter(markdownContent);
        setData(attributes as ProjectData);
        setContent(body);
      })
      .catch((error) => {
        console.error('Error loading markdown:', error);
      });
  }, [projectPath]);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Card className="overflow-hidden h-full flex flex-col border border-border/40 bg-card/50 backdrop-blur-sm">
            <div className="relative h-52 overflow-hidden">
              <img
                src={
                  '/g-portfolio/projects/' +
                  projectPath +
                  '/' +
                  (data.images?.[0][0] ?? 'placeholder.svg')
                }
                alt={data.images?.[0][0]}
                loading="lazy"
                className="object-cover"
              />
            </div>
            <CardContent className="flex-grow pt-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{data.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{data.description}</p>
            </CardContent>
            <CardFooter className="pt-0 pb-4">
              <Badge variant="secondary" className="font-medium text-xs">
                {data.role}
              </Badge>
            </CardFooter>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-2xl font-bold text-foreground">{data.title}</DialogTitle>
          <DialogDescription className="text-base font-medium text-muted-foreground">
            {data.role}
          </DialogDescription>
        </DialogHeader>
        <Carousel className="w-full">
          <CarouselContent>
            {data.images?.map((image, index) => {
              const imagePath = '/g-portfolio/projects/' + projectPath + '/' + image[0];
              return (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-md border border-border/40">
                    <img
                      src={imagePath || '/placeholder.svg'}
                      alt={image[1]}
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm text-foreground p-3 text-sm font-medium">
                      {image[1]}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="prose max-w-none dark:prose-invert">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {data.tags?.map((tag, i) => (
              <div key={i} className="transition-all duration-300 hover:scale-105">
                <Badge variant="outline" className="px-3 py-1.5 text-sm bg-secondary/30">
                  {tag}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
