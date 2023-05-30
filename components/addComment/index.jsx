import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useRouter } from "next/router";
import { AddNewComment } from "@/utils/firebase/apiCalls/appointments";
import moment from "moment";
import { toast } from "react-toastify";

import { Input } from 'antd';
const { TextArea } = Input;


export default function index() {

    const { locale, locales, asPath } = useRouter();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('user ???❌❎☑✅' ,user)
    const router = useRouter();

    const [forms, setForms] = useState({
     //   name: "",
      //  email: "",
      //  subject: "",
        
        message: "",
       // time: "",
      });
      const [validator] = useState(
        new SimpleReactValidator({
          className: "errorMessage",
        })
      );


      const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
          validator.hideMessages();
        } else {
          validator.showMessages();
        }
      };



      const submitHandler = async (e) => {
        e.preventDefault();
    
        if (user && validator.allValid()) {

       //   if (validator.allValid()) {

          const payload = {
            //doctorId: doctor.id,
            userId: user.id,
           // time: forms.time,
           // service: forms.subject,
            fullName:user.full_name,
            message:forms.message,
    
         
            time: moment().format("DD-MM-YYYY hh:mm A"),
            
          
            email:user.email
          };
          const response = await AddNewComment(payload);
    
          if (response.success) {
           // if (validator.allValid()) {
              validator.hideMessages();
              toast.success(response.message);
              setForms({
               
               
                
                message: "",
               
               
              });
            //}
          }
          
       // }
          
          else {
            toast.error(response.message);
            validator.showMessages();
          }
        }
    


else if (user && !validator.allValid())
 
{

  validator.showMessages();
 // toast.error(response.message);
}
        // }
        else {
          goLogin();
        }
      };
    
    
    
    
      const goLogin = () => {
        router.push("/login");
      };




  return (
    <div className=" sm:ml-12 my-12">

<div className="  font-bold my-4 ml-12 !text-[39px] font-sans ">
    {/* add comment */}
    {locale === 'sv' ? 'Lägg till en kommentar' : 'إضافة تعليق'}
</div>



 <form
                  onSubmit={(e) => {
                    submitHandler(e);
                  }}
                  className="contact-validation-active"
                >
                  <div className="row">
                   
                 
                  

                    <div
                      className="col col-lg-6 col-12"
                      // "col fullwidth col-lg-12 "
                    >
                      <div className="form-group">
                        <TextArea
rows={4}
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.message}
                          type="text"
                          name="message"
                          placeholder="Message"
                        />
                        {/* </textarea> */}
                        {validator.message(
                          "message",
                          forms.message,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="submit-area  my-4">
                    <button
                      type="submit"
                      className=" text-white  
                      
                      hover:bg-blue-400 

                      
                       transition-all   duration-500 
                      
                      
                      
                      bg-blue-600
                       text-xl p-3  min-w-[200px] rounded-lg"
                    >
                      {/* GET AN APPOINMENT */}

                      {locale === 'sv' ? 'Lägg till en kommentar' : 'إضافة تعليق'}
                      {/* {locale === "sv" ? "bokning" : "الحجز"} */}
                    </button>
                  </div>
                </form>



    </div>
  )
}
