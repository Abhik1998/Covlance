import "./styles.css";
import Axios from "axios";
import React, { useState } from "react";

function AvailForm() {
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setStat] = useState("");
  const [avail, setAvail] = useState("");
  const [contact, setContact] = useState("");

  const submit = () => {
    var str1 = "http://localhost:";
    var str2 = process.env.PORT || 5000;
    var str3 = (str1.concat(str2)).concat("/edit");
    console.log(str3);
    Axios.post(str3, {
      area: area,
      city: city,
      state: state,
      avail: avail,
      contact: contact
    }).then((response) => {
      console.log(response);
    });
  };

  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
  return (
    <div id="loginform">
      <FormHeader title="Availability Form" />
      <div className="row">
        <label>Area of Availability</label>
        <input
          type="text"
          placeholder="Enter hospital or landmark"
          minLength={10}
          onChange={(e) => {
            setArea(e.target.value);
            console.log(e);
          }}
        />
      </div>
      <div className="row">
        <label>City</label>
        <input
          type="text"
          placeholder="Enter City"
          minLength={4}
          onChange={(e) => {
            setCity(e.target.value);
            console.log(e);
          }}
        />
      </div>
      <div className="row">
        <label>State</label>
        <input
          type="text"
          placeholder="Enter State"
          minLength={5}
          onChange={(e) => {
            setStat(e.target.value);
            console.log(e);
          }}
        />
      </div>
      <div className="row">
        <label>Details of Availability</label>
        <input
          type="text"
          placeholder="Enter more info like number of beds"
          minLength={20}
          onChange={(e) => {
            setAvail(e.target.value);
            console.log(e);
          }}
        />
      </div>
      <div className="row">
        <label>Contact</label>
        <input
          type="number"
          placeholder="Enter the number to be contacted"
          minLength={10}
          onChange={(e) => {
            setContact(e.target.value);
            console.log(e);
          }}
        />
      </div>
      {/* Button */}
      <div id="button" className="row">
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default AvailForm;
