import React from "react";
import Navbar4 from "./Navbar4";
import Copyrights from "./Copyrights";

const Contact = () => {
  return (
    <div className="container">
      <Navbar4 />
      <div className="contactpage">
        <div className="contacty">
          <h2 className="contacttitle">
            {" "}
            Welcome to Vikram Engineering Works!
          </h2>
          We’re here to assist you with your engineering needs. Whether you have
          a question about our products, services, or anything else, feel free
          to reach out to us using the contact details below. Our team is always
          ready to help!
        </div>
      </div>
      <div className="timings">
        <h2 className="contacttitle">Our Contact Information :</h2>
        <span className="unit">UNIT I:</span>
        <span className="unitad">
          H:No. 3-34, Guvvaledi<br></br>
          Chinnaravirala, Ghatkesar Road,<br></br>
          AbdullapurMet, R.R.Dist-501505. <br></br>
          (Available Mon-Fri, 9:00 AM - 6:00 PM)
        </span>
        <br></br>
        <br></br>
        <span className="unit">UNIT II:</span>
        <span className="unitad">
          TIF MSME , Green Industrial Park ,<br></br>
          Dandu Malkapuram, R.R.Dist-508 252.
        </span>
        Email: vikramengineeringsollutions@gmail,com
        <p className="unitad">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Zm-578 40h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z" />
          </svg>
          : 96666 49196
        </p>
        <p className="unitad">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
          </svg>
          : vikramengineeringworks.in
        </p>
        <span className="unitad">
          For support or inquiries, reach out to us via email. Business Hours:
          Monday to Saturday: 9:00 AM – 6:00 PM and Sunday: Closed
        </span>
      </div>
      <div className="reason">
      <h2 className="contacttitle" >Why Choose Vikram Engineering Works?</h2>
      <span className="unitad">
      Years of experience in
      engineering solutions.Committed to delivering quality
      and timely services. We prioritize your needs
      and satisfaction.
      </span>
      </div>
      <div className="query">
      <h2 className="contacttitle">Send us a Message:</h2>
      <p className="unitad">Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible.</p>
      </div>

    <div id="form">
    
    <form>
      <label id="name">Name:</label>
      <input type='text'></input><br></br>
      <label id="email">Email:</label>
      <input type="email"></input><br></br>
      <label id="message">Write your Query:</label>
      <textarea cols='45' rows="5" placeholder="type here..."></textarea><br></br>
      <button type="button" className="btn btn-secondary">Submit</button>
    </form>
    </div>
    <div className="copy">
    <marquee>
      <Copyrights />
    </marquee>
    </div>
    </div>
  );
};

export default Contact;
