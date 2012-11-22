var stage = 1;
var theinput = "Frank";
var spokenWord = "";

function answerQuestion() { 

   theinput = document.firstQuestion.wandererName.value;

	if (stage == 1) {
		$("#spokenword").addClass("hide");  
		setTimeout(function(){
    		document.getElementById("spokenword").innerHTML = 'Ah...Hello ' + theinput + '.';
    	    $("#spokenword").removeClass("hide");
    	}, 500);
    	setTimeout(function(){
    		$("#spokenword").addClass("hide");  
    	}, 1500);
		setTimeout(function(){
    		document.getElementById("spokenword").innerHTML = 'Do you feel prepared?';
    	    $("#spokenword").removeClass("hide");
    	}, 2200);
    	stage = 2;
    }

    if (stage == 2) {
    		if (theinput == 'yes') {
    			$("#spokenword").addClass("hide");  
    			setTimeout(function(){
    				document.getElementById("spokenword").innerHTML = 'Good.';
    				$("#spokenword").removeClass("hide");
    			}, 500);
    		}
    		else if (theinput == 'no') {
    			$("#spokenword").addClass("hide");  
    			setTimeout(function(){
    				document.getElementById("spokenword").innerHTML = 'That is not good.';
    				$("#spokenword").removeClass("hide");
    			}, 500);
       		}
    }


}


$(document).ready(function(){


});
