import { Github, Mail, ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center text-center space-y-8 max-w-2xl">
        <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl">
          <img
            src="/henok_photo.png"
            alt="Henok Dagne"
            className="w-full h-full object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Henok Dagne
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mx-auto">
            Full-stack developer building modern products with Next.js, Django &
            AI.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="mailto:henokdagne19@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            <a
              href="https://github.com/HenokDagne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            <a
              href="https://drive.google.com/file/d/1otVeDTJMsHGazDlNsrDewnx-m72E2BJK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted-foreground/40 hover:text-muted-foreground transition-colors animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
