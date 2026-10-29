import Hero from "@/components/sections/Hero";

// The homepage is a single full-viewport scene — no stacked sections, no Footer.
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
    </main>
  );
}
