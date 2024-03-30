import React from "react";
import Headers from "../Header/headers";
import "./profile.css";
import Footer from "../Footer/Footer";
import Header from "../Header/headers";
import { toast, Toaster } from "react-hot-toast";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
    MDBCheckbox,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from "mdb-react-ui-kit";
export default function Profile(){
    return (
        <div className = "profile">
            <Headers/>
            
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <Toaster toastOptions={{ duration: 6000 }} />
        <MDBRow>
          <MDBCol col="10" md="6">
            {/* eslint-disable-next-line */}
            <img
              className="log-img"
              src={
                "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              }
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol className="right-container" col="4" md="6">
          <div className="profile-info">
                <h3 className="profile-h3">Gender:  </h3>
                <p className="profile-p">Dummy Gender</p>
                <br/>
                <h3 className="profile-h3">Destination Place:</h3>
                <p className="profile-p">Dummy Destination</p>
                <br/>
                <h3 className="profile-h3">Type of Trip</h3>
                <p className="profile-p">Dummy type</p>
                <br/>
                <h3 className="profile-h3">Date of Trip</h3>
                <p className="profile-p">Dummy date</p>
                <br/>
                <h3 className="profile-h3">Time of Trip</h3>
                <p className="profile-p">Dummy Time</p>
            </div>
          </MDBCol>
        </MDBRow>
        {/* <MDBBtn color="secondary" onClick={handleChange}>Testing</MDBBtn> */}
        {/* Modal */}

        
      </MDBContainer>
            
            
        </div>
    )
}
{/* <h1 className="profile-h1">Profile</h1>
            <div className="profile-info">
                <h3 className="profile-h3">Gender:  </h3>
                <p className="profile-p">Dummy Gender</p>
                <br/>
                <h3 className="profile-h3">Destination Place:</h3>
                <p className="profile-p">Dummy Destination</p>
                <br/>
                <h3 className="profile-h3">Type of Trip</h3>
                <p className="profile-p">Dummy type</p>
                <br/>
                <h3 className="profile-h3">Date of Trip</h3>
                <p className="profile-p">Dummy date</p>
                <br/>
                <h3 className="profile-h3">Time of Trip</h3>
                <p className="profile-p">Dummy Time</p>
            </div>
            <div className="profile-foot">
                <Footer/>
            </div>d */}