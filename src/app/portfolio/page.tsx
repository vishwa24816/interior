import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Interior website",
  description: "Explore a curated collection of our finest interior design projects.",
};

export default function PortfolioPage() {
  const projects = PlaceHolderImages.filter((img) => img.id.startsWith("project-"));

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the artistry and attention to detail that define Interior website. Each project is a unique story of transformation and style.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative block overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <Image
              src={project.imageUrl}
              alt={project.description}
              data-ai-hint={project.imageHint}
              width={600}
              height={400}
              className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-headline text-2xl font-bold text-white">Project {index + 1}</h3>
                <p className="text-sm text-gray-200 mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
