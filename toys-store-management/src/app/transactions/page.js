"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTransactionModal from "../component/AddTransactionModal";
import Table from "../component/TransactionTable";

const Transactions = () => {
  const [trx, setTrx] = useState([]);
  const [toggle, setToggle] = useState(false);
  const getTransactions = async () => {
    const { data } = await axios.get("http://localhost:8080/transaksi");
    setTrx(data.data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="p-20">
      <div className=" mb-5">
        <p className="text-3xl mt-10 mb-5">List Transaksi</p>
        <button
          onClick={() => {
            setToggle(true);
          }}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah Transaksi
        </button>
      </div>
      <AddTransactionModal toggle={toggle} setToggle={setToggle} />
      <Table data={trx} />
    </div>
  );
};

export default Transactions;
