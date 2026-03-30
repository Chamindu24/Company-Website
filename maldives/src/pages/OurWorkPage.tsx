const stats = [
  {
    value: "+120",
    label: "Projects Delivered",
    valueColor: "text-primary",
    cardClass:
      "bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,104,116,0.06)]",
    labelClass: "text-on-surface-variant",
  },
  {
    value: "+80",
    label: "Strategic Clients",
    valueColor: "text-on-primary",
    cardClass:
      "bg-gradient-to-br from-primary to-primary-container shadow-xl text-on-primary",
    labelClass: "text-white/80",
  },
  {
    value: "+99%",
    label: "Satisfaction Rate",
    valueColor: "text-tertiary",
    cardClass:
      "bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,104,116,0.06)]",
    labelClass: "text-on-surface-variant",
  },
];



function OurWorkPage() {
  return (
    <main className="bg-background pb-24 pt-32 text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-secondary-container px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            Case Studies
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            Empowering the{" "}
            <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
              Maldives Hospitality
            </span>{" "}
            Ecosystem
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            We partner with the world&apos;s most prestigious island resorts and
            marine conservationists to redefine digital operations in paradise.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center rounded-xl p-10 text-center ${stat.cardClass}`}
            >
              <span
                className={`mb-2 font-headline text-5xl font-extrabold md:text-6xl ${stat.valueColor}`}
              >
                {stat.value}
              </span>
              <span
                className={`font-label text-sm font-medium uppercase tracking-widest ${stat.labelClass}`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>



      <section className="max-w-screen-2xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Luxurious overwater bungalows in a Maldivian turquoise lagoon with crystal clear water and bright sunny skies"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlvWo8ooLFe2fomXEj9FP0m6CGlaD-6-qszm-iC3nrDp5GbOONYbnocLlaR_tmlMTKyV47QlC_XM_2PN0FBzO5jVe1bByacN8abnBS2PNg7l4BZobvOe-Yh3L1K1rEooIiPZekVDKLa3m5P0gWU6QLrq5u_39pDOCQcHrbjNXym0XlJXjWVYStK9p2Au4OVqtn1rr7XAgs-c_ygQX3yJLorf8MfgXNOq7yL0L8EFSEWMKVQiWeL9DiiXVkJz2t8yjTxeX9MyIYyUCI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold tracking-tight uppercase font-label">
                  Resort
                </span>
                <span className="text-white/80 text-sm font-medium">
                  Flagship Implementation
                </span>
              </div>
              <h3 className="text-4xl font-headline font-bold mb-2">
                Velana Sapphire Estate
              </h3>
              <p className="text-white/70 max-w-md">
                Full-stack operational automation across 120 villas and private
                yacht concierge.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 bg-primary-container rounded-xl p-10 flex flex-col justify-between text-on-primary-container relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-secondary-fixed-dim font-bold tracking-widest text-xs uppercase font-label">
                The Impact
              </span>
              <h3 className="text-3xl font-headline font-bold text-white mt-4 mb-6 leading-tight">
                Digital transformation beyond expectations.
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">
                    verified
                  </span>
                  <div>
                    <p className="text-white font-semibold">99.8% Uptime</p>
                    <p className="text-on-primary-container text-sm">
                      Critical hospitality infrastructure reliability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">
                    speed
                  </span>
                  <div>
                    <p className="text-white font-semibold">
                      35% Efficiency Gain
                    </p>
                    <p className="text-on-primary-container text-sm">
                      Reduced manual guest service overhead.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-headline font-bold transition-colors border border-white/10">
                Read Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">
            Recent Deployments
          </h2>
          <div className="flex gap-2">
            <span className="px-5 py-2 bg-surface-container-highest text-primary font-bold rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              All
            </span>
            <span className="px-5 py-2 bg-surface-container-low text-on-surface-variant font-medium rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              Resorts
            </span>
            <span className="px-5 py-2 bg-surface-container-low text-on-surface-variant font-medium rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              Marine
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col group">
            <div className="relative mb-6 overflow-hidden rounded-xl aspect-square bg-surface-container shadow-sm group-hover:shadow-lg transition-all">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Interior of a luxury modern resort lobby with high ceilings, minimalist furniture, and large windows overlooking the ocean"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_thzVpjEfsOHKyakOJL166Z1QE2m3o_0urNbwjNtdqmFCQv5h13YzJsdeoYrkn6KGcyVnnaP2NtXqlVaIqKo_uEL0TFW2yt9CfHNxDIJ4iDHNQ6y_2_Q9au9n7gs5ZqW8dIzmRUI76lXKKYpjEgovr6dLI7EiauYiLwbGBYPRcFt-DaQA-uhuvSJYjfk6yNlch4b8cN71HQiDIwG1IUiw3lpTt0NgDRFaiHHUaSgKaY3v9ZgUvbosRHCEpEC7K6XkVQaw3hUnMXj"
              />
              <div className="absolute inset-x-4 bottom-4 glass-card p-4 rounded-lg flex items-center justify-between border border-white/30">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label">
                  Live Project
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest font-label">
                Resort
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="text-on-surface-variant text-xs">
                Atoll North
              </span>
            </div>
            <h4 className="text-2xl font-headline font-bold mb-3 text-primary">
              Azure Sands Retreat
            </h4>
            <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
              Automated guest check-in via biometric tokens and integrated AI
              concierge for water sports scheduling.
            </p>
            <div className="mt-auto border-t border-surface-container-highest pt-6">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded bg-surface-container-high object-cover"
                  data-alt="Close-up screen shot of a sleek hospitality management dashboard with colorful line charts and booking statistics"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcEuRX-WJMa6TUl_s5qQ7VioOZV_oh9aT-Xla_0gXnmKGk4sbyqgWWZJ6n_2fZN_cHQ6LN3QLhinN1F7wEyz0YW6R_X2Md7QnqhoeKrVQOAiU8Vmv2HqsKXGjx0OGFQoiONyhWpFRJIfozG7LQARKpVs4X1nkZMPF-z6lRYcyesCmG6FrwdwRVKaxCrjHIYcbg5HqKqPYeTNZbSmSOIEHHWWGK9rmD1EFR82UVf5bg9RFkGTXm5GGuOmCVAejSsZev8tbtTleqa_aC"
                />
                <div>
                  <span className="block text-xs font-bold text-primary font-label uppercase tracking-tighter">
                    Integration Layer
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    Proprietary Viduvaru Engine
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="relative mb-6 overflow-hidden rounded-xl aspect-square bg-surface-container shadow-sm group-hover:shadow-lg transition-all">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Luxury yacht cruising through vibrant teal waters, leaving a white wake under a clear blue tropical sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwviSXH33Zm0qZq8e1JuoX6MUUsnbt3bK_L1vJD_kqeKl2XUZW7cGjvoLEYfJ1or1Wnefrxtwh7B2aSfa78QXBo-C2_n_J1G3FwWQofpytpwhCg4a3tGeQ_m-Rh6tbmEqvOXEHMhsi-mrzUhefFy6dPuPfof6aWl4I4tPAeozRMzCQAw3EXEWu3ah6mwce8UWSNC2l5DkKQkQ9QjavhKct6ZJs2cam8itlnNky2cOmhQd2h3oUC6KWv3-UUSvFpdO8y7DNr_wioRZn"
              />
              <div className="absolute inset-x-4 bottom-4 glass-card p-4 rounded-lg flex items-center justify-between border border-white/30">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label">
                  Fleet View
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest font-label">
                Marine
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="text-on-surface-variant text-xs">
                Fleet Wide
              </span>
            </div>
            <h4 className="text-2xl font-headline font-bold mb-3 text-primary">
              Blue Horizon Expeditions
            </h4>
            <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
              Unified maritime dashboard for 15 luxury liveaboards, managing
              fuel, supply chain, and guest manifests.
            </p>
            <div className="mt-auto border-t border-surface-container-highest pt-6">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded bg-surface-container-high object-cover"
                  data-alt="Modern tablet displaying maritime navigation charts and logistics data with high-contrast UI design"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcbGuB5V1AxdZ6hXjdNj-c8BkRnODz6GZbnFP3jNZX3edwPxS9olD4Go677AvfjJdblIUWnJDCA3LqZETpfIVfQGqr4qZBYY_uqOnC8QBdvj9C30O2um5zdZg2uhbmAj05pqpHooVjH7rp3k1d68dzYlVeJthaO1kqAczcdzQEuDkksaoCDcM8lSD4q6pP-6i8ILLiI5R0cI_UoRDukoovDaOuruf0iaXAmGHTtfK_PpLLndojEBT0Lr7R7zhGi8OQgo2UE8lzY9yc"
                />
                <div>
                  <span className="block text-xs font-bold text-primary font-label uppercase tracking-tighter">
                    Real-time Telemetry
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    Edge Computing Module
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="relative mb-6 overflow-hidden rounded-xl aspect-square bg-surface-container shadow-sm group-hover:shadow-lg transition-all">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Aerial view of a circular island boutique hotel with thatched roofs and a large central pool area surrounded by palm trees"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCwl2ghuG0UfmRvRzCrcPWkPel4Rl7LjnlRQV08T7oBzQZAxC8Kwk_HTn1UZhwZx0aXE_-Sk-oNUI327lU1wAfXHf5CKgz34Kv4RpRb0HFktDKPp42WxbKnCe1_IRJ_ThidRwhz4wTKAMLUxSaBkBakODB3epIUi9TjhJOHM_6Wkwtp2EcpQQbSKKgsz8zkFHOvEHKb8YdoGxD6G880JNPE7lsceQugXds6yYCfYa2zETHkA3K1gwW6CRA-z5CqSuTvR4dy6d2mEoH"
              />
              <div className="absolute inset-x-4 bottom-4 glass-card p-4 rounded-lg flex items-center justify-between border border-white/30">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label">
                  Live Project
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest font-label">
                Hotel
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="text-on-surface-variant text-xs">
                Male' City
              </span>
            </div>
            <h4 className="text-2xl font-headline font-bold mb-3 text-primary">
              The Urban Reef Boutique
            </h4>
            <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
              Smart-room integration for an urban boutique hotel, featuring
              touchless environmental controls.
            </p>
            <div className="mt-auto border-t border-surface-container-highest pt-6">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded bg-surface-container-high object-cover"
                  data-alt="Clean software UI showing room temperature and lighting controls with soft shadows and pastel accents"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb5zD3i0dAATnkj3biSO3OEftcVGgBZBbBAS9QGSlBeYTvZwzY6Dm7HU59j-QX3w8_-oX6UhR9IEG4t77Q5njD0UtCaSnsaIMmAjdktGwfmvZfzWHjcWRjTiEZys5D1QimpAXfiqyV8ijUXZhzVzayXl-kM_dEXy39Qydi6YZXwubj2M1JqtTTDZsry6f3gyLKVTq0Gwe426ve1sZhoKPRV1Lako7Em2tEO3O0cf64WoX3Y9D-Fo0VrUtbmL2WaP361Q5BhkN7AJPI"
                />
                <div>
                  <span className="block text-xs font-bold text-primary font-label uppercase tracking-tighter">
                    IoT Gateway
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    Viduvaru Core v4.2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-16 text-center md:p-24">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-8 font-headline text-4xl font-bold leading-tight text-on-primary md:text-5xl">
              Ready to transform your resort experience?
            </h2>
            <p className="mb-12 text-lg text-white/80">
              Join the Maldives&apos; leading hospitality brands in the digital
              future.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="scale-100 rounded-full bg-surface-container-lowest px-8 py-4 text-lg font-bold text-primary transition-all active:scale-95 hover:shadow-xl">
                Start a Project
              </button>
              <button className="rounded-full border border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10">
                View all Services
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl" />
        </div>
      </section>
    </main>
  );
}

export default OurWorkPage;
