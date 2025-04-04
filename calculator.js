const disp = document.getElementById('dis'); 

function display(x){
    disp.value += x;
}

function change(){
    if (disp.value !== "") {  
        disp.value = parseFloat(disp.value) * -1; 
    }
}

function clearScreen(){
    disp.value = "";
}

function calculate(){
    try{
    disp.value = eval(disp.value);
    }catch(error){
        disp.value = "Error";
    }
    
}


