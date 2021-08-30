'use strict'
const events=require('./events')
require('./driver.js')
require('./vendor.js')
let time=new Date().toString()
//pickup
events.on('pickup',async(payload)=>{
let obj={
event:'pickup',
     time:time,
     payload:payload

}
let orderId=payload

console.log(obj)
  await events.emit('picked up',orderId) 


})

//transit 
events.on('in-transit',async(payload)=>{
    let obj={
        event:'in-transit',
             time:time,
             payload:payload
        
        }
        let orderId=payload
        
        console.log(obj)
 await events.emit('transit',orderId)

})
//deliverd
  events.on('delivered',async(payload)=>{
    let obj={
        event:'delivered',
             time:time,
             payload:payload
        
        }
        let orderId=payload
        
        console.log(obj)
await events.emit('vendor',orderId)




})
