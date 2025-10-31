function Card() {
    return (
        <>
        <div className="bg-white rounded-lg">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Products purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative">
        <img src="/src/assets/products-image/products3.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                lucinox facewash
                </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">salicylic acid</p>
            </div>
            <p className="text-sm font-medium text-gray-900">₹469</p>
        </div>
        </div>
        <div className="group relative">
        <img src="/src/assets/products-image/products1.jpg" alt="products image" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                lucinox moisturizer
                </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Aloe Vera</p>
            </div>
            <p className="text-sm font-medium text-gray-900">₹259</p>
        </div>
        </div>
        <div className="group relative">
        <img src="/src/assets/products-image/products2.jpg" alt="Front of men&#039;s Basic Tee in dark gray." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                lucinox sunscreen
                </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">50+++ sun protection</p>
            </div>
            <p className="text-sm font-medium text-gray-900">₹259</p>
        </div>
        </div>
        <div className="group relative">
        <img src="/src/assets/products-image/products3.jpg" alt="Front of men&#039;s Artwork Tee in peach with white and brown dots forming an isometric cube." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                lucinox serum
                </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">vitamin c glow</p>
            </div>
            <p className="text-sm font-medium text-gray-900">₹499</p>
        </div>
        </div>
    </div>
    </div>
</div>

        </>
    );
}
export default Card;


