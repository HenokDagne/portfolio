import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string | null;
  live?: string | null;
  stack: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filters, setFilters] = useState<string[]>(["All"]);
  const [activeStack, setActiveStack] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();

        // Map incoming JSON to Project type
        const mapped: Project[] = (data || []).map((p: any) => ({
          title: p.name || p.title,
          description: p.description || "",
          tech: p.tools ?? [],
          github: p.github ?? null,
          live: p.live ?? null,
          stack: p.framework ?? p.stack ?? "",
        }));

        setProjects(mapped);

        // Build filters from frameworks
        const frameworks = Array.from(new Set(mapped.map((m) => m.stack).filter(Boolean)));
        setFilters(["All", ...frameworks]);
      } catch (err) {
        console.error(err);
        setProjects([]);
        setFilters(["All"]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const visibleProjects =
    activeStack === "All"
      ? projects
      : projects.filter((project) => project.stack === activeStack);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Projects
              </h2>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">
                Explore work by stack
              </p>
            </div>
                <div className="flex flex-wrap gap-2">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    filters.map((stack) => (
                      <button
                        key={stack}
                        type="button"
                        onClick={() => setActiveStack(stack)}
                        aria-pressed={activeStack === stack}
                        className={`px-3 py-1.5 text-xs rounded-full border transition-colors duration-200 ${
                          activeStack === stack
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                        }`}
                      >
                        {stack}
                      </button>
                    ))
                  )}
                </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {visibleProjects.length} projects for {activeStack === "All" ? "all stacks" : activeStack}. Some work is not listed due to deployment issues.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {visibleProjects.map((project, i) => (
            <a
              key={i}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl border border-border/50 hover:border-foreground/15 hover:bg-muted/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-sm leading-snug pr-6 group-hover:underline underline-offset-4 decoration-foreground/30">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs text-foreground/80 bg-muted px-2 py-0.5 rounded-md">
                  {project.stack}
                </span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/HenokDagne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            View more projects on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-muted-foreground mt-3">
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
