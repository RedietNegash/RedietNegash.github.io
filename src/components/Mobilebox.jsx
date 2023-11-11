import React from "react";

const MobileBox = ({ imageSrc, altText }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <img className="w-full h-auto" src={imageSrc} alt={altText} />
    </div>
  );
};

const MobilePreivew = () => {
  return (
    <div className="flex flex-wrap">
      <MobileBox imageSrc="https://placekitten.com/200/300" altText="Cat 1" />
      <MobileBox imageSrc="https://placekitten.com/201/301" altText="Cat 2" />
      <MobileBox imageSrc="https://placekitten.com/202/302" altText="Cat 3" />
      <MobileBox imageSrc="https://placekitten.com/203/303" altText="Cat 4" />
    </div>
  );
};

export default MobilePreivew;
