import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { useApp } from "./useApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { DataLoading } from "./Loading";
import { FcOk} from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { TfiTimer } from "react-icons/tfi";
import "./Style.css";
export const App = () => {
  const {
    address,
    city,
    email,
    firstName,
    dataLoading,
    lastName,
    onSubmit,
    owner,
    statename,
    phone,
    q1,
    q2,
    q3,
    homeType,
    homeTypes,
    setAddress,
    setCity,
    setEmail,
    setFirtName,
    setLastName,
    setOwner,
    setStateName,
    setQ1,
    setQ2,
    setQ3,
    setSpouse,
    setZip,
    setHomeType,
    spouse,
    zip,
    handleChange,
    showuseAppModal,
    setshowuseAppModal,
    showuseAppModalMessage,
    showuseAppModalMessageOther,
    USStates,
    setproductCategories,
    productCategories,
    resultBox,
    resultMessage,
    handleCloseModal
  } = useApp();

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [readOnlyAddress, setReadOnlyAddress] = useState(false);
  const [readOnlyCity, setReadOnlyCity] = useState(false);
  const [readOnlyZip, setReadOnlyZip] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    // autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    //   inputRef.current,
    //   { types: ["(cities)"], componentRestrictions: { country: "us" } }
    // );
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { componentRestrictions: { country: "us" } }
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      try {
        const place = await autoCompleteRef.current.getPlace();
        setCity("");
        setZip("");
        setStateName("");
        setAddress(place?.formatted_address);
        const streetAddressAndRoute = place?.address_components
          .filter(
            (component) =>
              component.types.includes("route") ||
              component.types.includes("street_number") ||
              component.types.includes("neighborhood")
          )
          .map((component) => component.long_name)
          .join(", ");
        setAddress(streetAddressAndRoute);
        place?.address_components?.map((component) => {
          if (component.types.includes("locality")) {
            setCity(component.long_name);
            setReadOnlyCity(true);
          } else if (component.types.includes("postal_code")) {
            setZip(component.long_name);
            setReadOnlyZip(true);
          } else if (component.types.includes("administrative_area_level_1")) {
            setStateName(component.short_name);
          }
        });
        setReadOnlyAddress(true);
      } catch (error) {
        console.log("Setting geoaddress: ", error);
      }
    });
  }, []);

  const handleEditClick = () => {
    setAddress("");
    setCity("");
    setZip("");
    setStateName("");
    // Enable editing when the user clicks the edit button
    setReadOnlyAddress(false);
  };

  const handleBlur = () => {
    // Check if the entered phone number is less than 10 digits
    if (phone.length < 10) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <>
   

      {dataLoading ? <DataLoading /> : null}

      <div style={{ display: resultBox ? "flex" : "none" }} className="modal">
          <div className="modal-content" style={{ width: "500px" }}>
            <div className="col" style={{margin:5}}>
              {/* <div className="row" style={{ textAlign: "center" }}>              
              <div className="modal-text"><FcOk/>&nbsp;Appointment Scheduled:</div>
              </div> */}
              {/* <div style={{border: "2px solid black",padding:20}}> */}
                {resultMessage.message !== ""? (
                  <div className="row" style={{textAlign:"center"}}>
                  <div className="modal-text"><FcOk/>&nbsp;{resultMessage.message}</div>
                  </div>
                ):null}
                {resultMessage.name !== ""? (
                  <div className="row" style={{
                        marginTop: 10
                      }}>
                  <div className="modal-text"><IoMdPerson />&nbsp;{resultMessage.name}</div>
                  </div>
                ):null}

                {resultMessage.address !== ""? (
                  <div className="row">
                  <div className="modal-text"><IoLocationOutline />&nbsp;{resultMessage.address}</div>
                  </div>
                ):null}
                {resultMessage.date_ !== ""? (
                  <div className="row">
                  <div className="modal-text"><SlCalender />&nbsp;{resultMessage.date_}</div>
                  </div>
                ):null}
                {resultMessage.time_ !== ""? (
                  <div className="row">
                  <div className="modal-text"><TfiTimer />&nbsp;{resultMessage.time_+" (Please allow a +1 hour arrival window)"}</div>
                  </div>
                ):null}
               
               {resultMessage.message2 !== ""? (
                <div className="row">
                <div className="modal-text">&nbsp;{resultMessage.message2}</div>
                </div>
               ):null}
              {/* </div> */}
              <div style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-success"
                    style={{
                      marginTop: 10,
                      width: 50,
                      height: 30,
                    }}
                    onClick={handleCloseModal}
                  >
                    OK
                  </button>
                </div>

            </div>
           
          </div>
        </div>

      <div className="col">
        <div
          style={{
            display: showuseAppModal ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="modal"
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,.5)",
              maxWidth: "90%",
              width: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "100%",
              width: "400px",
              }}
            >
              <div
                className="modal-text"
                style={{ textAlign: "center", marginBottom: "10px" }}
              >
                {showuseAppModalMessage}
              </div>
              <div
                className="modal-text"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Questions? Call: <a href="tel:844-212-7942">844-212-7942</a>.
                Thank you!
              </div>
              <button
                className="btn btn-success"
                style={{
                  marginTop: 30,
                  width: 50,
                  height: 30,
                }}
                onClick={(e) => setshowuseAppModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "1%" }}>
          <div className="col-lg-6">
            <img
              src={require("./asset/Refloor_Logo_TM.webp")}
              style={{ width: "30%", margin: "5%" }}
              alt="logo"
            />
          </div>
          <div className="col-lg-6">
            <h1
              style={{
                fontWeight: "bold",
                textAlign: "end",
                marginRight: "5%",
                color: "#D29B3C",
              }}
            >
              844-212-7942
            </h1>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <h3>
            Schedule your free in-home estimate now and get an
            <span style={{ fontWeight: "bold" }}>
              {" "}
              EXTRA $100 OFF your flooring project!
            </span>
          </h3>
          <h3>
            Coupon will be available to print or screenshot upon completion
          </h3>
        </div>
        <div>
          <div className="panel panel-default">
            <div
              className="panel-heading"
              style={{
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
                background: "#262262",
              }}
            >
              Get My Quote!
            </div>
            <div className="panel-body" style={{ padding: "5%" }}>
              <form onSubmit={onSubmit} className="">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>First Name:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="firstName"
                        required
                        onInvalid={(F) =>
                          F.target.setCustomValidity("Enter First Name Here")
                        }
                        onInput={(F) => F.target.setCustomValidity("")}
                        className="form-control"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const regex = /^[a-zA-Z ,]+$/; // Regex to allow only letters and numbers

                          if (regex.test(inputValue) || inputValue === "") {
                            setFirtName(inputValue);
                          }
                        }}

                        // onChange={(e) => setFirtName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Last Name:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className="form-control"
                        value={lastName}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const regex = /^[a-zA-Z ,]+$/; // Regex to allow only letters and numbers

                          if (regex.test(inputValue) || inputValue === "") {
                            setLastName(inputValue);
                          }
                        }}
                        // onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Name of spouse or other decision maker:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="spouse"
                        required
                        className="form-control"
                        placeholder="Name of spouse or other decision maker"
                        value={spouse}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const regex = /^[a-zA-Z ,]+$/; // Regex to allow only letters and numbers

                          if (regex.test(inputValue) || inputValue === "") {
                            setSpouse(inputValue);
                          }
                        }}
                        //onChange={(e) => setSpouse(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Phone:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="phone"
                        required
                        className="form-control"
                        maxLength={10}
                        minLength={10}
                        onKeyPress={(event) => {
                          const inputValue = event.key;
                          const isNumeric = /^[0-9]$/.test(inputValue);
                          const isFirstDigitOne =
                            event.target.selectionStart === 0 &&
                            inputValue === "1";

                          if (!isNumeric || isFirstDigitOne) {
                            event.preventDefault();
                          }
                        }}
                        value={phone}
                        onChange={handleChange}
                        placeholder="(###) ###-####"
                        onBlur={handleBlur}
                        //onChange={(e) => setPhone(e.target.value)}
                      />
                      {showWarning && (
                        <div style={{ color: "red" }}>
                          Please enter a valid 10-digit phone number
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Email:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 10 }}>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Street Address:</label>
                      <span style={{ color: "red" }}>*</span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="text"
                          name="address"
                          //readOnly={readOnlyAddress}
                          ref={inputRef}
                          required
                          className="form-control"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        {/* {readOnlyAddress && (
                        <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditClick} style={{ marginLeft: '5px', cursor: 'pointer' }} />
                      )} */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4">
                    
                    <div className="form-group">
                      <label>Street Address:</label><span style={{ color: 'red' }}>*</span>
                      <input
                        type="text"
                        name="address"
                        readOnly={readOnlyAddress}
                        ref={inputRef}
                        required
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {readOnlyAddress && (
                        <div style={{ color: 'black' }}>
                          <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditClick}/>
                        </div>
                      )}
                    </div> */}

                  {/* <div className="form-group">
                      <label>Street Address:</label><span style={{ color: 'red' }}>*</span>
                      <input
                        type="text"
                        name="address"
                        readOnly={readOnlyAddress}
                        ref={inputRef}
                        required
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{marginTop:10,cursor:"pointer"}}>
                     
                      {readOnlyAddress && (
                        <div style={{ color: 'black' }}>
                          <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditClick}/>
                        </div>
                      )}
                    </div> */}
                  {/* </div> */}
                  {/* <div className="col-lg-1">
                    <div className="form-group" style={{marginTop:10,cursor:"pointer"}}>
                      <label></label><span style={{ color: 'red' }}></span>
                      {readOnlyAddress && (
                        <div style={{ color: 'black' }}>
                          <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditClick}/>
                        </div>
                      )}
                    </div>                      
                  </div> */}
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>City:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="city"
                        //readOnly={readOnlyCity}
                        required
                        className="form-control"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-group">
                      <label>Zip:</label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="zip"
                        //readOnly={readOnlyZip}
                        required
                        className="form-control"
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>State</label>
                      <span style={{ color: "red" }}>*</span>
                      <select
                        name="statename"
                        className="form-control"
                        required
                        // readOnly={true}
                        // disabled
                        value={statename}
                        onChange={(e) => setStateName(e.target.value)}
                      >
                        <option key={-1} value={""}>
                          {""}
                        </option>
                        {USStates.map((value) => (
                          <option key={value.isoCode} value={value.isoCode}>
                            {value.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* <div className="row" style={{ marginTop: 10 }}>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>State</label><span style={{ color: 'red' }}>*</span>
                      <select
                        name="statename"
                        className="form-control"
                        required
                        readOnly={true}
                        disabled
                        value={statename}
                        onChange={(e) => setStateName(e.target.value)}
                      >
                        {USStates.map((value) => (
                          <option key={value.isoCode} value={value.isoCode}>
                            {value.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div> */}

                <div className="row" style={{ marginTop: 10 }}>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Are you the homeowner?</label>
                      <span style={{ color: "red" }}>*</span>
                      <select
                        name="owner"
                        className="form-control"
                        required
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Select Home Type</label>
                      <span style={{ color: "red" }}>*</span>
                      <select
                        name="hometype"
                        className="form-control"
                        required
                        value={homeType}
                        onChange={(e) => setHomeType(e.target.value)}
                      >
                      {homeTypes.map((option, index) => (
                        <option key={index} value={option.valueName}>
                          {option.label}
                        </option>
                      ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>
                        What rooms are you interested in reflooring?
                      </label>
                      <span style={{ color: "red" }}>*</span>
                      <input
                        type="text"
                        name="q1"
                        required
                        className="form-control"
                        value={q1}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const regex = /^[a-zA-Z0-9 ,]+$/; // Regex to allow only letters and numbers

                          if (regex.test(inputValue) || inputValue === "") {
                            setQ1(inputValue);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        What type of flooring are you most interested in?
                      </label>
                      <span style={{ color: "red" }}>*</span>

                      <select
                        name="q2"
                        className="form-control"
                        required
                        value={q2}
                        onChange={(e) => setQ2(e.target.value)}
                      >
                        {productCategories.length === 0 ? (
                          <>
                            <option value="Luxury Vinyl (100% Waterproof)">
                              Luxury Vinyl (100% Waterproof)
                            </option>
                            <option value="Laminate">Laminate</option>
                            <option value="Hardwood">Hardwood</option>
                            <option value="I'd like some guidance">
                              I'd like some guidance
                            </option>
                          </>
                        ) : (
                          productCategories.map((option, index) => (
                            <option key={index} value={option.name}>
                              {option.name}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>How did you hear about Refloor?</label>
                      <span style={{ color: "red" }}>*</span>

                      <select
                        name="q3"
                        className="form-control"
                        required
                        value={q3}
                        onChange={(e) => setQ3(e.target.value)}
                      >
                        <option value="">How you heard</option>
                        <option value="Television">Television</option>
                        <option value="Facebook/Instagram">
                          Facebook/Instagram
                        </option>
                        <option value="Postcard Mailing">
                          Postcard Mailing
                        </option>
                        <option value="Google">Google</option>
                        <option value="Friend/Family/Neighbor">
                          Friend/Family/Neighbor
                        </option>
                        <option value="Lawn Sign">Lawn Sign</option>
                        <option value="Previous Customer">
                          Previous Customer
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <p style={{ textAlign: "justify" }}>
                    You agree that by submitting this inquiry to Refloor, you
                    consent to receive emails, calls, and text messages,
                    including by an auto-phone system, from Refloor to the email
                    address and/or phone number you provided above to hear more
                    about our sales and special events. Consent to receive these
                    marketing emails, calls and texts is not a condition for
                    purchase, and you can instead call us at 844-212-7942 to
                    arrange for a free estimate. You may revoke this consent at
                    any time by contacting Refloor at lifetimefloors@refloor.com
                    or, for texts by replying STOP to any text message.
                    Messaging data rates may apply in regard to texting. You
                    have reviewed and agree to the{" "}
                    <a
                      href="https://refloor.com/terms-conditions/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>{" "}
                    of this webpage including the Dispute Resolution Policy.
                    Your personal information will be processed in accordance
                    with our{" "}
                    <a
                      href="https://refloor.com/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    , and please be aware that all calls with Refloor are
                    recorded for quality and safety purposes.
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      marginTop: 30,
                      width: 250,
                      height: 50,
                      fontWeight: "bold",
                    }}
                  >
                    Find a time
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3%" }}>
          <img
            src={require("./asset/Refloor_Logo_TM.webp")}
            style={{ width: "18%", margin: "2%", marginLeft: "5%" }}
            alt="logo"
          />
          <div
            style={{ textAlign: "center", marginBottom: "1%", fontSize: 15 }}
          >
            <span>Copyright © 2023 Refloor. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );
};
