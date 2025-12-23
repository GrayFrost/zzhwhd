import { Home } from "../components/home";
import { Footer } from "../components/footer";

export default function HomePage() {
  return (
    <>
      <main className="flex-1 min-h-screen bg-background transition-colors duration-700">
        <div className="relative container mx-auto max-w-7xl py-12 md:py-20 px-6">
          <Home />
        </div>
      </main>
      <Footer />
    </>
  );
}
