import React from 'react'

const ProductCard = ({ item }) => {
    
  return (
    <div className="w-[518px] h-[327px] text-darkslategray shadow-[5px_5px_20px_rgba(133,_133,_133,_0.2)] rounded-11xl grid grid-cols-2 items-center justify-center">
      {/* Image Div */}
      <div>
        <img className="h-[200px] w-[200px]" src={item.img} alt="" />
      </div>
      {/* Content */}
      <div className="h-full">
        {/* header */}
        <h3 className="font-bold text-xl my-10">{item.name}</h3>
        {/* paragraph */}
        <p className="text-base mb-20">
          {item.description.split(/\s+/).slice(0, 20).join(" ")}
        </p>
        {/* Quantity */}
        <div className=" w-[98px] h-6 text-sm text-white mb-8">
          {item.available <= 5 ? (
            <div className=" rounded-3xs bg-coral-200 shadow-[5px_5px_20px_rgba(255,_210,_178,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-coral-100 flex justify-center items-center gap-x-[3px] text-[14px]">
              <span>Only</span>
              <span>{item.available}</span>
              <span>left</span>
            </div>
          ) : (
            <div className=" rounded-3xs bg-limegreen-200 shadow-[5px_5px_20px_rgba(196,_255,_202,_0.5)] box-border w-[99px] h-[25px] border-[1px] border-solid border-limegreen-100 flex justify-center items-center gap-x-[3px] text-[14px]">
              <span>{`Available`}</span>
            </div>
          )}
        </div>
        {/* cart */}
        <div className="flex">
          {/* Price */}
          <div className="flex-1">
            <b className="text-xl">{item.price}</b>
          </div>
          {/* Cart */}
          <div className="mr-10 space-x-4">
            <img
              className="w-[28] h-[26] cursor-pointer"
              src="/src/assets/small-cart.png"
              alt=""
            />
            {/* Favourite */}
            <img
              className="w-[28] h-[26] cursor-pointer"
              src="/src/assets/small-love.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard