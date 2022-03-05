var items = [];
const color = document.getElementById("color");
const msg = document.getElementById("msg");
const mode = document.getElementsByClassName("md");

function load(){
  let cont = document.getElementById("container");
  cont.innerHTML = "";
  for(let i of items){
    cont.appendChild(i);
    i.style.background=newcl();
    i.onclick=()=>{
      if(i.style.background==color.textContent){
          msg.innerHTML = "Correct Answer";
          let c = i.style.background;
          for(let cl of items){
            cl.style.background = c;
            cl.onclick = ()=>{}
          }
      }else{
          msg.innerHTML = "Try Again..."
          i.style.background = "none";
          i.onload=()=>{}
      }
    }
  }
    color.innerHTML = items[Math.floor(Math.random()*items.length)].style.background;
}

function newcl(){
  return "RGB("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}


document.getElementById("reset").onclick=()=>{
  load();
}

onload=()=>{
  mode[0].onclick=()=>{
    items = [];
    mode[0].style.background = "aqua";
    mode[1].style.background = "none";
    for(let i = 0;i<3;i++){
      let cn = document.createElement("div");
      cn.setAttribute("class","circle");
      items.push(cn);
    }
    load();
  }

  mode[1].onclick=()=>{
    items = [];
    mode[1].style.background = "aqua";
    mode[0].style.background = "none";
    for(let i = 0;i<6;i++){
      let cn = document.createElement("div");
      cn.setAttribute("class","circle");
      items.push(cn);
    }
    load();
  }

  mode[1].click();
}

