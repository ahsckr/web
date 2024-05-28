const sayiDizi = [1, 2, 3, 10, 11, 12];
let toplam = 0;
for(deger in sayiDizi)
toplam += sayiDizi[deger];

document.write(toplam);
document.write("</br>");

const sayiDizi2 = [1, 2, 3, 4, 5, 6];
let toplam2 = 0;

for(deger of sayiDizi2)
toplam2 += deger;

document.write(toplam2);



document.write("</br>");

let faktoriyel = (sayi) =>
{
let sonuc = 1;
for (i = 1; i <= sayi; i++)
{
sonuc *= i;
}
return sonuc;
}

document.write(faktoriyel(4));
document.write("</br>");


let sonuc = toplama(12, 25);
document.write(sonuc);
function toplama(a, b)
{
return a + b;
}

document.write("</br>");
var sonuc1 = (a) =>
{
return a * a;
}

document.write(sonuc1(5));


/*
let a = 21;

if (a % 2 == 0)
document.write("Sayi cifttir");
else
document.write("Sayi tektir");
*/

/*let sayi1;
let sayi2;
let isim;
const sayi3 = 30;

sayi1 = 12;
sayi2 = 26;
isim = "Ahsen";
//sayi3 = 30;
<script src="4.ders.js">

</script>document.write(sayi1 + sayi2 + sayi3 +isim);
sayi2 = 36;
sayi3 = 40;
*/

/*document.write("<h1> JavaScript Denemeleri </h1>");
document.write("İlk javascript denemesi");
document.write("</br>");
document.write("İkinci satır");
*/