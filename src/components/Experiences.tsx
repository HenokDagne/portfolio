import { useEffect, useState } from "react";

type ExperienceItem = {
  title: string;
  place?: string;
  period?: string;
  description?: string;
  active?: boolean;
  company?: string;
  location?: string;
  current?: boolean;
};

type ExperienceGroup = {
  year: string | number;
  items: ExperienceItem[];
};

const Experiences = () => {
  const [timeline, setTimeline] = useState<ExperienceGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/expricence.json");
        if (!res.ok) throw new Error("Failed to fetch experiences");
        const data: any[] = await res.json();

        // Group by year
        const map = new Map<string | number, ExperienceItem[]>();
        data.forEach((entry) => {
          const year = entry.year ?? "";
          const item: ExperienceItem = {
            title: entry.title,
            place: entry.company ?? entry.location,
            period: entry.period,
            description: entry.description,
            active: entry.current ?? entry.active ?? false,
            company: entry.company,
            location: entry.location,
            current: entry.current,
          };

          if (!map.has(year)) map.set(year, []);
          map.get(year)!.push(item);
        });

        // Convert to sorted array (descending year)
        const groups: ExperienceGroup[] = Array.from(map.entries())
          .map(([year, items]) => ({ year, items }))
          .sort((a, b) => Number(b.year) - Number(a.year));

        setTimeline(groups);
      } catch (err) {
        console.error(err);
        setTimeline([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="space-y-12">
              {timeline.map((group) => (
                <div key={group.year}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-foreground border-4 border-background z-10 shrink-0" />
                    <span className="text-xl font-semibold tracking-tight">{group.year}</span>
                  </div>

                  <div className="space-y-6 ml-2 md:ml-2.5">
                    {group.items.map((item, j) => (
                      <div key={j} className="relative pl-8 group">
                        <div
                          className={`absolute left-0 top-1.5 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 z-10 ${
                            item.active ? "bg-foreground border-foreground" : "bg-background border-muted-foreground/40"
                          }`}
                        />

                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                            <h3 className="font-medium text-sm">{item.title}</h3>
                            {item.active && (
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full w-fit">Current</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.place}
                            <span className="mx-2 text-border">·</span>
                            {item.period}
                          </p>
                          <p className="text-sm text-muted-foreground/70 leading-relaxed pt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
