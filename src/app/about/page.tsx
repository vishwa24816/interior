import Image from "next/image";
import { Metadata } from "next";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Heart, Lightbulb } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "About Us | Interior website",
  description: "Learn about the team, philosophy, and passion behind Interior website's designs.",
};

const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Passion",
    description: "Our work is driven by a deep love for design and creating beautiful, functional spaces.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We constantly explore new ideas and materials to bring fresh perspectives to our projects.",
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Attention to Detail",
    description: "From the grandest gesture to the smallest detail, we believe in perfection.",
  },
];

const team = [
    { name: "Eleanor Vance", role: "Founder & Lead Designer", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Marcus Thorne", role: "Project Manager", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
    { name: "Isabella Chen", role: "Junior Designer", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
]

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-us");

  return (
    <div className="animate-fade-in-up">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Interior website</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a collective of designers, artists, and strategists who believe that thoughtful design can transform lives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, Interior website was born from a desire to create spaces that are not only beautiful but also deeply personal. We believe that a home should be a sanctuary, a reflection of its inhabitants' personalities and lifestyles.
                </p>
                <p>
                  Over the past decade, we have grown into a passionate team of designers dedicated to crafting bespoke interiors. Our philosophy is rooted in collaboration, working closely with our clients to bring their vision to life with creativity and precision.
                </p>
              </div>
            </div>
            {aboutImage && (
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our every decision and design.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-t-4 border-primary pt-6">
                <CardHeader>
                  <div className="mx-auto w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="pt-4 font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet the Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The creative minds behind our beautiful designs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
             {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
