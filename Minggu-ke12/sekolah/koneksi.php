<?php
$conn = mysqli_connect("localhost","root","","sekolah_genio");
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal : ".mysqli_connect_error();
}