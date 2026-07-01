import { cn } from "@/lib/utils";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: "blue" | "orange";
}

interface RollingTextItemProps {
  item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
  blue: "text-blue-500",
  orange: "text-primary",
};

function RollingTextItem({ item }: RollingTextItemProps) {
  return (
    <div className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-6">
      <div className="relative overflow-hidden h-[60px] md:h-20">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <div className="h-[60px] md:h-20 flex items-center">
            <h2 className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">
              {item.title}
            </h2>
          </div>
          <div className="h-[60px] md:h-20 flex items-center">
            <h2
              className={cn(
                "text-5xl md:text-7xl font-black uppercase tracking-tighter italic",
                colorClassMap[item.color],
              )}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      <span className="absolute top-8 right-0 text-xs font-bold uppercase tracking-widest text-neutral-400 transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
        {item.category}
      </span>

      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl",
          "transition-all duration-500 ease-out",
          "opacity-0 scale-95 rotate-3 translate-x-4",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0",
        )}
      >
        <div className="relative h-full w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-primary/15 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

interface RollingTextListProps {
  items?: ListItem[];
}

function RollingTextList({ items }: RollingTextListProps) {
  if (!items?.length) return null;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center px-4 py-12">
      <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-neutral-500">Process</h3>
      <div className="w-full flex flex-col">
        {items.map((item) => (
          <RollingTextItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export { RollingTextList };
