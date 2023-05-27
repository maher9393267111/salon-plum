

import React from 'react'
// import { langs } from '../../utils';
import Link from 'next/link';
import { useTranslation ,withTranslation } from 'next-i18next';
import { useState
 } from 'react';

import { usePathname } from 'next/navigation';

import { langs } from '../../utils';

import { useRouter } from 'next/router';


const HeaderTopbar = () => {

    
    const pathname = usePathname();
    
    const { i18n ,t } = useTranslation("home");
    const { locale, locales, asPath } = useRouter();
console.log('locale' ,locale)
    const currentLocale = i18n.language;
    console.log('cureenttt' ,currentLocale);

    const handleChange = (event) => {
        console.log('language' , event.target.value)
        setLanguage(event.target.value);
        i18n.language === language 
        console.log(i18n.language, '???')
      };

      

const [language, setLanguage] = useState(currentLocale);


    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i><img src='/images/icon/1.png' alt=""/></i>Sun - Fri   ||   8:00 - 7:00</li>
                             {/* {locale} */}


                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                            {t("home")}
                                <li><a legacyBehavior href="tel:+6494461709"><i><img src='/images/icon/2.png' alt=""/></i> +00 56 98 46</a></li>
                                {/* <li className='lan-sec'>
                                    <select
                                    value={language}
                                    
                                    onClick={ 
                                        handleChange 
                                    }
                                    
                                    name="" id="">
                                        <option value="en">English</option>
                                        <option value="ar">Spain</option>
                                        <option value="sw">France</option>
                                        
                                    </select>
                                </li> */}


<li className='lan-sec'>

   {langs?.map((link) => (
                              <Link
                                  key={link.name}
                                   href={pathname}
                                  className='block px-4 py-3 mx-2 rounded-md text-sm md:text:lg text-gray font-medium capitalize transition-colors duration-300 transform hover:bg-cyan'
                                  locale={link.locale}
                                  onClick={() => {
                                     // document.dir = link.dir;
                                    //   setOpenHamburger(
                                    //       (prevState) => !prevState
                                    //   );
                                      //i18n.changeLanguage(link.locale);
                                      i18n.language === link.name

                                  }}
                              >
                                  {link.name}
                              </Link>
                          ))
                                }


</li>



                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default  HeaderTopbar
// export default withTranslation("common")(HeaderTopbar);