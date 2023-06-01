import React from "react";
import Link from "next/link";
import Services from "../../api/service";
import Projects from "../../api/project";
import { useRouter } from "next/router";
const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {

  const { locale, locales, asPath } = useRouter(); 


  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer       font-sans    font-A">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img
                  className=" w-[160px] h-[100px] object-cover rounded-[50%] "
                    src=
                    // "/images/my/3.jpg"
                     '/images/my/log-white.jpg'

                    alt="blog"
                  />
                </div>
                {/* <p>
                  Management Plumbing includes a broad range of activities, and
                  the many firms and their members often define these practices.
                </p> */}
                <ul>
                  <li>
                    <a onClick={ClickHandler} href="https://www.facebook.com/Noura-beauty-center-%D9%85%D8%B1%D9%83%D8%B2-%D9%86%D9%88%D8%B1%D8%A7-%D9%84%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84-%D9%88%D8%A7%D9%84%D9%84%D9%8A%D8%B2%D8%B1-121459684279489/">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="https://www.instagram.com/noura_beauty_center">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="mailto:Noura.center.beauty@gmail.com"
                    // "mailto:nourabeuatycenter96r@gmail.com"
                    >
                      <i className="ti-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title text-cente">
                  <h3>
                  {locale === 'sv' ? 'Info' : 'التواصل'}
                    {/* Contact */}
                     </h3>
                </div>
                <div className="contact-ft  ">
                  <ul>
                    <li>
                      <i className="fi flaticon-location"></i>
                      {/* 7 Green Lake
                      Street Crawfordsville, IN 47933 ,Swedeen */}
                      {/* Drottninggatan, 212 11 Malmö, Sverige */}

                      Drottninggatan 1D, 21211 Malmö
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>
                      0700773332 
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>
                      {/* nourabeautycenter96@gmail.com */}
                      Noura.center.beauty@gmail.com
                    </li>
                  </ul>

<div>
<div>
  <a href="https://www.google.com/maps/place/Noura+Beauty+Center+-+%D9%86%D9%88%D8%B1%D8%A7+%D8%A8%D9%8A%D9%88%D8%AA%D9%8A+%D8%B3%D9%86%D8%AA%D8%B1%E2%80%AD/@55.6077785,13.0208034,18z/data=!4m6!3m5!1s0x4653a3295b57fe01:0xb0c98bbfb072086f!8m2!3d55.6072997!4d13.0204552!16s%2Fg%2F11nxhkdwfr?entry=ttu">
  <img src="https://axelsonsspa.se/media2/public_html/2021/03/Axelsons-SPA-Malmo%CC%88-karta-300x157.png" alt="" />
  </a>
</div>
</div>


                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title text-cente">
                  <h3>
                  {locale === 'sv' ? 'Tjänster' : 'الخدمات'}
                    {/* Services */}
                     </h3>
                </div>
                <ul dir="lft" className=" text-cente !list-disc ">
                   {/* {Services.slice(0, 5).map((service, srv) => (
                    <li className=" cursor-pointer" key={srv}>
                       <Link
                        onClick={ClickHandler}
                        href="/service/[slug]"
                        as={`/service/${service.slug}`}
                      > 
                        {service.sTitle}
                     </Link> 
                    </li>
                  ))}  */}

<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Hydrafacial'  : 'هايدروفيشال تنظيف بشرة عميق'}


  </li>





<li className="cursor-pointer   text-[16px]" >

{locale === 'sv' ? 'Bb glow' : 'توحيد لون البشره'}
</li>


<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Vitamen boost' : 'تنظيف بشره مع ابر فيتامين للبشره'}
</li>



<li className="cursor-pointer   text-[16px]" >

{locale === 'sv' ? 'Laser carbon peeling' : 'تقشير ليزري بالكربون '}
</li>


<li className="cursor-pointer   text-[16px]" >

{locale === 'sv' ? 'Tandblekning' : 'تبييض الاسنان بالليزر ' }
</li>

<li className="cursor-pointer   text-[16px]" >

{locale === 'sv' ? 'Microneedling' : 'مايكرونيدلينغ '}
</li>


<li className="cursor-pointer   text-[16px]" >

{locale === 'sv' ? 'Lash lift' : 'قلب رموش'}
</li>

<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Brow lift' : ' رفع حواجب'}

</li>

<li className="cursor-pointer   text-[16px]" >

{locale === 'sv' ? 'Microblading' : 'تاتو حواجب شعره '}
</li>

<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Naglar, Spa manikyr' : 'اضافر واعتناء باليدين'}

</li>


<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Kemisk peeling' : 'تقشير الكيماوي '}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Dermapen' : 'ديرمابين للبشره'}

</li>




<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Makeupartist' : 'مكياج '}

</li>




<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'kritsall peeling' : ' تقشير الكريستالي للبشرة'}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Tatueringsborttagning' : 'ازالة التاتو بالليزر'}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Malesma,pigmentfläckar behandling' : 'ازالة التصبغات والنمش '}

</li>






<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Fett frysning' : 'تجميد الدهون'}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Hifu till ansikte ' : 'هايفو للوجه'}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Insculp / Himet' : 'جهاز شد الجسم '}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'MS' : 'جلسة تكسير الدهون ونحت الجسم'}

</li>

<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Klippning' : 'قص للشعر '}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Hårfärg' : 'صبغات للشعر'}

</li>




<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Hårbehandling ' : 'معالجة الشعر '}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Olaplix behandling' : 'معالج الشعر بالاولابلكس '}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Protien hår behandling' : 'علاج فرد الشعر بالبروتين'}

</li>



<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Botox hår behandling' : 'علاج الشعر بالبوتوكس '}

</li>


<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Kristall hår behandling' : 'علاج الشعر بالكريستال'}

</li>


<li className="cursor-pointer   text-[16px]" >
{locale === 'sv' ? 'Collagen hår behandling ' : 'علاج الشعر بالكولاجين'}

</li>










                </ul>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>
                    {/* Bilder */}
                    {locale === 'sv' ? 'Bilder' : 'الصور'}
                  </h3>
                </div>
                <ul className="d-flex">
                  {Projects.slice(0, 6).map((project, srv) => (
                    <li key={srv}>
                      {/* <Link
                        onClick={ClickHandler}
                        href="/project/[slug]"
                        as={`/project/${project.slug}`}
                      > */}
                        <img className=" w-[100px] h-[100px] object-cover lg:w-[77px] lg:h-[77px]" src={project.pImg} alt="" />
                      {/* </Link> */}
                    </li>
                  ))}
                </ul>
              </div>



{/* --------map Loacation----- */}
<div>


{/* <h1>Malomo Loacation</h1> */}

{/* <div>
  <a href="https://www.google.com/maps/place/Noura+Beauty+Center+-+%D9%86%D9%88%D8%B1%D8%A7+%D8%A8%D9%8A%D9%88%D8%AA%D9%8A+%D8%B3%D9%86%D8%AA%D8%B1%E2%80%AD/@55.6077785,13.0208034,18z/data=!4m6!3m5!1s0x4653a3295b57fe01:0xb0c98bbfb072086f!8m2!3d55.6072997!4d13.0204552!16s%2Fg%2F11nxhkdwfr?entry=ttu">
  <img src="https://axelsonsspa.se/media2/public_html/2021/03/Axelsons-SPA-Malmo%CC%88-karta-300x157.png" alt="" />
  </a>
</div> */}

</div>




            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                Copyright &copy; 2023 nourabeautycenter {" "}
                <Link onClick={ClickHandler} href="/">
                  {/* wpOceans */}
                </Link>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
