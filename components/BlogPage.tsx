import Image from "next/image"

const articles = [
    {
      image: "/images/blog1.png",
      title: "Cdc Issues Health Alert Notice For Travelers To USA From Hon",
      date: "October 7, 2020",
    },
    {
      image: "/images/blog2.jpeg",
      title: "Cheap Airline Tickets Great Ways To Save",
      date: "October 7, 2020",
    },
    {
      image: "/images/blog3.jpeg",
      title: "Global Resorts Network Grn Putting Timeshares To Shame",
      date: "October 7, 2020",
    },
    {
      image: "/images/blog4.jpeg",
      title: "The Luxury Of Traveling With Yacht Charter Companies",
      date: "October 7, 2020",
    },
    {
      image: "/images/blog5.jpeg",
      title: "Family Safari Vacation",
      date: "October 7, 2020",
    },
  ];

const BlogPage = () => {
  return (
    <section className="max-w-7xl mx-auto  md:py-20">
      
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">The latest articles <br /> and industry insights</h2>
        <a href="#" className="text-[#1019C2] hidden md:block">View All</a>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-[67%_33%] gap-8 md:gap-5 mb-8 md:mr-5">
       
        <div className="group">
          <div className="relative w-full h-60">
            <Image src={articles[0].image} alt={articles[0].title} layout="fill" objectFit="cover" />
          </div>
          <h3 className="mt-4 text-lg font-semibold group-hover:text-[#1019C2] transition">
            {articles[0].title}
          </h3>
          <p className="text-gray-500 text-sm"> {articles[0].date}</p>
        </div>

        
        <div className="group">
          <div className="relative w-full h-60">
            <Image src={articles[1].image} alt={articles[1].title} layout="fill" objectFit="cover"/>
          </div>
          <h3 className="mt-4 text-lg font-semibold group-hover:text-[#1019C2] transition">
            {articles[1].title}
          </h3>
          <p className="text-gray-500 text-sm"> {articles[1].date}</p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
        {articles.slice(2, 5).map((article, index) => (
          <div key={index} className="group">
            <div className="relative w-full h-60">
              <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-[#1019C2] transition">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm">{article.date}</p>
          </div>
        ))}
      </div>

      {/* Mobile "View All" Button */}
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="text-[#1019C2] text-lg">View All</a>
      </div>
    </section>
  )
}

export default BlogPage
