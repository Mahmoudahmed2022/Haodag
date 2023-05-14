import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Registration.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  const [verifyPassword, setVerifyPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    gender: "",
    religion: "",
    role: "",
    photo: "",
    type:""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: event.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("country", formData.country);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("religion", formData.religion);
    formDataObj.append("role", formData.role);
    formDataObj.append("photo", formData.photo);

    if (formData.password === verifyPassword) {
      fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
        method: "POST",
        body: formDataObj,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUserToken(data.data);
          setStatus(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Password and Confirm Password Does not Match");
    }
  };
  console.log("userToken", userToken);
  console.log("status", status);
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  // const handlePhotoChange = (event) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     photo: event.target.files[0],
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formDataObj = new FormData();
  //   formDataObj.append("name", formData.name);
  //   formDataObj.append("email", formData.email);
  //   formDataObj.append("password", formData.password);
  //   formDataObj.append("country", formData.country);
  //   formDataObj.append("phone", formData.phone);
  //   formDataObj.append("gender", formData.gender);
  //   formDataObj.append("religion", formData.religion);
  //   formDataObj.append("role", formData.role);
  //   formDataObj.append("photo", formData.photo);

  //   fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
  //     method: "POST",
  //     body: formDataObj,
  //   })
  //     .then((response) =>{response.json();console.log(response)} )
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // // localhost:8000/api/auth/switchRegister
  // const handleSubmit1 = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   axios
  //     .post("http://127.0.0.1:8000/api/auth/switchRegister", formData)
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
  // console.log(formData);
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // function sendRegisterData(e) {
  //   e.preventDefault();
  //   if (formData.password === verifyPassword) {
  //     fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => {

  //         return response.json();
  //       })
  //       .then((data) => {

  //         setUserToken(data.data);
  //         setStatus(data);
  //       });
  //   } else {
  //     alert("Password and Confirm Password Does not Match");
  //   }
  // }
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // console.log(formData);
  // console.log(userToken);

  useEffect(() => {
    if (userToken) {
      // navigate("/hallform", { state: { data: userToken } });
      navigate(`/:${userToken.role}/${userToken.id}`, {
        state: { data: userToken },
      });
    }
    if (status) {
      if (status.message) {
        alert(status.message);
      } else if (status.msg) {
        alert(status.msg);
        navigate("/login");
      }
    }
  }, [userToken, status]);

  // useEffect(() => {
  //   if (userToken) {
  //     navigate("/", { state: { data: userToken } });
  //   }
  //   if (status.message) {
  //     alert(status.message);
  //   } else if (status.msg) {
  //     alert(status.msg);
  //   }
  // }, [userToken, status.message, status.msg]);
  // useEffect(() => {
  //   if (userToken) {
  //     navigate("/", { state: { data: userToken } });
  //   }
  // }, [userToken]);

  // console.log(verifyPassword + "vreify");
  // console.log(userToken);

  // const handlimg = (event) => {
  //   const file = event.target.files[0];
  //   setPhoto(file);
  // };
  // console.log(photo);
  // console.log(formData);
  // console.log(userToken);

  function togglePasswordVisibility() {
    var passwordField = document.getElementById("verifyPassword");
    console.log(passwordField, "Input");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  function togglePasswordVisibility1() {
    var passwordField = document.getElementById("password");
    console.log(passwordField, "Input");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  return (
    <div className="containerAddHall">
      <h2 className="h2AddHall">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="ContTwoDivInOneLine"></div>
        <div className="form-group-AddHall animated">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="name"
            name="name"
            value={formData.name}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="input-field-AddHall"
            id="email"
            name="email"
            value={formData.email}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="ContTwoDivInOneLine">
          <div className="form-group-AddHall animated Width47 password-wrapper">
            <div className="COntLableHide">
              {" "}
              <label htmlFor="password">Password</label>{" "}
              <span
                className="toggle-password animated marginBottomLeft"
                onClick={togglePasswordVisibility1}
              >
                Hide/Appear
              </span>
            </div>
            <input
              type="password"
              className="input-field-AddHall"
              id="password"
              name="password"
              value={formData.password}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-AddHall animated Width47 password-wrapper">
            <div className="COntLableHide">
              {" "}
              <label htmlFor="password">Verify Password</label>{" "}
              <span
                className="toggle-password animated marginBottomLeft"
                onClick={togglePasswordVisibility}
              >
                Hide/Appear
              </span>
            </div>
            <input
              type="password"
              className="input-field-AddHall"
              id="verifyPassword"
              name="verifyPassword"
              value={formData.verifyPassword}
              required
              onChange={(e) => {
                setVerifyPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group-AddHall animated">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="country"
            name="country"
            value={formData.country}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="input-field-AddHall"
            id="phone"
            name="phone"
            value={formData.phone}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="religion">Religion</label>
          <input
            type="tel"
            className="input-field-AddHall"
            id="religion"
            name="religion"
            value={formData.religion}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label>Gender</label>
          <div>
            <label className="mr-3">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
              />{" "}
              Female
            </label>
          </div>
        </div>
        <div className="form-group-AddHall animated">
          {/* <input type="file" name="photo" onChange={(e)=>{setPhoto(e.target.files[0])}} /> */}
          {/* <input
            type="file"
            name="photo"
            // onChange={uploadFile}
            onChange={(e) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  photo: e.target.files[0],
                };
              });
            }}
          /> */}

          <input
            type="file"
            name="photo"
            onChange={handlePhotoChange}
            // onChange={handlimg}
            // onChange={(e) => {
            //   const file = e.target.files[0];
            //   const path = URL.createObjectURL(file);

            //   setPhoto((prev) => {
            //     return {
            //       ...prev,
            //       photo: path,
            //     };
            //   });
            //   formData.append('photo1',photo)
            // }}
            // onChange={(e) => {
            //   const file = e.target.files[0];
            //   const path = URL.createObjectURL(file);

            //   setPhoto((prev) => {
            //     return {
            //       ...prev,
            //       photo: path,
            //     };
            //   });

            //   setFormData((prev) => {
            //     const formData = new FormData();
            //     formData.append('photo1', file);
            //     return { ...prev, formData };
            //   });
            // }}
            // onChange={(e) => {
            //   const file = e.target.files[0];
            //   const path = URL.createObjectURL(file);

            //   setPhoto((prev) => {
            //     return {
            //       ...prev,
            //       photo: path,
            //     };
            //   });

            //   setFormData((prev) => {
            //     return { ...prev, photo: path };
            //   });
            // }}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="role">Choose a Role:</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            className="select-field-AddHall"
            onChange={handleInputChange}
          >
            <option checked value="">
              Choose a Role
            </option>
            <option value="user">Client</option>
            <option value="hallowner">Hall Owner</option>
            <option value="planner">Wedding Planner</option>
          </select>
        </div>
        {/* <div className="form-group-AddHall animated">
          <label htmlFor="role">Choose a Type Of Planner:</label>
          <select
            name="type"
            id="type"
            value={formData.type}
            className="select-field-AddHall"
            onChange={handleInputChange}
          >
            <option checked value="">
              Choose a Role
            </option>
            <option value="orignal planner">orignalplanner</option>
            <option value="provider planner">providerplanner</option>
          </select>
        </div> */}
        <button type="submit" className="btnAddHall">
          Sign Up
        </button>
        <Link to="/" className="cancelBtnReg">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default Registration;

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setFormData((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// const handlePhotoChange = (event) => {
//   setFormData((prevState) => ({
//     ...prevState,
//     photo: event.target.files[0],
//   }));
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const formDataObj = new FormData();
//   formDataObj.append("name", formData.name);
//   formDataObj.append("email", formData.email);
//   formDataObj.append("password", formData.password);
//   formDataObj.append("country", formData.country);
//   formDataObj.append("phone", formData.phone);
//   formDataObj.append("gender", formData.gender);
//   formDataObj.append("religion", formData.religion);
//   formDataObj.append("role", formData.role);
//   formDataObj.append("photo", formData.photo);

//   fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
//     method: "POST",
//     body: formDataObj,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// return (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name:
//       <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//     </label>
//     <label>
//       Email:
//       <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//     </label>
//     <label>
//       Password:
//       <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//     </label>
//     <label>
//       Country:
//       <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
//     </label>
//     <label>
//       Phone:
//       <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
//     </label>
//     <label>
//       Gender:
//       <select name="gender" value={formData.gender} onChange={handleInputChange}>
//         <option value="">Select Gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>
//     </label>
//     <label>
//       Religion:
//       <input type="text" name="religion" value={formData.religion} onChange={handleInputChange} />
//     </label>
//     <label>
//       Role:
//       <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
//     </label>
//     <label>
//       Photo:
//       <input type="file" name="photo" onChange={handlePhotoChange} />
//     </label>
//     <button type="submit">Create User</button>
//   </form>
// );
// }
// export default Registration;
