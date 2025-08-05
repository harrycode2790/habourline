import FooterPage from '@/components/FooterPage'
import Header from '@/components/Header'
import LocationPage from '@/components/LocationPage'


const locationPage = () => {
  return (
    <>
      <Header backgroundColor='[#1019C2]' textColor='white' hoverColor='blue-400' imageUrl='/images/logoW.png' />
      
      <LocationPage />
      <div className="container px-6 py-12 md:py-20 md:px-50">
         <FooterPage/>   
      </div>
    </>
  )
}

export default locationPage
