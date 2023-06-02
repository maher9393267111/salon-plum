import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { useRouter } from "next/router";
import { useInViewAnimation } from "@/utils/animation/useInViewAnimation";
import { motion } from "framer-motion";
import { parent, slideFromTop ,slideFromLeft , slideFromRight} from "@/utils/animation/animations";

import { useState,useEffect } from "react";
// import AOS from "aos";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}




const BlogSection2 = ({data}) => {

    const { locale, locales, asPath } = useRouter();
    const { ref, controls, inView } = useInViewAnimation({delay: 100});
// ----split category &&---

const splitCat =(cat)=>{


    if (cat){

    const parts = cat?.split("&&");
    const swedishText = parts[0]; // "cat_one"
    const arabicText = parts[1]; // "arabicCat_one"

    if (locale === "sv") {
        return swedishText;
      } else {
       return arabicText;
      }

    }




}







    

    return (
        <section

        
        ref={ref}
        
        className="wpo-blog-section section-padding  lg:mt-[100px] xl:mt-[150px]  bg-[rgb(249,234,230)]">


            <div
            
 

            className=" container bg-[rgb(249,234,230)]  mt-[40px] sm:mt-0">
                <div className="row align-items-center justify-content-center">
                    <div
                     data-aos="fade-up-right"
                    className="col-lg-6 rounded-s-xl">
                         <SectionTitle 
                        //  MainTitle={'Latest News & Blog'}  
                       MainTitle= {locale === 'sv' ? 'Tjänster som tillhandahålls' : 'الخدمات المقدمة'}
                        
                        />
                    </div>
                </div>
                {/* {inView && ( */}
            <div
             data-aos='flip-left'
            // as={motion.div}
            // initial="hidden"
            // variants={slideFromRight}
            // animate={controls}
            // custom={false}
                
                
                className="wpo-blog-items !mb-[200px]">
                    <div className="row">
                        {data && data?.length > 0 &&   data?.map((blog, bl) => (
                            
                            <div className="col col-lg-4 col-md-6 col-12 " key={bl}>
                                <Link href={`services/${blog?.id}`}>
                                <div className="wpo-blog-item !h-[350px] hover:shadow-lg transition-all  duration-300">
                                    <div className="wpo-blog-img !h-[90%]  ">
                                        <img
                                        className=" !h-full object-cover"
                                        src={blog?.image?.url} alt="" />
                                    </div>

{/* ---Category btn---- */}
<div className="relative">


{/* {blog?.category !=='' &&    */}
    <p className=" absolute bg-[#d2b36a] hover:bg-[#d2b35a] !min-w-[140px]  transition-all font-semibold  duration-300 text-white text-center !text-2xl rounded-xl p-[12px] top-[-5rem] left-[2.75rem]  cursor-pointer"> 


{blog?.title}
    
   {/* { splitCat(blog?.category)}  */}
    
    </p>


                         {/* } */}


{/* ----price--- */}


 {/* {blog?.price  &&  
<p className=" absolute bg-[#d2b36a] hover:bg-[#d2b35a] !min-w-[100px]  transition-all font-semibold  duration-300 text-white text-center !text-xl rounded-xl p-[12px] top-[-5rem] right-[1.7rem]  cursor-pointer"> 


{ blog?.price }
    
  
    
    </p>

                        } */}


</div>


{/* ---content--- */}

<div className=" ml-4 mt-2">
<p className=" font-semibold text-xl">
    {/* {locale==="sv" ? blog?.title : blog?.titleAr } */}
    
    {blog?.price}
    </p>

</div>


                                   
                                </div>
                                </Link>
                            </div>
                            
                        ))}
                    </div>
                </div>
                {/* )} */}

            </div>




        </section>
    );
}

export default BlogSection2;