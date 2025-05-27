import React, { useState, useEffect } from 'react';
import frontMatter from 'front-matter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, KeyRound, ExternalLink, UserCheck } from 'lucide-react';

import { ImageViewer } from './ImageViewer';

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
import { cn } from '@/lib/utils';
const Markdown = React.lazy(() => import('./Markdown'));

export function ProjectCardWithModal({ projectPath }: { projectPath: string }) {
  const [data, setData] = useState<ProjectData>({
    title: '',
    description: '',
  });
  const [content, setContent] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);

  // if (!projectPath || !data.title) return null;

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setImageViewerOpen(true);
  };

  const handleImageViewerClose = () => {
    setImageViewerOpen(false);
  };

  useEffect(() => {
    const filePath = `${import.meta.env.BASE_URL}` + 'projects/' + projectPath + '/index.md';

    fetch(filePath)
      .then((response) => response.text())
      .then((markdownContent) => {
        const { attributes, body } = frontMatter(markdownContent) as {
          attributes: ProjectData;
          body: string;
        };
        if (attributes.images) {
          attributes.images = attributes.images.map((image: string[]) => {
            // Ensure each image is an array with at least one element
            return Array.isArray(image)
              ? ['/g-portfolio/projects/' + projectPath + '/' + image[0], image[1] || '']
              : ['placeholder.svg', ''];
          });
        }
        setData(attributes as ProjectData);
        setContent(body);
      })
      .catch((error) => {
        console.error('Error loading markdown:', error);
      });
  }, [projectPath]);

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Card className="overflow-hidden h-full flex flex-col border border-border/40 bg-card/50 backdrop-blur-sm p-0">
              <div className="relative h-52 overflow-hidden top-0">
                <img
                  src={data.images?.[0]?.[0]}
                  alt={data.images?.[0]?.[1]}
                  loading="lazy"
                  className="object-center"
                />
              </div>
              <CardContent className="flex-grow">
                <h3 className="text-left text-xl font-semibold mb-2 text-foreground">
                  {data.title}
                </h3>
                <p className="text-left text-muted-foreground text-sm line-clamp-2">
                  {data.description}
                </p>
              </CardContent>
              <CardFooter className="pb-4">
                <Badge variant="secondary" className="font-medium text-xs">
                  {data.role}
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto !w-[90%] !max-w-[760px]">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-2xl font-bold text-foreground">{data.title}</DialogTitle>
            <DialogDescription>
              <IconText
                icon={UserCheck}
                text={data.role}
                className="text-base font-medium text-muted-foreground mb-2"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 text-sm text-muted-foreground">
                <IconText icon={Calendar} text={data.date} />
                <IconText
                  icon={Users}
                  text={data.team ? `Team of ${data.team}` : 'Individual Project'}
                />
              </div>
              {data.links && data.links.length > 0 && (
                <>
                  <IconText icon={ExternalLink} text="Important Links" />
                  <ul className="ml-2 list-disc list-inside">
                    {data.links?.map((link, index) => (
                      <li key={index} className="h-6 text-left">
                        <a
                          href={Array.isArray(link) ? link[1] : link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-500 hover:underline"
                        >
                          {Array.isArray(link) ? link[0] : link}
                          <ExternalLink className="ml-1 inline" size={14} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {/* Images */}
          <Carousel className="overflow-hidden">
            <CarouselContent>
              {data.images?.map((image, index) => {
                return (
                  <CarouselItem key={index}>
                    <div
                      className="aspect-video overflow-hidden rounded-md border border-border/40 flex-col"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image[0]}
                        alt={image[1]}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    {/* <div className="bg-background/80 backdrop-blur-sm text-foreground p-3 text-sm font-medium">
                      {image[1]}
                    </div> */}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-slate-800" />
            <CarouselNext className="right-2 border-slate-800" />
          </Carousel>

          <Markdown content={content} />

          <div className="mt-8 pt-6 border-t border-border/60">
            <IconText
              icon={KeyRound}
              text="Keywords"
              className="text-base font-medium text-muted-foreground mb-2"
            />
            {/* <h4 className="text-lg font-semibold mb-4 text-foreground">Keywords</h4> */}
            <div className="flex flex-wrap gap-2">
              {data.tags?.map((tag, i) => (
                <div key={i} className="transition-all duration-300 hover:scale-105">
                  <Badge variant="outline" className="px-2 py-1 text-sm bg-secondary/30">
                    {tag}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <ImageViewer
        images={data.images || []}
        currentIndex={currentImageIndex}
        isOpen={imageViewerOpen}
        onClose={handleImageViewerClose}
      />
    </>
  );
}

function IconText({
  icon: Icon,
  text,
  className = '',
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  text?: string;
  className?: string;
}) {
  return (
    <>
      {text && (
        <div className={cn('flex items-center text-sm text-muted-foreground h-6', className)}>
          <Icon size={14} className="mr-2" />
          <span>{text}</span>
        </div>
      )}
    </>
  );
}
