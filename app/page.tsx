import { Home } from "../components/home";
import { Footer } from "../components/footer";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <div className="absolute inset-0 h-full w-full bg-[#fcf8fb] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto max-w-7xl py-8">
          <Home />
        </div>
      </main>
      <Footer />
    </>
  );
}
