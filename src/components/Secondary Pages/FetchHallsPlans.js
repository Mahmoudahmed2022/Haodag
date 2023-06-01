import React from "react";

// import image from "../components/images/omar.jpg";
import { Link } from "react-router-dom";
import "../../Css/AdminDashboard.css";
import Swal from "sweetalert2";

const FetchHallsPlans = ({user,userToken,getUser}) => {
  let content;
  user.map((user) => {
    if (user?.owner?.role === "owner") {
      content = "Halls";
    } else if (user?.planner?.role === "planner") {
      content = "Plans";
    } 
  });


  const deletePerson = (user) => {
    // event.preventDefault();
    // user.map((person)=>{
      if(user?.planner)
      {
        Swal.fire({
          title: `Are You Sure To Delete Plan ${user.name} `,
          showCancelButton: true,
        }).then((data) => {
          if (data.isConfirmed) {
            fetch(`http://127.0.0.1:8000/admin/auth/deletePlan/${user.id}`, {
              method: "POST",
              headers: {
                "auth-token": `${userToken.token}`,
                "Authorization":`Bearer${userToken.token}`
              }
            })
              .then((res) => res.json())
              .then((data) => {
                alert(data.message)
                window.location.reload();
                // getUser();
              });
          }
        });
      }
    else if(user?.owner)
    {
      Swal.fire({
        title: `Are You Sure To Delete Owner ${user.name} `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteHall/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${userToken.token}`,
              "Authorization":`Bearer${userToken.token}`
            }
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message)
              window.location.reload();

              // getUser();
            });
        }
      });
    }
      
  };
  

  return (
    <>
      <h1 className="NameUsers">{content}</h1>

      <div className="contDataDiv">
      {user && user.length > 0 ?(
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
                     <Link
                       className="btnoperations blue"
                       to={`/${product.role}/${product.id}`}
                     >
                       View
                     </Link>
                     {/* <Link
                   className="btnoperations green"
                   // to={`/products/editProduct/${product.id}`}
                 >
                   Edit
                 </Link> */}
                     <button
                       className="btnoperations red"
                       onClick={()=>deletePerson(product)}
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
      ):(
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
