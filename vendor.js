'use strict'
require('dotenv').config()
const events=require('./events')
const STORE_NAME =process.env.STORE_NAME
  const faker=require('faker')


setInterval(()=>{

    let order={
        store:STORE_NAME,
        orderId:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
       
    }
    events.emit('pickup',order)
    events.emit('in-transit',order)
    events.emit('delivered',order)

},5000)

events.on('vendor',vendorFunction)

 function vendorFunction(orderId){
    setTimeout(() => { 
        console.log(`VENDOR: Thank you for delivering😍 ${orderId.orderId}`)
        
    }, 1000);
}
