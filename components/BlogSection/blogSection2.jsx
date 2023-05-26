import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { useRouter } from "next/router";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}




const BlogSection2 = ({data}) => {

    
const { locale, locales, asPath } = useRouter();
    return (
        <section className="wpo-blog-section section-padding  bg-[rgb(249,234,230)]">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 rounded-s-xl">
                        <SectionTitle MainTitle={'Latest News & Blog'} />
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {data && data?.length > 0 &&   data?.map((blog, bl) => (
                            
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <Link href={`blog-single-fullwidth/${blog?.id}`}>
                                <div className="wpo-blog-item !h-[310px]">
                                    <div className="wpo-blog-img !h-[80%] object-cover ">
                                        <img
                                        className=" !h-full"
                                        src={blog?.image} alt="" />
                                    </div>

{/* ---Category btn---- */}
<div className="relative">

    <p className=" absolute bg-[rgb(251,186,55)] hover:bg-[rgb(251,166,55)] transition-all font-semibold  duration-300 text-white rounded-xl p-2 top-[-5rem] left-3  cursor-pointer"> {blog?.category}</p>
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
            </div>
        </section>
    );
}

export default BlogSection2;