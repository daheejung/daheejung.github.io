document.getElementById("jung").addEventListener("mouseover", function() {
  document.querySelector("#jung").innerHTML = "🙈";
});
document.getElementById("jung").addEventListener("mouseleave", function() {
  document.getElementById("jung").innerHTML = "정";
});

document.getElementById("da").addEventListener("mouseover", function() {
  document.querySelector("#da").innerHTML = "🙉";
});
document.getElementById("da").addEventListener("mouseleave", function() {
  document.getElementById("da").innerHTML = "다";
});

document.getElementById("hee").addEventListener("mouseover", function() {
  document.querySelector("#hee").innerHTML = "🙊";
});
document.getElementById("hee").addEventListener("mouseleave", function() {
  document.getElementById("hee").innerHTML = "희";
});

let koreanOn = false;
const koreanDisplayToggler = ()=>{
  const allKr = document.getElementsByClassName("kr");
  if(koreanOn){
    // ON
    for (var i = 0; i < allKr.length; i++) {
      allKr[i].classList.remove("hide");
      document.querySelector(".koreanToggle").style.border = "2px solid #c6e096";
    }
  } else {
    // OFF
    for (var i = 0; i < allKr.length; i++) {
      allKr[i].classList.add("hide");
      document.querySelector(".koreanToggle").style.border = "2px solid #646564";
    }
  }
}
document.querySelector("#koreanToggle").addEventListener("click", ()=>{
  koreanOn ? koreanOn = false : koreanOn = true;
  koreanDisplayToggler()
})
