import {useAuth} from "../hook/Authcontext";
import { useState } from "react";

const CreateProduct = () => {
  const { handlecreateproducts,loading } = useAuth()
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [stock, setStock] = useState("");
const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await handlecreateproducts(title, price, description, category, stock , image);
alert("Product created successfully!");
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setStock("");
    setImage(null);
    if(loading){
      return <div>Loading...</div>
    }
  }catch(error){
    console.error("Error creating product:", error);
  }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
      Create Product
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={4}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Product Image
        </label>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-3 cursor-pointer hover:border-blue-500"
        />

        {/* Preview */}
        {image && (
          <div className="mt-4 w-full h-64 rounded-xl overflow-hidden border border-gray-300 bg-gray-100 flex items-center justify-center">
            <img
              src={URL.createObjectURL(image)}
              alt="Product Preview"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600
         text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {loading ? "Creating..." : "Create Product"}
      </button>

    </form>
  </div>
</div>
  );
};

export default CreateProduct;