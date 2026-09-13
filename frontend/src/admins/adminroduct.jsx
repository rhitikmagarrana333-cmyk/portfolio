import {useAuth} from "../hook/Authcontext";

const Products = () => {
  const { products,handledeleteproduct,handleeditproduct } = useAuth();

const handleDelete = async (productId) => {
  try {
    await handledeleteproduct(productId);
  } catch (error) {
    console.error("Failed to delete product:", error);
  }
}
const handleEdit = (message, productId) => {
  const updatedTitle = prompt(message);
  if (updatedTitle) {
    const updatedData = { title: updatedTitle };
    handleeditproduct(productId, updatedData);
  }
};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {products.map((product) => (
    <div
      key={product._id}
      className="bg-white rounded-2xl shadow-md overflow-hidden
                 border border-gray-100
                 hover:shadow-xl hover:-translate-y-1
                 transition duration-300"
    >

      {/* Product Image */}
      <div className="w-full h-56 bg-gray-100 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover
                       hover:scale-105 transition duration-300"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center
                       bg-gray-200 animate-pulse"
          >
            <span className="text-gray-400 text-4xl">
              📦
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">

          <p className="text-2xl font-bold text-blue-600">
            ${Number(product.price).toFixed(2)}
          </p>
<hr></hr>
<br></br>
          <button
            className="bg-blue-600 text-white px-4 py-2
                       rounded-lg font-semibold
                       hover:bg-blue-700 transition"
onClick={() => handleEdit("Edit product:", product._id)}

          >
            edit
          </button>
           <button
            className="bg-blue-600 text-white px-4 py-2
                       rounded-lg font-semibold
                       hover:bg-blue-700 transition"

                       onClick={() => handleDelete(product._id)}
          >
            delete
          </button>

        </div>

      </div>

    </div>
  ))}
</div>
  )
}

export default Products
