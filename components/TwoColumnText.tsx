import React from "react";

interface TwoColumnTextProps {
  leftText: string;
  rightText: {
    bold?: string;
    paragraphs: string[];
  };
}

const TwoColumnText: React.FC<TwoColumnTextProps> = ({ leftText, rightText }) => {
  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column */}
      <div>
        <h2 className="text-2xl md:text-6xl font-bold">{leftText}</h2>
      </div>

      {/* Right Column */}
      <div className="md:max-w-[458px]">
        {rightText.bold && <p className="font-bold text-lg md:text-2xl">{rightText.bold}</p>}
        {rightText.paragraphs.map((para, index) => (
          <p key={index} className="text-gray-600 mt-4 md:text-lg">{para}</p>
        ))}
      </div>
    </section>
  );
};

export default TwoColumnText;
