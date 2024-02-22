


let comp;
let your_score=0;
let computer_score=0;
let tie_score=0;
let ans=document.querySelector(".answer");
let scoree=document.querySelector(".score");
let rok=document.querySelector(".rock");
let ppr=document.querySelector(".paper");
let scr=document.querySelector(".scissor");

let rok_c=document.querySelector(".rock-c");
let ppr_c=document.querySelector(".paper-c");
let scr_c=document.querySelector(".scissor-c");

let me_val=document.querySelector(".score-my-para");
let comp_score=document.querySelector(".score-comp-para");
let tie_val=document.querySelector(".score-tie");


function comp_val()         // computer value drag function
{
    let img_arr=["rock","paper","scissor"];
    let rand=Math.floor(Math.random()*img_arr.length);
    comp=img_arr[rand];

    if (comp==="rock"){
            rok_c.classList.add('rock-c-animation');
            ppr_c.classList.remove('paper-c-animation');
            scr_c.classList.remove('scissor-c-animation');
        }
    else if(comp==="paper")
    {    
            ppr_c.classList.add('paper-c-animation');   
            rok_c.classList.remove('rock-c-animation');
            scr_c.classList.remove('scissor-c-animation');    
    }

    else if(comp==="scissor")
    {       
            scr_c.classList.add('scissor-c-animation');
            rok_c.classList.remove('rock-c-animation');
            ppr_c.classList.remove('paper-c-animation');
    }
}

let win_img=document.createElement("img");
win_img.width=300;
win_img.height=130;

function rock_win(){
    win_img.src='images/rock-win.png';
    
    ans.appendChild(win_img);
  
    
}


function paper_win(){
    win_img.src='images/paper-win.png';
    ans.appendChild(win_img);
  
  
}


function scissor_win(){
    win_img.src='images/scissor-win.png';
   
  
    ans.appendChild(win_img);  
    
}


function tie(){
    win_img.src='images/tie.jpeg';
   
    ans.appendChild(win_img);
}


rok.addEventListener("click",()=>
{
    rok.classList.add('rock-animation');
    ppr.classList.remove("paper-animation");
    scr.classList.remove("scissor-animation");
    
    comp_val();
    if (comp==="rock")
    {
        setTimeout(()=>
        {
            tie();
            
        },700)
        tie_score++;
    }
    else if(comp==="paper")
    {
        setTimeout(()=>
        {
            paper_win();
            
        },700)
        computer_score++;
    }

    else if(comp==="scissor")
    {
        setTimeout(()=>
        {
            rock_win();
            
        },700)
        your_score++;
    }
   
    setTimeout(()=>
    {
    me_val.innerText=your_score;
    comp_score.innerText=computer_score;
    tie_val.innerText=tie_score;
    },800)
});

ppr.addEventListener("click",()=>
{
    ppr.classList.add('paper-animation');
    scr.classList.remove('scissor-animation');
    rok.classList.remove("rock-animation");
    comp_val();
    if (comp==="rock")
    {
        setTimeout(()=>
        {
            paper_win();
        },700)
        your_score++;
    }
    else if(comp==="paper")
    {
        setTimeout(()=>
        {
            tie();
        },700)
        tie_score++;
    }

    else if(comp==="scissor")
    {
        setTimeout(()=>
        {
            scissor_win();
            
        },700)
        computer_score++;
    }
 
    setTimeout(()=>
    {
    me_val.innerText=your_score;
    comp_score.innerText=computer_score;
    tie_val.innerText=tie_score;
    },800)
});

scr.addEventListener("click",()=>
{
    scr.classList.add('scissor-animation');
    rok.classList.remove("rock-animation");
    ppr.classList.remove("paper-animation");
    comp_val();
    if (comp==="rock")
    {
        setTimeout(()=>
        {
            rock_win();
        },700)
        computer_score++;
    }
    else if(comp==="paper")
    {
        setTimeout(()=>
        {
            scissor_win();
        },700)
        your_score++;
    }

    else if(comp==="scissor")
    {
        setTimeout(()=>
        {
            tie();
        },700)
        tie_score++;
    }
   
    setTimeout(()=>
    {
    me_val.innerText=your_score;
    comp_score.innerText=computer_score;
    tie_val.innerText=tie_score;
    },800)
});







