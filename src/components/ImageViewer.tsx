'use client';

import { useEffect } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
// import { X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

interface ImageViewerProps {
  images: string[][];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

// export function ImageViewer({ images, currentIndex, isOpen, onClose }: ImageViewerProps) {
//   const currentImage = images[currentIndex];

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen || !currentImage) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center w-screen h-screen"
//       // style={{
//       //   pointerEvents: 'revert',
//       // }}
//       onClick={(event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         onClose();
//       }}
//     >
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
//         onClick={(event) => {
//           event.preventDefault();
//           event.stopPropagation();
//           onClose();
//         }}
//       />

//       {/* Image Container */}
//       <div className="relative z-10 flex h-full w-full max-w-7xl items-center justify-center p-4 flex-col flex-wrap gap-4">
//         {/* Close Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute right-4 top-4 z-20 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
//           onClick={onClose}
//         >
//           <X className="h-5 w-5" />
//         </Button>
//         {/* Image */}
//         <div className="max-h-[90%] max-w-[90%] mx-auto transition-all duration-300">
//           <img
//             src={currentImage[0]}
//             alt={currentImage[1]}
//             width={1200}
//             height={800}
//             loading="lazy"
//             className="h-full object-contain rounded-lg shadow-2xl"
//           />

//           {/* Image Counter
//           {images.length > 1 && (
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
//               {currentIndex + 1} / {images.length}
//             </div>
//           )} */}
//         </div>

//         {/* Image Info */}
//         <div className="">
//           <div className="mx-auto max-w-2xl rounded-lg bg-black/70 p-4 text-white backdrop-blur-sm">
//             <div className="flex items-start justify-between gap-4">
//               <div className="flex-1">
//                 <h3 className="font-medium">{currentImage[1]}</h3>
//               </div>
//               {/* <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-white hover:bg-white/20"
//                 onClick={() => {
//                   // Create a temporary link to download the image
//                   const link = document.createElement('a');
//                   link.href = currentImage.src || '/placeholder.svg';
//                   link.download = `${currentImage.alt.replace(/\s+/g, '_')}.jpg`;
//                   document.body.appendChild(link);
//                   link.click();
//                   document.body.removeChild(link);
//                 }}
//               >
//                 <Download className="h-4 w-4" />
//               </Button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
        className="w-screen h-screen bg-transparent !max-w-screen border-0 p-10 flex items-center flex-col justify-center"
        onClick={(event) => {
          event.preventDefault();
          onClose();
        }}
      >
        <div className="max-h-[90%] max-w-[90%] mx-auto transition-all duration-300">
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
