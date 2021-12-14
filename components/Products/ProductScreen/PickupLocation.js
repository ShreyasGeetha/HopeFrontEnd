import { useSelector } from "react-redux";

const PickupLocation = () => {

  const productDetails = useSelector(state => state.productDetails);
  const { product } = productDetails;
  
  return (
    <>
      
        <h2 className="text-lg md:text-xl font-bold underline text-gray-900">Pickup Location:</h2>

        <div className="mt-6 py-2 text-lg font-landingPageFont tracking-wider font-semibold space-y-4 sm:mt-0 sm:ml-0 sm:flex-none sm:w-40">
          {product.dropLocation}                  
        
      </div> 
    </>
  );
}

export default PickupLocation;