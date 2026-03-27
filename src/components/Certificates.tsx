import React from "react";

const Certificates: React.FC = () => {
  const certs = [
    {
      src: "/backend.png",
      title: "ALX Back-End Web Development",
      desc: "For completing a 4 month ALX Software Engineering program in Back-End Web Development",
    },
    {
      src: "/89-profesfoundations-certificate.png",
      title: "Professional Foundations",
      desc: "For completing Professional Development Skills for the Digital Age",
    },
    {
      src: "/GDG.png",
      title: "GDG Django Track",
      desc: "Awarded for completing the Django Track Capstone Project with perfect attendance at Google Developers Group, Addis Ababa Science and Technology University",
    },
  ];

  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Certificates
            </h2>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">
              Selected certifications
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 items-start">
          {certs.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-4 p-6 rounded-xl border border-border/30 bg-background/5 transform transition-all duration-200 hover:shadow-xl hover:ring-2 hover:ring-emerald-400 hover:-translate-y-1"
            >
              <a href={c.src} target="_blank" rel="noopener noreferrer" className="w-full">
                <div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-md bg-white/5">
                  <img src={c.src} alt={c.title} className="w-full h-full object-contain" />
                </div>
              </a>
              <div className="w-full">
                <h3 className="text-sm font-medium">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Certificates;
