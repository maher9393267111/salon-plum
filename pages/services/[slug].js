import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { getDocBySlug} from '@/utils/firebase/getData';
import getDocument from '@/utils/firebase/getData';
import parse from 'html-react-parser';
import RelatdBlogs from '../../components/BlogSection/relatedBlogs'
import SliderimagesService from '@/components/BlogSection/sliderimages';

import { useInViewAnimation } from "@/utils/animation/useInViewAnimation";
import { motion } from "framer-motion";
import { parent, slideFromTop } from "@/utils/animation/animations";
import Hero2 from '@/components/hero2/hero2';
const submitHandler = (e) => {
    e.preventDefault()
}




const BlogSingle = ({data , related}) => {
    const router = useRouter()
    const { ref, controls, inView } = useInViewAnimation();

    const { locale, locales, asPath } = useRouter();

    //const BlogDetails = blogs.find(item => item.slug === router.query.slug)

//console.log('related' ,related)



    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={data?.title}
            // {BlogDetails?.title} 
            pagesub={locale === 'sv' ? 'tjänsten' : 'الخدمة'}
            // "blog"
            
            />
            <section
            //   ref={ref}
            
            className="wpo-blog-single-section section-padding">


{/* {inView && ( <> */}

                <div
                     data-aos='flip-left'
                    
                    className="container">


{/* --------slider service images ----- */}









                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image container ">
                                    <div className="entry-media flex   !justify-center ">
                                        <img src={data?.image2?.url ? data?.image2?.url : data?.image?.url}
                                        className=' md:!w-[50%] !w-[75%] !h-[300px] md:!h-[300px] object-cover'
                                    
                                        //    {BlogDetails?.blogSingleImg}
                                         alt="" />
                                    </div>
                                
                                    {data?.slider && <div><SliderimagesService  images={data?.slider}/></div>}

                                   


                                    <h2 className=' text-center my-4'>
                                        {data?.title}
                                     
                                    </h2>

<p dir={locale === 'sv' ? 'lft' : 'rtl'}>
{parse(locale === 'sv' ?  data?.description :data?.descriptionAr)}
</p>



                                
                            </div>
                        </div>
                    </div>
                </div>

</div>

                {/* </> )} */}

            </section>

{/* -------related Blogs with Same Category ----- */}




<RelatdBlogs related={related} />



            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;



BlogSingle.getInitialProps = async (context  ) => {
  

    //console.log('PARAMS ---->>11111', context?.query.slug);
    const data = await  getDocBySlug("blog" ,context.query.slug);
    

    // ----related Blogs---

    const blogs = await  getDocument("blog");
    //console.log("BLLLOGSS" , blogs)
    //blog?.id !== context?.query.slug
    const filterByCat = blogs && blogs.filter((blog)=>{

        //&& blog?.id !== context?.query.slug 
        
      return   blog?.category === data.category  })
    
  console.log('RELATEDDDD🛑🚧🛢🛑🚧🛢🛑🚧🛢',filterByCat);
  //console.log(data)
  
    return {
       data:data,
       related:filterByCat,
    };
  };
  