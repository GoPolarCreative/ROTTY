import { CheckCircle, MapPin } from 'lucide-react';

const strengths = [
  'Upfront, transparent pricing with no hidden fees',
  'Modern CCTV and drain jetting equipment',
  'On-time arrivals and clear communication',
  'Long-lasting solutions, not quick fixes',
  'Licensed and fully insured tradespeople',
  'Same-day emergency response available',
];

const areas = [
  'Central Coast',
  'Lake Macquarie',
  'Newcastle',
  'Hunter Region',
  'Greater Sydney',
];

export default function About() {
  return (
    <section id="about" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/hero.png"
                alt="Rotty Plumbing Co"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 max-w-[200px]">
              <p className="text-5xl font-black text-black leading-none">10+</p>
              <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Years of Industry Experience</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-white" />
              <span className="text-gray-400 text-xs tracking-[0.3em] uppercase font-medium">About Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Locally Owned.<br />
              <span className="text-gray-400">Proudly Operated.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Rotty Plumbing Co is a locally owned and operated plumbing business proudly servicing the Central Coast, Greater Sydney, Newcastle and the Hunter Region. With over 10 years of industry experience, we provide reliable residential and commercial plumbing solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our focus is on honest advice, quality workmanship, transparent pricing and dependable service every time. We arrive on time, communicate clearly and take pride in doing the job right the first time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {strengths.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{s}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-xs tracking-[0.2em] uppercase font-medium">Areas We Service</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="border border-gray-700 text-gray-300 px-3 py-1 text-sm">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
