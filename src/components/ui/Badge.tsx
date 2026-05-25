import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, { bg: string; text: string; dot: string }> = {
  Online: { bg: "bg-green-500/15 border-green-500/30", text: "text-green-400", dot: "bg-green-400" },
  WIP: { bg: "bg-yellow-500/15 border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400" },
  Beta: { bg: "bg-blue-500/15 border-blue-500/30", text: "text-blue-400", dot: "bg-blue-400" },
  Finished: { bg: "bg-purple-500/15 border-purple-500/30", text: "text-purple-400", dot: "bg-purple-400" },
  Archived: { bg: "bg-gray-500/15 border-gray-500/30", text: "text-gray-400", dot: "bg-gray-400" },
};

export default function Badge({ status }: { status: ProjectStatus }) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${s.dot} ${status === "Online" ? "animate-pulse" : ""}`}
      />
      {status}
    </span>
  );
}
