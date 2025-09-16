


function getElement(id){
    const element =document.getElementById(id);
    return element;
} 


const callsBtn = document.getElementsByClassName("calls-btn");



for(let callButton of callsBtn){ 
    callButton.addEventListener("click", function (){  
    
        const serviceName = callButton.parentNode.parentNode.parentNode.children[1].innerText
     
        const callNumber = callButton.parentNode.parentNode.parentNode.children[3].innerText

   
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

    



  const currentTime = getElement("current-time").innerText = new Date().toLocaleTimeString()
 
   callHistoryCart.innerHTML=
   `

   <div class="bg-[#fafafa] flex mt-5 w-[400px] h-[84px] pt-4 pl-4  shadow-lg gap-44 " > 
   
      <div>
      <h2>${serviceName}</h2>
      <span>${callNumber}</span>

    </div>
  
    
    <h2>
    ${currentTime}
    </h2> 
    
 
    
   
   </div>
     

   `;



    callHistory.append(callHistoryCart)




     

    }) 
    
    
}  


const heartBtn = document.getElementsByClassName("heart-btn")

for( let heartButton of  heartBtn){
      heartButton.addEventListener('click',function(){ 

        const heartIn = parseInt(getElement('heart').innerText)
        console.log(heartIn); 

        const heartIncrease = heartIn + 1;
        getElement('heart').innerText = heartIncrease;

      })

} 



const copyBtn = document.getElementsByClassName("copy-btn")

for(let copyButton  of  copyBtn){
    copyButton.addEventListener("click",function(){
    const callNumber = copyButton.parentNode.parentNode.parentNode.children[3].innerText
  
alert(`নম্বর কপি করা হয়েছে: ${callNumber}`) 

const copyIn = parseInt(getElement("copy").innerText) 

const copyIncrease = copyIn + 1;
getElement("copy").innerText = copyIncrease;
    })
}



document.getElementById('btn-clear')
.addEventListener("click", function(){ 
    const callHistory = getElement("cart-call-history")

callHistory.innerHTML = " "

})







 





