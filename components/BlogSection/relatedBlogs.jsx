import { Carousel } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Slider from "react-slick";




const Related = ({related}) => { 


  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};






  const { locale, locales, asPath } = useRouter();
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

<div className=' my-[40px]'>

<Slider {...settings}>
                                {related.map((tesmnl, tsm) => (
                                    <div className="testimonials-item ml-2" key={tsm}>
                                       
                                        <div className="testimonials-item-bottom">
                                            <div className="testimonials-item-bottom-author">
                                                <img
                                                className=' !w-[100%] object-cover  !h-[100%]'
                                                src={tesmnl?.image?.url} alt="" />
                                            </div>
                                            <div className="testimonials-item-bottom-author-text relative">
                                                <h3 className='  text-xl font-semibold my-2 ml-6 '>{tesmnl.title}</h3>
                                                <span className=' font-semibold my-2 ml-6 bg-[rgb(251,186,55)] min-w-[75px] hover:bg-[rgb(251,166,55)] transition-all absolute text-center text-xl  duration-300 text-white rounded-xl p-2 top-[-5rem] left-3  cursor-pointer  '>{splitCat(tesmnl.category)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>





</div>




)
}

;
export default Related;




{/*  */}