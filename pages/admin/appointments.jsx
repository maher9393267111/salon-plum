import React from 'react'
import getDocument from "@/utils/firebase/getData";


export default function Appointments({data}) {

  



  return (
    <div>Appintments {data?.length}</div>
  )
}



Appointments.getInitialProps = async (context  ) => {
  
  console.log('Query', context?.query?.country)
  const data = await getDocument("appointments");
  



  return {
    data:data,
  };
};
