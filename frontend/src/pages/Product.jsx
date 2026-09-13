import {useAuth } from "../hook/Authcontext";

const Product = () => {
  const { products , handlecreatecart , loading , user } = useAuth();
const addtocart = async({productId}) => {
  if(!user){
  return }
  try{


await handlecreatecart({productId})

  }catch(err){
    console.log(err)
  }

}




  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <div
      key={product._id}
      className="bg-white rounded-2xl shadow-md overflow-hidden
                 border border-gray-100
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300"
    >
      {/* Product Image */}
      <div className="w-full h-56 bg-gray-100 overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-2
                       hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center
                       bg-gray-200"
          >
            <span className="text-gray-400 text-4xl">
              📦
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Price + Cart */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-2xl font-bold text-blue-600">
            ${Number(product.price).toFixed(2)}
          </p>

          <button
            className="bg-blue-600 text-white px-4 py-2
                       rounded-lg font-semibold
                       hover:bg-blue-700
                       active:scale-95
                       transition-all duration-200"

                       onClick={()=>addtocart({productId : product._id})}
          >
           { loading ? "add to cart ......" : "add to cart"}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}


export default Product
