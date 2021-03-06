import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux';
import { exitLoginForm } from '../../../redux/actions/ShowLoginFormAction';

import LoginPage from './LoginPage';
import { useRouter } from 'next/router';

const LoginModal = () => {
  const [open, setOpen] = useState(true)
  const shouldShowLoginForm = useSelector(state => state.shouldShowLoginForm);
  const router = useRouter()
  
  const dispatch = useDispatch();

  const exitSignupForm = async () => {
    await dispatch(exitLoginForm(!shouldShowLoginForm))
    router.push('/')
  }
  
  return (
    <>
       <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"                    
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" onClick={exitSignupForm} aria-hidden="true" />
                </button>
                </div>
              {/* Sign into your account */}
              <div className="sm:mx-auto sm:w-full sm:max-w-md">                
                <h2 className="mt-6 text-center text-3xl font-extrabold text-header">Sign in to your account</h2>                
              </div>  
              
                <LoginPage />
              </div>
              </Transition.Child>
            
        </div>
      </Dialog>
    </Transition.Root>
    </>
  );
}

export default LoginModal;