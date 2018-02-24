 $(document).ready(function() {
     var triviaQuest = [{
         question: 'Leopards are a part of the biological family of _____',
         answers: ["Cats", "Dogs", "Lions", "Tigers"],
         correctAns: "Cats"
     }, {
         question: "An owl's eyes are bigger than its brain",
         answers: ["True", "False"],
         correctAns: "True"
     }, {
         question: "Bulls charge when they see the color red",
         answers: ["True", "False"],
         correctAns: "False"
     }, {
         question: "Sakura' trees that bloom pinkish flowers is also called 'pomegranate blossom'",
         answers: ["True", "False"],
         correctAns: "False"
     }, {
         question: "Elephants can be pregnant for two years",
         answers: ["True", "False"],
         correctAns: "True"
     }]
     var numQuest = 0
     var correct = 0
     var uncorrect = 0
     var selectedAns
     var isAnswerSelected = false;
     var time = 10
     $("#start").on("click", function() {

         disQuest(numQuest);
     });
     $(document).on("click", "#selected-answer", function() {

         isAnswerSelected = true;
         for (var i = 0; i < triviaQuest[numQuest].answers.length; i++) {
             document.getElementById(i).checked = false;
         }
         var value = $(this).val();

         document.getElementById(value).checked = true;
         selectedAns = $(this).text();

     })

     function disQuest(num) {

         $("#main").empty()

         var quest = $("<h2 id='question'></h2> ")
         quest.append(triviaQuest[num].question);
         var ulist = $("<ul class = 'list-group' id = 'answer-list'></ul>")
         $("#main").append(quest, ulist);
         for (var i = 0; i < triviaQuest[num].answers.length; i++) {
             var list = $("<li class = 'list-group-item' id = 'selected-answer' value = '" + i + "'></li>")
             list.append($("<input type = 'checkbox' class = 'check-box' id = '" + i + "'>"))
             list.append(triviaQuest[num].answers[i])
             ulist.append(list)

         }
         $("li").hover(function() {
             $(this).addClass("blue")
         }, function() {
             $(this).removeClass("blue")
         });
         countDown(time);

     }

     function checkAns(ans) {

         if (ans === triviaQuest[numQuest].correctAns) {
             correct++

         } else {
             uncorrect++

         }
     }

     function countDown(t) {

         $("#question").before($("<p><b>Time remain: </b><span id= 'time-remain'></span></p>"));

         var count = setInterval(function() {

             $("#time-remain").text(t-- + " s")
         }, 1000)
         setTimeout(function() {
             if (isAnswerSelected) {
                 checkAns(selectedAns);
             } else {
                 uncorrect++
                 selectedAns = null
             }
             if (numQuest < triviaQuest.length - 1) {
                 numQuest++
                 disQuest(numQuest)
             } else {
                 $("#main").empty()
                 displayResults()
                 setTimeout(function() {
                     numQuest = 0;
                     correct = 0;
                     uncorrect = 0;
                     disQuest(numQuest);
                 }, 10000);
             }
             isAnswerSelected = false;
             clearInterval(count)
         }, 11000)
     };

     function displayResults() {

         if (correct === 5) {
             var comment = $("<h2>YOU DID GREAT!</h2>")
             var results = $("<p>Your Answers <br> Correct: <span id='correct'></span> <br> Uncorrect: <span id='uncorrect'></span></p>")
             $("#main").append(comment, results)
             $("#correct").text(correct)
             $("#uncorrect").text(uncorrect)
         } else {
             var comment = $("<h2>TRY AGAIN</h2>")
             var results = $("<p>Your Answers <br> Correct: <span id='correct'></span> <br> Uncorrect: <span id='uncorrect'></span></p>")
             $("#main").append(comment, results)
             $("#correct").text(correct)
             $("#uncorrect").text(uncorrect)
         }
     }
 })