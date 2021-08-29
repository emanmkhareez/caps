"use strict";

require("dotenv").config();
const faker = require("faker");
const events = require("./events.js");

events.on("delivered", (payload) => {
  console.log(`VENDOR: Thank you for delivering  ${payload.orderId}`);
  console.log(`EVENT { event: 'delivered',
  time:${new Date().toString()},
  payload:
   { store: ${process.env.STORE_NAME},
     orderID: ${payload.orderId},
     customer: ${payload.customer},
     address: ${payload.address}`);
});


setInterval(()=>{

    let order={
        store:process.env.STORE_NAME,
        orderId:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
       
    }
    events.emit('pickup',order)
    

},5000)
