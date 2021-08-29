"use strict";

const event = require("./events.js");
require('dotenv').config();

event.on("pickup", pickUpOrder);

function pickUpOrder(payload) {
  console.log(`EVENT { event: 'pickup',
    time: 2020-03-06T18:27:17.732Z,
    payload:
     { store: ${process.env.STORE_NAME},
       orderID: ${payload.orderId},
       customer: ${payload.customer},
       address: ${payload.address} }}`);
       console.log(`Driver: picked up ${payload.orderId}`);
  setTimeout(() => {
    event.emit("in-transit", payload);
  }, 1000);
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    event.emit("delivered", payload);
  }, 3000);
}