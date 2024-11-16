<?php

$nilai = 19;

if ($nilai >= 90 ) {
    $grade = "A";
}elseif($nilai >= 80){
    $grade = "B";
}elseif($nilai >= 70){
    $grade = "C";
}elseif($nilai >= 60){
    $grade = "D";
}else {
    $grade = "E";
}

echo "Nilai Anda : $nilai<br>";
echo "Grade Anda : $grade";
