import React from "react";
import Razorpay from "../assets/Razorpay.png";

const Payment = () => {
  const open = true;
  return (
    <>
      <section className="bg-white min-h-screen w-[400px] p-2 ">
        {/* LOGIN */}
        <div className="flex justify-evenly mt-2  ">
          <div className="flex flex-col justify-center items-center">
            <div>
              {" "}
              <button className="bg-blue-500 px-3 py-1 rounded-full font-bold text-white">
                {" "}
                1{" "}
              </button>
            </div>
            <div>
              <h3>Sign Up</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              {" "}
              <button className="bg-blue-500 px-3 py-1 rounded-full font-bold text-white">
                {" "}
                2{" "}
              </button>
            </div>
            <div>
              <h3>Subscribe</h3>
            </div>
            <div></div>
          </div>
        </div>
        <div className="text-center my-2 ">
          <h1 className="font-bold ">Select your Subcribtion plan</h1>
        </div>
        <div className=" flex justify-center flex-col items-center space-y-4">
          <div className="border-2 border-red-300 h-14 w-96 rounded-lg color">
            <div>
              <h6 className="bg-red-400 w-28 font-normal text-xs text-white ml-16 text-center rounded-b-md">
                Offer expirded
              </h6>
            </div>
            <div>
              <label className="flex justify-between items-center h-6 disabled:bg-red-400">
                <div className="">
                  <input
                 disabled={true}
                    type="checkbox"

                    name="select"
                    className="rounded-full w-6 h-6 ml-4 text-red-500 focus:ring-red-400 "
                  />
                  <span className="ml-2">12 Months Subscription</span>
                </div>
                <div>
                  <div className="mr-2">
                    <h5 className="text-xs">
                      Total{" "}
                      <span className="font-bold  text-lg"> &#8377; 99</span>
                    </h5>
                  </div>
                  <div className="mr-0">
                    <h4 className="text-xs ml-2"> &#8377; 30 /mo</h4>
                  </div>
                </div>
              </label>
            </div>
          </div>
          {/* Second */}
          <div className="border-2 border-red-300 h-14 w-96 rounded-lg visited:bg-green-600">
            <div>
              <h6 className="bg-green-400 w-28 font-normal text-xs text-white ml-16 text-center rounded-b-md  ">
                Recommended
              </h6>
            </div>
            <div >
              <label className="flex justify-between items-center h-6 cursor-pointer">
                <div className="">
                  <input
                    type="checkbox"
                    name="select"
                    className="rounded-full w-6 h-6 ml-4 text-green-500 focus:ring-green-400 "
                  />
                  <span className="ml-2">12 Months Subscription</span>
                </div>
                <div>
                  <div className="mr-2">
                    <h5 className="text-xs">
                      Total{" "}
                      <span className="font-bold  text-lg"> &#8377; 179</span>
                    </h5>
                  </div>
                  <div className="mr-0">
                    <h4 className="text-xs ml-2"> &#8377; 30 /mo</h4>
                  </div>
                </div>
              </label>
            </div>
          </div>
          {/* 6 Month */}
          <div className="border-2 border-red-300 h-14 w-96 rounded-lg ">
            <label className="flex justify-between items-center h-full cursor-pointer">
              <div className="">
                <input
                  type="checkbox"
                  name="select"
                  className="rounded-full w-6 h-6 ml-4 text-green-500 focus:ring-green-400 "
                />
                <span className="ml-2">6 Months Subscription</span>
              </div>
              <div>
                <div className="mr-2">
                  <h5 className="text-xs">
                    Total{" "}
                    <span className="font-bold  text-lg "> &#8377; 149</span>
                  </h5>
                </div>
                <div className="mr-0">
                  <h4 className="text-xs ml-2"> &#8377; 30 /mo</h4>
                </div>
              </div>
            </label>
          </div>
          {/* 3 Month */}
          <div className="border-2 border-red-300 h-14 w-96 rounded-lg">
            <label className="flex justify-between items-center h-full cursor-pointer">
              <div className="">
                <input
                  type="checkbox"
                  name="select"
                  className="rounded-full w-6 h-6 ml-4 text-green-500 focus:ring-green-400 "
                />
                <span className="ml-2">3 Months Subscription</span>
              </div>
              <div>
                <div className="mr-2">
                  <h5 className="text-xs">
                    Total{" "}
                    <span className="font-bold  text-lg"> &#8377; 99</span>
                  </h5>
                </div>
                <div className="mr-0">
                  <h4 className="text-xs ml-2"> &#8377; 33 /mo</h4>
                </div>
              </div>
            </label>
          </div>
          <hr className="border-1 w-96 border-black " />
          <div className="w-full ">
            <div className="flex justify-around items-center w-full ">
              {" "}
              <div>
                {" "}
                <h1>Subscription Free</h1>
              </div>
              <div>
                <h5> &#8377; 149</h5>
              </div>
            </div>
          </div>
          {/* Offer */}

          <div className="border-2 border-green-900 w-96 h-16 rounded-lg cursor-pointer" >
            <div className="flex justify-between items-center h-7 bg-green-300 ">
              <div>
                <h1 className="ml-4">Limited Offer</h1>
              </div>
              <div>
                <h2 className="mr-4">- &#8377; 18,401</h2>
              </div>
            </div>
            <div className="bg-green-300">
              <div >
                <div className="flex ml-4 "> 
                  <svg
                   className="w-8 p-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 12C4 7.58172 7.58172 4 12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.7611 22 17.2625 20.8796 19.0711 19.0711C19.4616 18.6805 19.4616 18.0474 19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6569 17.6569C16.208 19.1057 14.2094 20 12 20C7.58172 20 4 16.4183 4 12ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V6ZM21.7483 15.1674C21.535 15.824 20.8298 16.1833 20.1732 15.97C19.5167 15.7566 19.1574 15.0514 19.3707 14.3949C19.584 13.7383 20.2892 13.379 20.9458 13.5923C21.6023 13.8057 21.9617 14.5108 21.7483 15.1674ZM21.0847 11.8267C21.7666 11.7187 22.2318 11.0784 22.1238 10.3966C22.0158 9.71471 21.3755 9.2495 20.6937 9.3575C20.0118 9.46549 19.5466 10.1058 19.6546 10.7877C19.7626 11.4695 20.4029 11.9347 21.0847 11.8267ZM20.2924 5.97522C20.6982 6.53373 20.5744 7.31544 20.0159 7.72122C19.4574 8.127 18.6757 8.00319 18.2699 7.44468C17.8641 6.88617 17.9879 6.10446 18.5464 5.69868C19.1049 5.2929 19.8867 5.41671 20.2924 5.97522ZM17.1997 4.54844C17.5131 3.93333 17.2685 3.18061 16.6534 2.86719C16.0383 2.55378 15.2856 2.79835 14.9722 3.41346C14.6588 4.02858 14.9033 4.78129 15.5185 5.09471C16.1336 5.40812 16.8863 5.16355 17.1997 4.54844Z"
                      fill="#000000"
                    />
                  </svg>
                  <span>Offer valid till 25th March 2023</span>
                </div>
              </div>
            </div>
          </div>
          {/* Total */}
          <div className="flex justify-around w-full">
            <div>
              {" "}
              <h1 className="font-bold">
                Total <span className="text-sm">(incl.of 18% GST)</span>
              </h1>
            </div>
            <div>
              <h5 className="font-bold text-lg"> &#8377; 149</h5>
            </div>
          </div>
          {/* Proceed to pay */}
          <div className="flex justify-around w-full ">
            <div>
              <button className="border-2 border-black px-12 py-2">
                Cancel{" "}
              </button>
            </div>
            <div>
              <button className="bg-green-400 px-4 py-2">PROCEED TO PAY</button>
            </div>
          </div>
          {/* Rozarpay */}

          <div className="flex justify-start w-full ">
            <div>
              <img src={Razorpay} className="h-12" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
