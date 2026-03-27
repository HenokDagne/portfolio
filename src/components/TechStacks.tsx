import { useEffect, useState } from "react";

type StackGroup = { title: string; items: string[] };

const TechStacks = () => {
  const [stacks, setStacks] = useState<StackGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/userskill.json");
        if (!res.ok) throw new Error("Failed to fetch tech stacks");
        const data = await res.json();

        const groups: StackGroup[] = [];
        const t = data.techstacks ?? {};
        if (t.frontend) groups.push({ title: "Frontend", items: t.frontend });
        if (t.backend) groups.push({ title: "Backend", items: t.backend });
        if (t.mobile) groups.push({ title: "Mobile", items: t.mobile });
        if (t.database) groups.push({ title: "Databases", items: t.database });
        if (t.versionControl) groups.push({ title: "Version Control", items: t.versionControl });

        setStacks(groups);
      } catch (err) {
        console.error(err);
        setStacks([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section id="tech" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Tech Stack
            </h2>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">
              The Tools Behind My Work
            </p>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Organized by focus area, making it easy to explore projects by the technology stack behind them
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {loading ? (
            <div>Loading...</div>
          ) : (
            stacks.map((stack) => (
              <div
                key={stack.title}
                className="rounded-2xl border border-border/50 bg-background/70 p-6"
              >
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                  {stack.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
