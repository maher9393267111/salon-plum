import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import {toast} from 'react-toastify'
import axios from 'axios';
import { useRouter } from 'next/router';

const ContactForm = () => {




    const { locale, locales, asPath } = useRouter();

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async(e) => {
        e.preventDefault();



        const res = await axios.post('/api/sendEmail', forms)

     //   console.log('response' , res?.data);
        
        if(res.data?.message){
        toast.success(res.data?.message);
        
        
        }
        
        else{
          toast.error(res.data?.message);
          validator.showMessages();
        }




      

        // } 
        // else {
        //     validator.showMessages();
        // }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">


     
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        {/* <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
                            <option>Choose a Service</option>
                            <option>Gas Line Services</option>
                            <option>Water Line Repair</option>
                            <option>Bathroom Plumbing</option>
                            <option>Basement Plumbing</option>
                        </select> */}

<select
                          
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


 <option value="Lash lift" > {locale === 'sv' ? 'Lash lift' : 'قلب رموش'}</option>
 <option value="Microblading" > {locale === 'sv' ? 'Microblading' : 'تاتو حواجب شعره'}</option>
 <option value="Brow lift" > {locale === 'sv' ? 'Brow lift' : ' رفع حواجب'}</option>
 <option value="Tatueringsborttagning" > {locale === 'sv' ? 'Tatueringsborttagning' : 'ازالة تاتو'}</option>
 <option value="Naglar, Spa manikyr" > {locale === 'sv' ? 'Naglar, Spa manikyr' : 'اضافر واعتناء باليدين'}</option>



                        </select>





                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className=" bg-blue-700 font-bold text-white p-4 rounded-2xl">
                {locale === 'sv' ? 'skicka' : 'إرسال'}
                    
                    
                    </button>
            </div>
        </form >
    )
}

export default ContactForm;