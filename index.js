const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const pLength = document.getElementById("length")
const pVolume = document.getElementById("volume")
const pMass = document.getElementById("mass")

btnEl.addEventListener("click", function(){
    
    const num = inputEl.value
    const feet = Number(num)*3.2808
    const meters = Number(num)*0.3048
    const gallons = Number(num)*0.2641
    const liters = Number(num)*3.7854
    const pounds = Number(num)*2.2046
    const kilos = Number(num)*0.4535


    pLength.textContent = `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meters.toFixed(3)} meters`
    pVolume.textContent = `${num} liters = ${gallons.toFixed(3)} gallons | ${num} gallons = ${liters.toFixed(3)} liters`
    pMass.textContent = `${num} kilos = ${pounds.toFixed(3)} pounds | ${num} pounds = ${kilos.toFixed(3)} kilos`

})