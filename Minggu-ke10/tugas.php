<?php
//Algoritma mencari bilangan prima 1 - 50
for ($i=1; $i <= 50 ; $i++) { //Membuat perulangan dari 1 sampai 50
    $a = 0; //Deklarasi nilai dari variabel $a
    for ($j=1; $j <= $i ; $j++) { //nested loop 
        if ($i % $j == 0) { //Pengkondisian jika hasil modulus 0 maka nilai $a akan bertambah 1, jika tidak maka perulangan akan berllanjut
            $a++;
        }
    } 
    if ( $a == 2) { //pengecekkan kembali jika nilai $a itu 2 maka akan mencetak nilai $i sekarang ini
        echo  "$i, ";
    }
}


?>