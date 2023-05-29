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

    const parts = cat.split("&&");
    const swedishText = parts[0]; // "cat_one"
    const arabicText = parts[1]; // "arabicCat_one"

    if (locale === "sv") {
        return swedishText;
      } else {
       return arabicText;
      }


}







    

    return (
        <section

        
        ref={ref}
        
        className="wpo-blog-section section-padding   bg-[rgb(249,234,230)]">


            <div
            
 

            className="container bg-[rgb(249,234,230)]">
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
                        {data && data?.length > 0 &&   data?.slice(0,12).map((blog, bl) => (
                            
                            <div className="col col-lg-4 col-md-6 col-12 " key={bl}>
                                <Link href={`services/${blog?.id}`}>
                                <div className="wpo-blog-item !h-[310px] hover:shadow-lg transition-all  duration-300">
                                    <div className="wpo-blog-img !h-[80%]  ">
                                        <img
                                        className=" !h-full object-cover"
                                        src={blog?.image?.url} alt="" />
                                    </div>

{/* ---Category btn---- */}
<div className="relative">

    <p className=" absolute bg-[rgb(251,186,55)] min-w-[75px] hover:bg-[rgb(251,166,55)] transition-all font-semibold  duration-300 text-white rounded-xl p-2 top-[-5rem] left-3  cursor-pointer"> 



    {/* {blog?.category} */}
   { splitCat(blog?.category)} 
    
    </p>
</div>


{/* ---content--- */}

<div className=" ml-4 mt-2">
<p className=" font-semibold font-serif">{locale==="sv" ? blog?.title : blog?.titleAr }</p>

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