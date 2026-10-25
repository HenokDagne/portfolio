import React from "react";
import evmsMainDashboard from "../assets/Screenshot 2026-10-25 151710.png";
import evmsStaffRoster from "../assets/Screenshot 2026-10-25 151726.png";
import osdavcLogin from "../assets/Screenshot 2026-10-25 152204.png";
import osdavcDemandDashboard from "../assets/Screenshot 2026-10-25 152216.png";
import seedMultiplicationDashboard from "../assets/Screenshot 2026-10-25 152210.png";
import rmsSignIn from "../assets/Screenshot 2026-10-25 154348.png";
import cmsDashboard from "../assets/Screenshot 2026-10-25 154355.png";

const projects = [
  {
    src: evmsMainDashboard,
    title: "EVMS Main Dashboard",
    desc: "Main dashboard for the Ethiopian Volleyball Federation platform, showing federation activity, facilities, competitions, and regional statistics.",
  },
  {
    src: evmsStaffRoster,
    title: "EVMS Staff Roster",
    desc: "Staff management view for registering, reviewing, and managing federation staff and their roles.",
  },
  {
    src: osdavcDemandDashboard,
    title: "OSDAVC Demand Executive Dashboard",
    desc: "Demand executive dashboard for the Oromia Agriculture Big Data Platform, featuring a zone map, demand and crop charts, beneficiary coverage, performance rankings, and a submission heatmap.",
  },
  {
    src: osdavcLogin,
    title: "OSDAVC Platform Sign-in",
    desc: "Sign-in page for the Oromia Agriculture Big Data Platform, providing secure access to the agricultural management services.",
  },
  {
    src: seedMultiplicationDashboard,
    title: "Seed Multiplication Dashboard",
    desc: "Executive dashboard for monitoring seed production, multipliers, reporting coverage, and crop performance.",
  },
  {
    src: cmsDashboard,
    title: "Clinic Management System (CMS)",
    desc: "Eye clinic dashboard showing patient flow, department activity, appointments, consultations, and recent clinical activity.",
  },
  {
    src: rmsSignIn,
    title: "Report Management System (RMS)",
    desc: "Secure sign-in experience for the Report Management System platform.",
  },
];

const InternshipProjects: React.FC = () => {
  return (
    <section id="internship-projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Internship Projects
          </h2>
          <p className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">
            Selected work from iDATA
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.src}
              className="flex flex-col items-start gap-4 p-6 rounded-xl border border-border/30 bg-background/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-emerald-400"
            >
              <a
                href={project.src}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                aria-label={`Open ${project.title} screenshot`}
              >
                <div className="w-full aspect-[16/10] flex items-center justify-center overflow-hidden rounded-md bg-muted">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="w-full">
                <h3 className="text-sm font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipProjects;
