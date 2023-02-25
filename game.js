// alert("hi")

var buttonColours = ["red","blue","green","yellow"]
var gamePattern=[]
var userClickedPattern=[]

var started = false;
var level= 0







// generating randomcolor
function nextSequence(){
    userClickedPattern = [];
    level++
    $("h1").text("level "+ level);

    var randomNumber = Math.floor(Math.random() *4);
    // console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber]
    // console.log(randomChosenColour)
    gamePattern.push(randomChosenColour)

    console.log("game")
    console.log(gamePattern)
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // var sound=new Audio("sounds/"+randomChosenColour+".mp3");
    // sound.play();
    playSound(randomChosenColour)

    



    

}

// userclickedcolors
$(".btn").click(function(){
    var userChosenColour=(this.id)
    // console.log(userChosenColour)
    userClickedPattern.push(userChosenColour)
    console.log("user")
    console.log(userClickedPattern)
    playSound(userChosenColour)
    $("#"+ userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    checkAnswer(userClickedPattern.length-1)


})

// playSound


// gamestart
$(document).keypress(function(){
    if(!started){
        nextSequence();
        $("h1").text("level "+ level);
        started=true;
    }
    

})
// $(document).click(function(){
//     if(!started){
//         nextSequence();
//         $("h1").text("level "+ level);
//         started=true;
//     }
    

// })

// checking
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
        console.log("success")
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence()

            },1000)
        }
        
    }
    else{
        console.log("wrong")
        var audio=new Audio("sounds/wrong.mp3")
        audio.play()
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")

        },300)
        $("h1").text("Game Over,Press any key to restart")
        startOver()
    }
    
    
}

// startover
function startOver(){
    gamePattern=[]
    userClickedPattern=[]
    started=false
    level=0
}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3")
    audio.play()

}