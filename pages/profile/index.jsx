import React from "react";
import { Tabs } from "antd";
import AppointmentsMain from "@/components/Admin/appointmentsMain";
import { GetUserAppointments } from "@/utils/firebase/apiCalls/appointments";
import Loader from "@/components/shared/loader";
import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'

import moment from "moment";

function Profile({}) {

    const [bookedSlots = [], setBookedSlots] = React.useState([]);
const [loader,setLoader] = useState(false)
const user = JSON.parse(localStorage.getItem("user"));

    const getBookedSlots = async () => {
        try {
          setLoader(true)
          const response = await GetUserAppointments(user.id);
          setLoader(false)
          if (response.success) {
            console.log(response.data);
            setBookedSlots(response.data);
          } else {
            toast.error(response.message);
          }
        } catch (error) {
            setLoader(false)
          toast.error(error.message);
        }
      };
      useEffect(() => {
        getBookedSlots();
      }, [user]);






    //console.log(data)
 
  return (
    <div className=" ml-12 mt-12">
      <Tabs>
        <Tabs.TabPane tab="Appointments" key="1">
          <AppointmentsMain data={bookedSlots}  isProfile={true} />
        </Tabs.TabPane>


        
        {/* <Tabs.TabPane tab="Notifications" key="2">

          notifications
        </Tabs.TabPane> */}

        <Tabs.TabPane tab="Profile" key="3">
          {/* {user.role === "doctor" && <DoctorForm />} */}

          {user.role !== "doctor" && (
            <div className="my-1 bg-white p-1 flex flex-col gap-1">
              <div className="flex gap-2">
                <h4>
                  <b>Name : {user.full_name}</b>
                </h4>
              </div>
              <div className="flex gap-2">
                <h4>
                  <b>Email : {user.email}</b>
                </h4>
              </div>
              <div className="flex gap-2">
                <h4>
                  <b>
                    Created On : {moment(user?.createdAt).format("DD-MM-YYYY hh:mm A")}
                  </b>
                </h4>
              </div>
            </div>
          )}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;



// Profile.getInitialProps = async (context  ) => {
  
//     console.log('Query', context?.query?.country)
//     const data = await GetUserAppointments(JSON.parse(localStorage.getItem("user")).id);
    
  
  
  
//     return {
//       data:data,
//     };
//   };
  