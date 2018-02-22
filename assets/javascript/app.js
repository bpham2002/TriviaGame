 $(document).ready(function() {
     var triviaQuest = [{
         question: 'Leopards are a part of the biological family of _____',
         answers: ["Cats", "Dogs", "Lions", "Tigers"],
         correctAns: 0
     }, {
         question: "An owl's eyes are bigger than its brain",
         answers: ["True", "False"],
         correctAns: 0
     }, {
         question: "Bulls charge when they see the color red",
         answers: ["True", "False"],
         correctAns: 1
     }, {
         question: "Sakura' trees that bloom pinkish flowers is also called 'pomegranate blossom'",
         answers: ["True", "False"],
         correctAns: 1
     }, {
         question: "Elephants can be pregnant for two years",
         answers: ["True", "False"],
         correctAns: 0
     }]
     var numQuest = 0
     var correct = 0
     var uncorrect = 0
     $("#start").on("click", function() {
         $(document).on("click", "#selected-answer", function() {
             correct = checkAns($(this).attr("value"), correct, uncorrect)
             console.log(correct)
         })
         disQuest(numQuest)


         function disQuest(num) {
             $("#main").empty()

             var quest = $("<h2 id='question'>'" + triviaQuest[num].question + "'</h2>")
             var list = $("<ul id = 'answer-list' type ='A'></ul>")
             $("#main").append(quest, list)
             for (var i = 0; i < triviaQuest[num].answers.length; i++) {
                 $("#answer-list").append($("<li  id = 'selected-answer' value ='" + i + "'>'" + triviaQuest[num].answers[i] + "'</li>"))

             }
             $("li").hover(function() {
                 $(this).addClass("blue")
             }, function() {
                 $(this).removeClass("blue")
             })
             var time = 30
             $("#question").before($("<p><b>Time remain: </b><span id= 'time-remain'></span></p>"))
             countDown(time)
             if (numQuest < triviaQuest.length) {
                 numQuest++
             }
         }

         function checkAns(ans, cor, uncor) {
             if (parseInt(ans) === triviaQuest[num].correctAns) {
                 alert("correct")
                 cor++
             } else {
                 alert("uncorrect")
                 uncor++
             }


             return cor

         }

         function countDown(t) {

             var count = setInterval(function() {

                 $("#time-remain").text(t-- + " seconds")
             }, 1000)
             setTimeout(function() {
                 disQuest(numQuest)
                 clearInterval(count)
             }, 31000)


         };

     })



 })