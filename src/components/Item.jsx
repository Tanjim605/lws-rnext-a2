import MinusButtonSvg from "./MinusButtonSvg";
import PlusButtonSvg from "./PlusButtonSvg";

export default function Item({ imageSrc, imageAlt, name, price }) {
  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center mr-3">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-10 h-10"
          ></img>
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <div>
        <PlusButtonSvg />
        <MinusButtonSvg />
      </div>
    </div>
  );
}
