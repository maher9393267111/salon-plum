import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import AppointmentS2 from '../../components/AppointmentS2/AppointmentS2';
import Footer from '../../components/footer/Footer';
import { useRouter } from 'next/router';


const Appointment =() => {
    const { locale } = useRouter();
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={locale === 'sv' ? 'Tidsbokning' : 'الحجوزات'} pagesub={locale === 'sv' ? 'Tidsbokning' : 'الحجوزات'}/> 
            <AppointmentS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Appointment;
