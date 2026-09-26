import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills & Stack */}
        <Skills />

        {/* Featured Projects with Case Study Modals */}
        <Projects />

        {/* Professional Experience & ITI Training */}
        <Experience />

        {/* Education (Ain Shams University) & Certifications */}
        <Education />

        {/* Services & Deliverables */}
        <Services />

        {/* Contact & Inquiry Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
