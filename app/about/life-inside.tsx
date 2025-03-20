import Image from "next/image";

const LifeInside = () => {
  return (
    <section className="py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-6xl font-bold text-center md:text-left mb-10">
        Life inside Habourline offshore
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8">
        {/* First Image (Full width on mobile, first column on desktop) */}
        <div className="md:col-span-1">
          <Image
            src="/images/life-1.png"
            alt="Team meeting"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Second and Third Images (Side by side on mobile, second and third columns on desktop) */}
        <div className="grid grid-cols-2 gap-6 md:col-span-2">
          <div>
            <Image
              src="/images/life-2.png"
              alt="Cardboard creativity"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src="/images/life-3.png"
              alt="Workers handling packages"
              width={250}
              height={150}
              className="w-full h-auto md:max-h-[332px] md:max-w-[263px]"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="md:flex md:gap-12">
        <p className="font-bold text-lg md:text-2xl md:max-w-[343px] pb-4">
          We&apos;re part of the world&apos;s leading logistics group
        </p>
        <p className="text-gray-600 md:text-lg md:max-w-[457px]">
          We are an international team of over 400,000 shipping professionals, united by a passion for logistics. And we work in a unique environment. DHL is as innovative as a start-up, with the power of an international organization.
        </p>
      </div>
    </section>
  );
};

export default LifeInside;