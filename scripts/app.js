
document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("jung").addEventListener("mouseover", function(){
    document.querySelector("#jung").innerHTML = "🙈";
  });
  document.getElementById("jung").addEventListener("mouseleave", function(){
    document.getElementById("jung").innerHTML = "정";
  });

  document.getElementById("da").addEventListener("mouseover", function(){
    document.querySelector("#da").innerHTML = "🙉";
  });
  document.getElementById("da").addEventListener("mouseleave", function(){
    document.getElementById("da").innerHTML = "다";
  });

  document.getElementById("hee").addEventListener("mouseover", function(){
    document.querySelector("#hee").innerHTML = "🙊";
  });
  document.getElementById("hee").addEventListener("mouseleave", function(){
    document.getElementById("hee").innerHTML = "희";
  });

  console.log("helloadsf");
})
