import AboutSection from "../components/AboutSection";
import Platform from "../components/Platform";
import CoreValues from "../components/CoreValues";
import WhyHive from "../components/WhyHive";
import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800">
      <AboutSection />
      <Platform />
      <CoreValues />
      <WhyHive />
      <CallToAction />
    </main>
  );
}
