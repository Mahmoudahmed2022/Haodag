import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [photo, setPhoto] = useState("");
  const [religion, setReligion] = useState("");
  const [role, setRole] = useState("");
  const [isLogin, setIsLogin] = useState(false);



  // Load data from sessionStorage on component mount
  useEffect(() => {
    const storedId = sessionStorage.getItem("id");
    const storedToken = sessionStorage.getItem("token");
    const storedRole = sessionStorage.getItem("role");
    const storedGender = sessionStorage.getItem("gender");
    const storedPhoto = sessionStorage.getItem("photo");
    const storedReligion = sessionStorage.getItem("religion");
    const storedPhone = sessionStorage.getItem("phone");
    const storedCountry = sessionStorage.getItem("country");
    const storedName = sessionStorage.getItem("name");
    const storedEmail = sessionStorage.getItem("email");
    const storedIsLogin = sessionStorage.getItem("isLogin");




    if (storedId) {
      setId(storedId);
    }

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedRole) {
      setRole(storedRole);
    }
    if (storedGender) {
      setGender(storedGender);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (storedPhone) {
      setPhone(storedPhone);
    }
    if (storedCountry) {
      setCountry(storedCountry);
    }

    if (storedName) {
      setName(storedName);
    }

    if (storedPhoto) {
      setPhoto(storedPhoto);
    }
    if (storedReligion) {
      setReligion(storedReligion);
    }
    if (storedIsLogin) {
      setIsLogin(storedIsLogin);
    }
  
  }, []);

  // Update sessionStorage when data changes
  useEffect(() => {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("photo", photo);
    sessionStorage.setItem("religion", religion);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("country", country);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("isLogin", isLogin);


  }, [, id, token, role, gender, photo, religion, phone, country, name, email,isLogin]);

  const contextValue = {
    id,
    setId,
    token,
    setToken,
    role,
    setRole,
    gender,
    setGender,
    photo,
    setPhoto,
    religion,
    setReligion,
    phone,
    setPhone,
    country,
    setCountry,
    name,
    setName,
    email,
    setEmail,
    isLogin
    ,setIsLogin
    
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
