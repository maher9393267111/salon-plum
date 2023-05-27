import { Carousel } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const marks = {
    10: {
      style: { color: 'red' },
      label: (
        <div>
          10
        </div>
      )
    }
  }


const Related = ({related}) => { 


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
  
  






<div className=' mt-6 mb-4'>


  {/* -------title---- */}

<div>
  <h2 className=' text-3xl font-bold text-center !mb-[40px]  !m-auto'>Related Posts </h2>
</div>


  <Carousel autoplay
  dots={true}
  dotPosition='left'

  max={100} defaultValue={30} marks={marks}
  
  >
    {
        related?.map((item)=>{
            return (
                <div className=' !w-full text-center'>
                    <Link
                    className=' w-full'
                    href={`/blog-single-fullwidth/${item?.id}`}>
                    <img className=' max-h-[300px] text-cemter w-full  object-cover ' src={item?.image} alt="" />

                    <div className='content my-4  w-full'>

<h2 className=' font-bold text-3xl'>{item?.title}</h2>
<p className='cat text-xl  bg-blue-500 m-auto text-white font-bold rounded-3xl mt-2 w-[55px] '>
  {/* {item?.category} */}
  
  {splitCat(item?.category)}
  
  </p>


                    </div>
                    </Link>
                </div>

            )
        })
    }
  </Carousel>

  </div>
}
// )
;
export default Related;