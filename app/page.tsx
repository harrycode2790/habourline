import Header from "@/components/Header"
import HeroPage from "@/components/HeroPage"
import IndustrialPage from "@/components/IndustrialPage"

const page = () => {
  return (
    <>      
      <Header />
      <div className=" conatiner px-6 py-12 md:py-20 md:px-50">
        <HeroPage/>
      </div>
      <IndustrialPage/>
     
    </>
 
  )
}

export default page
