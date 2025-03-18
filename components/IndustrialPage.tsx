// Code to display the Industrial Page

const IndustrialPage = () => {
  return (
    <section className="bg-[#1019C2] text-white conatiner px-6 py-12 md:py-20 md:px-50">
    <div className="max-w-6xl mx-auto text-center md:text-start">
        <h3 className="text-sm  font-semibold opacity-70">
        Industry Knowledge
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-7 ">
        Powering innovation <br /> across industries, globally.
        </h2>
    </div>

    
    <div className="flex justify-center mt-13">
        <img
        src="/images/map.png"
        alt="Global Map"
        className="w-full max-w-3xl md:max-w-5xl"
        />
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start mt-15">
        {/* Equity Value */}
        <div>
        <h3 className="text-3xl md:text-5xl font-bold">$5b+</h3>
        <hr className="border-t border-gray-300 mt-5 mb-4 opacity-20" />
        <p className="text-md md:text-lg font-semibold mt-2">Equity value</p>
        <p className="text-sm opacity-80 mt-1 md:mt-2">
            More than $5b USD in equity value created
        </p>
        </div>

        {/* Ventures */}
        <div>
        <h3 className="text-3xl md:text-5xl font-bold">932</h3>
        <hr className="border-t border-gray-300 mt-5 mb-4 opacity-20" />
        <p className="text-md md:text-lg font-semibold mt-2">Ventures</p>
        <p className="text-sm opacity-80 mt-1 md:mt-2">
            We’ve built, invested in, and accelerated hundreds of ventures globally.
        </p>
        </div>

        {/* Successful Pilots */}
        <div>
        <h3 className="text-3xl md:text-5xl font-bold">81%</h3>
        <hr className="border-t border-gray-300 mt-5 mb-4 opacity-20" />
        <p className="text-md md:text-lg font-semibold mt-2">Successful pilots</p>
        <p className="text-sm opacity-80 mt-1 md:mt-2">
            Facilitated hundreds of pilots between corporates and startups with an unmatched success rate.
        </p>
        </div>

        {/* Fortune 500 Partners */}
        <div>
        <h3 className="text-3xl md:text-5xl font-bold">85+</h3>
        <hr className="border-t border-gray-300 mt-5 mb-4 opacity-20" />
        <p className="text-md md:text-lg font-semibold mt-2">Fortune 500 partners</p>
        <p className="text-sm opacity-80 mt-1 md:mt-2">
            Working with us to solve big challenges.
        </p>
        </div>
    </div>
    </section>
  )
}

export default IndustrialPage
