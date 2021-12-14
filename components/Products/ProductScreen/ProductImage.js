import { useSelector } from "react-redux";

const ProductImage = () => {

  const productDetails = useSelector(state => state.productDetails);
  const { product } = productDetails;

  return (
    <>
      <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
        <h2 className="sr-only">Images</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8 p-2 group cursor-pointer font-bold
        ">
          
            <img
              key={product.id}
              src={product.imageSrc}
              alt={product.imageAlt}
              className='lg:col-span-2 lg:row-span-2 transition
              duration-200
              ease-in transform
              sm:hover:scale-105
              hover:z-50'
            />
          
        </div>
      </div>
    </>
  );
}

export default ProductImage;