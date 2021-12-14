import { useState } from "react";
import { useSelector } from "react-redux";
import { RadioGroup } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const SizePicker = () => {

  const [selectedSize, setSelectedSize] = useState('')

  const productDetails = useSelector(state => state.productDetails);
  const { product } = productDetails; 

  return (    
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold sm:text-lg md:text-xl text-gray-900">Size</h2>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {/* See sizing chart */}
        </a>
      </div>

      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {product.sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              className={({ active, checked }) =>
                classNames(
                  size.inStock ? 'cursor-pointer focus:outline-none text-pink-50 bg-header ring-2 ring-offset-2 ring-header' : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                  checked
                    ? ' border-transparent text-white '
                    : 'bg-white border-indigo-500 text-gray-900',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              disabled={!size.inStock}
            >
              <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default SizePicker;