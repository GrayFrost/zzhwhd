import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1 bg-background transition-colors duration-700">
        <div className="relative container mx-auto max-w-7xl py-12 md:py-20 px-6">
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}