// tworzymy nasłuchiwanie zdarzenia do suwaka

let suwak = document.querySelector("#suwak");
let serce = document.querySelectorAll("img");
suwak.addEventListener("click", ()=>{


    let value2 = suwak.value;
    console.log(value2);
    if(value2==0){
        serce[0].style.filter = `grayscale(100)`;
        serce[1].style.filter = `grayscale(100)`;
        serce[2].style.filter = `grayscale(100)`;
        serce[3].style.filter = `grayscale(100)`;
    serce[4].style.filter = `grayscale(100)`;
    }
   if(value2==1)
   {
    serce[0].style.filter = `grayscale(0)`;
    serce[1].style.filter = `grayscale(100)`;
    serce[2].style.filter = `grayscale(100)`;
    serce[3].style.filter = `grayscale(100)`;
    serce[4].style.filter = `grayscale(100)`;
   }
   if(value2==2)
   {
   
    serce[0].style.filter = `grayscale(0)`;
    serce[1].style.filter = `grayscale(0)`;
    serce[2].style.filter = `grayscale(100)`;
    serce[3].style.filter = `grayscale(100)`;
    serce[4].style.filter = `grayscale(100)`;
   }
   if(value2==3)
   {
    serce[0].style.filter = `grayscale(0)`;
    serce[1].style.filter = `grayscale(0)`;
    serce[2].style.filter = `grayscale(0)`;
    serce[3].style.filter = `grayscale(100)`;
    serce[4].style.filter = `grayscale(100)`;
   }
   if(value2==4)
   {
    serce[0].style.filter = `grayscale(0)`;
    serce[1].style.filter = `grayscale(0)`;
    serce[2].style.filter = `grayscale(0)`;
    serce[3].style.filter = `grayscale(0)`;
    serce[4].style.filter = `grayscale(100)`;
   }
   if(value2==5){
    serce[0].style.filter = `grayscale(0)`;
    serce[1].style.filter = `grayscale(0)`;
    serce[2].style.filter = `grayscale(0)`;
    serce[3].style.filter = `grayscale(0)`;
    serce[4].style.filter = `grayscale(0)`;
   }

});
