import React from 'react';
import highlight from '../../src/assets/geraldine-lewa-N_Z91Evs_oM-unsplash.jpg'
import highlight1 from '../../src/assets/loes-klinker-68gJ0ob1qQ4-unsplash.jpg'
import highlight3 from '../../src/assets/oshin-khandelwal-fq839fSNEuo-unsplash.jpg'
import highlight4 from '../../src/assets/peyman-farmani-fECrNXmnZxw-unsplash.jpg'

const Highlight = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
                <h2 className="text-3xl font-thin tracking-tight text-center sm:text-5xl dark:text-gray-900">ARTISRTY IN CLAY BRINGING NATURE  HOME </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Step into the world of our handcrafted pots.</p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                   
                    <div className="">
                        <div className="">
                            
                           
                        </div>
                        <div className="">
                            <div className="">
                           
                            </div>
                            
                        </div>
                        <div className="flex">
                            
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Artisan Pottery Haven</h4>
                                <p className="mt-2 dark:text-gray-600">Discover exquisite handcrafted pottery pieces, from rustic clay mugs to elegant porcelain vases, curated to elevate your home decor.</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                
                    <img src={highlight} alt="" className="w-72 -z-40 mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
            </div>


            <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                   
                   <div className="">
                       <div className="">
                           
                          
                       </div>
                       <div className="">
                           <div className="">
                          
                           </div>
                           
                       </div>
                       <div className="flex">
                           
                           <div className="ml-20 text-start">
                               <h4 className="text-lg font-medium   leading-6 dark:text-gray-900">Pottery Paradise</h4>
                               <p className="mt-2 dark:text-gray-600">Explore our collection of artisan stoneware, majolica, and terra cotta creations, each piece a testament to craftsmanship and beauty.</p>
                           </div>
                       </div>
                   </div>
                 
               </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <img src={highlight1} alt="" className="w-72  mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                </div>
            </div>
       
            

        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                   
                    <div className="">
                        <div className="">
                            
                           
                        </div>
                        <div className="">
                            <div className="">
                           
                            </div>
                            
                        </div>
                        <div className="flex">
                            
                            <div className="ml-20 text-start">
                                <h4 className="text-lg font-medium   leading-6 dark:text-gray-900">Clay Creations Gallery</h4>
                                <p className="mt-2 dark:text-gray-600">Immerse yourself in the world of ceramics with our diverse range of clay-made wonders, including decorative pots, plates, and unique wall art.</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                
                    <img src={highlight3} alt="" className=" w-72 -z-40 mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
            </div>
             
            <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                   
                   <div className="">
                       <div className="">
                           
                          
                       </div>
                       <div className="">
                           <div className="">
                          
                           </div>
                           
                       </div>
                       <div className="flex">
                           
                           <div className="ml-20 text-start">
                               <h4 className="text-lg font-medium   leading-6 dark:text-gray-900">Earth & Fire Pottery Emporium</h4>
                               <p className="mt-2 dark:text-gray-600">Indulge your senses in a world of earthy delights with our handpicked selection of earthenware, wood-fired ceramics, and raku pottery, each piece telling its own story of craftsmanship and tradition.</p>
                           </div>
                       </div>
                   </div>
                 
               </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <img src={highlight4} alt="" className="w-72 mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                </div>
            </div>
            </div>
        
    </section>
    );
};

export default Highlight;