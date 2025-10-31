import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-Section";
import Card from "../components/Card";


function Home() {
    
    return (
        <>
        <div className="home-page bg-custom min-h-screen flex flex-col backdrop-blur-sm p-2 w-full">
            <Navbar/>
            <div>
                <h2>Welcome to Lucinox,</h2>
                <h1 className=" head-title mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-yellow-900 md:text-5xl lg:text-6xl">
                Healthy skin isn’t a luxury, it’s a lifestyle.
                </h1>
            </div>
            <HeroSection/>
            <section className="popular-product-section">
                <h2 className="text-5xl font-bold mb-4 text-orange-400 text-center mt-6">Our Popular Products</h2>
                <div className="card-container">
                    <Card/>
                    
                </div>
            </section>
        </div>
        </>
    );
}
export default Home;