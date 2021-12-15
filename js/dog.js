let mainNode = document.querySelector("main");
let leaveButton = document.querySelector("button");
var submitButton = document.createElement("button");
var comment = document.createElement("textarea");

let commentReply = document.createElement("button");
commentReply.innerHTML="Reply";


function leaveComment(){
    if(this.clicked){
        console.log("submit button already clicked");
    } else {

        let linebreak = document.createElement("br");

        comment.innerHTML="write your comment here";
        mainNode.appendChild(comment);

        submitButton.setAttribute("id","submit");
        submitButton.innerHTML="Submit Comment";

        mainNode.appendChild(linebreak);
        mainNode.appendChild(submitButton);

        this.clicked = true;
    }  
}

function getText(x){
    return x.value;  
}


function createComment(x,y){
    let commentBox = document.createElement("div");
    commentBox.setAttribute("class","commContainer");

    let commentText = document.createElement("p");
    commentText.innerHTML=getText(y);

    let linebreak2 = document.createElement("br");

    x.appendChild(commentBox);
    commentBox.appendChild(commentText);
    commentBox.appendChild(commentReply);
    commentBox.appendChild(linebreak2);
}



function submitComment(){
    for(let i=0;i<length,i++){
        createComment(mainNode,comment);
    }
}


submitButton.addEventListener("click",submitComment);
leaveButton.addEventListener("click",leaveComment);

