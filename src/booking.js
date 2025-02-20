import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { useBooking } from "./useBooking";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FcOk} from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { TfiTimer } from "react-icons/tfi";
import { DataLoading } from "./Loading";
import "./Style.css";

export const Booking = () => {
  const {
    appointment,
    availableSlots,
    dataLoading,
    availableDates,
    onDateChange,
    onSubmit,
    onSlotSelection,
    selectedSlot,
    bookingSlots,
    resultBox,
    resultMessage,
    handleCloseModal,
  } = useBooking();

  
  const newTheme = (theme) =>
    createTheme({
      ...theme,
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              fontSize: "1.50rem",
            },
          },
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              width: "3rem",
              height: "3rem",
            },
          },
        },
        MuiPickersCalendarHeader: {
          styleOverrides: {
            labelContainer: {
              fontSize: "1.5rem",
            },
            switchViewIcon: {
              width: "0rem",
              height: "0rem",
              fontSize: "0rem",
              padding: "0rem",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: "0rem",
            },
          },
        },

        MuiPickersToolbar: {
          styleOverrides: {
            root: {
              color: "#1565c0",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#2196f3",
              border: "1px solid",
            },
          },
        },
        MuiPickersDay: {
          styleOverrides: {
            root: {
              fontSize: 20,
              color: "#1565c0",
            },
          },
        },
        MuiPickersWeek: {
          styleOverrides: {
            root: {
              color: "#1565c0",
            },
          },
        },
      },
    });


  return (
    <div className="col">

        {dataLoading ? <DataLoading /> : null}

        {/* <div style={{ display: resultBox ? "flex" : "none" }} className="modal">
          <div className="modal-content" style={{ width: "500px" }}>
            <div className="col" style={{margin:5}}>
              
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
        </div> */}

        <div style={{ display: resultBox ? "flex" : "none" }} className="modal">
          <div className="modal-content" style={{ width: "500px" }}>
            <div className="col" style={{margin:5}}>
              {/* <div className="row" style={{ textAlign: "center" }}>              
              <div className="modal-text"><FcOk/>&nbsp;Appointment Scheduled:</div>
              </div> */}
              {/* <div style={{border: "2px solid black",padding:20}}> */}
                {(resultMessage.message && resultMessage.name) !== ""? (
                  <div className="row">
                  <div className="modal-text"><FcOk/>&nbsp;{resultMessage.name+", "+resultMessage.message}</div>
                  </div>
                ):null}
                {resultMessage.date_ !== ""? (
                  <div className="row" style={{
                        marginTop: 0
                      }}>
                  <div className="modal-text"><SlCalender />&nbsp;{resultMessage.date_}</div>
                  </div>
                ):null}

                {resultMessage.time_ !== ""? (
                  <div className="row">
                  <div className="modal-text"><TfiTimer />&nbsp;{"at "+resultMessage.time_}</div>
                  </div>
                ):null}

                {resultMessage.address !== ""? (
                  <div className="row">
                  <div className="modal-text"><IoLocationOutline />&nbsp;{"at "+resultMessage.address}</div>
                  </div>
                ):null}
                
               {resultMessage.message2 !== ""? (
                <div className="row" style={{textAlign:"center"}}>
                <div className="modal-text">{resultMessage.message2}</div>
                <div className="modal-text" style={{textAlign:'center'}}>Thank you!</div>
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
            style={{ fontWeight: "bold", textAlign: "end", marginRight: "5%", color:"#D29B3C" }}
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
      <div
        className="border"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          overflowY: "scroll",
          marginTop: 50,
        }}
      >
        
        <div>
          <div className="panel panel-default">
            <div
              className="panel-heading"
              style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }}
            >
              Schedule Appointment
            </div>
            <div className="panel-body" style={{ padding: "5%" }}>
              {bookingSlots.length ? (
                <form onSubmit={onSubmit}>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          adapterLocale="utc"
                        >
                          <ThemeProvider theme={newTheme}>
                            <DateCalendar
                              showDaysOutsideCurrentMonth={false}
                              disablePast={true}
                              onChange={onDateChange}
                              required={true}
                              shouldDisableDate={(dateParam) => {
                                return !availableDates.includes(
                                  dateParam.format("YYYY-MM-DD")
                                );
                              }}
                            
                            />
                          </ThemeProvider>
                        </LocalizationProvider>
                      </div>

                      <div className="col-lg-6">
                        {appointment && (
                          <div className="row">
                            <div className="col-lg-12">
                              <label>Select an Arrival Window:</label>
                            </div>
                            <div className="btn-group col-lg-6" role="group">
                              {availableSlots.map((value) => {
                                return (
                                  <button
                                    type="button"
                                    key={value.time}
                                    className="btn"
                                    checked="checked"
                                    required
                                    onClick={() => {
                                      onSlotSelection(value);
                                    }}
                                    style={{
                                      width: "100%",
                                      marginTop: "10%",
                                      borderRadius: "0.6rem",
                                      borderColor: "black",
                                      borderWidth: "0.2rem",
                                      background: selectedSlot === value ? "#337ab7" : "white",
                                      color: selectedSlot === value ? "white" : "#337ab7",
                                    }}
                                  >
                                    {value.time}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <h4 style={{ textAlign: "center" }}>
                      Questions? Call: <a href="tel:844-212-7942">844-212-7942</a>
                    </h4>
                    {selectedSlot && appointment ? (
                      <div style={{ textAlign: "center" }}>
                        
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{
                            marginTop: 30,
                            width: 250,
                            height: 50,
                          }}
                        >
                          Schedule appointment
                        </button>
                        <hr></hr>
                        <p style={{ textAlign: "justify" }}>
                        You agree that by submitting this inquiry to Refloor, you consent to receive emails, calls, 
                        and text messages, including by an auto-phone system, from Refloor to the email address and/or 
                        phone number you provided above to hear more about our sales and special events. Consent to receive 
                        these marketing emails, calls and texts is not a condition for purchase, and you can instead call us 
                        at 844-212-7942 to arrange for a free estimate. You may revoke this consent at any time by contacting 
                        Refloor at lifetimefloors@refloor.com or, for texts by replying STOP to any text message. Messaging 
                        data rates may apply in regard to texting. You have reviewed and agree to the {' '}
                        <a href="https://refloor.com/terms-conditions/" target="_blank" rel="noopener noreferrer">
                         Terms of Service 
                        </a> {' '} of this 
                        webpage including the Dispute Resolution Policy. Your personal information will be processed in 
                        accordance with our {' '}
                        <a href="https://refloor.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                         Privacy Policy 
                        </a> 
                        , and please be aware that all calls with Refloor are recorded 
                        for quality and safety purposes.
                        </p></div>
                      
                    ) : null}
                  </div>
                </form>
              ) : (
                <div style={{ padding: "10%" } }>
                  <h4 style={{textAlign: "justify"}}>
                    Currently no slots are available for your area, we will keep your information on file and will contact you.
                  </h4>
                  <h4 style={{textAlign: "justify"}}>Questions? Call: <a href="tel:844-212-7942">844-212-7942</a>. Thank you!</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/** Modal */}
     
      {/* footer */}
      <div style={{ marginTop: "3%" }}>
        <img
          src={require("./asset/Refloor_Logo_TM.webp")}
          style={{ width: "18%", margin: "2%", marginLeft: "5%" }}
          alt="logo"
        />
        <div style={{ textAlign: "center", marginBottom: "1%", fontSize: 15 }}>
          <span>Copyright © 2023 Refloor. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};
