import React from "react";

// import image from "../components/images/omar.jpg";
import { Link } from "react-router-dom";
import "../../Css/AdminDashboard.css";

const FetchAllData = (props) => {
  const user = props.person;
  console.log(props);
  return (
    <div className="contDataDiv">
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
                      src={product.image}
                      alt="image"
                    />
                    <p>{product.category}</p>
                  </div>
                </td>
                <td className="tdoperations">
                  <div className="ss">
                    <Link
                      className="btnoperations blue"
                      // to={`/products/${product.id}`}
                    >
                      View
                    </Link>
                    {/* <Link
                    className="btnoperations green"
                    // to={`/products/editProduct/${product.id}`}
                  >
                    Edit
                  </Link> */}
                    <Link
                      className="btnoperations red"
                      // onClick={() => {
                      //   Delete(product);
                      // }}
                    >
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div>
                <img src={image} alt="image" />
                <p>{props.users.name}</p>
            </div> */}
    </div>
  );
};

export default FetchAllData;
