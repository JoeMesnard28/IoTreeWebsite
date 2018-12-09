$(document).ready(function() {
   
    $("#loggingTextBox").hide();
    
    var ToggleLoggingBox = function(){
        $("#loggingTextBox").slideToggle(200);
    }
    
    $("#loggingButton").on("click", ToggleLoggingBox);
});


