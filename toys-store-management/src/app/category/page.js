"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddCategoryModal from "../component/AddCategoryModal";
import Table from "../component/CategoryTable";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const getCategories = async () => {
    const { data } = await axios.get("http://localhost:8080/kategori-mainan");
    setCategory(data.data);
  };

  const handleSubmit = async (payload) => {
    await axios.post("http://localhost:8080/kategori-mainan", payload);
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-20">
      <div className=" mb-5">
        <p className="text-3xl mt-10 mb-5">List Kategori Mainan</p>
        <button
          onClick={() => {
            setToggleModal(true);
          }}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah Kategori
        </button>
      </div>
      <AddCategoryModal
        toggle={toggleModal}
        setToggle={setToggleModal}
        handleSubmit={handleSubmit}
      />
      <Table data={category} />
    </div>
  );
};

export default Category;
