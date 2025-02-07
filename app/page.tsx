import { Home } from "../components/home";
import { Footer } from "../components/footer";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl pt-10 pb-[25px] md:pt-16">
          <Home />
        </div>
      </main>
      <Footer />
    </>
  );
}
