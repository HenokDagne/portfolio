import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          About
        </h2>

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/90">
            I am a software engineering student at AASTU, currently in my 4th year, with a strong foundation in computer fundamentals, skills, and knowledge. 
            I am a full-stack developer capable of building scalable web products and backend services. 
            I enjoy turning complex requirements into clean, reliable, and user-friendly experiences
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            I focus on building practical and efficient products by leveraging modern frameworks that ensure scalability and maintainability. 
            I prioritize clean and intuitive user interfaces that enhance usability, along with thoughtful user flows that guide users seamlessly through the application. 
            This approach combines my technical expertise with a solid understanding of core software engineering principles, 
            ensuring that the solutions I develop are both reliable and well-architected
          </p>
          <div className="flex items-center gap-2 text-muted-foreground pt-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
