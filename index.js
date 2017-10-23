// Code your solution in this file!


function logDriverNames(drivers){
  drivers.forEach(callback)
}

const callback = function(el, i, arr){
  console.log(`${el.name}`)
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach(function(driver){
    if(driver.hometown === hometown){
      console.log(`${driver.name}`)
    }
  })
}

const numSorter= function(num1, num2){
  return num1.revenue - num2.revenue
}
function driversByRevenue(drivers){
  let newDrivers = drivers

  return newDrivers.sort(numSorter)
}
