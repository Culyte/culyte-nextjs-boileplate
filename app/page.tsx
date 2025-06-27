import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="flex items-center justify-center flex-col my-auto h-screen">
      <div className="bg-[image:var(--primary-gradient)] my-4 p-4 rounded-[var(--radius)] text-white">
        Gradient Button or Section
      </div>
      <Button>Click me</Button>
    </section>
  );
}
