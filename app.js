// Telegram Mini App

let tg = window.Telegram.WebApp;

tg.expand();



// Balance

let balance =
Number(localStorage.getItem("balance")) || 0;



updateBalance();




// Direct Links

const tasks=[


{
link:"https://omg10.com/4/11412951",
reward:0.01
},


{
link:"https://omg10.com/4/11263944",
reward:0.02
},


{
link:"https://omg10.com/4/11263940",
reward:0.03
}


];





function updateBalance(){

document.getElementById("balance").innerHTML =
"$" + balance.toFixed(2);


}





function saveBalance(){

localStorage.setItem(
"balance",
balance
);

}





function completeTask(id){



let cooldown =
localStorage.getItem(
"task_"+id
);



let now =
Date.now();



if(cooldown && now < cooldown){

let remain =
Math.ceil(
(cooldown-now)/1000
);


alert(
"Please wait "+remain+" seconds"
);


return;

}




// Open Direct Link

window.open(
tasks[id].link,
"_blank"
);




// cooldown 30s

localStorage.setItem(
"task_"+id,
now + 30000
);



// add reward

balance += tasks[id].reward;


saveBalance();

updateBalance();


alert(
"🎉 You earned +$"+
tasks[id].reward.toFixed(2)
);


}






function dailyBonus(){


let claimed =
localStorage.getItem(
"daily"
);


let today =
new Date()
.toDateString();



if(claimed === today){

alert(
"Daily bonus already claimed"
);

return;

}



balance +=0.05;


saveBalance();


localStorage.setItem(
"daily",
today
);


updateBalance();


alert(
"🎁 You received $0.05"
);



}
