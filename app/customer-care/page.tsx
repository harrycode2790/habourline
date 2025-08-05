import CustomerCarePage from "@/components/CustomerCarePage"
import FooterPage from "@/components/FooterPage"
import Header from "@/components/Header"


const page = () => {
  return (
    <>
        <Header />
        <div className="container px-6 py-12 md:py-20 md:px-50">
        <CustomerCarePage/>
        <FooterPage/>
        </div>
    </>
  )
}

export default page
