var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", createXPasswords);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearFields);

var pwl = document.getElementById("passwordLength");
var input = document.getElementById("newPassword");
var output = document.getElementById("output");
var howMany = document.getElementById("passwordAmount");
var $radio10 = $("#radio10");
var $radio20 = $("#radio20");
var $radio30 = $("#radio30");
var randomArray = [];
var passwordValue = "";
var random = "";
var v = document.getElementById("numbers");
var w = document.getElementById("literalsBig");
var x = document.getElementById("literalsSmall");
var y = document.getElementById("symbols");
var maxSafety = document.getElementById("maxSafety");
var safe = document.getElementById("safe");
var midSafe = document.getElementById("midSafe");
var output = document.getElementById("output");
var inProcent = "";

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
        generatePassword()



    }


};


function generatePassword() {

    /* if ($("#radio10").click {function(){pwl.value = Math.floor(Math.random()*10 +1) }
     else if ($("#radio20").click == true && $("#radio10").click == false && $("radio30").click == false){pwl.value = Math.floor(Math.random()*20 +1) }*/
    /* if (radioButtons[0], "checked"){ pwl.value = Math.floor(Math.random()*10 +1)}
    else if (radioButtons[1],"checked"){ pwl.value = Math.floor(Math.random()*20 +1)}
    else if (radioButtons[2], "checked"){ pwl.value = Math.floor(Math.random()*30 +1)} */
    if ($radio10.is(':checked')) {
        pwl.value = Math.floor(Math.random() * 10 + 1);
        //  console.log("radio10: " + pwl.value);
    }
    if ($radio20.is(':checked')) {
        pwl.value = Math.floor(Math.random() * 10 + 10 + 1)
        //console.log("radio20: " + pwl.value);
    }
    if ($radio30.is(':checked')) {
        pwl.value = Math.floor(Math.random() * 10 + 20 + 1);
        //console.log("radio30: " + pwl.value);
    }
    /*for (var i = 0; i < radioButtons; i++){
        
      if   (radioButtons[0].checked){ pwl.value = Math.floor(Math.random()*10 +1);}
    else if(radioButtons[1].checked){ pwl.value = Math.floor(Math.random()*20 +1);}
    else if(radioButtons[2].checked){ pwl.value = Math.floor(Math.random()*30 +1);}
    
    return pwl.value;    
    }; */

    //console.log("PWL Value :  " + pwl.value);


    var plength = pwl.value;
    if (plength != "") {
        var plength = parseInt(plength);
        if (isNaN(plength)) {
            alertB();
            pwl.value = "";
            return false;
        };
    } else {
        plength = Math.floor(Math.random() * 29 +1); // Damit nicht = 0; 
    };




    var literalsSmall = "abcdefghijklmnopqrstuvwxyz";
    var literalsBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "/@#%&.!*+?|()[]{}\\";
    var randomPassword = "";

    //  for ( i = 0; i < howManyValue; i++){

    //console.log("PS :" + plength);


    var length = Math.floor((plength / 2));
    var length1 = Math.floor(length / 2);
    var length2 = Math.floor(length1 / 2);

    var length3 = plength - length - length1 - length2;





    for (i = 0; i < length; i++)
        randomPassword += literalsSmall.charAt(Math.floor(Math.random() * literalsSmall.length))
    // console.log(" small :  " + randomPassword);

    for (i = 0; i < length1; i++)
        randomPassword += literalsBig.charAt(Math.floor(Math.random() * literalsBig.length));
    //console.log("big : " + randomPassword);

    for (i = 0; i < length2; i++)
        randomPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    //console.log("numbers : " + randomPassword);

    for (i = 0; i < length3; i++)

        randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
    //console.log("symbols : " + randomPassword);

    randomPassword = randomPassword.split("").sort(function () {
        return 0.5 - Math.random()
    }).join("");



    randomArray.push(randomPassword);
    //console.log("Random  :" + randomArray);
    random = "";
    for (var i = 0; i < randomArray.length; i++) {
        var random = randomArray[i];
        getValue(random);
    }
};


