import React from 'react'
import AdminLayout from './AdminLayout'
import { message, Table } from "antd";
import { UpdateAppointmentStatus } from '@/utils/firebase/apiCalls/appointments';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../shared/loader';
import axios from 'axios';

export default function AppointmentsMain({data ,isProfile=false}) {


const [loading,setLoading] =useState(false)


 const user = JSON.parse(localStorage.getItem("user"));



    const onUpdate = async (id, status) => {
        try {
          setLoading(true)
          const response = await UpdateAppointmentStatus(id, status);

// the send msg to current user tell him if  appointment status with message

const data ={
  name:user?.full_name,
  email:'gomemahero@gmail.com',
  status:status
}




const res = await axios.post('/api/sendNotification', data)

//console.log('response' , res?.data);

// if(res.data?.message){
// toast.success(res.data?.message);


// }



          if (response.success  && res.data?.message) {
            toast.success(response.message);
            
           
          } else {
            toast.error(response.message);
          }
          setLoading(false);
        } catch (error) {
          toast.error(error.message);
          setLoading(false);
        }
      };






    const columns = [
        // {
        //   title: "Date",
        //   dataIndex: "date",
        // },
        {
          title: "Time",
          dataIndex: "time",
        },
        {
          title: "Day",
          dataIndex: "day",
        },
    
        {
          title: "Patient",
          dataIndex: "userName",
        },
        {
          title: "Booked At",
          dataIndex: "bookedOn",
        },
        {
          title: "Problem",
          dataIndex: "service",
        },
        {
          title: "Status",
          dataIndex: "status",
        },

      
        {


          title: "Action",
          dataIndex: "action",
          
        
          render: (text, record) => {
            //const user = JSON.parse(localStorage.getItem("user"));
    //&& user.role === "doctor"
            if (record.status === "pending" && !isProfile ) {
              return (
                <div className="flex gap-1">
                  <span className="underline cursor-pointer"
                    onClick={() => onUpdate(record.id, "cancelled")}
                  >Cancel</span>
                  <span className="underline cursor-pointer"
                    onClick={() => onUpdate(record.id, "approved")}
                  >Approve</span>
                </div>
              );





            }
          },
 


        },
      




      ];











  return (
    

<div>

{isProfile === true  ?
 <div>
 <div>


<Table columns={columns} dataSource={data || []} />

</div>
</div> : 

<div>

<AdminLayout>

   
<Table columns={columns} dataSource={data || []} />

</AdminLayout>
  
  </div>
  
  }

   


    </div>

  )

  
  
}
