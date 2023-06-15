/*********************************************************\
* Author: Juwan Jeremiah                                  *
* Date: 06/15/2023                                        *
* Environment: VSCODE                                     *
* Project Title: Metric Unit Converter Web App            *
* Description: User can input a value and it will convert *
*              the value from meters to feet, liters to   *
*              gallons and kilos to pounds simultaneously *
\*********************************************************/

const convertBtn= document.getElementById("convert-btn")
const inputEl= document.getElementById("input-el")
const inputFromLocalStorage= localStorage.getItem("inputArr")
const lengthConversion = 3.280840
const lengthOutput=document.getElementById("lengthOutput")
const volumeConversion = 0.264172
const volumeOutput=document.getElementById("volumeOutput")
const massConversion = 2.204620
const massOutput=document.getElementById("massOutput")

convertBtn.addEventListener("click", function(){
    let baseValue1 = inputEl.value
    lengthOutput.innerHTML= `
        ${baseValue1} meters = ${(baseValue1*lengthConversion).toFixed(3)} feet 
        | ${baseValue1} feet = ${(baseValue1/lengthConversion).toFixed(3)} meters
    `
    let baseValue2 = inputEl.value
    volumeOutput.innerHTML= `
        ${baseValue2} liters = ${(baseValue2*volumeConversion).toFixed(3)} gallons 
        | ${baseValue2} gallons = ${(baseValue2/volumeConversion).toFixed(3)} liters
    `
    let baseValue3 = inputEl.value
    massOutput.innerHTML= `
        ${baseValue3} kilos = ${(baseValue3*massConversion).toFixed(3)} pounds 
        | ${baseValue3} pounds = ${(baseValue3/massConversion).toFixed(3)} kilos
    `
})