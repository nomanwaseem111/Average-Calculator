function cal(){
  
    var a = parseInt(document.getElementById('1').value);
    var b = parseInt(document.getElementById('2').value);
    var c = parseInt(document.getElementById('3').value);
    var d = parseInt(document.getElementById('4').value);
    var e = parseInt(document.getElementById('5').value);
    var f = parseInt(document.getElementById('6').value);
    var g = parseInt(document.getElementById('7').value);
    var h = parseInt(document.getElementById('8').value);
    var i = parseInt(document.getElementById('9').value);
    var j = parseInt(document.getElementById('10').value);
 
    if(a > 100 || b > 100 || c > 100 || d > 100 || e > 100 || f > 100 || g > 100 || h > 100 || i > 100 || j > 100 ||){
     alert("Please Enter Mark a Range of 100");
    }
    else{
    var obtain = a + b + c + d + e + f + g + h + i + j;
    document.getElementById('obtained-Marks').innerHTML = obtain;
 
    }
 
 }