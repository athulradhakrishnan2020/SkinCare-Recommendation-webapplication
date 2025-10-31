
function HeroSection() {
    return (
        <>
        <section className="flex flex-col md:flex-row items-center justify-between rounded-lg px-8 py-16 bg-gray-50">
            <div className="md:w-1/2 mb-8 md:mb-0  bg-white/30 backdrop-blur-xl ">
                <p className="text-lg text-black">
                    Taking care of your skin should not be seen as an indulgence reserved for special occasions, but as an everyday commitment to your overall well-being. Just like eating nutritious food or exercising, skincare is a habit that protects, nourishes, and sustains your body’s largest organ. When you make skincare a lifestyle, you’re not just working toward a temporary glow — you’re building long-term health, confidence, and resilience for your skin. True beauty lies in consistency, and healthy skin is a reflection of the daily choices you make to respect and care for yourself.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                src="/photoAD.jpg"
                alt="Skincare"
                className="w-full max-w-md rounded-lg shadow-lg"
                />
            </div>
        </section>
        </>
        );
}

export default HeroSection;