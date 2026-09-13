
import { useAuth } from "../hook/Authcontext";

const Cart = () => {
  const { carts ,handleeditcart, handledeletecart ,handleCreateOrder, orders } = useAuth();

const handledelete = async ({productId}) => {
   
    if (!productId) {
      console.log("Product ID not found");
      return;
    }

   const data = await handledeletecart({ productId });
   if(data){
    console.log('data  found')
   }
  };
const createorders = async() => {

  try {
    await handleCreateOrder()
    alert("oder succesfully")

  }catch(err){
    console.log(err)
  }
}

    return (
     <div className="min-h-screen bg-gray-50 px-4 py-10">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Shopping Cart
      </h1>

      <p className="text-gray-500 mt-2">
        Your selected products
      </p>
    </div>

    {/* Cart */}
    <div className="space-y-5">

      {carts?.items?.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-sm
                     border border-gray-100 p-5
                     hover:shadow-md transition"
        >
          <div className="flex flex-col sm:flex-row gap-5">

            {/* Product Image */}
            <div className="w-full sm:w-36 h-48 sm:h-36
                            rounded-xl overflow-hidden
                            bg-gray-100 shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between">

              <div>
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>
                  </div>

                  {/* Remove UI only */}
                  <button
  onClick={() =>
    handledelete({
      productId: item.productId
    })
  }
>
  ×
</button>

                </div>

                <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex flex-wrap items-center
                              justify-between gap-4 mt-5">

                {/* Price */}
                <div>
                  <p className="text-sm text-gray-500">
                    Price
                  </p>

                  <p className="text-xl font-bold text-gray-900">
                    Rs. {item.price}
                  </p>
                </div>

                {/* Quantity UI only */}
                <div className="flex items-center
                border border-gray-200
                rounded-xl overflow-hidden">

  {/* Minus */}
  <button
    className="px-4 py-2 text-lg hover:bg-gray-100"
    onClick={() =>
  handleeditcart({
    productId: item.productId,
    quantity: item.quantity -1
  })
} >-</button>

  {/* Quantity */}
  <span className="px-5 py-2 font-semibold">
    {item.quantity}
  </span>

  {/* Plus */}
  <button
    className="px-4 py-2 text-lg hover:bg-gray-100"
    onClick={() =>
      handleeditcart({
        productId: item.productId,
        quantity: item.quantity + 1
      })
    }
  >
    +
  </button>

</div>

                {/* Total */}
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Total
                  </p>

                  <p className="text-xl font-bold text-gray-900">
                    Rs.{" "}
                    {(
                      (item.price || 0) *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      ))}

    </div>
  </div>


  <div>



<div className="w-full mt-8">
  {/* Total Amount */}
  <div className="flex items-center justify-between mb-4 px-2">
    <span className="text-gray-500 text-sm font-medium">
      Total Amount
    </span>

    <span className="text-2xl font-bold text-gray-900">
      Rs. {orders}
    </span>
  </div>

  {/* Place Order Button */}
  <button
    onClick={createorders}
    className="w-full bg-black text-white py-3.5 rounded-xl
               hover:bg-gray-800 active:scale-[0.98]
               transition-all duration-200
               font-semibold text-base shadow-sm"
  >
    Place Order
  </button>
</div>


  </div>
</div>
    
  );
};

export default Cart;