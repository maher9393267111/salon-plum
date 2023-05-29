import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useRouter } from "next/router";
import { BookAppointment } from "../../utils/firebase/apiCalls/appointments";
import moment from "moment";
import { toast } from "react-toastify";

const AppointmentS2 = () => {
  const { locale, locales, asPath } = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  //console.log(locale);

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

    if (user?.id) {
      const payload = {
        //doctorId: doctor.id,
        userId: JSON.parse(localStorage.getItem("user")).id,
        time: forms.time,
        service: forms.subject,
        fullName:forms.name,
        message:forms.message,

        userName: JSON.parse(localStorage.getItem("user"))?.full_name,
        bookedOn: moment().format("DD-MM-YYYY hh:mm A"),
        day: forms.day,
        // problem,
        status: "pending",
        phone:forms.phone,
        email:forms.email
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
            day: "",
          });
        }
      } else {
        validator.showMessages();
      }
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
    <section className="wpo-contact-section-s2 section-padding">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="wpo-contact-form-area">
                <div className="wpo-section-title-s2">
                  {/* <span>ONLINE BOOKING</span> */}
                  <h2>
                    {/* {locale === "ar" ? "ar" : locale === "en" ? "en" : "sv"} */}
                    {/* Online Booking For Appointments. */}
                    {locale === "sv" ? "Boka din tid nu" : "احجز موعدك الآن"}
                  </h2>
                </div>
                <form
                  onSubmit={(e) => {
                    submitHandler(e);
                  }}
                  className="contact-validation-active"
                >
                  <div className="row">
                    <div className="col col-lg-6 col-12">
                      <div className="form-group">
                        <label>
                          {/* Full name here* */}
                          {locale === 'sv' ? 'fullständiga namn' : 'الاسم الكامل'}
                        </label>
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
                        <label>
                          {/* Email here* */}
                          {locale === 'sv' ? 'E-post' : 'البريد الالكتروني'}
                        </label>
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
                        <label>
                          {/* Contact number* */}
                          {locale === 'sv' ? 'kontaktnummer' : 'رقم التواصل'}
                        </label>
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
                        <label>
                          {/* Select service* */}
                          {locale === 'sv' ? 'Serviceval' : 'اختيار الخدمة'}
                        </label>
                        <select
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.subject}
                          type="text"
                          name="subject"
                        >
                          <option>
                            {/* Choose a Service */}
                            {locale === 'sv' ? 'Serviceval' : 'اختيار الخدمة'}
                          </option>
                          <option value="Hydrafacial">
                            {locale === "sv"
                              ? "Hydrafacial"
                              : "هايدروفيشال تنظيف بشرة عميق"}
                          </option>
                          <option value='Bb glow'>
                            {locale === "sv" ? "Bb glow" : "توحيد لون البشره"}
                          </option>
                          <option value='Vitamen boost'>
                            {locale === "sv"
                              ? "Vitamen boost"
                              : "تنظيف بشره مع ابر فيتامين للبشره"}
                          </option>
                       
                          <option value='Laser carbon peeling'>
                          {locale === 'sv' ? 'Laser carbon peeling' : 'تقشير ليزري بالكربون '}

                          </option>


<option value="Tandblekning" >{locale === 'sv' ? 'Tandblekning' : 'تبييض الاسنان بالليزر ' }</option>


<option value="Microneedling" >{locale === 'sv' ? 'Microneedling' : 'مايكرونيدلينغ '}</option>
<option value="Fettbränning" > {locale === 'sv' ? 'Fettbränning' : 'تكسيير الدهون'}</option>


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
                        <label>
                          {/* Select Time */}
                          {locale === 'sv' ? 'Välj tid' : 'اختيار الوقت'}
                        </label>
                        <select
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.time}
                          type="text"
                          name="time"
                        >
                          <option value="11-12">10-11</option>
                          <option value="11-12">11-12</option>
                          <option value="12-1">12-1</option>
                          <option value="1-2">1-2</option>
                          <option value="2-3">2-3</option>
                          <option value="3-4">3-4</option>
                          <option value="4-5">4-5</option>
                          <option value="5-6">5-6</option>
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
                        <label>
                          {/* Select Day */}
                          {locale === 'sv' ? 'Valde idag' : 'اختار اليوم'}
                        </label>
                        <select
                          className="form-control"
                          onBlur={(e) => changeHandler(e)}
                          onChange={(e) => changeHandler(e)}
                          value={forms.day}
                          type="text"
                          name="day"
                        >
                          <option
                            value={locale === "sv" ? "måndag" : "الاثنين"}
                          >
                            {locale === "sv" ? "måndag" : "الاثنين"}
                          </option>
                          <option
                            value={locale === "sv" ? "tisdag" : "الثلاثاء "}
                          >
                            {locale === "sv" ? "tisdag" : "الثلاثاء "}
                          </option>
                          <option
                            value={locale === "sv" ? "onsdag" : "الأربعاء"}
                          >
                            {locale === "sv" ? "onsdag" : "الأربعاء"}
                          </option>
                          <option
                            value={locale === "sv" ? "torsdag" : "الخميس "}
                          >
                            {locale === "sv" ? "torsdag" : "الخميس "}
                          </option>
                          <option value={locale === "sv" ? "fredag" : "الجمعة"}>
                            {locale === "sv" ? "fredag" : "الجمعة"}
                          </option>
                          <option value={locale === "sv" ? "ördag" : "السبت"}>
                            {locale === "sv" ? "ördag" : "السبت"}
                          </option>
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
                    <button
                      type="submit"
                      className=" text-white   hover:bg-blue-400  transition-all   duration-500  bg-blue-600 text-xl p-3  min-w-[200px] rounded-lg"
                    >
                      {/* GET AN APPOINMENT */}

                      {locale === "sv" ? "bokning" : "الحجز"}
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
