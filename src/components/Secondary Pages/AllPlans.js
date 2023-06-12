import Planners from "./Planners";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/MainProfileForAllUsers.css";
import "../../Css/App.css";

function AllPlans() {
  const [plan, setplan] = useState([]);
  const [visible, setVisible] = useState(5);
  const navigate = useNavigate();
  const personData = useContext(MyContext);
  const fetchplans = () => {
    fetch(`http://127.0.0.1:8000/api/auth/getAllPlans`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setplan(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleDetailsClick = (plan) => {
    navigate(`/Plandetails/${plan.id}`, {
      state: { plan: plan },
    });
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };
  console.log(personData);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" });
    fetchplans();
  }, []);

  return (
    <>
      <NavbarWithSideBar />
      <div>
        {" "}
        <h1 className="section-heading">Wedding Plans</h1>
        <div className="profile-content">
          {plan.length > 0 ? (
            <>
              {plan.slice(0, visible).map((data, index) => (
                <div className="planD" key={data.id}>
                  <img
                    src={data.photos[0]}
                    alt={data.name}
                    className="banner-image"
                  />
                  <div className="wrapper">
                    <div className="pad20">
                      <h1>{data.name}</h1>
                      <p>{data.price}$</p>
                    </div>
                    <div className="button-wrapper">
                      <button
                        onClick={() => handleDetailsClick(data)}
                        className="buttonMain details"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="for-button">
                {visible < plan.length && (
                  <a className="more" onClick={loadMore}>
                    Load 5 More
                  </a>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
export default AllPlans;
