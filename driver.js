'use strict'

const events=require('./events')

events.on('picked up',driverFunction)

  function driverFunction(orderId){
      
      setTimeout(() => {
        console.log(`DRIVER: picked up ${orderId.orderId}`)
        
    }, 100);
}
//listen to tranist

events.on('transit',DriverdFunction)

 function DriverdFunction(orderId){
    setTimeout(() => {
        console.log(`DRIVER:  delivered up ${orderId.orderId}`)
        
    }, 1000);
}
