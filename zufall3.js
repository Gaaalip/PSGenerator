var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", createXPasswords);



var pwl = document.getElementById("passwordLength");
var input = document.getElementById("newPassword");
var output = document.getElementById("output");
var howMany = document.getElementById("passwordAmount");
var $radio10 = $("#radio10");
var $radio20 = $("#radio20");
var $radio30 = $("#radio30");

function alertB() {
    alert("Bitte nur ganze Zahlen verwenden")
    };



function createXPasswords() {

    var howManyValue = howMany.value;
    if (howManyValue != "") {
        var howManyValue = parseInt(howManyValue);
        if (isNaN(howManyValue)) {
            alertB();
            howMany.value = "";
            return false;
        }
    } else {
        howManyValue = 1
    };

    for (var i = 0; i < howManyValue; i++) {
        generatePassword();
    }


};
    

function generatePassword() {
    
   /* if ($("#radio10").click {function(){pwl.value = Math.floor(Math.random()*10 +1) }
    else if ($("#radio20").click == true && $("#radio10").click == false && $("radio30").click == false){pwl.value = Math.floor(Math.random()*20 +1) }*/
        /* if (radioButtons[0], "checked"){ pwl.value = Math.floor(Math.random()*10 +1)}
    else if (radioButtons[1],"checked"){ pwl.value = Math.floor(Math.random()*20 +1)}
    else if (radioButtons[2], "checked"){ pwl.value = Math.floor(Math.random()*30 +1)} */
    if($radio10.is(':checked')) { 
        pwl.value = Math.floor(Math.random()*10 +1);
        console.log("radio10: " + pwl.value);
    }
    if($radio20.is(':checked')) { 
        pwl.value = Math.floor(Math.random()*10 +10 +1)
        console.log("radio20: " + pwl.value);
    }
    if($radio30.is(':checked')) { 
        pwl.value = Math.floor(Math.random()*10 +20 +1);
        console.log("radio30: " + pwl.value);
    }
    /*for (var i = 0; i < radioButtons; i++){
        
      if   (radioButtons[0].checked){ pwl.value = Math.floor(Math.random()*10 +1);}
    else if(radioButtons[1].checked){ pwl.value = Math.floor(Math.random()*20 +1);}
    else if(radioButtons[2].checked){ pwl.value = Math.floor(Math.random()*30 +1);}
    
    return pwl.value;    
    }; */
    
    console.log("PWL Value :  " + pwl.value);

    
    var plength = pwl.value;
    if (plength != "") {
        var plength = parseInt(plength);
        if (isNaN(plength)) {
            alertB();
            pwl.value = "";
            return false;
        };
    } else {
        plength = Math.floor(Math.random() * 30);
    };




    var literalsSmall = "abcdefghijklmnopqrstuvwxyz";
    var literalsBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "/@#%&.!*+?|()[]{}\\";
    var randomPassword = "";

    //  for ( i = 0; i < howManyValue; i++){

    console.log("PS :" + plength);


    var length = Math.floor((plength / 2));
    var length1 = Math.floor(length / 2);
    var length2 = Math.floor(length1 / 2);

    var length3 = plength - length - length1 - length2;





    for (i = 0; i < length; i++)
        randomPassword += literalsSmall.charAt(Math.floor(Math.random() * literalsSmall.length))
    console.log(" small :  " + randomPassword);

    for (i = 0; i < length1; i++)
        randomPassword += literalsBig.charAt(Math.floor(Math.random() * literalsBig.length));
    console.log("big : " + randomPassword);

    for (i = 0; i < length2; i++)
        randomPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    console.log("numbers : " + randomPassword);

    for (i = 0; i < length3; i++)

        randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
    console.log("symbols : " + randomPassword);

    randomPassword = randomPassword.split("").sort(function () {
        return 0.5 - Math.random()
    }).join("");

    /*
    var arrayValues = [randomPassword, vValue, wValue, xValue, yValue, maxSafetyValue, safeValue, midSafeValue];

    parse(arrayValues);
    var arrayValues2 = parse(arrayValues);
    psStrength(arrayValues2);
    var arrayValues3 = psStrength(arrayValues2);
    var checkValueForPw = show(arrayValues3);
    */
    output.innerHTML += "<br>" + randomPassword;// + " | " + checkValueForPw[0];

}
