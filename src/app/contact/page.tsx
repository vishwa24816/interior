import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Interior website",
  description: "Get in touch with the Interior website team to start your design journey.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Let's Create Together</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind? We'd love to hear from you. Fill out the form or use the contact information below to get in touch.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h2 className="font-headline text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Our Studio</h3>
                <p className="text-muted-foreground">123 Design Avenue, Suite 456<br />Metropolis, 78910</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">hello@interiorwebsite.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="font-headline text-3xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
