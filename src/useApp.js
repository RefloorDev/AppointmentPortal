/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Urls } from "./urls";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Country, State } from "country-state-city";
//
import { getToken, startService } from "../src/common";
import moment from "moment";
//
let apiServiceInstance = null;
export const useApp = () => {
  //
  const [resultBox, setResultBox] = useState(false);
  const [resultMessage, setResultMessage] = 
  useState({
    name: '',
    address: '',
    email:'',
    date_:'',
  });
  const [dataLoading, setDataLoading] = useState(false);
  //
  const [showuseAppModal, setshowuseAppModal] = useState(false);
  const [showuseAppModalMessage, setshowuseAppModalMessage] = useState("");
  const [showuseAppModalMessageOther, setshowuseAppModalMessageOther] =
    useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [spouse, setSpouse] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [owner, setOwner] = useState("true");
  const [phone, setPhone] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [zip, setZip] = useState("");

  const [showMsg, setShowMsg] = useState(false);
  const [USStates, setUSStates] = useState([]);
  const [statename, setStateName] = useState("");
  const [productCategories, setproductCategories] = useState([]);
  const location = useLocation();
  const response = location.state;
  const status = response;
  const [apiService, setAPIService] = useState("");
  useEffect(() => {
    //
    const countryCode = "US";
    const country = Country.getCountryByCode(countryCode);
    const states = State.getStatesOfCountry(country.isoCode);
    console.log(states);
    setUSStates(states);
    setQ2("Luxury Vinyl (100% Waterproof)");
    setQ3("Television");
    //
    
  //
    const initializeService = async () => {
      try {
        const token = await getToken();
        if (token === "") {
          return;
        }
        console.log(token);
        if (token) {
          const service = await startService(
            token,
            "https://refloor.logicdrop.cloud/endpoints/scheduler/api"
          );
          console.log("Service initialized:", service);
          setAPIService(service); 
          apiServiceInstance = service;
          //
          // const prospectRequest = {
          //   firstName: 'John',
          //   lastName: 'Doe',
          //   zip: '48306',
          //   address: '2000 Test Avenue',
          //   city: 'Troy',
          //   state: 'MI',
          //   email: 'test@gmail.com',
          //   phone: '(555) 123-6541',
          //   homeowner: true,
          //   contact: 'Jane Doe',
          //   notes: 'Additional information about John Doe.',
          //   source:'value',
          //   utm_source: "utmSource"
          // };
       
          // // This will return the slot information as well as the IDs needed surrounding the prospect
          // const prospectResponse = await service.scheduleResourceProposeAppointment({
          //   xScheduleVendor: 'refloor',
          //   xScheduleEnvironment: 'sandbox',
          //   xScheduleOrigin: 'scheduler',
          //   prospectRequest
          // });
          // console.log(prospectResponse)         
        } else {
          console.error("Failed to retrieve token");
        }
      } catch (error) {
        console.log("Error is: ", error);
      }
    };
    //
    initializeService();
  }, [status, setShowMsg]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const onSubmit = (event) => {
    setDataLoading(true);
    createBooking();
    event.preventDefault();
  };

  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  //
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
      queryParams[key] = value;
    }
    return queryParams;
  };
  //

  const createBooking = async () => {
    const _QParams = getQueryParams();
    console.log(_QParams);
    _QParams.source = _QParams.source===undefined?q3:_QParams.source;
    console.log(_QParams.source);
    setShowMsg(false);
    let UTMS = searchParams.get("utm_source");
    if (UTMS == null) {
      UTMS = "Scheduler";
    }
    //
    let UTM_campaign = searchParams.get("utm_campaign");
    if (UTM_campaign == null) {
      UTM_campaign = "";
    }
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    // Get the search parameters
    const paramsURL = new URLSearchParams(url.search);
   
    const source = paramsURL.get("source");
        
    //
    // let SourceParam = searchParams.get("source");
    // if (SourceParam == null) {
    //   SourceParam = "";
    // }
    //
    try {
      const prospectRequest = {
        firstName: capitalizeFirstLetter(firstName),
        lastName: capitalizeFirstLetter(lastName),
        zip: zip,
        address: address,
        city: city,
        state: statename,
        email: email,
        phone: phone,
        homeowner: owner === "true",
        contact: spouse,
        notes: "Rooms Interested: " + q1 + ", Type of Flooring: " + q2,
        utm_source: UTMS
      };
      //
      //utm_source: utmSource===null?"":utmSource,
      const _addr = {Address: address, City:city, State:statename, Zip:zip}
      var CommentsClient = "";
      if(owner){
        CommentsClient = capitalizeFirstLetter(q1)+", "+capitalizeFirstLetter(firstName)+" "+capitalizeFirstLetter(lastName)+" Is Homeowner, Interested In "
      +q2;
      }else{
        CommentsClient = capitalizeFirstLetter(q1)+", "+capitalizeFirstLetter(firstName)+" "+capitalizeFirstLetter(lastName)+" Is Not Homeowner, Interested In "
      +q2;
      }
      //This will return the slot information as well as the IDs needed surrounding the prospect
      /*
  const { data, status } = await scheduleService.scheduleResourceScheduleAppointment(                     request,                     { params: { source: 'stuff' } }                 );
      */
      const response = await apiService.scheduleResourceProposeAppointment({
        xScheduleVendor: "refloor",
        // xScheduleEnvironment: 'sandbox',
        xScheduleOrigin: "scheduler",
        prospectRequest,        
      },
      {params:_QParams});
      test
      // {params: { source: source===null?q3:source, utm_source:UTMS }} );
      //
      // 400 Bad Request - Bad user request
      // 403 Forbidden - User does not have permissions
      // 409 Conflict - Appointment exists
      // 500 Internal Error - Exception in the API
      console.log(response);
      setDataLoading(false);
      if (response.data.code === 400) {
        setshowuseAppModalMessage("Bad Request - " + response.data.message);
        setshowuseAppModal(true);
      }
      else if (response.data.code === 403) {
        setshowuseAppModalMessage("Forbidden - " + response.data.message);
        setshowuseAppModal(true);
      }
      else if (response.data.code === 409) {
        // setshowuseAppModalMessage("Conflict - " + response.data.message);
        // setshowuseAppModal(true);
        //appointment exists, so it to the user
        const properties = response.data.properties;
        const selected_ = moment(properties.date).format("dddd, MMMM Do YYYY");
        setResultMessage({name: properties.firstName+" "+properties.lastName, address: properties.street+", "+properties.city+", "+properties.state+" - "+properties.zip, email: email,time_: properties.time,date_:selected_, message: `It looks like you already have an appointment scheduled on ${selected_} at ${properties.timr}. If you need to change your appointment, please call or text us at 844-212-7942. Thank you!`, message2:""});
        setResultBox(true);
      }
      else if (response.data.code === 500) {
        setshowuseAppModalMessage("Internal Error - " + response.data.message);
        setshowuseAppModal(true);
      } 
      else if (response?.status && response.status === 200) {
        //get the existing appointment data and available slots
        const _appointment = response.data;
        console.log(_appointment);
        const _timeSlots = response.data;
        console.log(_timeSlots);

        navigate("/booking", { state: {"data":_appointment, "message":CommentsClient, "locDetails":_addr, "email":email, "fn":capitalizeFirstLetter(firstName), "ln":capitalizeFirstLetter(lastName), UTM_Campaign:UTM_campaign, _queryParams:_QParams}});
      }else{
        setshowuseAppModalMessage("Unknown Error - " + response.data.message);
        setshowuseAppModal(true);
      }
    } catch (error) {
      setDataLoading(false);
      console.log(error);
      if (error?.response?.data?.code === 400) {
        setshowuseAppModalMessage(
          "Bad Request - " + error?.response?.data?.message
        );
        setshowuseAppModal(true);
      }
      else if (error?.response?.data?.code === 403) {
        setshowuseAppModalMessage(
          "Forbidden - " + error?.response?.data?.message
        );
        setshowuseAppModal(true);
      }
      else if (error?.response?.data?.code === 409) {
        // setshowuseAppModalMessage(
        //   "Conflict - " + error?.response?.data?.message
        // );
        // setshowuseAppModal(true);
        //
        const selected_ = moment(error?.response?.data?.properties.date).format("dddd, MMMM Do YYYY");
        setResultMessage({name: error?.response?.data?.properties.firstName+" "+error?.response?.data?.properties.lastName, address: error?.response?.data?.properties?.street+", "+error?.response?.data?.properties.city+", "+error?.response?.data?.properties.state+" - "+error?.response?.data?.properties.zip, email: email,time_: error?.response?.data?.properties.time,date_:selected_, message: `It looks like you already have an appointment scheduled on ${selected_} at ${error?.response?.data?.properties.time}. If you need to change your appointment, please call or text us at 844-212-7942. Thank you!`, message2:""});
        setResultBox(true);
        //
      }
      else if (error?.response?.data?.code === 500) {
        setshowuseAppModalMessage(
          "Internal Error - " + error?.response?.data?.message
        );
        setshowuseAppModal(true);
      } else {
        setshowuseAppModalMessage("Error - " + error?.response?.data?.message);
        setshowuseAppModal(true);
      }
    }
  };

  const formatPhoneNumber = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Apply formatting
    const formattedValue = numericValue.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );

    return formattedValue;
  };
  const handleChange = (e) => {
    // Get the input value
    const inputValue = e.target.value;

    // Format the input value
    const formattedValue = formatPhoneNumber(inputValue);

    // Update the state with the formatted value
    setPhone(formattedValue);
  };
  //
  const handleCloseModal = () => {
    setResultBox(false);
    navigate("/", { state: "success" });
  }
 
  return {
    address,
    city,
    email,
    firstName,
    dataLoading,
    lastName,
    onSubmit,
    owner,
    phone,
    q1,
    q2,
    setAddress,
    setCity,
    setEmail,
    setFirtName,
    setLastName,
    setOwner,
    setPhone,
    setQ1,
    setQ2,
    setQ3,
    status,
    setSpouse,
    setZip,
    showMsg,
    setShowMsg,
    spouse,
    zip,
    handleChange,
    showuseAppModal,
    setshowuseAppModal,
    showuseAppModalMessage,
    showuseAppModalMessageOther,
    USStates,
    statename,
    setStateName,
    setproductCategories,
    productCategories,
    resultBox,
    resultMessage,
    handleCloseModal,
  };
};
export const getApiService = async() => {
  // Wait until apiServiceInstance is set
  // while (!apiServiceInstance) {
  //   await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms before checking again
  // }

  return apiServiceInstance;
}
