import React from "react";

// import image from "../components/images/omar.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/AdminDashboard.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";

const FetchHallsPlans = ({ user, reGetHalls }) => {
  const nav = useNavigate();
  let content;
  const personData = useContext(MyContext);

  user.map((user) => {
    if (user?.owner?.role === "owner") {
      content = "Halls";
    } else if (user?.planner?.role === "planner") {
      content = "Plans";
    }
  });

  const deleteHallOrPlan = (user) => {
    if (content==="Plans") {
      Swal.fire({
        title: `Are You Sure To Delete Plan (${user.name}) `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deletePlan/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              reGetHalls(user.id);
            });
        }
      });
    } else if (content==="Halls") {
      Swal.fire({
        title: `Are You Sure To Delete Hall (${user.name}) `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteHall/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              reGetHalls(user.id);
            });
        }
      });
    }
  };
const goToHallDetails=(product)=>{
  nav(`/hallDetails/${product.id}`)
}
const goToPlanDetails=(product)=>{
  nav(`/Plandetails/${product.id}`)
}
  return (
    <>
      <h1 className="NameUsers">{content}</h1>

      <div className="contDataDiv">
        {user && user.length > 0 ? (
          <table className="tableUsersData">
            <thead className="trUsersData">
              <tr className="truserData">
                <th className="id">ID</th>

                <th>Name</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody className="trUsersData">
              {user?.map((product) => {
                return (
                  <tr className="truserData" key={product.id}>
                    <td className="id">{product.id}</td>
                    <td>
                      <div className="contNameImg">
                        <img
                          className="imagetableuser"
                          src={product.photos[0]}
                          alt="image"
                        />
                        <p>{product.category}</p>
                      </div>
                    </td>
                    <td className="tdoperations">
                      <div className="ss">
                        {content==="Halls" ?(
                           <button
                           className="btnoperations blue"
                           onClick={()=>goToHallDetails(product)}
                         >
                           View
                         </button>
                        ):(
                          <button
                          className="btnoperations blue"
                          onClick={()=>goToPlanDetails(product)}
                        >
                          View
                        </button>
                        )}
                       
                        
                        <button
                          className="btnoperations red"
                          onClick={() => deleteHallOrPlan(product)}
                        >
                          Delete
                        </button>
                        {/* <button
                          className="btnoperations green"
                          onClick={() => deleteHallOrPlan(product)}
                        >
                          Edit
                        </button> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2>No Data</h2>
        )}

        {/* <div>
                <img src={image} alt="image" />
                <p>{props.users.name}</p>
            </div> */}
      </div>
    </>
  );
};

export default FetchHallsPlans;
