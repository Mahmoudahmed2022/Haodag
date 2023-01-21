import "../Css/Registration.css";
import { FaUserLock } from "@react-icons/all-files/fa/FaUserLock";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { RiRotateLockFill } from "react-icons/ri";
import { FaMale } from "@react-icons/all-files/fa/FaMale";
import { FaFemale } from "@react-icons/all-files/fa/FaFemale";
import { IoHome, IoIdCard } from "react-icons/io5";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";

function Registration() {
  return (
    <>
      <div className="big-container">
        <h2 className="title">Sign Up</h2>
        <form>
          <div className="sml-container">
            <div className="mb-3">
              <label htmlFor="FirstName" className="FirstName-label">
                <FaUserAlt />
                &nbsp;First Name
              </label>
              <input
                type="text"
                className="FirstName-input"
                id="FirstName"
                required
              />
              <label
                htmlFor="LastName"
                id="form-label"
                className="LastName-label"
              >
                <FaUserAlt />
                &nbsp;Last Name
              </label>
              <input
                type="text"
                className="LastName-input"
                id="LastName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="email-label">
                <MdEmail />
                &nbsp;Email Address
              </label>
              <input
                type="email"
                className="email-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="userName-label">
                <FaUserCircle />
                &nbsp;User Name
              </label>
              <input
                type="text"
                className="userName-input"
                id="userName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="password-1-label">
                <FaUserLock />
                &nbsp;Password
              </label>
              <input
                type="password"
                className="password-1-input"
                id="password"
                required
              />
              <label htmlFor="password" className="password-2-label">
                <RiRotateLockFill />
                &nbsp;Verify Password
              </label>
              <input
                type="password"
                className="password-2-input"
                id="verify-password"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Address" className="Address-label">
                <IoHome />
                &nbsp;Address
              </label>
              <input
                type="text"
                className="Address-input"
                id="Address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="NationalID" className="NationalID-label">
                <FaAddressCard />
                &nbsp;National ID
              </label>
              <input
                type="number"
                className="NationalID-input"
                id="NationalID"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="phone-label">
                <FaPhoneAlt />
                &nbsp;Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="phone-input"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <label className="male-label">
                <FaMale />
                &nbsp;Male
              </label>
              <input type="checkbox" className="male-input" />
              <span className="checkmark"></span>

              <label className="female-label">
                <FaFemale />
                &nbsp;Female
                <input type="checkbox" className="female-input" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="role-label">
                <IoIdCard />
                Choose a Role:
              </label>
              <select name="Role" id="role">
                <option value="Customer">Customer</option>
                <option value="HallOwner">Hall Owner</option>
                <option value="WeddingPlanner">Wedding Planner</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
