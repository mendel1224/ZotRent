import React from 'react';
import { useState } from "react";

const ApartmentRentalForm = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [bathCount, setBathCount] = useState("");
  const [sqft, setSqft] = useState("");
  const [petPolicy, setPetPolicy] = useState("");
  const [addons, setAddons] = useState("");
  const [pricingPolicy, setPricingPolicy] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [rent, setRent] = useState("");
  const [photos, setPhotos] = useState([]);
  


    const styles = {
      questioning: {
        paddingTop: "2.5%",
        paddingRight: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      questions: {
        paddingTop: "2.5%",
        paddingLeft: "10%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "flex-start",
      },
      introduction: {
        paddingRight: "25%",
      },
      inputFullWidth: {
        width: "100%",
      },
      inputPartialWidth: {
        width: "31.6%",
      },
      textArea: {
        width: "100%",
        height: "100px",
        padding: "10px",
        textAlign: "left",
        verticalAlign: "top",
        display: "block",
      },
      submitButton: {
        marginTop: "20px",
      },
      PricingPolicy: {
        textAligh: "left",
      }
    };
  
    return (
      <div className="Questioning" style={styles.questioning}>
        <h3 id="Introduction" style={styles.introduction}>
          Tell us a little more about your apartment!
        </h3>
        <div className="Questions" style={styles.questions}>
          <p>What's the address of this property?</p>
          <input
            className="inputs"
            id="StreetAddress"
            placeholder="Street Address"
            style={styles.inputFullWidth}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
          <div style={{ display: "flex", gap: "5px", width: "100%" }}>
            <input
              className="inputs"
              id="City"
              placeholder="City"
              style={styles.inputPartialWidth}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="inputs"
              id="State"
              placeholder="State"
              style={styles.inputPartialWidth}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              className="inputs"
              id="Zip"
              placeholder="Zip Code"
              style={styles.inputPartialWidth}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <p>How many rooms does this apartment have?</p>
          <input
            className="inputs"
            id="RoomCount"
            type="number"
            step="1"
            style={styles.inputFullWidth}
            onChange={(e) => setRoomCount(e.target.value)}
          />
          <p>How many bathrooms does this apartment have?</p>
          <input
            className="inputs"
            id="BathCount"
            type="number"
            step="1"
            style={styles.inputFullWidth}
            onChange={(e) => setBathCount(e.target.value)}
          />
          <p>What's the total square footage of this apartment?</p>
          <input className="inputs" id="sqft" style={styles.inputFullWidth} 
          onChange={(e) => setSqft(e.target.value)}/>
          <p>
            How would you describe your pet policy? Be as specific as possible.
          </p>
          <textarea
            className="TextAreas"
            id="PetPolicy"
            placeholder="Describe here"
            style={styles.textArea}
            onChange={(e) => setPetPolicy(e.target.value)}
          ></textarea>
          <p>
            What amenities/appliances are provided with the rent price?
          </p>
          <textarea
            className="TextAreas"
            id="Addons"
            placeholder="Describe here"
            style={styles.textArea}
            onChange={(e) => setAddons(e.target.value)}
          ></textarea>
          <p>
            Describe your pricing policy. This includes any security deposits, electricity/water that may be paid separately, etc.
          </p>
          <textarea
            className="TextAreas"
            id="PricingPolicy"
            placeholder="Describe here"
            style={styles.textArea}
            onChange={(e) => setPricingPolicy(e.target.value)}
          ></textarea>
          <p>Is there any other information you'd like to add about your apartment?</p>
          <textarea
            className="TextAreas"
            id="OtherInfo"
            placeholder="Describe here"
            style={styles.textArea}
            onChange={(e) => setOtherInfo(e.target.value)}
          ></textarea>
          <p>What is your asking monthly rent?</p>
          <input
            className="inputs"
            id="Rent"
            placeholder="Type here"
            style={styles.inputPartialWidth}
            onChange={(e) => setRent(e.target.value)}
          />
          <p>Please upload any photos you have of this apartment:</p>
          <input type="file" id="Photos[]" name="myfile" multiple="multiple" onChange={(e) => setPhotos([...e.target.files])}/>
          <button type="submit" id="SubmitButton" style={styles.submitButton}>
            Upload Listing
          </button>
        </div>
      </div>
    );
  };
  
  export default ApartmentRentalForm;

