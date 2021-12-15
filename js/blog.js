
let mainNode = document.querySelector("main");
var submitButton = document.createElement("button");
var comment = document.createElement("textarea");
var replyBox = document.createElement("textarea");


function leaveComment(){
    if(this.clicked){
        console.log("submit button already clicked");
    } else {

        var linebreak = document.createElement("br");

       
        comment.innerHTML="write your comment here";
        mainNode.appendChild(comment);

        submitButton.setAttribute("id","submit");
        submitButton.innerHTML="Submit Comment";

        mainNode.appendChild(linebreak);
        mainNode.appendChild(submitButton);

        this.clicked = true;
    }  
}


function submitComment(){
    let c = comment.value;
    var newComment = document.createElement("p");
    newComment.setAttribute("class","comments")
    newComment.innerText = c + "  ";

    var replyButton = document.createElement("button");
    replyButton.innerHTML="Reply to this comment";
    mainNode.appendChild(newComment); 
    mainNode.appendChild(replyButton);

    function reply(){
        console.log("test");
    
        newComment.appendChild(replyBox);
        var replyButt = document.createElement("button");
        replyButt.innerHTML="send";
        newComment.appendChild(replyButt);
    }

    replyButton.addEventListener("click",reply);
    
}



let leaveButton = document.querySelector("button");

leaveButton.addEventListener("click",leaveComment);
submitButton.addEventListener("click",submitComment);









