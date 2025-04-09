import AboutSection from "@/components/AboutSection"
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Resume from '@/components/Resume';
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactMe />
    </main>
  )
}
