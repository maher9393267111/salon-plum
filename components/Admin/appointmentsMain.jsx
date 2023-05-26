import React from 'react'
import AdminLayout from './AdminLayout'
import { message, Table } from "antd";
import { UpdateAppointmentStatus } from '@/utils/firebase/apiCalls/appointments';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '../shared/loader';

export default function AppointmentsMain({data}) {


const [loading,setLoading] =useState(false)



    const onUpdate = async (id, status) => {
        try {
          setLoading(true)
          const response = await UpdateAppointmentStatus(id, status);
          if (response.success) {
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
            if (record.status === "pending" ) {
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
    <AdminLayout>

   
    <div>


    <Table columns={columns} dataSource={data || []} />

    </div>

    </AdminLayout>
  )
}
