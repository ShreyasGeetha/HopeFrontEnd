import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Loader'
import Breadcrumb from '../../Breadcrumbs/Breadcrumb'
import AddToCartButton from './AddToCartButton'
import AddToCartLoginButton from './AddToCartLoginButton'
import SizePicker from './SizePicker'
import PickupLocation from './PickupLocation';
import ProductImage from './ProductImage';



const ProductScreen = ({productId}) => {
  
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { product } = productDetails;  
  const userLogin = useSelector(state => state.userLogin)
 
  
  useEffect(() => {
    const getProductDetails = async () => {
       
      if (productId!=='undefined') {
        //await dispatch(listProductDetails(productId))
      }
      
    }
    getProductDetails()
  
  },[productId,userLogin,dispatch])

 
// ?{ name: 'Products', href: '/products', current: false },
  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <Breadcrumb crumbs={[{ name: 'Products', href: '/products', current: true }]} />
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {productDetails.loading && <Loader />}
         {!(productDetails.loading) && <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-center">
                <h1 className="text-xl md:text-3xl font-bold text-gray-900">{' '}{product.brand}</h1>
                <h1 className="text-xl md:text-3xl ml-3 font-medium text-gray-900">{product.name}</h1>                
                <p className="text-xl font-medium text-gray-900">{}</p>
              </div>
              
            </div>

            {// Image gallery
            }
            <ProductImage />

            <div className="mt-8 lg:col-span-5">
              <form>
                <SizePicker />                
                <AddToCartButton productId={productId} />
                <AddToCartLoginButton />
              </form>
              
              {/* Product Description */}
              <div className="mt-10">
                <h2 className="text-lg sm:text-md md:text-xl lg:text-2xl font-bold text-gray-900">Description</h2>

                <div
                  className="mt-4 prose prose-sm text-lg font-semibold sm:text-md md:text-xl lg:text-xl lg:font-semibold text-gray-900"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              
              {/* Pickup Location */}
              <div className="mt-10">
                <PickupLocation />
              </div>
            </div>           
          </div>}
        </div>
      </div>
    </div>
  )
}

export default ProductScreen;