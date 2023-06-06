// import { useState } from "react";
// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";

// function HomeForTranslate() {
//   const [cardData, setCardData] = useState([]);
//   const allCardData = () => {
//     fetch("http://127.0.0.1:8000/api/auth/getAllHalls")
//       .then((response) => response.json())
//       .then((data) => {
//         setCardData(data.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   useEffect(() => {
//     allCardData();
//   }, []);

//   const { t, i18n } = useTranslation();

//   const changeEN = () => {
//     i18n.changeLanguage("en");
//   };
//   const changeAR = () => {
//     i18n.changeLanguage("ar");
//   };
//   return (
//     <>
//       <div>
//         <button onClick={changeEN}>EN</button>
//         <button onClick={changeAR}>AR</button>
//       </div>
//       <div>
//         <h1>{t("Welcome to React")}</h1>
//         <h1>{t("hi users")}</h1>
//       </div>
//     </>
//   );
// }

// export default HomeForTranslate;

// import React from 'react';
// import { useTranslation } from 'react-i18next';

// function MyComponent() {
//   const { t } = useTranslation();

//   const apiData = { title: 'Hello' };

//   return (
//     <div>
//       <h1>{t(apiData.title)}</h1>
//     </div>
//   );
// }

// export default MyComponent;


import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  const [cardData, setCardData] = useState([]);
 
  useEffect(() => {
    allCardData();
  }, []);
  console.log(cardData)
  async function allCardData() {
    const response = await fetch('http://127.0.0.1:8000/api/auth/getAllHalls');
    const data = await response.json();

    const translatedData = translateData(data);

    setCardData(translatedData);
  }

  function translateData(data) {
    const translatedTitle = t(data.message);
    // const translatedDescription = t(data.description);

    // Create a new object with the translated data
    return {
      ...data,
      title: translatedTitle,
      // description: translatedDescription,
    };
  }

  // Render the component with the translated API data
  return (
    <div>
      {cardData && (
        <div>
          <h1>{cardData.title}</h1>
          {/* <p>{cardData.description}</p> */}
        </div>
      )}
    </div>
  );
}

export default MyComponent;

