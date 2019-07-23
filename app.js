const timeNodes = [...document.querySelectorAll("[data-time]")];
const seconds = timeNodes
.map(node => node.dataset.time)
.map(timeCode =>{
const [mins,secs] = timeCode.split(":").map(parseFloat)
return (mins*60) +secs
})
.reduce((total, seconds)=>{
return total + seconds})
console.log(seconds)
