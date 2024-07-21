import React from "react";

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6 p-4">
      {/*card */}
      <div className=" rounded-xl relative ">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            Time To!, Eat Piite!!
          </p>
          <p className="px-2"> Throught 8/26</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl  "
          src="https://www.myalbanianfood.com/wp-content/uploads/2017/03/Albanian-Spinach-Pie-1300x731.jpg"
          alt="card-1"
        />
      </div>

      {/*card */}
      <div className=" rounded-xl relative ">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            <span className="text-orange-500">New!</span> Sun is Out Valon's
            Sujuk is out too
          </p>
          <p className="px-2"> 2 Eggs And Sujuk</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl  "
          src="https://4.bp.blogspot.com/_vbIhnhWcBzg/TRuRjcZVM1I/AAAAAAAAAYo/7Wf_hdx73fU/s1600/Sucuklu%2BYumurta%2B007.jpg"
          alt="card-2"
        />
      </div>
      {/*card */}
      <div className=" rounded-xl relative ">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            We Deliver Desserts Too
          </p>
          <p className="px-2"> Tasty Treats</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl  "
          src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card-"
        />
      </div>
    </div>
  );
};
