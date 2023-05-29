import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import { useRouter } from "next/router";

const Contactpage = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <section className="wpo-contact-pg-section section-padding !bg-[rgb(249,234,230)]">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-placeholder"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>
                        {locale === "sv" ? "Vårt läge" : "موقعنا"}
                        {/* Address */}
                      </h2>
                      <p>
                      Drottninggatan, 212 11 Malmö, Sverige
                        {/* 7 Green Lake Street Crawfordsville, IN 47933 */}
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>
                        {locale === "sv" ? "E-post" : "البريد الالكتروني"}
                        {/* Email Us */}
                      </h2>
                      <p>NuraBeautyCenter@gmail.com</p>
                      {/* <p>helloyou@gmail.com</p> */}
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>
                        {locale === "sv" ? "ring oss" : "اتصل بنا"}
                        {/* Call Now */}
                      </h2>
                      <p>
                        {/* +1 800 123 456 789 */}
                        0700773332 
                      </p>
                      {/* <p>+1 800 123 654 987</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>
              {locale === 'sv' ? 'Har du några frågor' : 'هل لديك أي استفسار'}
                {/* Have Any Question? */}
                </h2>
              {/* <p>
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p> */}
            </div>
            <div className="wpo-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.767007547084!2d13.020460043452044!3d55.60606852905838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e3ab770c09%3A0x49e43d704c8d62ea!2zRHJvdHRuaW5nZ2F0YW4sIDIxMiAxMSBNYWxtw7YsINin2YTYs9mI2YrYrw!5e0!3m2!1sar!2str!4v1685280751208!5m2!1sar!2str"
        //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"

         ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe> */}
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
