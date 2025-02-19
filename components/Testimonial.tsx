export default function Testimonial() {
    return (
        <main className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 h-auto">
          
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-center pt-16 lg:pt-36">
                    Customer Testimonial
                </h1>
            </div>

            <div className="flex justify-center pt-4 lg:pt-6">
                <p className="text-sm lg:text-base text-center max-w-[900px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 lg:pt-20">
                <img src="jamescard.png" alt="James" className="w-full object-cover" />
                <img src="erickcard.png" alt="Erick" className="w-full object-cover" />
                <img src="stephencard.png" alt="Stephen" className="w-full object-cover" />
            </div>
        </main>
    );
}
