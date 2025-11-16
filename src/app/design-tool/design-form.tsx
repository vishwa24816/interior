"use client";

import { useFlow } from "@genkit-ai/next/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { designSuggester } from "@/ai/flows/designSuggester";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Wand2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  roomType: z.string().min(1, "Please select a room type."),
  style: z.string().min(1, "Please select a style."),
  budget: z.string().min(1, "Please select a budget."),
});

type FormData = z.infer<typeof formSchema>;
type FlowOutput = z.infer<typeof designSuggester.outputSchema>;

const roomTypes = ["Living Room", "Bedroom", "Kitchen", "Home Office", "Bathroom"];
const styles = ["Modern", "Minimalist", "Bohemian", "Industrial", "Coastal"];
const budgets = ["Modest", "Mid-Range", "High-End", "Luxury"];

export function DesignForm() {
  const [flow, stream] = useFlow(designSuggester);
  const [output, setOutput] = useState<FlowOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomType: "",
      style: "",
      budget: "",
    },
  });

  async function onSubmit(values: FormData) {
    setOutput(null);
    const result = await stream(values);
    if (result.output) {
      setOutput(result.output);
    }
  }

  const renderResults = () => {
    if (flow.loading) {
      return (
        <Card className="md:col-span-2 flex flex-col items-center justify-center p-8 min-h-[300px]">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <h3 className="font-headline text-2xl">Crafting your design...</h3>
          <p className="text-muted-foreground">This may take a moment.</p>
        </Card>
      );
    }

    if (output) {
      return (
        <div className="md:col-span-2 space-y-8 animate-fade-in-up">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Your Custom Design Concept</CardTitle>
                    <p className="text-muted-foreground">Based on your selection of a {form.getValues('style')} {form.getValues('roomType')} with a {form.getValues('budget')} budget.</p>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader><CardTitle>Overall Mood</CardTitle></CardHeader>
                <CardContent><p className="text-lg font-style-italic text-muted-foreground">"{output.mood}"</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Color Palette</CardTitle></CardHeader>
                <CardContent>
                <div className="flex gap-4">
                    {output.colorPalette.map((color, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border" style={{ backgroundColor: color }} />
                        <span className="text-xs mt-2 text-muted-foreground">{color}</span>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Furniture Suggestions</CardTitle></CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {output.furniture.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>Layout Concept</CardTitle></CardHeader>
                <CardContent>
                <p className="text-muted-foreground">{output.layout}</p>
                </CardContent>
            </Card>
        </div>
      )
    }

    return (
        <Card className="md:col-span-2 flex flex-col items-center justify-center p-8 min-h-[300px] border-dashed">
          <Wand2 className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="font-headline text-2xl text-muted-foreground">Your design awaits</h3>
          <p className="text-muted-foreground">Fill out the form to see the magic happen.</p>
        </Card>
    )
  }

  return (
    <>
      <div className="md:col-span-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select a room" /></SelectTrigger></FormControl>
                    <SelectContent>{roomTypes.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="style"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Style</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select a style" /></SelectTrigger></FormControl>
                    <SelectContent>{styles.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select a budget" /></SelectTrigger></FormControl>
                    <SelectContent>{budgets.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={flow.loading}>
              {flow.loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              {flow.loading ? "Generating..." : "Generate Design"}
            </Button>
          </form>
        </Form>
      </div>
      {renderResults()}
    </>
  );
}
