import Header from "@/components/Header"
import HeroPage from "@/components/HeroPage"

const page = () => {
  return (
    <>      
      <Header />
      <div className=" conatiner px-6 py-12 md:py-20 md:px-50">
         <HeroPage/>
      </div>
     
    </>
 
  )
}

export default page
