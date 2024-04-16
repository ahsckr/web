let topla = (a,b) =>
{ document.write(a+b);}

function carpma(a,b){
//return a*b;
document.getElementById("etiket1").innerHTML = a*b;
}

function hesapla(){
let s1 = document.getElementById("sayi1").value;
let s2 = document.getElementById("sayi2").value;
//document.getElementById("p1").innerHTML = s1*s2;

document.getElementsByTagName("p")[0].innerHTML = s1*s2;
document.getElementsByTagName("p")[1].innerHTML = s1*s2;
//document.getElementsByClassName("p")[1].innerHTML = s1*s2;
//document.getElementsByName("p")[1].innerHTML = s1*s2;

document.getElementById("sayi1").type="checkbox";

}
