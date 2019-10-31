window.onload = function() {

         function soundClick3() {
             var audio = new Audio(); 
            audio.src = 'fono.mp3'; 
              audio.autoplay = true; 
             }


             function soundClick4() {
             var audio = new Audio(); 
            audio.src = 'vin.mp3'; 
              audio.autoplay = true; 
             }


          function soundClick() {
           var audio = new Audio(); 
           audio.src = 'tru.mp3'; 
           audio.autoplay = true; 
          }

           function soundClick2() {
           var audio = new Audio(); 
           audio.src = 'false.mp3'; 
           audio.autoplay = true; 
           }
           
           
          
           var proverca = 10;
           
           var words= [
              "тюрьма",
              "рязань",
              "малина",
               "август",

"агония",

"азимут",

"айкидо",

"акушер",

"акцент",

"акцепт",

"альбом",

"альков",

"альянс",

"амулет",

"анемия",

"анчоус",

"апломб",

"апогей",

"апрель",

"артель",

"аспект",

"атеизм"
              ];
  


           function randoms(words1) {
            
            return words1[Math.floor(Math.random() * (words1.length - 0 + 1)) + 0];
            
            };
           
           
           
           var word = randoms(words).split('');
           var count= 10;
           var vincount = 6;
           

          buttonss.onclick = function() {
          
            soundClick3();


          
          var letter = document.getElementById("atom").value;
          var date= "";

          
          
          if (word.indexOf(letter) != -1) {

           switch (word.indexOf(letter)) {
                 case 0: date = "h1"
                 break;
                 case 1: date = "h2"
                 break;
                 case 2: date = "h3"
                 break;
                 case 3: date = "h4"
                 break;
                 case 4: date = "h5"
                 break;
                 case 5: date = "h6"
                 break;

           };
           
          

           var circ1 = document.getElementById(date);
           circ1.innerHTML = letter;
           
           
           if (word.indexOf(letter)!=proverca){
           vincount -= 1;
           }
           
           proverca=word.indexOf(letter);
           
           soundClick();
          }
          
          
          


          if (word.indexOf(letter) == -1) {
            var date1 = ""
            count -= 1;
            var countid = document.getElementById("count");
          countid.innerHTML = count;
          soundClick2();


          switch (count) {
                 case 9: date1 = "div1"
                 break;
                 case 8: date1 = "div2"
                 break;
                 case 7: date1 = "div3"
                 break;
                 case 6: date1 = "div4"
                 break;
                 case 5: date1 = "div5"
                 break;
                 case 4: date1 = "div6"
                 break;
                 case 3: date1 = "div7"
                 break;
                 case 2: date1 = "div8"
                 break;
                 case 1: date1 = "div9"
                 break;
                 case 0: date1 = "div10"
                 break;
                 }
                 

                 var a = document.getElementById(date1);
                 a.style.opacity= 0;
             
          }

          if (count == 0) {
             soundClick4();
             var result = confirm("Ты проиграл! Твоя виселица готова" , word);
             if (result){
                
                document.location.href = "index.html";
             }
          }

          if (vincount == 0){
             soundClick4();

            var results = confirm("Ты выиграл. Тебе повезло на этот раз!");
             if (results){
               
                document.location.href = "index.html";
             }
          }
          
          
          };

        
         }
