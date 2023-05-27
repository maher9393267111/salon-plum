import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';

const ContactPage =() => {
    const { locale, locales, asPath } = useRouter();
    return(
        <Fragment>
            <Navbar/>
            <PageTitle
             pageTitle={locale === 'sv' ? 'Ta kontakt med oss' : 'تواصل معنا'}
            //  {'Contact Us'}
            
            pagesub=   {locale === 'sv' ? 'Ta kontakt med oss' : 'تواصل معنا'}
            // {'Contact'}
            /> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

