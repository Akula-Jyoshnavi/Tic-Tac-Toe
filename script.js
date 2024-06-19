let btns=document.querySelectorAll(".button");
let hide=document.querySelector(".hide");
let msg=document.querySelector(".msg");
let reset=document.querySelector(".rst-btn");
let newbtn=document.querySelector(".new-btn");
let turn0=true;
let count=0;
let winpat=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]];
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turn0)
            {
                btn.innerText="O";
                turn0=false;
            }
        else
           { 
               btn.innerText="X";
               turn0=true;
           }
        btn.disabled=true;
        let iswinner=checkwinner();
        count++;
        if(count===9&&!iswinner) 
        {
            msg.innerText="OOPS!! It's a draw";
            disableAll();
        }
    });
});

const checkwinner= () =>{
     for(let pat of winpat){
          let val1=btns[pat[0]].innerText;
          let val2=btns[pat[1]].innerText;
          let val3=btns[pat[2]].innerText;
     if(val1!=""&&val2!=""&&val3!="")
     {
        if(val1==val2&&val2==val3)
        {
            printmsg(val1);
            return true;
        }
     }
     }
};

const disableAll= () =>{
    hide.classList.remove("hide");
    for (let btn of btns)
        btn.disabled=true;
};

const enableAll= () =>{
    count=0;
    hide.classList.add("hide");
    for (let btn of btns)
        {
            btn.disabled=false;
            btn.innerText="";
        }
};

const printmsg= (winner) =>{
        msg.innerText="Congratulations!! Winner is "+winner;
        console.log(msg.innerText);
        disableAll();
};

reset.addEventListener("click",enableAll);
newbtn.addEventListener("click",enableAll);