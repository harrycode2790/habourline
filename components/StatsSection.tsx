import React from "react";

interface StatItem {
  value: string;
  title: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-3xl md:text-7xl font-bold text-[#DA7934]  pb-4 border-b border-[#D8D8D8]">{stat.value}</h2>
            <p className="text-[#606060] mt-2 text-lg">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
