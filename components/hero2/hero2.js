import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import { useInViewAnimation } from "@/utils/animation/useInViewAnimation";
import { motion } from "framer-motion";
import { parent, slideFromTop ,slideFromLeft , slideFromRight} from "@/utils/animation/animations";
import { useRouter } from "next/router";
import { db } from "@/utils/firebase";
import {doc , collection} from 'firebase/firestore'
import { useDocumentData , useCollection } from "react-firebase-hooks/firestore";

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

  




    const { ref, controls, inView } = useInViewAnimation({delay: 100});

    const { locale, locales, asPath } = useRouter();
    

    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${
                                   '/images/my/slider-1.jpg'
                                // '/images/slider/slide-2.jpg'
                          //  'https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            })
                                ` }}>
                                <div className="gradient-overlay"></div>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2 className="">
                                            Välkommen till Noura beauty centers
                                                {/* Expert Plumbing Service You Can Trust. */}
                                                </h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>
                                                
                                            {locale === 'sv' ? 'Noura beauty center erbjuder skönhetsvård med hög kvalité där kvinnan står i fokus.Vår målsättning är att du som är intresserad av hudvård, ditt utseende och skönhet ska få alla dina behov tillgodosedda.' : 
                                            'يقدم مركز نورا للتجميل رعاية تجميل عالية الجودة حيث تكون المرأة هي التركيز.هدفنا هو أن يكون لكل من يهتم بالعناية بالبشرة ومظهرك وجمالك كل احتياجاتك'}

                                                {/* There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. */}
                                                
                                                </p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/appointment" className="theme-bt theme-bn py-[18px] px-[40px] rounded-lg hover:text-none !text-(rgb(109, 109, 109)) !bg-yellow-300 font-bold shadow-xl">
                                                Book Online

                                                


                                                
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${
                                // '/images/slider/slide-3.jpg'
                                '/images/my/slider-1.jpg'
                           // 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            })` 
                                
                                }}>
                                <div className="gradient-overlay"></div>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="slide-title  ">
                                            <h2
                                            className="  "
                                            
                                            >
                                            Välkommen till Noura beauty center
                                                {/* Expert Plumbing Service You Can Trust. */}

                                            </h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>


                                            {locale === 'sv' ? 'Noura beauty center erbjuder skönhetsvård med hög kvalité där kvinnan står i fokus.Vår målsättning är att du som är intresserad av hudvård, ditt utseende och skönhet ska få alla dina behov tillgodosedda.' : 
                                            'يقدم مركز نورا للتجميل رعاية تجميل عالية الجودة حيث تكون المرأة هي التركيز.هدفنا هو أن يكون لكل من يهتم بالعناية بالبشرة ومظهرك وجمالك كل احتياجاتك'}

                   



{/* arabic-- */}

                                                {/* There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. */}
                                                </p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/appointment" className="theme-bt theme-bn py-[18px] px-[40px] rounded-lg hover:text-none !text-(rgb(109, 109, 109)) 
                                            bg-(#d2b36a)
                                             font-bold shadow-xl">Book Online</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${
                                '/images/my/slider-1.jpg'
                                // '/images/slider/slide-2.jpg'
                            // 'https://images.pexels.com/photos/234220/pexels-photo-234220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            })
                                ` }}>
                                <div className="gradient-overlay"></div>
                                <div 
                                
                                ref={ref}
                                
                                className="container">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2 className="">
                                                {/* Expert Plumbing Service You Can Trust. */}
                                                Välkommen till Noura beauty center  
                                                </h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>
                                            {locale === 'sv' ? 'Noura beauty center erbjuder skönhetsvård med hög kvalité där kvinnan står i fokus.Vår målsättning är att du som är intresserad av hudvård, ditt utseende och skönhet ska få alla dina behov tillgodosedda.' : 
                                            'يقدم مركز نورا للتجميل رعاية تجميل عالية الجودة حيث تكون المرأة هي التركيز.هدفنا هو أن يكون لكل من يهتم بالعناية بالبشرة ومظهرك وجمالك كل احتياجاتك'}

                                                {/* There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. */}

                                            </p>
                                        </div>
                                        <div className="clearfix"></div>




                                        {/* <div
                                         className="slide-btns">
                                            <Link href="/appointment" className="theme-bt theme-bn py-[18px] px-[40px] rounded-lg hover:text-none !text-(rgb(109, 109, 109)) !bg-yellow-300 font-bold shadow-xl">Book Online</Link>



                                        </div> */}


{inView && (

    <motion.div
       as={motion.div}
            initial="hidden"
            variants={slideFromRight}
            animate={controls}
            custom={true}
    
    >
      <div

 data-aos="fade-up-right"
                                         className="slide-btns ">
                                            <Link href="/appointment" className="theme-bn py-[18px] px-[40px] rounded-lg hover:text-none !text-(rgb(109, 109, 109)) !bg-yellow-300 font-bold shadow-xl">Book Online</Link>



                                        </div>



    </motion.div>
         
)}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero2;