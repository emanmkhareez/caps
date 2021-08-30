"use strict";

const event = require("./events.js");
require("./driver.js");
require("./vendor.js");

event.on("pickup", (payload) => {
  event.on("in-transit", () => {
  
    console.log(`EVENT { event: 'in-transit',
    time: 2020-03-06T18:27:18.738Z,
    payload:
     { store: ${process.env.STORE_NAME},
       orderID: ${payload.orderId},
       customer: ${payload.customer},
       address: ${payload.address}`);
  });
});