import type { TechStackItem } from "@/types/project";

export function ProjectTechStack({ items }: { items: TechStackItem[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="rounded-full border border-outer-space/50 px-4 py-1.5 font-mono text-xs text-blue-gray"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
