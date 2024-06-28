import { useEffect, useState } from "react";
import { Urls } from "./urls";
import { getApiService } from "./useApp";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken, startService } from "../src/common";
import moment from "moment";

export const useBooking = () => {
  const [resultBox, setResultBox] = useState(false);
  const [resultMessage, setResultMessage] = 
useState({
    name: '',
    address: '',
    email:'',
    date_:'',
  });
  const [bookingSlots, setBookingSlots] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [appointment, setAppointment] = useState("");
  const [userMessage, setMessage] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;

  // Access the state values
  const response = state?.data;
  const clientMessage = state?.message;
  const locDetails = state?.locDetails;
  const email = state?.email;
  const firstName = state?.fn;
  const lastName = state?.ln;
  
  // const response = location.state;
  // const clientMessage = location.message;
  
  useEffect(() => {
    console.log(response);
    console.log(clientMessage);
    //
    
    if(response === undefined){
      navigate("/");
      return
    }
    const dataFromServer = response.timeSlots;
    const compareDateTime = (a, b) => {
      const dateComparison = new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time);
      return dateComparison || a.id.localeCompare(b.id); // If date and time are equal, sort by id
    };   
    //console.log(data);       
    // Sort the array based on the compareDateTime function
    const sortedData = dataFromServer.sort(compareDateTime);
    //
    console.log(sortedData);
    const bookingDates = [...new Set(sortedData.map((item) => item.date))].slice(0, 5);;
    console.log("Uniquie data: ",bookingDates);
    //Filter data for the first 5 unique dates
    const filteredData = sortedData.filter(item => bookingDates.slice(0, 5).includes(item.date));
    
    setAvailableDates(bookingDates);
    //setBookingSlots(data);
    setBookingSlots(filteredData);
    setAppointment(bookingDates[0]);
    //
    //check the default
    console.log(bookingDates[0])
    //setAppointment(selected);
      // const slots = filteredData.filter((item) => {
      //   if (item.date === bookingDates[0]) {
      //     console.log(item.time)
      //     return item.time;
      //   }
      // });
      // console.log(slots)
      // setAvailableSlots(slots);
    //
  }, [setBookingSlots]);

  const onDateChange = (value) => {
    if (value) {
      const selected = value.format("YYYY-MM-DD");
      setAppointment(selected);
      const slots = bookingSlots.filter((item) => {
        if (item.date === selected) {
          console.log(item.time)
          return item.time;
        }
      });
      console.log(slots)
      setAvailableSlots(slots);
      setSelectedSlot("");
    } else {
      setAppointment("");
      setAvailableSlots([]);
    }
  };
  const enabledDates = () => {
    return availableDates.map((item) => {
      return new Date(item);
    });
  };

  const handleCloseModal = () => {
    setResultBox(false);
    navigate("/", { state: "success" });
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    try{
      if (appointment && selectedSlot) {
        setDataLoading(true);
        //
        const scheduleRequest = {
          xScheduleVendor: 'refloor',
          xScheduleEnvironment: 'sandbox',
          xScheduleOrigin: 'scheduler',
          appointmentRequest: {
            id: response?.id,
            slotId: selectedSlot.id,
            date: selectedSlot.date,
            time: selectedSlot.time,
            email: email,
            address: locDetails.Address,
            city: locDetails.City,
            state: locDetails.State,
            zip: locDetails.Zip,
            comments:clientMessage
          },
        };
        let apiservice = await getApiService();
        if(apiservice === null){
          const token = await getToken();
          console.log(token);
          const service = await startService(
            token,
            "https://refloor.logicdrop.cloud/endpoints/scheduler/api"
          );
          console.log(service)
          apiservice = service;          
        }
        console.log(scheduleRequest);
        console.log(apiservice)
        const responseAppointment = await apiservice.scheduleResourceScheduleAppointment(scheduleRequest);
        setDataLoading(false);
        console.log(responseAppointment)        
        //catch the errors and success response and navigate back to main page on showing the data in the modal
        if (responseAppointment.data.code === 400) {
          setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Bad Request - " + responseAppointment.data.message, message2:""});
          setResultBox(true);
        }
        else if (responseAppointment.data.code === 403) {
          setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Forbidden - " + responseAppointment.data.message, message2:""});
          setResultBox(true);
        }
        else if (responseAppointment.data.code === 409) {
          setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Conflict - " + responseAppointment.data.message, message2:""});
          setResultBox(true);
        }
        else if (responseAppointment.data.code === 500) {
          setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Internal Error - " + responseAppointment.data.message, message2:""});
          setResultBox(true);
        } 
        else if (responseAppointment?.status && responseAppointment.status === 200) {
          //get the existing appointment data and available slots
          const selected_ = moment(selectedSlot.date).format("dddd, MMMM Do YYYY");
          setResultMessage({name: firstName+" "+lastName, address: locDetails.Address+", "+locDetails.City+", "+locDetails.State+" - "+locDetails.Zip, email: email,time_: selectedSlot.time,date_:selected_, message: "Your appointment with Refloor is scheduled!", message2:"You will receive an email and text message confirmation shortly."});
          setResultBox(true);
        }else{
          setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Unknown - " + responseAppointment.data.message, message2:""});
          setResultBox(true);
        }
      }
    }catch(error){
      setDataLoading(false);
      console.log(error);
      if (error?.response?.data?.code === 400) {       
        setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Bad Request - " + error?.response?.data?.message, message2:""});
        setResultBox(true);
      }
      else if (error?.response?.data?.code === 403) {
        setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Forbidden - " + error?.response?.data?.message, message2:""});
        setResultBox(true);
      }
      else if (error?.response?.data?.code === 409) {
        setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Conflict - " + error?.response?.data?.message, message2:""});
        setResultBox(true);
      }
      else if (error?.response?.data?.code === 500) {
        setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Internal Error - " + error?.response?.data?.message, message2:""});
        setResultBox(true);
      } else {
        setResultMessage({name: "", address: "", email: "",time_: "",date_:"", message: "Error - " + error?.response?.data?.message, message2:""});
        setResultBox(true);
      }
    }
  };
  const onSlotSelection = (value) => {
    setSelectedSlot(value);
  };

  return {
    appointment,
    availableDates,
    availableSlots,
    enabledDates,
    dataLoading,
    onDateChange,
    onSlotSelection,
    onSubmit,
    response,
    setDataLoading,
    selectedSlot,
    setSelectedSlot,
    bookingSlots,
    userMessage,
    setMessage,
    setResultBox,
    resultBox,
    resultMessage,
    handleCloseModal,
  };
};
