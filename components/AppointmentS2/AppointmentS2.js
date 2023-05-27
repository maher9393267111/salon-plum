import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useRouter } from "next/router";
import { BookAppointment } from "../../utils/firebase/apiCalls/appointments";
import moment from "moment";
import {toast} from 'react-toastify'

const AppointmentS2 = () => {
  const { locale, locales, asPath } = useRouter();

  console.log(locale);

  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    time: "",
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

    const payload = {
      //doctorId: doctor.id,
      userId: JSON.parse(localStorage.getItem("user")).id,
      time: forms.time,
      service: forms.subject,

      userName: JSON.parse(localStorage.getItem("user"))?.full_name,
      bookedOn: moment().format("DD-MM-YYYY hh:mm A"),
      day:forms.day,
      // problem,
      status: "pending",
    };
    const response = await BookAppointment(payload);

    if (response.success) {
    if (validator.allValid()) {
      validator.hideMessages();
      toast.success(response.message);
      setForms({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        time: "",
        day:"",
      });


    } 
}
    else {
      validator.showMessages();
    }
  };

  return (
    <section className="wpo-contact-section-s2 section-padding">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="wpo-contact-form-area">
                <div className="wpo-section-title-s2">
                  <span>ONLINE BOOKING</span>
                  <h2>
                    {locale === "ar" ? "ar" : locale === "en" ? "en" : "sv"}
                    Online Booking For Appointments.
                  </h2>
                </div>
                <form
                  onSubmit={(e) => submitHandler(e)}
                  className="contact-validation-active"
                >
                  <div className="row">
                    <div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>Full name here*</label>
                        <input
                          className="form-control"
                          value={forms.name}
                          type="text"
                          name="name"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Your Name"
                        />
                        {validator.message(
                          "name",
                          forms.name,
                          "required|alpha_space"
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>Email here*</label>
                        <input
                          className="form-control"
                          value={forms.email}
                          type="email"
                          name="email"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Your Email"
                        />
                        {validator.message(
                          "email",
                          forms.email,
                          "required|email"
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>Contact number*</label>
                        <input
                          className="form-control"
                          value={forms.phone}
                          type="phone"
                          name="phone"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          placeholder="Your phone"
                        />
                        {validator.message(
                          "phone",
                          forms.phone,
                          "required|phone"
                        )}
                      </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>Select service*</label>
                        <select
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.subject}
                          type="text"
                          name="subject"
                        >
                          <option>Choose a Service</option>
                          <option>Kitchen plumbning</option>
                          <option>Gas Line Services</option>
                          <option>Water Line Repair</option>
                          <option>Bathroom Plumbing</option>
                          <option>Basement Plumbing</option>
                        </select>
                        {validator.message(
                          "subject",
                          forms.subject,
                          "required|alpha_space"
                        )}
                      </div>
                    </div>

                    <div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>Select Time</label>
                        <select
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.time}
                          type="text"
                          name="time"
                        >
                          <option value="11-12">11-12</option>
                          <option value="12-1">12-1</option>
                          <option value="2-3">2-3</option>
                          <option value="3:15-4">3:15-4</option>
                          {/* <option value='5-6'>Bathroom Plumbing</option>
                                                    <option value='6:15-6:33'>Basement Plumbing</option> */}
                        </select>
                        {validator.message(
                          "time",
                          forms.subject,
                          "required|alpha_space"
                        )}
                      </div>
                    </div>


{/* ------DAY---- */}

<div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>Select Day</label>
                        <select
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.day}
                          type="text"
                          name="day"
                        >
                          <option value="friday">friday</option>
                          <option value="satarday">satarday</option>
                          <option value="sunday">sunday</option>
                          <option value="monday">monday</option>
                          {/* <option value='5-6'>Bathroom Plumbing</option>
                                                    <option value='6:15-6:33'>Basement Plumbing</option> */}
                        </select>
                        {validator.message(
                          "time",
                          forms.subject,
                          "required|alpha_space"
                        )}
                      </div>
                    </div>

                    <div
                      className="col col-lg-6 col-12"
                      // "col fullwidth col-lg-12 "
                    >
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.message}
                          type="text"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        {validator.message(
                          "message",
                          forms.message,
                          "required"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">
                      GET AN APPOINMENT
                    </button>
                  </div>
                </form>

                <div className="border-style"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentS2;
