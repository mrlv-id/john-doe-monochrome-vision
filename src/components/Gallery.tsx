import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import ScrollReveal from "./ScrollReveal";

const photos = [
  { src: gallery1, title: "Solitude", category: "Street" },
  { src: gallery2, title: "Brutalist Dreams", category: "Architecture" },
  { src: gallery3, title: "Underground", category: "Urban" },
  { src: gallery4, title: "Grid", category: "Abstract" },
  { src: gallery5, title: "Ascent", category: "Urban" },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="mb-16 md:mb-24">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Portfolio
          </h2>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <ScrollReveal
              key={index}
              animation="zoom"
              delay={index * 100}
              duration={600}
              className={index === 0 || index === 2 ? "md:row-span-2" : ""}
            >
              <div
                className="relative overflow-hidden group cursor-pointer h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-[3/4] md:aspect-auto md:h-full">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover image-hover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-foreground/80 flex flex-col justify-end p-6 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="font-body text-xs tracking-widest uppercase text-gray-400 mb-2">
                    {photo.category}
                  </span>
                  <h3 className="font-display text-2xl text-primary-foreground">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
