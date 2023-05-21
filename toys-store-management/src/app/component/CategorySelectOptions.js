import axios from "axios";
import React, { useState, useEffect } from "react";

const CategorySelectOptions = ({ callback }) => {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get("http://localhost:8080/kategori-mainan");
    setCategory(data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Kategori Mainan
      </label>
      <select
        onChange={(ev) => {
          callback(ev.target.value);
        }}
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Pilih Kategori Mainan</option>
        {category?.map((e) => (
          <option key={e.id} value={e.id}>
            {e.nama}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategorySelectOptions;
