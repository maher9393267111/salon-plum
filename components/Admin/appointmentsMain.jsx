import React from 'react'
import AdminLayout from './AdminLayout'
import { message, Table } from "antd";
import { UpdateAppointmentStatus } from '@/utils/firebase/apiCalls/appointments';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../shared/loader';
import axios from 'axios';
import Router from 'next/router'

export default function AppointmentsMain({ data, isProfile = false }) {


  const [loading, setLoading] = useState(false)


  //const user = JSON.parse(localStorage.getItem("user"));



  const onUpdate = async (id, status ,data) => {
    try {
      setLoading(true)
      const response = await UpdateAppointmentStatus(id, status);

      // the send msg to current user tell him if  appointment status with message

      const dataform = {
        name: data?.fullName,
        email: data?.email,
        status: status,
        day:data?.day,
        time:data?.time
      }




      const res = await axios.post('/api/sendNotification', dataform)

      //console.log('response' , res?.data);

      // if(res.data?.message){
      // toast.success(res.data?.message);


      // }



      if (response.success && res.data?.message) {
        toast.success(response.message);
        

Router.reload(window.location.pathname);


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
      title: "name",
      dataIndex: "userName",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "message",
      dataIndex: "message",
    },
    {
      title: "Booked At",
      dataIndex: "bookedOn",
    },
    {
      title: "service",
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
        if (record.status === "pending" && !isProfile) {
          return (
            <div className="flex gap-1">
              <span className="underline cursor-pointer"
                onClick={() => onUpdate(record.id, "cancelled" ,record)}
              >Cancel</span>
              <span className="underline cursor-pointer"
                onClick={() => onUpdate(record.id, "approved" ,record)}
              >Approve</span>
            </div>
          );





        }
      },



    },





  ];











  return (


    <div>

      {isProfile === true ?
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
