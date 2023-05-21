import axios from "axios";
import React from "react";
import Table from "../component/ToysTable";

const Toys = async () => {
  const data = await getToys();
  return (
    <div className="p-20">
      <div className=" mb-5">
        <p className="text-3xl mt-10 mb-5">Toys List</p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Toy
        </button>
      </div>
      <Table data={data.data} />
    </div>
  );
};

const getToys = async () => {
  const { data } = await axios.get("http://localhost:8080/mainan");
  return data;
};

export default Toys;