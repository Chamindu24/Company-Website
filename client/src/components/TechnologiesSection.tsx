import React, { useState } from "react";

// Logo loading order:
// 1. `src`    -> your own file, e.g. "/logos/microchip.svg" (best quality, put files in /public/logos)
// 2. `slug`   -> Simple Icons CDN
// 3. `domain` -> website icon service (works for any brand with a website)
// 4. monogram -> last resort
type Tech = { name: string; slug?: string; domain?: string; src?: string; group: string };

const techs: Tech[] = [
  { name: "STM32", slug: "stmicroelectronics", domain: "st.com", group: "Embedded & Hardware" },
  { name: "Nordic nRF", slug: "nordicsemiconductor", domain: "nordicsemi.com", group: "Embedded & Hardware" },
  { name: "Espressif ESP32", slug: "espressif", domain: "espressif.com", group: "Embedded & Hardware" },
  { name: "Microchip", domain: "microchip.com", group: "Embedded & Hardware" },
  { name: "Arduino", slug: "arduino", domain: "arduino.cc", group: "Embedded & Hardware" },
  { name: "Raspberry Pi", slug: "raspberrypi", domain: "raspberrypi.com", group: "Embedded & Hardware" },
  { name: "Altium", domain: "altium.com", group: "Design & Analysis" },
  { name: "MATLAB", domain: "mathworks.com", group: "Design & Analysis" },
  { name: "Python", slug: "python", domain: "python.org", group: "Design & Analysis" },
  { name: "MQTT", slug: "mqtt", domain: "mqtt.org", group: "Connectivity" },
  { name: "Argos", domain: "argos-system.org", group: "Connectivity" },
  { name: "Node.js", slug: "nodedotjs", domain: "nodejs.org", group: "Cloud & Web" },
  { name: "FastAPI", slug: "fastapi", domain: "fastapi.tiangolo.com", group: "Cloud & Web" },
  { name: "Django", slug: "django", domain: "djangoproject.com", group: "Cloud & Web" },
  { name: "React", slug: "react", domain: "react.dev", group: "Cloud & Web" },
  { name: "Next.js", slug: "nextdotjs", domain: "nextjs.org", group: "Cloud & Web" },
  { name: "PostgreSQL", slug: "postgresql", domain: "postgresql.org", group: "Cloud & Web" },
  { name: "Docker", slug: "docker", domain: "docker.com", group: "Cloud & Web" },
  { name: "Flutter", slug: "flutter", domain: "flutter.dev", group: "Mobile" },
  { name: "React Native", slug: "react", domain: "reactnative.dev", group: "Mobile" },
  { name: "Android", slug: "android", domain: "android.com", group: "Mobile" },
  { name: "iOS", slug: "apple", domain: "apple.com", group: "Mobile" },
];

const groups = ["Embedded & Hardware", "Design & Analysis", "Connectivity", "Cloud & Web", "Mobile"];

const sourcesFor = (tech: Tech): string[] => {
  const list: string[] = [];
  if (tech.src) list.push(tech.src);
  if (tech.slug) list.push(`https://cdn.simpleicons.org/${tech.slug}`);
  if (tech.domain)
    list.push(`https://www.google.com/s2/favicons?domain=${tech.domain}&sz=128`);
  return list;
};

const Logo: React.FC<{ tech: Tech }> = ({ tech }) => {
  const sources = sourcesFor(tech);
  const [index, setIndex] = useState(0);

  if (index >= sources.length) {
    return (
      <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold text-sm rounded-sm">
        {tech.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      key={sources[index]}
      src={sources[index]}
      alt={`${tech.name} logo`}
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
      className="w-12 h-12 object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-500"
    />
  );
};

const TechnologiesSection: React.FC = () => (
  <section className="bg-white py-16 md:py-20 px-2">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center px-4 mb-14 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-emerald-600" />
          <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
            Technologies
          </div>
          <div className="h-px w-8 bg-emerald-600" />
        </div>
        <h2 className="font-['DM_Serif_Display'] text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight leading-[1.05]">
          The Stack Behind{" "}
          <span className="text-emerald-600">Every Device</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
          From silicon and firmware to cloud and mobile, we work with proven
          tools across the whole product chain.
        </p>
      </div>

      <div className="rounded-3xl border border-[#d2d2d7]/40 bg-[#f5f5f7] overflow-hidden shadow-xs divide-y divide-[#d2d2d7]/50">
        {groups.map((g) => (
          <div key={g} className="grid grid-cols-1 lg:grid-cols-12 bg-white">
            <div className="lg:col-span-3 p-6 md:p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#d2d2d7]/40 flex items-center justify-between lg:justify-start">
              <span className="text-sm md:text-base font-semibold text-[#1d1d1f] tracking-tight">
                {g}
              </span>
              <span className="text-[10px] font-medium text-[#86868b] bg-white px-2.5 py-1 rounded-full shadow-2xs">
                {techs.filter((t) => t.group === g).length}
              </span>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-[#e8e8ed]/40 gap-[1px]">
              {techs
                .filter((t) => t.group === g)
                .map((t) => (
                  <div
                    key={t.name}
                    className="group/item relative flex flex-col items-center justify-center gap-3 p-6 bg-white transition-all duration-300 hover:bg-[#fbfbfd] hover:shadow-inner"
                  >
                    <div className="transform transition-transform duration-300 group-hover/item:scale-105">
                      <Logo tech={t} />
                    </div>
                    <span className="text-sm font-medium text-[#1d1d1f] text-center tracking-tight">
                      {t.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;