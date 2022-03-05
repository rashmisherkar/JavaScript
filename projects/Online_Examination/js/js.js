// onload=()=>{
//     let view = document.getElementsByTagName("section")[0];
//     let acbtn = document.createElement("button");
//     let adminbtn = document.createElement("button");




//     //add the names to the buttons
//     acbtn.innerHTML = "Accountant";
//     adminbtn.innerHTML = "Admin";  
    
//     //add buttons tot he view
//     view.appendChild(acbtn);  
//     view.appendChild(adminbtn);    
// }


// //create and load accountant view
// function loadAccountant(view){

// }


// //create and load admin view
// function loadAdmin(view){

// }

onload=()=>{
    let closer = document.getElementsByClassName("cl");
    closer[0].onclick=()=>{
        document.getElementById("fwd").setAttribute("hidden","hidden");
    }

    closer[1].onclick=()=>{
        document.getElementById("fwd").setAttribute("hidden","hidden");
    }

    let clr = document.getElementsByClassName("clcls");
    clr[0].onclick=()=>{
        document.getElementById("adcls").setAttribute("hidden","hidden");
    }

    clr[1].onclick=()=>{
        document.getElementById("adcls").setAttribute("hidden","hidden");
    }
}


function loadwd(){
    document.getElementById("fwd").removeAttribute("hidden");
}

function addclass(){
    document.getElementById("adcls").removeAttribute("hidden");
}