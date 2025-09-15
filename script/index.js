


function getElement(id){
    const element =document.getElementById(id);
    return element;
} 


const callsBtn = document.getElementsByClassName("calls-btn");



for(let callButton of callsBtn){ 
    callButton.addEventListener("click", function (){  
    
        const serviceName = callButton.parentNode.parentNode.parentNode.children[1].innerText
        // console.log(serviceName);
        const callNumber = callButton.parentNode.parentNode.parentNode.children[3].innerText

        // console.log(callNumber); 
        alert(`Calling ${serviceName} at ${callNumber}....`) 

            const coins = getElement("coins").innerText; 


           
           let decreaseCoins =parseInt(coins - 20);  

    getElement('coins').innerText =decreaseCoins 

    if(coins <= 20  ){
        alert("no more coins");
        return;
    } 



 const callHistory = getElement("cart-call-history");

    const callHistoryCart = document.createElement("div");

    



  const time = getElement("current-time").innerText= new Date().toLocaleTimeString()
 
   callHistoryCart.innerHTML=
   `

   <div class="bg-[#fafafa] flex mt-5 w-[425px] h-[84px] pt-4 pl-4  shadow-lg gap-44 " > 
   
      <div>
      <h2>${serviceName}</h2>
      <span>${callNumber}</span>

    </div>
  
    
    <h2>
    ${time}
    </h2> 
    
 
    
   
   </div>
     

   `;



    callHistory.append(callHistoryCart)




     

    }) 
    
    
}  


const heartBtn = document.getElementsByClassName("heart-btn")

for( let heartButton of  heartBtn){
      heartButton.addEventListener('click',function(){ 

        const heartIn = getElement('heart').innerText 
        // console.log(heartIn); 

        const heartIncrease = Number(heartIn) + 1;
        getElement('heart').innerText = heartIncrease;

      })

} 



document.getElementById('btn-clear')
.addEventListener("click", function(){ 
    const callHistory = getElement("cart-call-history")

callHistory.innerHTML = " "

})






















// document.getElementById("cart-btn-1")
// .addEventListener("click", function(e){
    

//     const serviceName = getElement("card-title-1").innerText 
//     const cardNumber = parseInt(getElement("card-number-1").innerText)
   
//     alert(`Calling ${serviceName} at ${cardNumber}`); 

//     const coins = getElement("coins").innerText; 
//     decreaseCoins = coins - 20; 

//     getElement('coins').innerText =decreaseCoins 

//     if(coins <= 20){
//         alert("no more coins");
//         return;
//     } 


//     const callHistory = getElement("cart-call-history");

//     const callHistoryCart = document.createElement("div");

//     const time = getElement("cart-call-history").innerText =
//           new Date().toLocaleTimeString()

//    callHistoryCart.innerHTML=
//    `

//    <div class="bg-[#fafafa] flex mt-5 w-[425px] h-[84px] pt-4 pl-4  shadow-lg gap-44 " > 
   
//       <div>
//       <h2>${serviceName}</h2>
//       <span>${cardNumber}</span>

//     </div>
   
//       <h2> ${time}</h2>
//    </div>
     

//    `;



//     callHistory.append(callHistoryCart)
// }); 





