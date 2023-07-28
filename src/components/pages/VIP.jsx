import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, fx, food } from "../icons";

function VIP() {
  const data = [
    {
      name: "Private Chef",
      number: "+254115144146",
      message: "Hello RapidExpress 😊 I need a private chef 👨‍🍳",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "Dinner Reservations",
      number: "+254115144146",
      message: "Hello RapidExpress 😊 I need a dinner reservation 🍽️",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Table Reservation",
      number: "+254115144146",
      message: "Hello RapidExpress 😊 I need a table reservation 🍽️",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Luxury Transportation",
      number: "+254115144146",
      message: "Hello RapidExpress 😊 I need luxury transportation 🚙",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Luxury Villas",
      number: "+254115144146",
      message: "Hello RapidExpress 😊, I need a luxury villa 🏠",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    
  ];
  return (
    <div className="activities">
      <h2>VIP</h2>
      <div className="Tabs-container">
        {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <div className="Tab-item-wellness">
              <div>{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default VIP;
