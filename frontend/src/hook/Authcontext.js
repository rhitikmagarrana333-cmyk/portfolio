import { userlogin,userRegister,getallusers , logout } from "../services/user.api";
import { useContext, useState , useEffect} from "react";
import { AuthContext } from "../context/Auth.Context";
import { getAllProducts,addProducts,deleteproduct,updateproduct } from "../services/product.api";
import { getcart ,editecart, createcart , deletecart , createorder , getorder} from "../services/cart.api";
import { getprofile } from "../services/profile.api";
export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
const[carts , setCarts] = useState([])
const [profiles , setProfiles] = useState([])
const [orders , setOrders] = useState([])
   const handlelogin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await userlogin({ email, password });
      setUser(response.user);
      setLoading(false);
      return response.user;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
const handleregister = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await userRegister({ email, password });
      setUser(response.user);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
useEffect(() => {
    const getUsers = async () => {
        setLoading(true);
      try {
        const data = await getallusers();

        setUsers(data.user);
        setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
    getUsers();
  }, []);
  useEffect(() => {
    const handlegetproduct = async() => {
      setLoading(true);
      try {
        const data = await getAllProducts();
        setProducts(data.product);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    handlegetproduct();
  }, []);
const handlecreateproducts = async (
  title,
  price,
  description,
  category,
  stock,
  image
) => {
  setLoading(true);
  setError(null);

  try {
    if (!image) {
      throw new Error("Please select a product image");
    }

    const data = new FormData();
data.append("title", title);
    data.append("price", price);
    data.append("description", description);
    data.append("category", category);
    data.append("stock", stock);
    data.append("image", image);

    
    const response = await addProducts(data);

    setProducts(
      response.product,);

    return response;
  } catch (error) {
    setError(error.message || "Failed to create product");
    throw error;
  } finally {
    setLoading(false);
  }
};
// Hook को return

const handledeleteproduct = async (productId) => {
  setLoading(true);
  setError(null);
  try {
const response = await deleteproduct(productId);
    setProducts(response.product);
    return response;
  }catch (error) {
    setError(error.message || "Failed to delete product");
    throw error;
  } finally {
    setLoading(false);
            } 
                  }


    const handleeditproduct = async (productId, updatedData) => {
      setLoading(true);
      setError(null);
      try {
        const response = await updateproduct(productId, updatedData);
        setProducts(response.product)
        return response;
      } catch (error) {
        setError(error.message || "Failed to edit product");
        throw error;
      } finally {
        setLoading(false);
      }
    };

  
useEffect(() => {
  const handlegetcart = async () => {
    setLoading(true);

    try {
      const data = await getcart();
      setCarts(data.cart);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  handlegetcart();
}, []);

const hadlelogout = async() => {
  try {
 await logout()
setUser(null)

  }catch(err){
    console.log(err)
  }finally{
    setLoading(false)
  }
}



const handlecreatecart = async({productId})=> {
setLoading(true)
try{
const data = await createcart({productId})
setCarts(data.cart)


return data.cart
}catch(err){
  console.log(err)
}finally{
  setLoading(false)
}

}


const handledeletecart = async ({ productId }) => {
  setLoading(true);

  try {
    const data = await deletecart({ productId });

    setCarts(data.cart)

    return data;
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

useEffect(()=> {
  const handlegetprofile = async() => {
    setLoading(true)
    try {
const data = await getprofile()
setProfiles(data.profile)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }
  handlegetprofile()
} , [])


const handleCreateOrder = async () => {
    setLoading(true);

    try {
        const data = await createorder();

        return data.order;

    } catch (err) {
        console.log(err);
        throw err;

    } finally {
        setLoading(false);
    }
};
useEffect(()=> {
  const handlegetorder = async() => {
    setLoading(true) 
    try {
      const data = await getorder()
      setOrders(data.Amount)
console.log(orders)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }
  handlegetorder ()
} , [])
const handleeditcart = async ({ productId, quantity }) => {
  try {
    const data = await editecart({ productId, quantity });

    setCarts(data.cart);

    return data.cart;
  } catch (err) {
    console.log(err);
  }
};
return {
  user,
  loading,
  error,
  handlelogin,
  handleregister,
  users,
  products,
  handlecreateproducts,
  handledeleteproduct,
  handleeditproduct , handleeditcart, carts,orders, handleCreateOrder , hadlelogout , handlecreatecart , handledeletecart ,profiles
};
}
  