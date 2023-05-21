"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddToysModal from "../component/AddToysModal";
import Table from "../component/ToysTable";

const Toys = () => {
  const [toys, setToys] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const getToys = async () => {
    const { data } = await axios.get("http://localhost:8080/mainan");
    setToys(data.data);
  };

  const handleSubmit = async (payload) => {
    await axios.post("http://localhost:8080/mainan", payload);
    getToys();
  };

  useEffect(() => {
    getToys();
  }, []);

  return (
    <div className="p-20">
      <div className=" mb-5">
        <p className="text-3xl mt-10 mb-5">List Mainan</p>
        <button
          onClick={() => {
            setToggleModal(true);
          }}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah Mainan
        </button>
      </div>
      <AddToysModal
        toggle={toggleModal}
        setToggle={setToggleModal}
        handleSubmit={handleSubmit}
      />
      <Table data={toys} />
    </div>
  );
};

export default Toys;
