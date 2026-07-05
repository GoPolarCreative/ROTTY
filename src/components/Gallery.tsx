import { useState } from 'react';

const images = [
  {
    src: '/images/1.png',
    alt: 'Vulcan hot water system installation',
    label: 'Hot Water Systems',
  },
  {
    src: '/images/2.png',
    alt: 'Underground drainage pipe work',
    label: 'Drainage & Pipe Work',
  },
  {
    src: '/images/3.png',
    alt: 'AEG gas cooktop kitchen renovation',
    label: 'Kitchen Renovation',
  },
  {
    src: '/images/4.png',
    alt: 'Rheem continuous flow hot water installation',
    label: 'Hot Water Installation',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-black" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Recent Projects
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl">
            Quality workmanship across every job, from hot water installations to full drainage solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <button
              key={img.src}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100 text-left"
              onClick={() => setActive(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-bold tracking-wide">{img.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
