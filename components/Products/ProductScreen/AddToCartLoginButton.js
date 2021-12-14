import { useDispatch, useSelector } from "react-redux";
import {showLoginForm} from '../../../redux/actions/ShowLoginFormAction'

const AddToCartLoginButton = () => {

  const userLogged = useSelector(state => state.userLogged);
  const shouldShowLoginForm = useSelector(state => state.shouldShowLoginForm);
  const dispatch = useDispatch()

  const showSignUpForm = async (e) => {
    e.preventDefault()
    await dispatch(showLoginForm(!shouldShowLoginForm))    
  }

  return (
    <>
      {!userLogged &&
        <button
          type="submit"
          onClick={showSignUpForm}
          className="mt-8 w-full bg-header border border-transparent rounded-md py-3 px-8 flex items-center sm:text-lg md:text-xl  justify-center text-lg font-medium text-white hover:bg-header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
        >
          Login to Add to Cart
        </button>
      }
    </>
  );
}

export default AddToCartLoginButton;