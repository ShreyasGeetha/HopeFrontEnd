import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { addToCart } from "../../../redux/actions/cartActions";
import { useRouter } from "next/router";

const AddToCartButton = ({productId}) => {

  const userLogged = useSelector(state => state.userLogged);
  const dispatch = useDispatch()
  const router = useRouter()

  const addProduct = async () => {
    console.log('what is the product id', productId)
    await dispatch(addToCart(productId))
    router.push('/cart/Cart')
  }

  return (
    <>
      {userLogged &&        
          <a
            onClick={addProduct}
            type="submit"
            className="mt-8 cursor-pointer w-full bg-header border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-lg sm:text-lg md:text-xl font-medium text-white hover:bg-header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
              >
            Add to cart
          </a>                
      }
    </>
  );
}

export default AddToCartButton;