function getValue(random) {
    var passwordValue = random;
    var vValue = v.value;
    var wValue = w.value;
    var xValue = x.value;
    var yValue = y.value;
    var maxSafetyValue = maxSafety.value;
    var safeValue = safe.value;
    var midSafeValue = midSafe.value;
    //  console.log("Servus");
    var arrayValues = [passwordValue, vValue, wValue, xValue, yValue, maxSafetyValue, safeValue, midSafeValue];

    parse(arrayValues);
    var arrayValues2 = parse(arrayValues);
    psStrength(arrayValues2);
    var arrayValues3 = psStrength(arrayValues2);
    show(arrayValues3);

};
//    ______________________________________    
function parse(array) {
    // console.log("Servus2");
    var passwordValue = array[0];
    var vValue = array[1];
    var wValue = array[2];
    var xValue = array[3];
    var yValue = array[4];
    var maxSafetyValue = array[5];
    var safeValue = array[6];
    var midSafeValue = array[7];

    function alertA() {
        alert("Bitte zuerst ein Passwort eingeben!")
    };

    function alertB() {
        alert("Bitte nur Zahlen verwenden")
    };

    function alertC() {
        alert("Bitte die Werte von hoher Sicherheit und  mittlerer Sicherheit anpassen!")
    };

    function alertD() {
        alert("Bitte den Wert mittlerer Sicherheit anpassen!")
    };

    function alertE() {
        alert("Bitte den Wert von hoher Sicherheit anpassen!")
    };

    function alertF() {
        alert("Der Wert der mittleren Sicherheit darf die Werte von hoher Sicherheit und maximaler Sicherheit nicht überschreiten!")
    };

    function alertG() {
        alert("Der Wert der hohen Sicherheit darf den Wert der maximalen Sicherheit nicht übersteigen!")
    };

    function alertH() {
        alert("Die Werte maximale Sicherheit, hohe Sicherheit und mittlere Sicherheit dürfen nicht von den anderen Werten überschritten werden!")
    };

    if (maxSafetyValue != "" && safeValue == "" && midSafeValue == "") {
        alertC();
        return false;
    }

    if (maxSafetyValue != "" && safeValue != "" && midSafeValue == "") {
        alertD();
        return false;
    }

    if (maxSafetyValue != "" && safeValue == "" && midSafeValue != "") {
        alertE();
        return false;
    }

    if (passwordValue == "") {
        alertA();
        return false;
    } else {
        passwordValue = passwordValue;
    };


    if (vValue != "") {
        vValue = parseFloat(vValue.replace(",", "."));
        if (isNaN(vValue)) {
            alertB();
            v.value = "";
            return false;
        }

    } else {
        vValue = 1;
    };
    //    console.log("vValue :" + vValue);
    if (wValue != "") {
        wValue = parseFloat(wValue.replace(",", "."));
        if (isNaN(wValue)) {
            alertB();
            w.value = "";
            return false;
        }
    } else {
        wValue = 1;
    };
    //console.log("wValue" + wValue);

    if (xValue != "") {
        xValue = parseFloat(xValue.replace(",", "."));
        if (isNaN(xValue)) {
            alertB();
            x.value = "";
            return false;
        }
    } else {
        xValue = 0.75;
    };
    //  console.log("xValue" + xValue);
    if (yValue != "") {
        yValue = parseFloat(yValue.replace(",", "."));
        if (isNaN(yValue)) {
            alertB();
            y.value = "";
            return false;
        }
    } else {
        yValue = 1;
    };

    if (maxSafetyValue != "") {
        maxSafetyValue = parseFloat(maxSafetyValue.replace(",", "."));
        if (isNaN(maxSafetyValue)) {
            alertB();
            maxSafety.value = "";
            return false;
        }
    } else {
        maxSafetyValue = 15;
    };

    if (safeValue != "") {
        safeValue = parseFloat(safeValue.replace(",", "."));
        if (isNaN(safeValue)) {
            alertB();
            safe.value = "";
            return false;
        }
    } else {
        safeValue = 12;
    };

    if (midSafeValue != "") {
        midSafeValue = parseFloat(midSafeValue.replace(",", "."));
        if (isNaN(midSafeValue)) {
            alertB();
            midSafe.value = "";
            return false;
        }
    } else {
        midSafeValue = 8;
    };


    if (midSafeValue >= safeValue || midSafeValue >= maxSafetyValue) {
        alertF();
        midSafe.value = "";
        return false;
    };

    if (safeValue >= maxSafetyValue) {
        alertG();
        safe.value = "";
        return false;
    }
    var values = [vValue, wValue, xValue, yValue];
    var values2 = [maxSafetyValue, safeValue, midSafeValue];

    for (i = 0; i < values.length; i++) {
        for (j = 0; j < values2.length; j++) {
            if (values[i] > values2[j]) {

                alertH();
                v.value = "";
                w.value = "";
                x.value = "";
                y.value = "";
                return false;


            }


        }


    }
    var arrayValues2 = [passwordValue, vValue, wValue, xValue, yValue, maxSafetyValue, safeValue, midSafeValue];

    return arrayValues2;




}

