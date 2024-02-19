const boxes = document.querySelectorAll(".box");
const winMsg = document.querySelector(".msgWin");
const restBtn = document.querySelector(".reset");

let trueX = true;
let move  = 0;

let winnerCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(box.innerHTML === ""){
            if(trueX){
                box.innerHTML = "X"; 
                box.style.color = "green";  
                trueX = false;
            }else{
                box.innerHTML = "O";
                box.style.color = "red";
                trueX = true;
            }
            move++ ; 
        }
        checkWinner();
    })

    restBtn.addEventListener("click" , () =>{
        box.innerHTML = "";
        winMsg.innerHTML = "";
    
        boxes.forEach(item =>{
            item.disabled = false;
        })  
    })
})
const checkWinner = () =>{
    for(let pattern of winnerCombination ){
        let valueOne = boxes[pattern[0]].innerHTML;
        let valueTwo = boxes[pattern[1]].innerHTML;
        let vlaueThree = boxes[pattern[2]].innerHTML;

        if(valueOne != "" && valueTwo != "" && vlaueThree != ""){
            if(valueOne === valueTwo && valueTwo === vlaueThree){
                winMsg.innerHTML =`Yeah! winner is ${valueOne}`;  

                boxes.forEach(item =>{
                    item.disabled = true;
                })             
            }
        }
        if(move ===9 ){
            winMsg.innerHTML = "It's Draw ! reset the game please .";
        }
    }
}
