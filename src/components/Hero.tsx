import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { SiWhatsapp, SiGmail } from '@icons-pack/react-simple-icons';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const GearSvg = React.lazy(() => import('@/components/GearSvg'));

export function HeroSection() {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 pb-10 md:pt-24 md:pb-20 px-10 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        <div>
          <div className="absolute w-[120%] -top-85 -right-[24%] md:-top-1/4 flex md:w-3/4">
            <GearSvg
              module={2}
              teethNumber={60}
              scale={7}
              showCircle={false}
              strokeColor="#314158" // slate-700
              fillColor="#e2e8f0" // slate-200
              holeDiameter={100}
            />
          </div>
          <div className="absolute hidden md:block md:-bottom-1/3 md:-right-[24%] lg:-right-[14%] lg:-bottom-3/4">
            <GearSvg
              module={3}
              teethNumber={80}
              scale={2}
              showCircle={false}
              strokeColor="#314158" // slate-700
              fillColor="#e2e8f0" // slate-200
              cutoutType="Circle"
              holeDiameter={150}
            />
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Profile Image */}
          <div className="flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-primary/20 to-primary/40 blur-sm"></div>
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-xl transition-all duration-500 hover:scale-105 md:h-80 md:w-80">
                <img
                  src="ui/personal-image.jpeg?height=320&width=320"
                  alt="George Nabil - Mechanical Engineer"
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  loading="eager"
                />
              </div>

              {/* Floating Badge */}
              {/* <div
                className="absolute -right-4 -top-4 rounded-sm bg-background px-2 py-1 shadow-lg md:right-2"
                style={{ transform: `translateY(${scrollX * 0.15}px)` }}
              >
                <p className="text-sm font-medium text-primary">Manufacturing</p>
              </div> */}

              {/* Floating Badge */}
              {/* <div
                className="absolute -left-4 bottom-5 rounded-sm bg-background px-2 py-1 shadow-lg md:-left-2"
                style={{ transform: `translateY(${-scrollX * 0.15}px)` }}
              >
                <p className="text-sm font-medium text-primary">Design</p>
              </div> */}

              {/* Floating Badge */}
              {/* <div
                className="absolute right-4 bottom-0 rounded-sm bg-background px-2 py-1 shadow-lg"
                style={{ transform: `translateY(${-scrollX * 0.15}px)` }}
              >
                <img src="ui/uni_logo.png" alt="" loading="lazy" className="w-min h-8" />
              </div> */}
            </div>
          </div>

          {/* Name and Intro */}
          <div className="text-center md:order-1 md:text-left">
            <div className="inline-block text-sm/normal font-medium text-muted-foreground border-b-[1px]">
              Mechanical Engineer
            </div>

            <h1 className=" mt-4 text-4xl/relaxed font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-emerald-500 via-green-500 to-slate-500 text-transparent bg-clip-text pb-3">
              George Nabil
            </h1>

            <div className="mt-4 h-1 w-24 bg-green-500 md:w-32 mx-auto md:mx-0"></div>

            <p className="mt-6 text-lg text-muted-foreground">
              Hi, I am a Mechanical Engineering student at Cairo University specializing in{' '}
              <strong> mechanical design and production</strong>—building innovative solutions from
              fundamentals with a blend of <strong>interdisciplinary skills</strong> and creative{' '}
              <strong>problem-solving</strong>.
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button className="gap-2">
                <Download size={16} />
                Resume
              </Button>
              <Button variant="outline" className="gap-2">
                <Mail size={16} />
                Contact Me
              </Button>
            </div> */}

            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <a
                href="https://www.linkedin.com/in/eng-george-nabil/"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-blue-500"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/GeorgeNabilPro"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Github size={24} />
              </a>
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger
                    onClick={(event) => event.preventDefault()}
                    onPointerDown={(event) => event.preventDefault()}
                  >
                    <button
                      className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-green-500"
                      onClick={() => {
                        window.location.href = 'tel:+2001014374579';
                      }}
                    >
                      <SiWhatsapp size={24} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    onPointerDownOutside={(event) => {
                      event.preventDefault();
                    }}
                  >
                    {hasCopied ? (
                      <span className="text-green-500">Phone number copied!</span>
                    ) : (
                      <span>Click to copy (+20)01014374579</span>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger
                  // onClick={(event) => event.preventDefault()}
                  // onPointerDown={(event) => event.preventDefault()}
                  >
                    <button
                      className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-red-500"
                      onClick={() => {
                        window.location.href = 'mailto:George.Abraham03@eng-st.cu.edu.eg';
                        navigator.clipboard.writeText('George.Abraham03@eng-st.cu.edu.eg');
                        setHasCopied(true);
                      }}
                    >
                      <SiGmail size={24} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    onPointerDownOutside={(event) => {
                      event.preventDefault();
                    }}
                  >
                    {hasCopied ? (
                      <span className="text-green-500">Email address copied!</span>
                    ) : (
                      <span>Click to copy George.Abraham03@eng-st.cu.edu.eg</span>
                    )}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* <a
                href="#"
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <FileText size={20} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
