let mainval=document.getElementById("counterValue");

function onIncrement(){
    let previousval=mainval.textContent;
    let updateval=parseInt(previousval)+1;
    if(updateval>0){
        mainval.style.color='green';
    }else if(updateval<0){
        mainval.style.color='red';  
    }else{
        mainval.style.color= 'black'; 
    }
    mainval.textContent=updateval;    
}

function onDecrement(){
    let previousval=mainval.textContent;
    let updateval=parseInt(previousval)-1;
    if(updateval < 0){
        mainval.style.color="red";
    }else if(updateval>0){
        mainval.style.color = "green";
    }
    else {
        mainval.style.color="black";
    }
    mainval.textContent=updateval
}

function onReset(){
    let previousval=mainval.textContent;
    let updateval=0;
    mainval.textContent=updateval;
    mainval.style.color="black";
}