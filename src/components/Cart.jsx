import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { BiCreditCard } from "react-icons/bi";
import SecondHeader from "./SecondHeader";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStripeS } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { SiRazorpay } from "react-icons/si";
import axios from "axios";
import { API } from "./Constant";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import ck from "../assets/images/ck.svg";

function Cart() {
  const [hiddendiv, setHiddendiv] = useState(false);
  // scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const { slug } = useParams();
  const [cart, setCart] = useState({});
  // get plan by slug
  const getPlanBySlug = async (slug) => {
    await axios
      .get(`${API}/plans/${slug}`)
      .then((res) => {
        setCart(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPlanBySlug(slug);
  }, [slug]);

  const paypal_payment = cart.plan_price;
  console.log(paypal_payment);
  const [successPayment, setSuccessPayment] = useState([]);
  // code to post success payment response to backend
  const handleSuccess = (details) => {
    axios
      .post(`${API}/orders`, {
        order_id: details.id,
        order_by: details.payer.name.given_name,
        date: details.create_time,
        status: details.status,
        phone_number: details.payer.phone.phone_number.national_number,
        email: details.payer.email_address,
        payment_Status: details.purchase_units[0].payments.captures[0].status,
        product_slug: cart.plan_slug,
        product_price: details.purchase_units[0].amount.value,
        city: details.payer.address.admin_area_2,
        country: details.payer.address.country_code,
        order_status: details.status,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="">
        <SecondHeader />
      </div>

      <div className="bg-[#fbfbfb] md:p-6 p-4 mt-16">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.7, stiffness: 500 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="md:p-10 p-4 bg-[white]  m-auto   shadow-xl lg:w-[1000px] w-full">
            <div className="p-6 m-auto flex items-center justify-between">
              <div className="md:w-[200px] w-auto   text-[22px] font-bold text-[#393C3F]">
                Cart
              </div>
              <div className="flex items-center">
                <div className="md:w-[70px] w-auto text-[#626262] cursor-pointer">
                  <BsHandbag />
                </div>
              </div>
            </div>
            <div className="md:flex mt-2 p-4">
              <div className="md:w-1/2 w-[300px] md:m-2 m-auto md:pb-0 pb-12 md:p-6 p-2">
                <div className="text-[22px] p-2 text-[#393C3F] font-semibold">
                  <div className="">Shopping Cart</div>
                </div>
                <div className="">
                  <div className="cardd shadow-md border md:w-[270px]  w-full md:mt-8   md:p-6 p-4 bg-[#FFFFFF] text-left   ">
                    <div className="text-[#22616C] font-semibold mt-4">
                      {cart.plan_name}
                    </div>
                    <div>
                      <span className="text[#222222] font-bold text-[40px] mt-4 ">
                        ${cart.plan_price}
                      </span>
                      /{cart.billing_cycle}
                    </div>
                    <hr className="mt-4" />
                    <div className="text-[#383838] font-semibold mt-6">
                      {cart.plan_info_one}
                    </div>
                    <div className="text-[#383838] font-semibold mt-6">
                      {cart.plan_info_two}
                    </div>
                    <div className="text-[#383838] font-semibold mt-6">
                      {cart.plan_info_three}
                    </div>
                    <div className="text-[#383838] font-semibold mt-6">
                      {cart.plan_info_four}
                    </div>
                  </div>
                </div>
                <div className="mt-8  flex items-center  ">
                  <Link to="/">
                    <div className="w-[200px]  text-[17px] font-semibold hover:text-[#165461]">
                      Continue Shopping
                    </div>
                  </Link>
                  <div className="text-[17px] font-semibold">
                    Total -{" "}
                    <span className=" text-[20px] font-bold">
                      ${cart.plan_price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full m-2   text-[#393C3F] font-semibold md:p-6   bg-[#FAFAFA] rounded-[5px]">
                <div className="text-center items-center">
                  <button
                    className="btn btn-success w-full font-bold    "
                    onClick={() => setHiddendiv(!hiddendiv)}
                  >
                    Checkout
                  </button>
                </div>
                {hiddendiv ? (
                  <>
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.7, stiffness: 500 }}
                      className="mt-12"
                    >
                      <PayPalScriptProvider>
                        <PayPalButtons
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: paypal_payment,
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove={(data, actions) => {
                            return actions.order
                              .capture()
                              .then(function (details) {
                                handleSuccess(details);
                                console.log(details);
                                alert(
                                  "Transaction completed by " +
                                    details.payer.name.given_name
                                );
                                // Call your server to save the transaction
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                        />
                      </PayPalScriptProvider>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <div className="mt-16">
                      <img src={ck} alt="" srcset="" />
                    </div>
                    <div className="mt-14 text-center   ">
                      <span className="text-[20px]">Clcik&nbsp;</span>
                      <span className="font-bold text-[20px]">Checkout</span>
                      <span className="text-[20px]"> to purchase Plan</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cart;
