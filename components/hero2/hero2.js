import React ,  {useEffect ,useState}from "react";
import Slider from "react-slick";
import Link from 'next/link'
import { useInViewAnimation } from "@/utils/animation/useInViewAnimation";
import { motion } from "framer-motion";
import { parent, slideFromTop ,slideFromLeft , slideFromRight} from "@/utils/animation/animations";
import { useRouter } from "next/router";
import { db } from "@/utils/firebase";
import { collection} from 'firebase/firestore'
import {  useCollection } from "react-firebase-hooks/firestore";


const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true
};

const Hero2 = () => {




    const [value, loading, error] = useCollection(
        collection(db, 'hero'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      )




    const { ref, controls, inView } = useInViewAnimation({delay: 100});

    const { locale, locales, asPath } = useRouter();
    







    return (
        <section className="wpo-hero-slider bg-[rgb(249,234,230)] !h-[388px] md:!max-h-[700px]">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>


                    {value?.docs?.map((doc) => (
              <React.Fragment key={doc.id}>



                        <div 
                       
                        
                        className="hero-slide !h-[377px] md:!h-[600px]">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${
                                 doc?.data().image?.url
                                //  '/images/my/slider-1.jpg'
                                // '/images/slider/slide-2.jpg'
                          //  'https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            })
                                ` }}>
                                <div className="gradient-overlay"></div>
                                <div 
                                 data-aos="fade-up-right"
                                
                                className="container" dir="">

{/* <div 
// data-aos="fade-up-right"

className=" absolute  left-[12%] top-[3%] h-full">
<img
className="h-full object-cover "

src={ doc?.data().image2?.url} alt="" />

</div> */}







                                    <div className="slide-content ">
                                        <div className="slide-title w-1/2 md:w-[85%]">
                                            <h2 className="">
                                            {locale === 'sv' ? 'Välkommen till Noura beauty center' : 
                                            'مركز نورا بيوتي سنتر للتجميل والليزر'}
                                           
                                                {/* Expert Plumbing Service You Can Trust. */}
                                            </h2>


{/* ----stars---- */}
<div className="flex flex-wrap my-6">
    <img className=" md:w-[55px] w-[35px] h-[35px] md:h-[55px]" src="https://cdn-icons-png.flaticon.com/128/9554/9554194.png" alt="" />
    <img className=" md:w-[55px] w-[35px] h-[35px] md:h-[55px]" src="https://cdn-icons-png.flaticon.com/128/9554/9554194.png" alt="" />
    <img className="md:w-[55px] w-[35px] h-[35px] md:h-[55px]" src="https://cdn-icons-png.flaticon.com/128/9554/9554194.png" alt="" />
    <img className="md:w-[55px] w-[35px] h-[35px] md:h-[55px]" src="https://cdn-icons-png.flaticon.com/128/9554/9554194.png" alt="" />
    <img className=" md:w-[55px] w-[35px] h-[35px] md:h-[55px]" src="https://cdn-icons-png.flaticon.com/128/9554/9554194.png" alt="" />
</div>


                                        </div>
                                        <div className="slide-text">
                                            <p className=" w-2/3 text-sm md:w-[80%] md:block font-">
                                                
                                            {locale === 'sv' ? 'Noura beauty center  erbjuder  skönhetsvård  med hög  kvalité där kvinnan står i fokus    .Vår målsättning är att du som är intresserad av hudvård, ditt utseende och skönhet ska få alla dina behov tillgodosedda.' : 
                                            'كل ماتحتاجين لجمالك بمكان واحد  يقدم مركز نورا للتجميل والليزر  أفضل الخدمات للعناية بجمالك.  لدينا احدث التقنيات وافضل النتائج شعارنا أسعادكم وأرضائكم  أبداعنا لا حدود له… نتقن فنبدع …. فنتألق..'}

                                                {/* There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. */}
                                                
                                                </p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns relative mb-6">
                                            <Link href="/appointment" className="theme-bt hidden md:inline-block theme-bn py-[10px] px-[24px] md:py-[18px] md:px-[40px] rounded-lg hover:text-none !text-(rgb(109, 109, 109)) !bg-yellow-300 font-bold shadow-xl ">
                                                Book Online

                                                


                                                
                                                </Link>
                                        </div>
                                    </div>


{/* -------image2---- */}


<div 
// data-aos="fade-up-right"

className=" absolute  left-[66%] top-[3%] h-full">
<img
className="h-full object-cover "

src={ doc?.data().image2?.url} alt="" />

</div>







                                </div>
                                
                                
                                
                            </div>
                        </div>




</React.Fragment>

                    ))}
                     
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero2;