import { Metadata } from "next";
import { DesignForm } from "./design-form";

export const metadata: Metadata = {
  title: "AI Design Tool | Frame & Hue",
  description: "Get personalized interior design suggestions powered by AI.",
};

export default function DesignToolPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">AI-Powered Design Tool</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Kickstart your design journey. Tell us your preferences, and our AI will generate a custom design concept just for you.
        </p>
      </header>

      <div className="bg-card p-4 md:p-8 rounded-lg shadow-sm max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
            <DesignForm />
        </div>
      </div>
    </div>
  );
}
