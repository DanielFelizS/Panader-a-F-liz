function countChars(obj){
    let maxLength = 300;
    let strLength = obj.value.length;
    let charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;"> Excediste el límite de '+maxLength+' Caracteres</span>';
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' caracteres restantes';
    }
}