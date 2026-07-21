import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Test_Section from "../components/test_sction";
import Footer from "../components/Footer";
const HomePage = () =>{
return (
    <>
      
        <TopBar/>
        <Hero />
        <div className="background">
        <Test_Section/>
        <Footer/>
        </div>
    </>
)}

export default HomePage;