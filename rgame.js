let userscore = 0;
let compscore = 0;
const choice = document.querySelectorAll(".choice");// step1
let msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score")
const gencompchoice=()=>{ //step4
    // rock ,paper , scissors
    const option=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);//0,1,2
    // console.log(index); 0,1,2
     return option[index];//rock ,paper , scissors.
}
const Gamedraw=()=>{
    // console.log("Game is draw!");
    msg.style.backgroundColor="black";
    msg.innerText="Game was draw! Play again";
    msg.style.color="white";

}
const showwinner=(userwin , userchoice , compchoice)=>{ // step5
    if(userwin==true){
        // shradha method
        userscore++;
        userscorepara.innerText=userscore;

        // my method
    // console.log("you win!");
    // let user_score = document.querySelector("#user_score");
    // user_score.innerText = parseInt(user_score.innerText) + 1; // Convert to number and increment
    msg.style.backgroundColor="green"; 
    // msg.style.color="black";
    msg.innerText= `You Win!  your ${userchoice} beats ${compchoice}`;
    }
    else{
        // shradha method
        compscore++;
        compscorepara.innerText=compscore;
        // my method
        // console.log("you lose!"); 
        // let comp_score= document.querySelector("#comp_score");
        // comp_score.innerText = parseInt(comp_score.innerText) + 1;
        msg.style.backgroundColor="red"; 
        // msg.style.color="black";
        msg.innerText=`You Lose!  ${compchoice} beats your ${userchoice}`;
        
    }
}

const playgame= (userchoice)=>{ //step3
// console.log("user choice = ",userchoice);
// computer choice
const compchoice=gencompchoice(); // toward step4
// console.log("computer choice = " ,compchoice);
if(userchoice===compchoice){
    Gamedraw();
    document.querySelector("#msg").innerText="Game is draw!";
    
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        //computer paper sciessore
    userwin= compchoice=== "paper"? false : true;

        }
        else if(userchoice==="paper"){
            // rock , sciessore
           userwin= compchoice==="scissors"?false : true;
        }
        else{
            userwin=compchoice==="paper"? true : false;
        }
        showwinner(userwin,userchoice,compchoice); //  toward step5
    }
    
}
choice.forEach((choice)=>{// step2
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice)
        playgame(userchoice);
       
    });
 })

 