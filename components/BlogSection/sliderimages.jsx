import React from 'react'
import Slider from "react-slick";


const settings = {
    dots: true,
    arrows:true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
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


export default function SliderimagesService({images}) {
  return (
    <div>
          



{images ?.length > 3 ?

                            <Slider {...settings}>
                            



{images?.map((image ,index) => (
              <React.Fragment key={index}>
                {/* {JSON.stringify(doc.data())},{' '} */}


                <div className="testimonials-item my-4" >
                                        
                                        <div className="testimonials-item-bottom">
                                            <div className=" ">
                                                <img 
                                                className='h-[300px] object-cover rounded-xl p-2'
                                                src={image?.url} alt="" />
                                            </div>
                                         
                                        </div>
                                    </div>


              </React.Fragment>
            ))}




                            </Slider>

:

<div className=' flex flex-wrap t justify-center mt-2'>

{images?.map((image ,index) => (
              <React.Fragment key={index}>
                {/* {JSON.stringify(doc.data())},{' '} */}


                <div className="testimonials-item p-4  " >
                                        
                                        <div className="testimonials-item-bottom">
                                            <div className=" ">
                                                <img
                                                className='h-[200px] object-cover rounded-xl'
                                                src={image?.url} alt="" />
                                            </div>
                                         
                                        </div>
                                    </div>


              </React.Fragment>
            ))}




</div>

}



                  
    </div>
  )
}
