
      var input = document.getElementById("myInput");
      
      function myFunction() {
          var filter, ul, li, a, i;
          
          filter = input.value.toUpperCase();
          ul = document.getElementById("myUL");
          li = ul.getElementsByTagName("li");
         
          if (!filter) {
            ul.style.display = "none";
          }else{
            
            for (i = 0; i < li.length; i++) {
            
                a = li[i].getElementsByTagName("a")[0]; 
              
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                
                    ul.style.display = "block";
                    li[i].style.display = "";
                } else {
                 
                    li[i].style.display = "none";

                }
            }
          }
      }
     
      input.addEventListener("keyup", myFunction);
  