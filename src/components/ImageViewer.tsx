'use client';

import { useEffect } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

interface ImageViewerProps {
  images: string[][];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageViewer({ images, currentIndex, isOpen, onClose }: ImageViewerProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-screen h-screen bg-transparent !max-w-screen border-0 p-4 sm:p-10 flex items-center flex-col justify-center"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setTimeout(() => {
            onClose();
          }, 0);
        }}
      >
        <div className="sm:max-h-[90%] sm:max-w-[90%] mx-auto transition-all duration-300">
          <img
            src={currentImage[0]}
            alt={currentImage[1]}
            // width={2200}
            // height={1600}
            loading="lazy"
            className="h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
        <div className="">
          <div className="mx-auto max-w-2xl rounded-lg bg-black/70 p-4 text-white backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-medium">{currentImage[1]}</h3>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
