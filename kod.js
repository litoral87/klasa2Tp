// tworzymy nasłuchiwanie zdarzenia do suwaka

let suwak = document.querySelector("#suwak");
suwak.addEventListener("click", ()=>{

    let value = suwak.value;
    console.log(value);
});