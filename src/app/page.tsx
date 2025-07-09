import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfiniteScroll from "@/components/InfiniteScroll";
import Projects from "@/components/Projects";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <FloatingElements />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <InfiniteScroll />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
