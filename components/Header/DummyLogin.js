import { useDispatch } from "react-redux"
import { login } from "../../redux/actions/userActions"

const DummyLogin = () => {

  const dispatch = useDispatch()
  const email = 'admin@example.com'
  const password = '1234'

  const dummyLogin = async () => {
    console.log('Dummy Login')
    const res = await dispatch(login(email, password, true))
    console.log('response on login', res)
  }

  return (
    <>
      <button
        type="button"
        onClick={dummyLogin}
        className="inline-flex items-center ml-2 px-3 py-3.5 border border-transparent  text-xs font-extrabold rounded-full shadow-sm text-white bg-header hover:bg-white hover:text-header ">
        DUMMY Login
      </button>
    </>
  );
}

export default DummyLogin;