import { Wrench, Droplets, Flame, Search, Filter, Tv, Home, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'General Plumbing',
    desc: 'Leaking taps, burst pipes, pipe repairs, fixture installations and all general plumbing needs handled with care and precision.',
  },
  {
    icon: Droplets,
    title: 'Blocked Drains & Jetting',
    desc: 'High-pressure water jetting to clear blocked drains fast. We tackle any blockage: kitchen, bathroom, stormwater or sewer.',
  },
  {
    icon: Flame,
    title: 'Hot Water Systems',
    desc: 'Repairs and installation of all hot water system types: gas, electric, solar and heat pump units from leading brands.',
  },
  {
    icon: Flame,
    title: 'Gas Fitting & Repairs',
    desc: 'Licensed gas fitting for appliance installations, gas line repairs, cooktop connections and safety inspections.',
  },
  {
    icon: Tv,
    title: 'CCTV Drain Inspections',
    desc: 'State-of-the-art CCTV camera technology to accurately diagnose drain issues, saving time and unnecessary excavation.',
  },
  {
    icon: Filter,
    title: 'Water Filtration Systems',
    desc: 'Supply and installation of whole-home and under-sink water filtration systems for cleaner, healthier water.',
  },
  {
    icon: Home,
    title: 'Renovations',
    desc: 'Complete plumbing for kitchen, laundry and bathroom renovations, from rough-in to final fit-off, done right.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, overflowing drains or gas leaks? We offer same-day emergency response when you need us most.',
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-black" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl">
            Comprehensive plumbing solutions for residential and commercial properties, handled by licensed professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  s.highlight
                    ? 'bg-black border-black text-white'
                    : 'bg-white border-gray-200 text-black hover:border-black'
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 ${
                    s.highlight ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-tight">{s.title}</h3>
                <p className={`text-sm leading-relaxed ${s.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                  {s.desc}
                </p>
                {s.highlight && (
                  <a
                    href="tel:0432038547"
                    className="inline-block mt-4 text-xs font-bold tracking-widest underline underline-offset-4"
                  >
                    CALL NOW
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
