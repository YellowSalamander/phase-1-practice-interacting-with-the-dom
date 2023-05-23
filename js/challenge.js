
let counterElement=document.getElementById("counter");
let counter = 0;
let interval;



function counterDisplay(){
    interval = setInterval (updateCounter, 1000)

}

function updateCounter() {
    counterElement.innerText = counter;
    counter ++;
    }
   



    function handleMinus() {
        counter -= 2 ;
        updateCounter()
    }

    function handlePlus() {
        counter +1;
        updateCounter()
    }
    let likesCount = 0;
    let likesTracker = {};

    function handleHeart() {
        if (likesTracker[counter]) {
          likesTracker[counter] += 1;
          let existingParagraph = document.getElementById("likesParagraph_" + counter);
          existingParagraph.innerText = counter + " has been liked " + likesTracker[counter] + " times!";
        } else {
          likesTracker[counter] = 1;
          let paragraph = document.createElement("p");
          paragraph.innerText = counter + " has been liked " + likesTracker[counter] + " times!";
          paragraph.id = "likesParagraph_" + counter;

          let likesContainer = document.querySelector("ul.likes");
          likesContainer.appendChild(paragraph);
        }
      
        likesCount += 1;
    }
    let isPaused = false;
    let pausedCounterValue = 0

    function handlePause() {
        if (!isPaused) {
            clearInterval(interval);
            pausedCounterValue = counter;
            isPaused = true;
            let buttons = document.querySelectorAll("button:not(#pause)");
            buttons.forEach((button) => {
              button.disabled = true;
            })
        } else {
            counter = pausedCounterValue;
            counterDisplay();
            isPaused = false;
            let buttons = document.querySelectorAll("button");
             buttons.forEach((button) => {
            button.disabled = false;
        })
    }
    
}
//     clearInterval(interval);
    //     let buttons = document.querySelectorAll("button:not(#pause)")
    //     buttons.forEach((button) => {
    //         button.disabled = true;
    // })




function handleComment (event) {
    event.preventDefault();
    let commentInput = document.getElementById('comment-input') 
    let commentText = commentInput.value
    
    if (commentText.trim() !== ""){
        let commentContainer = document.getElementById("list");
        let commentParagraph = document.createElement('p');
        commentParagraph.innerText = commentText;
        commentContainer.appendChild(commentParagraph);

        commentInput.value = ''
    }
}


let minus = document.getElementById("minus")
minus.addEventListener("click", handleMinus)

let plus = document.getElementById("plus")
plus.addEventListener("click", handlePlus)

let heart = document.getElementById("heart")
heart.addEventListener("click", handleHeart)

let pause = document.getElementById("pause")
pause.addEventListener("click", handlePause )
counterDisplay()

let comments = document.getElementById("comment-form")
comments.addEventListener("submit", handleComment)