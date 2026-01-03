import { About } from "../../components/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-700">
      <div className="relative container mx-auto max-w-7xl py-12 md:py-20 px-6">
        <About />
      </div>
    </div>
  );
}
