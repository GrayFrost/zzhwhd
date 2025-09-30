import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        {/* iOS风格的背景 */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="relative container mx-auto max-w-7xl py-8 px-4">
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}