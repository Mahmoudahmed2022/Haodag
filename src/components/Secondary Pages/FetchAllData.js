import React from "react";

// import image from "../components/images/omar.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/AdminDashboard.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
import photo from "../images/user.png"
const FetchAllData = ({ user,deleteRecord, }) => {
  const navigate = useNavigate();
  let content;
  console.log(user);
  const personData = useContext(MyContext);
  user.map((user) => {
    if (user.role === "planner") {
      content = "Planners";
    } else if (user.role === "owner") {
      content = "Owners";
    } else if (user.role === "supplier") {
      content = "Suppliers";
    } else if (user.role === "user") {
      content = "Clients";
    } else if (user.role === "admin") {
      content = "Admins";
    }
  });

  const deletePerson = (user) => {
    if (user.role === "user") {
      Swal.fire({
        title: `Are You Sure To Delete User ${user.name} `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteUser/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              // window.location.reload();
              deleteRecord(user.id);;
            });
        }
      });
    } else if (user.role === "owner") {
      Swal.fire({
        title: `Are You Sure To Delete Owner ${user.name} `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteOwner/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              // window.location.reload();
              deleteRecord(user.id);

              // getUser();
            });
        }
      });
    } else if (user.role === "planner") {
      Swal.fire({
        title: `Are You Sure To Delete Planner ${user.name} `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deletePlanner/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              // window.location.reload();
            deleteRecord(user.id);
              // getUser();
            });
        }
      });
    } else if (user.role === "supplier") {
      Swal.fire({
        title: `Are You Sure To Delete Supplier ${user.name} `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteSupplier/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              // window.location.reload();
              deleteRecord(user.id);
            });
        }
      });
    } else if (user.role === "admin") {
      Swal.fire({
        title: `Are You Sure To Delete Admin ${user.name} `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteAdmin/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
             // window.location.reload();
             deleteRecord(user.id);
            });
        }
      });
    }
    // })
  };
  function goToProfile(user) {
    navigate(`/${user.role}/${user.id}`, { state: { userData: user } });
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
                          src={product.photo?product.photo:photo}
                          alt="image"
                        />
                        <p>{product.category}</p>
                      </div>
                    </td>
                    <td className="tdoperations">
                      <div className="ss">
                        <button
                          className="btnoperations blue"
                          onClick={()=>goToProfile(product)}
                        >
                          View
                        </button>

                        <button
                          className="btnoperations red"
                          onClick={() => deletePerson(product)}
                        >
                          Delete
                        </button>
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
      </div>
    </>
  );
};

export default FetchAllData;
