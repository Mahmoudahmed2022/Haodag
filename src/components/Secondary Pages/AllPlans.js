import Planners from "./Planners";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
import { useEffect, useState } from "react";

function AllPlans() {
  const [plan, setplan] = useState([]);
  const personData = useContext(MyContext);
  const fetchplans = () => {
    fetch(`http://127.0.0.1:8000/api/auth/getAllHalls`, {
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
        <Planners Plan={plan} />
      </div>
    </>
  );
}
export default AllPlans;
