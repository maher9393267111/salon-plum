import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero2 from '../components/hero2/hero2';
import Features from '../components/Features/Features';
import ServiceSection2 from '../components/ServiceSection2/ServiceSection2';
import FunFact2 from '../components/FunFact2/FunFact2';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import TeamSection from '../components/TeamSection/TeamSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/footer/Footer';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogSection from '../components/BlogSection/BlogSection';
import BlogSection2 from '../components/BlogSection/blogSection2';
import { useInViewAnimation } from "@/utils/animation/useInViewAnimation";
import { motion } from "framer-motion";
import { parent, slideFromTop } from "@/utils/animation/animations";
import AddComment from '@/components/addComment/index';



import getDocument from '@/utils/firebase/getData';

const HomePage2 = ({data}) => {

    // const { ref, controls, inView } = useInViewAnimation();


    return (
        <div
        // ref={ref}
        >
       
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero2 />
            



      

       <div className='bg-[rgb(249,234,230)]'>

       
            <BlogSection2
             
                
                data={data}/>


</div>



{/* -----comments slider ---- */}

<Testimonial/>


<AddComment />


            {/* <Features fClass={'wpo-features-section-s2'}/> */}
            {/* <ServiceSection2 />
            <FunFact2 />
            <ProjectSection />
            <TeamSection />
            <Appointment />
            <Testimonial /> */}
            {/* <BlogSection /> */}
            <Footer />
            <Scrollbar/>
        </div>
    )
};
export default HomePage2;


// export async function getStaticProps({ locale }) {

//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["common","home"])),
            
//         },
//     };
// }






HomePage2.getInitialProps = async (context ,locale  ) => {
  
    //console.log('Query', context?.query?.country)
    const data = await getDocument("blog");
    
  
  
  
    return {
      data:data,
    
    };
  };
  