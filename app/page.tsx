import BlogPage from "@/components/BlogPage"
import Header from "@/components/Header"
import HeroPage from "@/components/HeroPage"
import IndustrialPage from "@/components/IndustrialPage"
import TestimonialPgae from "@/components/TestimonialPgae"

const page = () => {
  return (
    <>      
      <Header />
      <div className=" conatiner px-6 py-12 md:py-20 md:px-50">
        <HeroPage/>
      </div>
      <IndustrialPage/>
      <div className=" conatiner px-6 py-12 md:py-20 md:px-50">
        <TestimonialPgae/>
        <BlogPage/>
      </div>
     
    </>
 
  )
}

export default page
