import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-zinc-900 py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-thin mb-8 text-zinc-100">
          About <span className="font-bold">Us</span>
        </h2>
        <p className="text-xl leading-relaxed text-zinc-300 max-w-4xl mx-auto">
          HiVE is a cutting-edge business tech company leading the way in
          innovation. Our AI-powered, licensed merchant platform automates,
          integrates, and optimizes operations across departments, ensuring
          businesses thrive in the digital age. Whether you're a startup, SMB,
          or enterprise, HiVE equips you with the tools to scale seamlessly and
          securely.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
