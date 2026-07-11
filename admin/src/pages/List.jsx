import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from '../App.jsx';
import { currency } from '../App.jsx';

const List = ( { token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      console.log("Token:", token);
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Products</p>

      <div className="flex flex-col gap-2">

        <div className="hidden md:grid grid-cols-[0.6fr_2fr_1fr_1fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 text-sm font-medium">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Form</b>
          <b>Brand</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.6fr_2fr] md:grid-cols-[0.6fr_2fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 border text-sm"
          >
            <img
              className="w-16 h-16 object-contain"
              src={item.image[0]}
              alt=""
            />

            <p>{item.name}</p>

            <p>{item.category}</p>

            <p>{item.form}</p>

            <p>{item.brand}</p>

            <p>{currency}{item.price}</p>

            <p
              onClick={() => removeProduct(item._id)}
              className="text-red-600 text-center cursor-pointer font-bold"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
