
var form = document.querySelector("#form-encrip-desencrip");
var msgError = document.querySelector("#msgError");
var btnEncriptar = document.querySelector("#btn-encriptar");
var input = document.querySelector("#input-texto"); 
var inputCodificado = document.querySelector("#msg");
var btnCopiar = document.querySelector("#btn-copy");
var btnDesencriptar = document.querySelector("#btn-desencriptar");


function desencriptar(frase){
    const regexA  = /ai/g;
    const regexE = /enter/g;
    const regexI = /imes/g;
    const regexO = /ober/g;
    const regexU = /ufat/g;

    var strA = frase.replace(regexA,'a');
    var strE = strA.replace(regexE, 'e');
    var strI = strE.replace(regexI, 'i');
    var strO = strI.replace(regexO, 'o');
    var strU = strO.replace(regexU, 'u');

    return strU;
}

function encriptar(frase){
    var vocalA = /a/gi;
    var vocalE = /e/gi;
    var vocalI= /i/gi;
    var vocalO = /o/gi;
    var vocalU = /u/gi;    
    var str1 = frase.replace(vocalA, "ai");
    var str2 = str1.replace(vocalE, "enter");
    var str3 = str2.replace(vocalI, "imes");
    var str4 = str3.replace(vocalO, "ober"); 
    var str5 = str4.replace(vocalU, "ufat");
    return str5;
}

function copiar(){
    inputCodificado.select();
    document.execCommand("copy");
    
}


btnCopiar.addEventListener("click",copiar);

btnEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var fraseEncriptar = input.value;
    inputCodificado.value = encriptar(fraseEncriptar);
    form.reset();
   
});

btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var fraseDesencriptar = input.value;
    inputCodificado.value = desencriptar(fraseDesencriptar);
    form.reset();

});



