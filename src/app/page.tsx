import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Home as HomeIcon, Paintbrush, Sofa } from "lucide-react";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");
  const featuredProjects = PlaceHolderImages.filter((img) => img.id.startsWith("project-")).slice(0, 3);

  const services = [
    {
      icon: <HomeIcon className="h-8 w-8 text-primary" />,
      title: "Full-Service Design",
      description: "From concept to completion, we manage every detail of your project.",
    },
    {
      icon: <Sofa className="h-8 w-8 text-primary" />,
      title: "Furniture & Styling",
      description: "Curation of furniture, lighting, and accessories to perfect your space.",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-primary" />,
      title: "Color Consultation",
      description: "Expert guidance on creating the perfect color palette for your home.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl px-4 animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Crafting Spaces, Inspiring Lives
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-200">
            Frame & Hue is a full-service interior design firm that creates timeless, sophisticated spaces tailored to your lifestyle.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/portfolio">Explore Our Work <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a range of services to help you create the home of your dreams.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="pt-4 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A glimpse into the beautiful spaces we've had the pleasure of designing.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {featuredProjects.map((project, index) => (
              <Link href="/portfolio" key={project.id}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg" style={{ animationDelay: `${index * 150}ms` }}>
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    data-ai-hint={project.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-headline text-xl text-white font-semibold">Project {index + 1}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
