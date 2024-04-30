import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Section = () => {
    const section = useLoaderData()
    const {image,item_name,subcategory_name,description,price,rating,processing} = section

    
  
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
                
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">{item_name}</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600"></p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="fade-up"data-aos-duration='1000'>
                <div>
            
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">{subcategory_name}</h3>
                    <p className="mt-3 text-lg dark:text-gray-600">{description}</p>
                    <div className="mt-12 space-y-12">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Customisation: {}</h4>
                                {/* <p className="mt-2 dark:text-gray-600">
                                    {
                                        Customize === 'yes'?'Explore our collection of customizable ceramics, where you can add a personal touch to your favorite pieces. From elegant porcelain vases to intricate ceramic wall art, elevate your space with unique designs tailored to your preferences.':"Discover our range of exquisite non-customizable ceramics, meticulously crafted by skilled artisans. Whether it's rustic clay mugs or artisan stoneware plates, each piece boasts impeccable craftsmanship and timeless beauty, ready to adorn your home with elegance and charm."
                                    }
                                </p> */}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Price</h4>
                                <p className="mt-2 dark:text-gray-600">{price}$</p>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">{}</h4>
                                <p className="mt-2 dark:text-gray-600">Processing Time: {processing}</p>
                            </div>
                            <button type="button" className=" text-yellow-400 text-sm flex items-center ml-64 p-1 space-x-1.5">
			<FaStar></FaStar>
				<span>{rating}</span>
			</button>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                    <img  src={image} alt="" className="mx-auto w-96 rounded-lg shadow-lg dark:bg-gray-500" />
                    
                    
                </div>
                
            </div>
            
            
        </div>
    </section>
    );
};

export default Section;