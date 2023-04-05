import { useEffect, useState } from "react";
import "../Css/HallForm.css"
const HallForm2 = () => {
  const [hallName, setHallName] = useState("");
  const [hallAddress, setHallAddress] = useState("");
  const [hallDescription, setHallDescription] = useState("");
  const [hallCapacity, setHallCapacity] = useState("");
  const [hallImage, setHallImage] = useState(null);
  const [hallType, setHallType] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const handleChange = (event) => {
    setHallType(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //send data to api
    // console.log(hallName,
    //     hallAddress,
    //     hallDescription,
    //     hallCapacity,
    //     hallType,selectedCheckboxes)
    // Submit form data to backend
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    const images = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);
        // Update state or perform any other operation with the image data
      };

      reader.readAsDataURL(file);
    }
    setHallImage(images);
    console.log(images);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };
  useEffect(
    (e) => {
      console.log(
        hallName,
        hallAddress,
        hallDescription,
        hallCapacity,
        hallType,
        selectedCheckboxes
      );
    },
    [selectedCheckboxes]
  );

  useEffect(() => {
    const formGroups = document.querySelectorAll(".form-group1");
    formGroups.forEach((group) => group.classList.add("visible"));
  }, []);

  // rest of the component code...
  return (
    <div className="hall-signup-page1">
      <form className="signup-form1" onSubmit={handleSubmit}>
        <h2>Add Hall</h2>
        <div className="form-group1">
          <label htmlFor="hallName" className="labelDAtaForAddHall">
            Hall Name:
          </label>
          <input
            className="inputDAtaForAddHall"
            type="text"
            id="hallName"
            value={hallName}
            onChange={(e) => setHallName(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="hallAddress" className="labelDAtaForAddHall">
            Hall Address:
          </label>
          <input
            className="inputDAtaForAddHall"
            type="text"
            id="hallAddress"
            value={hallAddress}
            onChange={(e) => setHallAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="hallDescription" className="labelDAtaForAddHall">
            Hall Description:
          </label>
          <textarea
            className="textAreaDAtaForAddHall"
            id="hallDescription"
            value={hallDescription}
            onChange={(e) => setHallDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="hallCapacity" className="labelDAtaForAddHall">
            Hall Capacity:
          </label>
          <input
            className="inputDAtaForAddHall"
            type="number"
            min="0"
            id="hallCapacity"
            value={hallCapacity}
            onChange={(e) => setHallCapacity(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="hallStartTime" className="labelDAtaForAddHall">
            Start Time:
            <input
              className="inputDAtaForAddHall"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="hallEndTime" className="labelDAtaForAddHall">
            End Time:
            <input
              className="inputDAtaForAddHall"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </div>
        <div className="checkbox-group">
          <h2>Shows and Services</h2>
          <label>
            <input
              type="checkbox"
              value="DJ"
              checked={selectedCheckboxes.includes("DJ")}
              onChange={handleCheckboxChange}
            />
            DJ
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Photo Booth"
              checked={selectedCheckboxes.includes("Photo Booth")}
              onChange={handleCheckboxChange}
            />
            Photo Booth
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Magician"
              checked={selectedCheckboxes.includes("Magician")}
              onChange={handleCheckboxChange}
            />
            Magician
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Fireworks"
              checked={selectedCheckboxes.includes("Fireworks")}
              onChange={handleCheckboxChange}
            />
            Fireworks
          </label>
        </div>

        <div className="form-group1">
          <label htmlFor="type">Hall Type:</label>
          <select
            name="Role"
            id="role"
            onChange={(e) => setHallType(e.target.value)}
          >
            <option required>Open Air</option>
            <option required>Closed</option>
          </select>
        </div>
        <div className="form-group1">
          <label htmlFor="hallImage">Hall Image:</label>
          <input
          className="inputImages"
            type="file"
            id="hallImage"
            onChange={handleImageChange}
            accept="image/*"
            multiple
            required
          />

          {/* <input
              type="file"
              id="hallImage"
              onChange={handleImageChange}
              accept="image/*"
              required
            /> */}
        </div>
        <button className="addHallbtn" type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default HallForm2;
