import React from "react";
import "../assets/css/solarsystem.css";
import python from "../assets/images/python5.svg";
import react from "../assets/images/react.svg";
import angular from "../assets/images/angular.svg";
import css from "../assets/images/css.svg";
import dart from "../assets/images/dart.svg";
import js from "../assets/images/js.svg";
import node from "../assets/images/node.svg";
import mongo from "../assets/images/mongo.svg";
import flutter from "../assets/images/flutter.svg";
import vue from "../assets/images/vue.svg";
import laravel from "../assets/images/laravel.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
import django from "../assets/images/django.svg";
import spring from "../assets/images/spring3.svg";
import docker from "../assets/images/docker.svg";
import sql from "../assets/images/sql.svg";
import c from "../assets/images/c.svg";
import db from "../assets/images/db.svg";
import main from "../assets/images/main.png";
import kotlin from "../assets/images/kotlin.svg";
function SolarSystem() {
  return (
    // <div className="maindiv">
    //   <div className="proton">
    //     <img src={js} className="w-[40px] rounded-full" />
    //   </div>
    //   <div className="electron">
    //     <img src={react} className="w-[40px] rounded-full" alt="" />
    //   </div>
    // </div>
    <div className="w-full min-h-[60vh] flex items-center justify-center z-0">
      <div className="w-[300px] h-[300px] relative flex items-center justify-center">
        <div className="w-[60px] h-[60px] absolute top-[130px] left-[130px]">
          <img src={main} className="w-[60px] rounded-full" />
        </div>
        <div className="electron w-[220px] flex  ">
          <img src={react} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electronOne w-[350px] flex  ">
          <img src={angular} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electrontwo w-[400px] flex  ">
          <img src={css} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electronthree w-[500px] flex  ">
          <img src={python} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electronfour w-[580px] flex  ">
          <img src={dart} className="w-[40px]  " alt="" />
        </div>
        <div className="electronfive w-[680px] flex  ">
          <img src={flutter} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electronsix w-[750px] flex  ">
          <img src={spring} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electronseven w-[830px] flex  ">
          <img src={c} className="w-[40px] rounded-full" alt="" />
        </div>
        <div className="electronnine w-[910px] flex  ">
          <img src={js} className="w-[40px] rounded-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
