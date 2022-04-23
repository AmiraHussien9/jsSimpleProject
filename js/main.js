let mainBtn = document.getElementById("btnQoute");
console.log(mainBtn);
mainBtn.onclick = addQoute ;

let qoutes = [

    { qouteName:`"The best revenge is massive success." </br>--Frank Sinatra` },
     { qouteName:`"Resentment is like drinking poison and waiting for your enemies to die." </br>--Nelson Mandela`},
     {  qouteName:`"Do not take life too seriously. You will not get out alive." </br>--Elbert Hubbard`},
    {qouteName : `"You miss 100% of the shots you don't take."</br>--Wayne Gretzy`},
    {qouteName : `"It's not what happens to you, but how you react to it that matters."</br>--Epictetus`}


];


let qouteIndex = 0;

function addQoute() {

    if( qouteIndex < qoutes.length ) {

        document.getElementById("newQoute").innerHTML = qoutes[qouteIndex].qouteName;
        qouteIndex++;
    }

   
   else {qouteIndex = 0 ;
        document.getElementById("newQoute").innerHTML = qoutes[qouteIndex].qouteName;
        qouteIndex++;
    }
 }






//Another Solution


// function addQoute () {
//     let random = Number.parseInt(Math.random()* qoutes.length );
//     document.getElementById("newQoute").innerHTML =qoutes[random].qouteName;
// }

// let x =  document.getElementById("newQoute");
// console.log(x)

