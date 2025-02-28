import "@/styles/sprite-animation.css";
export const SpriteAnimation = () => {
  return (
    <>
      <div className="absolute bg-1 top-0 bottom-0 left-0 right-0"></div>
      <div className="absolute bg-2 top-0 bottom-0 left-0 right-0"></div>
      <div className="absolute bg-3 top-0 bottom-0 left-0 right-0"></div>
      <div className="absolute bg-4 top-0 bottom-0 left-0 right-0"></div>
      <div className="absolute bg-5 top-0 bottom-0 left-0 right-0"></div>
      {/* <div className="sprite-renderer bee"></div> */}
      <div className="run flex items-end h-full mb-7">
        <div className="bunny"></div>
        <div className="chicken"></div>
        <div className="radish"></div>
        <div className="rock1"></div>
        <div className="rock2"></div>
        <div className="rock3"></div>
        <div className="trunk"></div>
        {/* <div className="rino"></div> */}
        {/* <div className="chameleon"></div> */}
        {/* <div className="pig"></div> */}
      </div>
      <div className="absolute h-8 w-full left-0 right-0 bottom-0 overflow-hidden flex items-center">
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        <div className="ground h-full w-[150px]"></div>
        {/* <div className="ground h-full w-[80px]"></div>
      <div className="ground h-full w-12"></div> */}
      </div>
    </>
  );
};