function psStrength(array) {
    //console.log("Servus3");

    var passwordValue = array[0];
    var vValue = array[1];
    var wValue = array[2];
    var xValue = array[3];
    var yValue = array[4];
    var maxSafetyValue = array[5];
    var safeValue = array[6];
    var midSafeValue = array[7];


    //console.log(vValue);

    var numbers = /\d/;
    var literalsSmall = /[a-z]/;
    var literalsBig = /[A-Z]/;
    var symbols = ['/', '@', '#', '%', '&', '.', '!', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
    var negativeSymbols = ['"', "'", "<", ">", "§", ";", ":", "ß", "_", "-", "`", "°", "^"];
    var actualStrength = 0;


    var message = "    ist ein unsicheres Symbol und eventuell mit gewissen Seiten nicht kompatibel.";

    function alertI() {
        alert(passwordCharacter + message)
    };

    for (var k = 0; k < passwordValue.length; k++) {
        var passwordCharacter = passwordValue.charAt(k);

        if (numbers.test(passwordCharacter)) {
            actualStrength += vValue;
        } else if (literalsBig.test(passwordCharacter)) {
            actualStrength += wValue;

        } else if (literalsSmall.test(passwordCharacter)) {
            actualStrength += xValue;


        } else if (symbols.indexOf(passwordCharacter) >= 0) {
            actualStrength += yValue;

        } else if (negativeSymbols.indexOf(passwordCharacter) >= 0) {
            alertI();
            actualStrength -= 1;
        }


    }

    var arrayValues3 = [actualStrength, maxSafetyValue, safeValue, midSafeValue, passwordValue]

    return arrayValues3;



};


function show(array) {

    var actualStrength = array[0];
    var maxSafetyValue = array[1];
    var safeValue = array[2];
    var midSafeValue = array[3];
    var passwordValue = array[4];
    // console.log(safeValue);


    var inProcent = (Math.round((Math.min(maxSafetyValue, actualStrength) / maxSafetyValue) * 100)) + "%";


    if (actualStrength >= safeValue) {
        //  strength.innerHTML = "1"
        // inProcent.style.color = "green";
    } else if (passwordValue.length >= 10 || actualStrength >= midSafeValue) {
        // strength.innerHTML = "0";
        //    inProcent.style.color = "orange";
    } else {
        //  strength.innerHTML = "-1";
        //  inProcent.style.color = "red";
    }


    output.innerHTML += "<br>" + passwordValue + "    | Sicherheit      :       " + inProcent
    random = "";
    randomArray.splice(0, 1);
};

function clearFields() {

    v.value = "";
    w.value = "";
    x.value = "";
    y.value = "";
    maxSafety.value = "";
    safe.value = "";
    midSafe.value = "";
    pwl.value = "";
    howMany.value = "";
    strength.innerHTML = "";
    inProcent.innerHTML = "";
    output.innerHTML = ""
};
