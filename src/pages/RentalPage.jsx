import React from 'react';
import BackgroundImage from '../assets/images/BackgroundLivingRoom.jpg';
import FullApartmentImage from '../assets/images/FullApartment.jpg';
import ApartmentBedroom from '../assets/images/ApartmentBedroom.jpg';
import {Link} from "react-router-dom";


function RentalPage() {
    return (
        <div>
      <div style={{ position: "relative" }}>
        <img
          src={BackgroundImage}
          alt="ApartmentImage"
          style={{
            width: "100vw",
            height: "33vw",
            filter: "brightness(70%)",
            display: "block",
          }}
        />
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-25%, -50%)",
            color: "white",
            textAlign: "center",
            fontSize: "200%",
          }}
        >
          List your property for rental using ZotRent!
        </h2>
      </div>

      <div style={{ marginTop: "15px" ,
                    marginLeft: "0%"
      }}>
        <p style={{ fontSize: "200%" }}>
            What type of listing best suits your rental?
        </p>
        <div
          style={{
            paddingTop: "5%",
            display: "flex",
            justifyContent: "center",
            gap: "10%",
            marginLeft: "10%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={FullApartmentImage}
              alt="FullApartmentBuilding"
              style={{
                width: "75%",
                height: "auto",
                border: "3px solid black",
              }}
            />
            <Link
              to={"/list-property"}
              style={{
                display: "block",
                width: "75%",
                paddingTop: "10px 0",
                textAlign: "center",
                border: "1px outset buttonborder",
                borderRadius: "3px",
                backgroundColor: "rgb(169, 178, 181)",
                textDecoration: "none",
                color: "black",
              }}
            >
              Full Apartment
            </Link>
          </div>

          {/* Option 2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={ApartmentBedroom}
              alt="ApartmentRoom"
              style={{
                width: "75%",
                height: "auto",
                border: "3px solid black",
              }}
            />
            <Link
              to="/rent-room"
              style={{
                display: "block",
                width: "75%",
                paddingTop: "10px",
                textAlign: "center",
                border: "1px outset buttonborder",
                borderRadius: "3px",
                backgroundColor: "rgb(169, 178, 181)",
                textDecoration: "none",
                color: "black",
              }}
            >
              Apartment Room
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
}

export default RentalPage;