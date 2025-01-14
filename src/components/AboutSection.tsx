import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="text-center bg-zinc-800 p-10">
      <h2 className="text-3xl font-bold text-amber-500">About Us</h2>
      <p className="mt-4 text-lg text-white max-w-4xl mx-auto">
        HiVE is a cutting-edge business tech company leading the way in
        innovation. Our AI-powered, licensed merchant platform automates,
        integrates, and optimizes operations across departments, ensuring
        businesses thrive in the digital age. Whether you're a startup, SMB, or
        enterprise, HiVE equips you with the tools to scale seamlessly and
        securely.
      </p>
    </div>
  );
};

export default AboutSection;
