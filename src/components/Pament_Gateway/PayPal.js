import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { GoCheck } from "react-icons/go";

function PayPal() {
  const plan1 = 15;
  const [handlePayPalVisibility, setHandlePayPalVisibility] = useState(false);
  return (
    <div>
      <div className="bg-[#FAFAFA] p-8  ">
        <div className=""></div>
        <div className="flex flex-col md:flex-row  items-center   m-auto justify-center">
          <div className="cardd m-4 shadow-md border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center    hover:border-[#165461]  ">
            <div className="text-[#22616C] font-semibold mt-4">Basic</div>
            <div>
              <span className="text[#222222] font-bold text-[40px] mt-4 ">
                ${plan1}
              </span>
              /month
            </div>
            <div className="mt-2 text-[15px] font-semibold">Billed Monthly</div>
            <hr className="mt-4" />
            <div className="mt-4">
              <button
                className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                style={{ border: "1px solid #215E6A" }}
                onClick={() =>
                  setHandlePayPalVisibility(!handlePayPalVisibility)
                }
              >
                {/* <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                    token={handleToken}
                    name=""
                    panelLabel={`Donate`}
                    currency="USD"
                    amount={plan1 * 100}
                    className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                    style={{ border: "1px solid #215E6A" }}
                  >
                    Buy Package
                  </StripeCheckout> */}
                Buy Package
              </button>
              {handlePayPalVisibility ? (
                <div className="mt-4">
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AcGMBOqvQyzgLnkyQdWPDx8l6yK5bXbOmeG2lyWQEpCQQdxMB0OTlnEOIRUI7fLjZgx5XCu6EVvMzU06",
                    }}
                  >
                    <PayPalButtons />
                  </PayPalScriptProvider>
                </div>
              ) : null}
            </div>
            <hr className="mt-4" />
            <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
              <div className="">
                <GoCheck />
              </div>
              <div className="ml-2">Deploy 5 websites</div>
            </div>
            <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
              <div className="">
                <GoCheck />
              </div>
              <div className="ml-2">10 database account</div>
            </div>
            <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
              <div className="">
                <GoCheck />
              </div>
              <div className="ml-2">Free SSL Support</div>
            </div>
            <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
              <div className="">
                <GoCheck />
              </div>
              <div className="ml-2">Support languages HTML & PHP</div>
            </div>
            {/* <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">10 Photo Assets</div>
              </div> */}
            <hr className="mt-4" />
            <div className=" mt-4 text-left">Dauqu</div>
            <div className="mt-2 text-left">0% transaction fee</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayPal;
