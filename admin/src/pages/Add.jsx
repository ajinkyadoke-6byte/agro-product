import React from 'react'
import { Upload, ImagePlus } from "lucide-react";
import {useState} from 'react';
import axios from 'axios'
import { backendUrl} from '../App.jsx'
import { toast } from 'react-toastify';


const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("");
  const [form, setForm] = useState("");

  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [off, setOff] = useState("");

  const [shelfLife, setShelfLife] = useState("");
  const [suitableFor, setSuitableFor] = useState("");

  const [packSizes, setPackSizes] = useState([
  { size: "", price: "" },
  { size: "", price: "" },
  { size: "", price: "" }
]);
  const onSubmitHandeler = async (e)=>{
    e.preventDefault();

    try{

      const formData = new FormData();
      formData.append("name",name)
      formData.append("brand",brand)
      formData.append("description",description)
      formData.append("category",category)
      formData.append("form",form)
      formData.append("price",price)
      formData.append("mrp",mrp)
      formData.append("off",off)
      formData.append("shelfLife",shelfLife)
      formData.append("suitableFor",suitableFor)
      formData.append("packSizes", JSON.stringify(packSizes));

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setBrand("");
        setPrice("");
        setMrp("");
        setOff("");

        setPackSizes(["", "", "", ""]);

        setShelfLife("");
        setSuitableFor("");

      }else{
        toast.error(response.data.message)
      }
      console.log(response.data)
    } catch (error){
      console.log(error);
      toast.error(error.message)

    }
  }

  const handlePackChange = (index, field, value) => {
  const updated = [...packSizes];
  updated[index][field] = value;
  setPackSizes(updated);
};

  return (
    <form  onSubmit={onSubmitHandeler} className='flex flex-col w-full items-start gap-3'>
      <div >
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          
          <label htmlFor="image1" className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-600 transition">
            { image1 ? (
              < img src={URL.createObjectURL(image1)} alt="" className="w-full h-full object-cover rounded-lg"/>) : (
              <ImagePlus size={50} className="text-gray-400" />)}
              < input onChange={(e) => setImage1(e.target.files[0])} type="file"id="image1" hidden/>
          </label>
          <label htmlFor="image2" className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-600 transition">
            { image2 ? (
              <img src={URL.createObjectURL(image2)} alt="" className="w-full h-full object-cover rounded-lg"/>) : (
              <ImagePlus size={50} className="text-gray-400" />)}
              <input onChange={(e) => setImage2(e.target.files[0])} type="file"id="image2" hidden/>
          </label>
          <label htmlFor="image3" className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-600 transition">
            { image3 ? (
              <img src={URL.createObjectURL(image3)} alt="" className="w-full h-full object-cover rounded-lg"/>) : (
              <ImagePlus size={50} className="text-gray-400" />)}
              <input onChange={(e) => setImage3(e.target.files[0])} type="file"id="image3" hidden/>
          </label>
          <label htmlFor="image4" className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-600 transition">
            { image4 ? (
              <img src={URL.createObjectURL(image4)} alt="" className="w-full h-full object-cover rounded-lg"/>) : (
              <ImagePlus size={50} className="text-gray-400" />)}
              <input onChange={(e) => setImage4(e.target.files[0])} type="file"id="image4" hidden/>
          </label>
        </div>

      </div>

      <div className='w-full '>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
      </div>
      <div className='w-full '>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
            <p className="mb-2">Product Category</p>
            <select onChange={(e)=>setCategory(e.target.value)} value={category}  className="w-full px-3 py-2">
                <option value="" disabled>Select Category</option>
                <option value="Plant Growth Promoters">Plant Growth Promoters</option>
                <option value="Micronutrients">Micronutrients</option>
                <option value="Organic Products">Organic Products</option>
                <option value="Pesticides">Pesticides</option>
                <option value="Fertilizers">Fertilizers</option>
                <option value="Fungicides">Fungicides</option>
            </select>
        </div>
        <div>
            <p className="mb-2" >Form</p>
            <select onChange={(e)=>setForm(e.target.value)} value={form} className="w-full px-3 py-2">
                <option value="" disabled>Select Form</option>
                <option value="Liquid">Liquid</option>
                <option value="Powder">Powder</option>
                <option value="Granules">Granules</option>
            </select>
        </div>
        <div>
            <p className='mb-2' >Brand</p>
            <input
                onChange={(e)=>setBrand(e.target.value)}
                value={brand}
                className="w-full px-2 py-2 sm:w-[220px]"
                type="text"
                placeholder="Enter brand name"
            />
        </div>
        
      </div>
      <div  className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        
        <div>
            <p className="mb-2">Product Price</p>
            <input 
                onChange={(e)=>setPrice(e.target.value)} 
                value={price} 
                className="w-full px-3 py-2 sm:w-[120px]" 
                type='number' 
                placeholder='₹ 250'
            />
        </div>
        <div>
            <p className="mb-2">Product MRP</p>
            <input 
                onChange={(e)=>setMrp(e.target.value)} 
                value={mrp} 
                className="w-full px-3 py-2 sm:w-[120px]" 
                type='number' 
                placeholder='₹ 1250'
            />
        </div>
        <div>
            <p className="mb-2">Product Offer</p>
            <input 
                onChange={(e)=>setOff(e.target.value)} 
                value={off} 
                className="w-full px-3 py-2 sm:w-[120px]" 
                type='number' 
                placeholder='₹ 1250'
            />
        </div>

      </div>

      {/* <div>
        <p>Pack Sizes</p>
        <div>
            <div>
                <p></p>
            </div>
        </div>
      </div> */}
      <div>
        <p className="mb-2">Pack Sizes</p>

        <div className="flex flex-col gap-3">

          {packSizes.map((pack, index) => (
            <div key={index} className="flex gap-3">

              <input
                type="text"
                placeholder="Size (250g)"
                value={pack.size}
                onChange={(e) =>
                  handlePackChange(index, "size", e.target.value)
                }
                className="border px-3 py-2 w-40"
              />

              <input
                type="number"
                placeholder="Price"
                value={pack.price}
                onChange={(e) =>
                  handlePackChange(index, "price", e.target.value)
                }
                className="border px-3 py-2 w-40"
              />

            </div>
          ))}

        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

        {/* Shelf Life */}
        <div>
            <p className="mb-2">Shelf Life</p>
            <input
            onChange={(e)=>setShelfLife(e.target.value)}
            value={shelfLife}
            className="w-full px-3 py-2 sm:w-[180px]"
            type="text"
            placeholder="e.g. 24 Months"
            />
        </div>

        {/* Suitable For */}
        <div>
            <p className="mb-2">Suitable For</p>
            <input
            onChange={(e)=>setSuitableFor(e.target.value)}
            value={suitableFor}
            className="w-full px-3 py-2 sm:w-[350px]"
            type="text"
            placeholder="e.g. Tomato, Onion, Grapes"
            />
        </div>

      
      </div>

      <button type="submit" className="px-8 py-3 mt-6 bg-[#1B5E20] hover:bg-[#2E7D32] text-white rounded-lg font-semibold shadow-md transition-all duration-300 cursor-pointer">ADD PRODUCT</button>

    </form>
  )
}

export default Add
