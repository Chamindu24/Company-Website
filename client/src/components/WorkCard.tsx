export type WorkProject = {
  name: string;
  client: string;
  summary: string;
  description: string;
  image: string;
  link: string;
};

type WorkCardProps = {
  project: WorkProject;
  index: number;
  isVisible?: boolean;
  ctaAlign?: "start" | "center";
  className?: string;
  ctaClassName?: string;
};

export default function WorkCard({
  project,
  index,
  isVisible = true,
  ctaAlign = "start",
  className,
  ctaClassName,
}: WorkCardProps) {
  return (
    <div
      className={`group flex flex-col bg-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 rounded-t-2xl border border-gray-100 mb-10 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-emerald-100 group-hover:border-emerald-200">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/5 transition-colors duration-500 flex items-center justify-center">
            <div className="bg-gray-900 p-5 border-2 border-white rounded-full shadow-2xl scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-widest bg-gray-800 text-white px-3 py-1 rounded-sm">
              {project.client}
            </span>
            <span className="text-gray-600 font-mono text-[10px]">/ 0{index + 1}</span>
          </div>
          <h4 className="text-3xl font-bold text-gray-950 tracking-tight transition-colors group-hover:text-emerald-700">
            {project.name}
          </h4>
          <p className="text-gray-900 text-base leading-relaxed ">{project.summary}</p>
          <p className="text-gray-500 text-md leading-relaxed  ">{project.description}</p>

          <div
            className={`pt-2 flex ${ctaAlign === "center" ? "justify-center" : "justify-start"} ${
              ctaClassName ?? ""
            }`}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/link 
                inline-flex items-center gap-3 
                text-[10px] font-bold uppercase tracking-[0.2em] 
                !text-white bg-slate-800 
                px-8 py-4
                relative overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20
                rounded-3xl
              "
            >
              <span className="absolute inset-0 w-0 bg-emerald-600 transition-all duration-500 ease-out group-hover/link:w-full"></span>
              <span className="relative z-10 block">Visit Platform</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 transition-transform duration-700 group-hover/link:rotate-[360deg]"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
