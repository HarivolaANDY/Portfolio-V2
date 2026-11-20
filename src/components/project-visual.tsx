import type { ReactNode } from "react";
import { Cloud, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectVisualKind } from "@/lib/constants";

/**
 * Hand-drawn product mockups (decorative, aria-hidden). Each one is a cropped
 * browser window over a soft gradient built from the active theme's colors, so
 * it stays harmonious in both the light and the dark theme.
 */

const BACKGROUNDS: Record<ProjectVisualKind, string> = {
  dashboard: "bg-linear-to-br from-primary/25 via-accent/10 to-secondary/20",
  weather: "bg-linear-to-tr from-accent/25 via-info/15 to-primary/10",
  portfolio: "bg-linear-to-bl from-secondary/25 via-base-300/40 to-primary/15",
  kanban: "bg-linear-to-br from-success/20 via-accent/10 to-primary/15",
  blog: "bg-linear-to-tl from-warning/20 via-secondary/10 to-accent/15",
};

const URLS: Record<ProjectVisualKind, string> = {
  dashboard: "admin.boutique.app",
  weather: "meteo.app/paris",
  portfolio: "portfolio.dev",
  kanban: "taskmanager.pro/board",
  blog: "blog.dev/articles",
};

function Line({ className }: { className?: string }) {
  return <div className={cn("h-1.5 rounded-full bg-base-content/15", className)} />;
}

function Window({ kind, children }: { kind: ProjectVisualKind; children: ReactNode }) {
  return (
    <div className="absolute inset-x-5 bottom-0 top-6 overflow-hidden rounded-t-xl border border-b-0 border-base-300 bg-base-100 shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-base-300 bg-base-200/70 px-3 py-2">
        <span className="size-2 rounded-full bg-error/70" />
        <span className="size-2 rounded-full bg-warning/70" />
        <span className="size-2 rounded-full bg-success/70" />
        <span className="ml-3 truncate rounded-full bg-base-100 px-3 py-0.5 text-[10px] leading-4 text-base-content/60">
          {URLS[kind]}
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function Dashboard() {
  const bars = [38, 62, 48, 80, 56, 92, 70, 84];
  return (
    <div className="flex gap-3">
      <div className="flex w-9 flex-col gap-2">
        <div className="size-6 rounded-md bg-primary" />
        <Line className="w-full" />
        <Line className="w-4/5" />
        <Line className="w-full" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Revenus", "12,4 k€"],
            ["Commandes", "318"],
            ["Panier", "39 €"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-base-300 bg-base-200/60 p-2">
              <div className="text-[9px] leading-3 text-base-content/60">{label}</div>
              <div className="text-xs font-bold leading-4">{value}</div>
            </div>
          ))}
        </div>
        <div className="flex h-20 items-end gap-1.5 rounded-lg border border-base-300 bg-base-200/40 p-2">
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={cn("flex-1 rounded-t", i === 5 ? "bg-primary" : "bg-primary/35")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Weather() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl bg-linear-to-br from-info/25 to-accent/20 p-3">
        <div>
          <div className="text-[10px] text-base-content/60">Paris · maintenant</div>
          <div className="font-heading text-3xl font-bold leading-none">21°</div>
          <div className="mt-1 text-[10px] text-base-content/70">Éclaircies</div>
        </div>
        <Sun className="size-12 text-warning" strokeWidth={1.5} />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          ["Lun", "22°"],
          ["Mar", "19°"],
          ["Mer", "17°"],
          ["Jeu", "20°"],
        ].map(([day, t]) => (
          <div key={day} className="flex flex-col items-center gap-1 rounded-lg border border-base-300 bg-base-200/50 py-2">
            <span className="text-[9px] text-base-content/60">{day}</span>
            <Cloud className="size-4 text-info" strokeWidth={1.75} />
            <span className="text-[10px] font-semibold">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioMock() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-2 w-12 rounded-full bg-base-content/40" />
        <div className="flex gap-2">
          <Line className="w-6" />
          <Line className="w-6" />
          <Line className="w-6" />
        </div>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="h-3 w-4/5 rounded-full bg-base-content/70" />
        <div className="h-3 w-3/5 rounded-full bg-primary" />
        <Line className="mt-2 w-2/3" />
      </div>
      <div className="flex gap-2">
        <div className="h-5 w-16 rounded-full bg-primary" />
        <div className="h-5 w-14 rounded-full border border-base-300" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["from-primary/30", "from-secondary/30", "from-accent/30"].map((c) => (
          <div key={c} className={cn("h-14 rounded-lg border border-base-300 bg-linear-to-br to-base-200", c)} />
        ))}
      </div>
    </div>
  );
}

function Kanban() {
  const columns = [
    { title: "À faire", cards: ["bg-base-content/15", "bg-base-content/15"] },
    { title: "En cours", cards: ["bg-primary/60", "bg-base-content/15", "bg-base-content/15"] },
    { title: "Terminé", cards: ["bg-success/60", "bg-base-content/15"] },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {columns.map((col) => (
        <div key={col.title} className="space-y-2 rounded-lg bg-base-200/60 p-2">
          <div className="text-[9px] font-semibold leading-3 text-base-content/70">{col.title}</div>
          {col.cards.map((c, i) => (
            <div key={i} className="space-y-1.5 rounded-md border border-base-300 bg-base-100 p-2 shadow-sm">
              <Line className="w-4/5" />
              <div className={cn("h-1.5 w-1/3 rounded-full", c)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Blog() {
  return (
    <div className="flex gap-3">
      <div className="flex-1 space-y-2">
        <div className="h-3 w-4/5 rounded-full bg-base-content/65" />
        <Line className="w-full" />
        <Line className="w-11/12" />
        <div className="space-y-1.5 rounded-lg bg-neutral p-2.5">
          <div className="h-1.5 w-1/3 rounded-full bg-primary" />
          <div className="ml-3 h-1.5 w-1/2 rounded-full bg-neutral-content/40" />
          <div className="ml-3 h-1.5 w-2/5 rounded-full bg-secondary" />
          <div className="h-1.5 w-1/4 rounded-full bg-accent" />
        </div>
        <Line className="w-10/12" />
      </div>
      <div className="hidden w-16 space-y-2 sm:block">
        <div className="h-12 rounded-lg bg-linear-to-br from-warning/30 to-secondary/25" />
        <Line className="w-full" />
        <Line className="w-3/4" />
      </div>
    </div>
  );
}

const MOCKS: Record<ProjectVisualKind, () => ReactNode> = {
  dashboard: Dashboard,
  weather: Weather,
  portfolio: PortfolioMock,
  kanban: Kanban,
  blog: Blog,
};

export function ProjectVisual({ kind, className }: { kind: ProjectVisualKind; className?: string }) {
  const Mock = MOCKS[kind];
  return (
    <div aria-hidden="true" className={cn("relative aspect-video overflow-hidden", BACKGROUNDS[kind], className)}>
      <Window kind={kind}>
        <Mock />
      </Window>
    </div>
  );
}
