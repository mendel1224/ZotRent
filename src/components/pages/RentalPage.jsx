import React from 'react';
import './RentalPageStyles.css';
import BackgroundImage from './assets/BackgroundLivingRoom.jpg';
import FullApartmentImage from './assets/FullApartment.jpg';
import ApartmentBedroom from './assets/ApartmentBedroom.jpg';


function RentalPage() {
    return (
        <div>
      {/* Welcome Section */}
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

      {/* Listing Type Section */}
      <div style={{ marginTop: "15px" ,
                    marginLeft: "25%"
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
          }}
        >
          {/* Option 1 */}
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
            <a
              href="FullApartment.html"
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
            </a>
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
            <a
              href="RentRoom.html"
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
            </a>
          </div>
        </div>
      </div>
        </div>
    );
}

export default RentalPage;