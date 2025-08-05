import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const QuoteSection = () => {
  return (
    <div className="bg-black text-white px-6 py-12 md:py-20 md:px-50 flex flex-col justify-between min-h-[300px] w-full">
      <div className="text-2xl md:text-5xl font-semibold max-w-[945px] pb-12">
        With every wave a new opportunity arises
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <p className="text-lg font-semibold mb-8 flex flex-col md:flex-row">
          <span className="font-bold">Harvey Mitchell,</span> <span>Office Manager</span>
        </p>

        <div className="flex md:gap-4 justify-between mb-8">
          <FaArrowLeft className="text-gray-400 hover:text-white cursor-pointer" />
          <FaArrowRight className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
