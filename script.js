 document.getElementById("phone").innerHTML = "#"+ Math.floor(Math.random()*(81288256109249 - 1 + 1))+ 1
 document.getElementById("queue").innerHTML = Math.floor(Math.random()*(65 - 80 + 1))+80
 document.getElementById("main").innerHTML = Math.floor(Math.random()*(34 - 3 + 1))+ 3
 document.getElementById("time").innerHTML = Math.floor(Math.random()*(19878 - 11101 + 1))+ 11101
 const d = new Date()
    const Hour = d.getHours()
    const Min = d.getMinutes() + 1
    const minFixed = (Min < 10 ? '0' : '') + Min;
  document.getElementById("date").innerHTML = Hour + ":" + minFixed 

    function loading() {
        document.querySelectorAll(".bar").forEach(function(current) {
          let startWidth = 0;
          const endWidth = current.dataset.size;
          
          /* 
          setInterval() time sholud be set as trasition time / 100. 
          In our case, 2 seconds / 100 = 20 milliseconds. 
          */
          const interval = setInterval(frame, 54);
      
          function frame() {
            if (startWidth >= endWidth) {
              clearInterval(interval);
            } else {
                startWidth++;
                current.style.width = `${endWidth}%`;
                current.firstElementChild.innerText = `${startWidth}%`;
              }
           }
        });
      }
      
      setTimeout(loading, 2000);


      const myTime = setTimeout(myGreet, 8000);

      const first = document.getElementById("first")
      const sec = document.getElementById("second")
      function myGreet() {
        first.style.display = "none";
        sec.style.display = "block";
      }

      