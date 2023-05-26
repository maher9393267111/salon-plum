import React from 'react'
import getDocument from "@/utils/firebase/getData";
import AppointmentsMain from '@/components/Admin/appointmentsMain';


export default function Appointments({data}) {

  



  return (
    <div>

<AppointmentsMain data={data}/>

    </div>
  )
}



Appointments.getInitialProps = async (context  ) => {
  
  console.log('Query', context?.query?.country)
  const data = await getDocument("appointments");
  



  return {
    data:data,
  };
};
