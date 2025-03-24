import bg2 from "../assets/4.png";
import ContactForm from "../components/ContactForm";
import ContactHeader from "../components/ContactHeader";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800 relative">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-center opacity-10 bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="relative z-10">
        <ContactHeader />
        <ContactForm />
      </div>
    </main>
  );
}
