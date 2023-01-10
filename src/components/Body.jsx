import React, { useState } from "react";
import img from "../assets/images/ar.png";
import img1 from "../assets/images/gii.png";
import img2 from "../assets/images/nf.png";
import img3 from "../assets/images/en.png";
import img4 from "../assets/images/sl.png";
import { AiFillEye } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoImagesSharp } from "react-icons/io5";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import {
  FaGooglePlay,
  FaMobile,
  FaEdit,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import { AiFillSetting, AiFillDollarCircle, AiFillStar } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { BiCodeAlt, BiLink } from "react-icons/bi";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { MdFormatQuote } from "react-icons/md";
import user from "../assets/images/user.png";
import user2 from "../assets/images/user2.png";
import { FiMonitor } from "react-icons/fi";
import { GiElectric } from "react-icons/gi";
import { GrAmazon, GrStatusGood } from "react-icons/gr";
import { BsCloudDownloadFill } from "react-icons/bs";
import { SiAppstore } from "react-icons/si";
import run from "../assets/images/run.png";
import trust from "../assets/images/trust.png";
import anl from "../assets/images/anl.png";
import lock from "../assets/images/lock.png";
import bgg from "../assets/images/bgg.png";
import bg from "../assets/images/bg.png";
import back from "../assets/images/back.png";
import "../assets/css/Body.css";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import ImgSlider from "./ImgSlider";
import ss2 from "../assets/images/ss2.png";
import ss5 from "../assets/images/s_s11.png";
import ss3 from "../assets/images/s_s13.png";
import Icons_slider from "./Icons_slider";
import axios from "axios";
import { API } from "./Constant";
import { Link } from "react-router-dom";

function Body() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const [plans, setPlans] = useState([]);
  const handlePlans = async () => {
    try {
      const res = await axios.get(`${API}/plans`);
      setPlans(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePlans();
  }, []);

  // code for copy to clipboard
  // const copyToClipboard = (e) => {
  //   var textField = document.createElement("textarea");
  //   textField.innerText = e;
  //   document.body.appendChild(textField);
  //   textField.select();
  //   document.execCommand("copy");
  //   textField.remove();
  // };

  return (
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
      {" "}
      <div className="">
        <div className="imagecontiner relative sm:top-0">
          <div
            style={{
              position: "relative",
              top: "-190px",
              margin: "auto",
              borderRadius: "8px",
              width: "80%",
            }}
            alt=""
            className="backimg  "
          >
            <Slider />
          </div>
        </div>

        <div>
          <div className="p-2">
            <Icons_slider />
          </div>
        </div>
        {/* testimonials contet  */}
        <div className="bg-[#FAFAFA] items-center p-8 xl:p-16   ">
          <div className="text-[#333333] md:text-[40px] flex justify-center font-bold mb-6">
            Testimonials
          </div>
          <div className="flex p-4 flex-col md:flex-row justify-evenly items-center   m-auto pt-8 w-full">
            <div className="card md:m-2  md:mt:0 mt-4 md:w-96  w-78  m-auto bg-base-100 ">
              <figure className="px-10 pt-10">
                <BsCloudDownloadFill size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">10K Downloads</h2>
                <p>They all are satisfied with our service 👍</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            <div className="card md:m-2 md:mt:0 mt-4  md:w-96  w-78 bg-base-100 ">
              <figure className="px-10 pt-10">
                <FaUsers size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">10K User's</h2>
                <p>They all are satisfied with our service 👍</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            <div className="card md:m-2 md:mt:0 mt-4 md:w-96  w-78 bg-base-100 ">
              <figure className="px-10 pt-10">
                <GiElectric size={50} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Instant Solution</h2>
                <p>They all are satisfied with our service 👍</p>
                {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* middle content */}
        <div className="bg-[#FAFAFA] items-center p-8 xl:p-16   ">
          <div className="items-center flex justify-center">
            <AiFillEye
              className="shadow-sm"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="text-[#333333] md:text-[40px] flex justify-center font-bold mb-6">
            Lets See How it Works
          </div>
          <div className="flex flex-col md:flex-row justify-evenly     items-stretch m-auto pt-8 w-full">
            <div className="bg-[#FFFFFF] p-3 xl:p-6 text-center items-center w-[300px] md:m-0 m-auto   my-5 md:my-0 flex flex-col ">
              <div className="bg-[#FEF4F1] p-6 m-4">
                <BiCodeAlt size={30} />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Get Code
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow ">
                Code will get from Github: This step involves pulling the source
                code for the admin panel from a Github repository. This allows
                the panel to be easily updated and maintained, as well as
                allowing multiple developers to collaborate on the project.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] border-2 border[#588992] p-2 text-[#588992] font-semibold hover:bg-[#165461] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center w-[300px] md:m-0 m-auto my-5 md:my-0 flex flex-col">
              <div className="bg-[#E6FAF4] p-6 m-4">
                <IoImagesSharp size={30} />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Create Image
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow flex items-end flex-col">
                Create Docker image in backend: Next, the source code is used to
                create a Docker image, which is essentially a lightweight,
                portable version of the admin panel that can be run on any
                machine that has Docker installed. This step allows the panel to
                be easily deployed to a variety of different environments.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center w-[300px] md:m-0 m-auto my-5 md:my-0 flex flex-col">
              <div className="bg-[#FEF7E7] p-6 m-4">
                <FaDocker size={30} />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Docker Container
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow ">
                Run Container: After the Docker image is created, the next step
                is to run a container using the image. A container is a running
                instance of the image, and it allows the admin panel to be
                accessed and used by the user.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF] hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF]  p-3 xl:p-6 text-center items-center w-[300px] md:m-0 m-auto my-5 md:my-0 flex flex-col">
              <div className="bg-[#F5E8FE] p-6 m-4">
                <RiSecurePaymentFill size={30} />
              </div>
              <div className="text-[20px] font-bold text-[#333333] mt-2">
                Proxy Link
              </div>
              <div className="text-[17px] text-justify text-[#888888] mt-2 grow">
                Connect to domain with proxy: Once the container is running, the
                final step is to connect it to a domain and proxy. A domain is a
                unique name that identifies the admin panel on the internet,
                while the proxy is used to route traffic to the container
                running the panel. This allows the user to access the panel by
                navigating to the domain in their web browser.
              </div>
              <div className=" mt-2">
                <button className="bg-[#FFFFFF]  hover:bg-[#165461] hover:text-white border-2 border[#588992] p-2 text-[#588992] font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* download the app content  */}
        <div className="w-full m-auto bg-[#FFFFFF]    lg:flex p-[30px] xl:p-[50px]">
          <div className="lg:w-1/2 w-full lg:m-4 m-0">
            <img
              src={ss5}
              style={{ width: "100%" }}
              alt=""
              className="p-2 bg-slate-500 rounded "
            />
          </div>
          <div className="lg:w-1/2 md:pt-0 pt-6 w-full lg:m-4 m-0">
            <img
              src={ss3}
              style={{ width: "100%" }}
              alt=""
              className="p-2 bg-slate-500 rounded "
            />
          </div>
        </div>
        {/* services content */}
        <div className="bg-[#FAFAFA] p-3 xl:p-8">
          <div className="items-center flex justify-center">
            <AiFillSetting
              className="shadow-sm"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="w-[70%] m-auto text-center md:text-[40px]  text-[#333333] mt-8 font-bold">
            Easily Integrate with your favorite Services
          </div>
          <div className="flex flex-col md:flex-row mt-8 p-8 items-center   m-auto  justify-evenly">
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px]   my-5 md:my-0">
              <div className="pb-4  m-auto  ">
                <AiFillBulb
                  style={{
                    color: "#F9A901",
                    fontSize: "40px",
                    background: "#FEF7E6",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-[20px] text-center pb-2 font-bold">
                  Creative Design
                </div>
                <div className="text-[#808080] text-center">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] text-center hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px]  my-5 md:my-0">
              <div className=" pb-4 m-auto  ">
                <FaMobile
                  style={{
                    color: "#48CB8A",
                    fontSize: "40px",
                    background: "#E8FAF4",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center text-[20px] font-bold">
                  Fully Responsive
                </div>
                <div className="text-[#808080] text-center">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px]  my-5 md:my-0">
              <div className="pb-4 m-auto  ">
                <FaEdit
                  style={{
                    color: "#831FFE",
                    fontSize: "40px",
                    background: "#F3E8FF",
                    padding: "4px",
                    margin: "auto",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center text-[20px] font-bold">
                  Creative Design
                </div>
                <div className="text-[#808080] text-center">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-8 p-8 items-center   m-auto  justify-evenly">
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px]  my-5 md:my-0">
              <div className="pb-4 m-auto  ">
                <FaDatabase
                  style={{
                    color: "#F78F71",
                    fontSize: "40px",
                    background: "#FEF4F1",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center text-[20px] font-bold">
                  Server Solutions
                </div>
                <div className="text-[#808080] text-center">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4 text-center">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px]  my-5 md:my-0">
              <div className="pb-4 m-auto ">
                <BiLink
                  style={{
                    color: "#165461",
                    fontSize: "40px",
                    background: "#E6EEF0",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center  text-[20px] font-bold">
                  Quick Link
                </div>
                <div className="text-[#808080] text-center ">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4 text-center ">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="card flex bg-[#FFFFFF] p-6 w-[350px]  my-5 md:my-0">
              <div className="pb-4 m-auto">
                <BsFillFileEarmarkCodeFill
                  style={{
                    color: "#1D86FF",
                    fontSize: "40px",
                    background: "#E6F3FF",
                    padding: "4px",
                  }}
                />
              </div>
              <div className="ml-4">
                <div className="text-[#5C5C5C] text-center  text-[20px] font-bold">
                  Well Documented
                </div>
                <div className="text-[#808080] text-center ">
                  Lorem ipsum dolor sit tus obcaecati reiciendis laborum?
                </div>
                <div className="mt-4 text-center ">
                  <button
                    className="bg-[#FFFFFF] p-2 text-[#6A6A6A] hover:bg-[#165461] hover:text-white"
                    style={{ border: "1px solid #808080" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* plan choose content */}
        <div className="bg-[#FAFAFA] p-8  " id="plans">
          <div className="items-center flex justify-center">
            <AiFillDollarCircle
              className="shadow-sm"
              style={{
                color: "#165461",
                fontSize: "50px",
                border: "10px solid White",
              }}
            />
          </div>
          <div className="w-[70%] m-auto text-center md:text-[40px] text-[#333333] mt-8 font-bold">
            Choose our price plan
          </div>
          <div className=""></div>
          <div className="flex flex-col md:flex-row  items-center   m-auto justify-center">
            {/* map funtion */}
            {plans.map((plan, key) => (
              <>
                <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
                  <div className="text-[#22616C] font-semibold mt-4">
                    {plan.plan_name}
                  </div>
                  <div>
                    <span className="text[#222222] font-bold text-[40px] mt-4 ">
                      ${plan.plan_price}
                    </span>
                    /{plan.billing_cycle}
                  </div>
                  <div className="mt-2 text-[15px] font-semibold">
                    {plan.plan_title}
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-4">
                    <Link to={`/cart/${plan.plan_slug}`}>
                      <button
                        className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                        style={{ border: "1px solid #215E6A" }}
                      >
                        Buy Package
                      </button>
                    </Link>
                  </div>
                  <hr className="mt-4" />
                  <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                    <div className="">
                      <GoCheck />
                    </div>
                    <div className="ml-2">{plan.plan_info_one}</div>
                  </div>
                  <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                    <div className="">
                      <GoCheck />
                    </div>
                    <div className="ml-2">{plan.plan_info_two}</div>
                  </div>
                  <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                    <div className="">
                      <GoCheck />
                    </div>
                    <div className="ml-2">{plan.plan_info_three}</div>
                  </div>
                  <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                    <div className="">
                      <GoCheck />
                    </div>
                    <div className="ml-2">{plan.plan_info_four}</div>
                  </div>
                  {/* <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">10 Photo Assets</div>
              </div> */}
                  <hr className="mt-4" />
                  <div className=" mt-4 text-left">Dauqu</div>
                  {/* <div className="mt-2 text-left">
                    {plan.plan_transaction_fee}% transaction fee
                  </div> */}
                </div>
              </>
            ))}

            {/* <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
              <div className="text-[#22616C] font-semibold mt-4">Standard</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan2}
                </span>
                /month
              </div>
              <div className="mt-2 text-[15px] font-semibold">
                Billed Monthly
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                  onClick={() => {
                    window.open("https://buy.stripe.com/3csdRz9aCbFI1RC145");
                  }}
                >
                  Buy Package
                </button>
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Deploy 15 websites</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">25 Databases accounts</div>
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
                <div className="ml-2">HTML, PHP, Nodejs, Python</div>
              </div>
              <hr className="mt-4" />
              <div className=" mt-4 text-left">Dauqu</div>
              <div className="mt-2 text-left">0% transaction fee</div>
            </div>
            <div className="cardd m-4  border w-[310px] mt-8 p-6 bg-[#FFFFFF] text-center  hover:scale-110 hover:transition-all hover:border-[#165461]  ">
              <div className="text-[#22616C] font-semibold mt-4">Pro</div>
              <div>
                <span className="text[#222222] font-bold text-[40px] mt-4 ">
                  ${plan3}
                </span>
                /month
              </div>
              <div className="mt-2 text-[15px] font-semibold">
                Billed Monthly
              </div>
              <hr className="mt-4" />
              <div className="mt-4">
                <button
                  className="p-2 font-semibold text-[#26606B] hover:bg-[#165461] hover:text-white "
                  style={{ border: "1px solid #215E6A" }}
                  onClick={() => {
                    window.open("https://buy.stripe.com/eVabJr0E6cJM2VG9AC");
                  }}
                >
                  Buy Package
                </button>
              </div>
              <hr className="mt-4" />
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Unlimited websites</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Unlimited databases accounts</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Free SSL</div>
              </div>
              <div className="text-[#383838] flex items-center  font-semibold text-left mt-4">
                <div className="">
                  <GoCheck />
                </div>
                <div className="ml-2">Support all languages</div>
              </div>
              <hr className="mt-4" />
              <div className=" mt-4 text-left">Dauqu</div>
              <div className="mt-2 text-left">0% transaction fee</div>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Body;
