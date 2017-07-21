//_________________________________Elemente zuweisen


var button = document.getElementById("check")
button.addEventListener("click", getValue);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearFields);


var password = document.getElementById("newPassword");
var v = document.getElementById("numbers");
var w = document.getElementById("literalsBig");
var x = document.getElementById("literalsSmall");
var y = document.getElementById("symbols");
var maxSafety = document.getElementById("maxSafety");
var safe = document.getElementById("safe");
var midSafe = document.getElementById("midSafe");
var strength = document.getElementById("strength");
var inProcent = document.getElementById("inProcent");
var output = document.getElementById("output");
//__________________________________________________________Werte auslesen________________________

function getValue() {
    
    var passwordValue = password.value;
    var vValue = v.value;
    var wValue = w.value;
    var xValue = x.value;
    var yValue = y.value;
    var maxSafetyValue = maxSafety.value;
    var safeValue = safe.value;
    var midSafeValue = midSafe.value;

    var values = {
        password: passwordValue, 
        v:         vValue, 
        w:         wValue, 
        x:         xValue, 
        y:         yValue, 
        maxSafety: maxSafetyValue
        safe:      safeValue, 
        midSafe:   midSafeValue
    };

    parse(values);
    var arrayValues2 = parse(arrayValues);
    psStrength(arrayValues2);
    var arrayValues3 = psStrength(arrayValues2);
    show(arrayValues3);
    
    //psStrength(arrayValues2);
}; //show(arrayValues3);
//______________________________________________
function parse(array) {

    /*    vWert = vWert ?                v : 1;
        wWert = wWert ?                w : 1;
        xWert = xWert ?                x : 0.75;
        yWert = yWert ?                 y : 1;
        hoechsteSicherheitWert = hoechsteSicherheitWert ? hoechsteSicherheitWert : 15;
        
        sicherWert = sicherWert ?    sicherWert : 12;
        mittelWert = mittelWert ?    mittelWert : 8;   */

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
        vValue = parseFloat(vValue.replace(",","." ));
        if (isNaN(vValue)) {
            alertB();
            v.value = "";
            return false;
        }
        
    } else {
        vValue = 1;
    };
console.log("vValue :" +  vValue);
    if (wValue != "") {
        wValue = parseFloat(wValue.replace(",","." ));
        if (isNaN(wValue)) {
            alertB();
            w.value = "";
            return false;
        }
    } else {
        wValue = 1;
    };

    if (xValue != "") {
        xValue = parseFloat(xValue.replace(",","." ));
        if (isNaN(xValue)) {
            alertB();
            x.value = "";
            return false;
        }
    } else {
        xValue = 0.75;
    };

    if (yValue != "") {
        yValue = parseFloat(yValue.replace(",","." ));
        if (isNaN(yValue)) {
            alertB();
            y.value = "";
            return false;
        }
    } else {
        yValue = 1;
    };

    if (maxSafetyValue != "") {
        maxSafetyValue = parseFloat(maxSafetyValue.replace(",","." ));
        if (isNaN(maxSafetyValue)) {
            alertB();
            maxSafety.value = "";
            return false;
        }
    } else {
        maxSafetyValue = 15;
    };

    if (safeValue != "") {
        safeValue = parseFloat(safeValue.replace(",","." ));
        if (isNaN(safeValue)) {
            alertB();
            safe.value = "";
            return false;
        }
    } else {
        safeValue = 12;
    };

    if (midSafeValue != "") {
        midSafeValue = parseFloat(midSafeValue.replace(",","." ));
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

    /*var werte = {"v" : vWert,"w" : wWert, "x" : xWert, "y" : yWert}; 
        
    var werte2 = {"hoechsteSicherheit" : hoechsteSicherheitWert, "sicher" : sicherWert, "mittel " : mittelWert};
        
    for (var key in werte) {
              for (j = 0; j < werte2.length; j++) {
                  if (werte[key] > werte2[j]) {
                         alertH(); return false; 
                      
                      
                  }
     
              }
        } */

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

    var arrayValues3 = [actualStrength, maxSafetyValue, safeValue, midSafeValue]

    return arrayValues3;



};

function show

(array) {

    var actualStrength = array[0];
    var maxSafetyValue = array[1];
    var safeValue = array[2];
    var midSafeValue = array[3];

   // console.log(safeValue);


    inProcent.innerHTML = (Math.round((Math.min(maxSafetyValue, actualStrength) / maxSafetyValue) * 100)) + "%";


    if (actualStrength >= safeValue) {
        strength.innerHTML = "1"
        inProcent.style.color = "green";
    } else if (password.length >= 10 || actualStrength >= midSafeValue) {
        strength.innerHTML = "0";
        inProcent.style.color = "orange";
    } else {
        strength.innerHTML = "-1";
        inProcent.style.color = "red";
    }

};

function clearFields() {

    v.value = "";
    w.value = "";
    x.value = "";
    y.value = "";
    maxSafety.value = "";
    safe.value = "";
    midSafe.value = "";
    password.value = "";
    strength.innerHTML = "";
    inProcent.innerHTML = "";
    output.innerHTML = ""
};

/*var kk = ["zahlen","grossbuchstaben", "kleinbuchstaben", "symbole", "hoechsteSicherheit", "sicher", "mittel"]
    
for(l = 0; l < kk.length;l++) {kk[l].value = ""; } */
