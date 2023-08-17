import React, {useState} from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { ethers } from "ethers"
import {
  drink,
  dinner,
  taxi,
  plane,
  fx,
  scooter,
  scootersmall,
  bikesmall,
  bike,
  foodgrp,
  cryptobtc,
  hotel,
  boatsvg,
  groceries,
  packageicon,
  ksh,
  rocket,
  phone,
  battery,
  bed,
  boat,
  geek,
  fix,
  walletconnecticon,
  amazon,
  bookingicon,
  kes,
  cryptobtnnew,
  shopping,
  icongrup,
  icongroup,
  amazonpkgo,
  bankfx,
  renta,
  simcard,
  camera,
  laptop,
  sendcrypto,
  receivecrypto,
  dress,
  tshirt,
  shoe,
  flippers
} from "./icons";

function Home() {
  const data = [
    {
      name: "Groceries",
      number: "+254704642722 ",
      message: "Hello RapidExpress 😊 I need groceries 🧅",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
    
  ];

  return (
    <div className="container">
      <h4 style={{marginTop:"30px"}}>POPULAR SERVICES {rocket}</h4><br/><br/>
      <div className="Tabs-container">
      <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Food / drinks 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{foodgrp} </div>
              <div className="grid-right"> &nbsp;&nbsp; Food</div>
            </div>
          </ReactWhatsapp>
          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Food / drinks 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{foodgrp} </div>
              <div className="grid-right"> &nbsp;&nbsp; Drinks</div>
            </div>
          </ReactWhatsapp>


          {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <div className="Tab-item">
              <div className="grid-left">{item.image}</div>
              <div className="grid-right">{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Food / drinks 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{bed}</div>
              <div className="grid-right"> &nbsp;&nbsp; Accomodation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Food / drinks 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{plane}</div>
              <div className="grid-right"> &nbsp;&nbsp; Airport Transportation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Food / drinks 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{dinner} </div>
              <div className="grid-right"> &nbsp;&nbsp; Dinner Reservation</div>
            </div>
          </ReactWhatsapp>

     
         
       {/* <h4>RENT A {rocket}</h4> */}
       <ReactWhatsapp
              number="+254704642722 "
              message="Hello RapidExpress 😊 I need to rent a Scooter/ E-Bike/ Car/ Taxi /Boat 🚗"
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="flex-car-item">Scooter<br/>{scooter}</div>  
            <div className="flex-car-item">E-Bikes<br/>{bike}</div> 
            <div className="flex-car-item">{renta}</div> 
            <div className="flex-car-item">Car/Taxi<br/>{taxi}</div> 
            <div className="flex-car-item">Boat<br/>{boat}</div>    
          </div>
        </ReactWhatsapp>
        {/* {scooter}&nbsp; {bikesmall}&nbsp;&nbsp; {taxi}&nbsp; */}
        {/* <h4>HelloRE A {rocket}</h4> */}

{/*         
        <ReactWhatsapp
              number="+254704642722 "
              message={"Hello RapidExpress 😊 I need  ParcelDelivery / Hire a Tech Guru / Repair 🛠️"}
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="" ><p style={{background:"none"}}>{packageicon}<br/>Parcel <br/> Delivery </p></div> 
            <div className="" ><p style={{background:"none"}}>Hire <br/>{geek} <br/>Tech Guru</p></div> 
            <div className="" ><p style={{background:"none"}}>Hire <br/>{fix}<br/> Repair/FixIT</p></div>  */}
            {/* <div className="scooter"><p style={{background:"none"}}>Guru<br/>{geek}</p><p style={{background:"none"}}>Repair <br/>{fix}</p></div>      */}
          {/* </div>
        </ReactWhatsapp> */}
      
{/* 
        <h4 style={{marginTop:"30px"}}>24/7 BOOKINGS {bookingicon}</h4>
          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need  accomodation 🛌"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{bed}</div>
              <div className="grid-right"> Accomodation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need a dinner reservation 🍽️"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{dinner}</div>
              <div className="grid-right"> Dinner Reservation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Airport Transportation ✈️"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{plane}</div>
              <div className="grid-right"> Airport Transportation</div>
            </div>
          </ReactWhatsapp> */}

          <h4 style={{marginTop:"30px"}}>BANKING & FX {bankfx}</h4>
          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need  Cash & currency exchange 💰"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{ksh}</div>
              <div className="grid-right"> Cash. Currencies. Exchange</div>
            </div>
          </ReactWhatsapp>

        <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need to spend some crypto 💸"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{cryptobtnnew}</div>
              <div className="grid-right"> Spend Crytpo</div>
            </div>
          </ReactWhatsapp>
          <div className="shrink-container">
            <ReactWhatsapp
              number={"+254704642722 "}
              message={"Hello RapidExpress 😊 I need to spend some crypto 💸"}
              className="shrink"
            >
              <div className="bg">
                <div className="shrink">{sendcrypto}</div>
                <div className="shrink"> Send Crypto</div>
              </div>
            </ReactWhatsapp>

            <ReactWhatsapp
              number={"+254704642722 "}
              message={"Hello RapidExpress 😊 I need to spend some crypto 💸"}
              className="shrink"
            >
              <div className="bg">
              <div className="shrink">{receivecrypto}</div>
                <div className="shrink"> Receive Crytpo</div>
              </div>
            </ReactWhatsapp>
          </div>
          

          {/* <h4 style={{marginTop:"30px"}}>FAST SHOPPING {shopping}</h4>
          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need shopping 🛒"}
            className="whatsapp"
          >
            <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
              <div className="flex-car-item">{dress}</div> 
              <div className="flex-car-item">{tshirt}</div> 
              <div className="flex-car-item">{shoe}</div> 
              <div className="flex-car-item">{flippers}</div>
              <div className="flex-car-item" style={{marginTop:"0", width:"95px"}}>Buy now Delivered Now</div>  
          
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Tech gadgets 📱"}
            className="whatsapp"
          >
            <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
              <div className="flex-car-item">{phone}</div> 
              <div className="flex-car-item">{camera}</div> 
              <div className="flex-car-item">{battery}</div> 
              <div className="flex-car-item">{laptop}</div> 
              <div className="flex-car-item" style={{marginTop:"0", width:"95px"}}>Tech Gadgets</div>  
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need to purchase sim cards 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{simcard}</div>
              <div className="grid-right">Buy sim cards</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Package Delivery(Amazon US) 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON USA &#60;7 Days</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254704642722 "}
            message={"Hello RapidExpress 😊 I need Package Delivery(Amazon UK/EUR) 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON UK/EUR &#60;9Days</div>
            </div>
          </ReactWhatsapp> */}


      </div>
      
    </div>
  );
}

export default Home;
// caribean jinja Kigali north coast 