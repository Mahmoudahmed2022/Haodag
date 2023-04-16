import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Css/Modal.css";
import Swal from "sweetalert2";

const DeleteHall = (props) => {
  const [name, setName] = useState("");
  const [product, setProducts] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with form data here, e.g. send it to a server
    console.log({ name });

    props.onClose();
  };
  const allData = async () => {
    const api2 = "http://localhost:9001/products";
    await fetch(`${api2}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log("from api");
        setProducts(response);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    allData()
  }, []);
  const Delete = (product) => {
    Swal.fire({
      title: `Are You Syre To Delete ${product.hallName} Hall`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9001/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {});
      }
    });
  };

  const reset = () => {};

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal1">
          <div className="exit">
            <button
              className="buttonExit"
              onClick={() => {
                props.onClose();
                reset();
              }}
            >
              X
            </button>
          </div>

          <h2 className="headContact">Delete Hall</h2>

          <form className="formAddPlan">
            <label htmlFor="name">Hall Name:</label>
            <input
              className="inputPlanData"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <div>
              <div className="resetAndCancel">
                <button className="cancel" onClick={() => props.onClose()}>
                  Cancel
                </button>
                <button className="submitForm"  onClick={() => {
                      Delete(product);
                    }}>
                  Delete Hall
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteHall;
