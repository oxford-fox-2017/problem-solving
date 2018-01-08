//PSEUDOCODE
/*
1. Lakukan looping dibatasi dengan angka 7 dan angka 32 (angka 32 tidak termasuk)
2. Buat variabel dengan tipe data array kosong
3. Buat variabel hari yang menampilkan kata 'Tanggal :'
4. Buat variabel yang mendifinisikan supaya data looping dihitung dari 0 (mengurankan angka tanggal awal dengan angkanya sendiri)
5. Buat pengondisian sbb :
- Jika angka looping merupakan kelipatan 5, maka tampilkan pada tanggal tersebut Tempat Fitness Ditutup
- Jika angka pada variabel yang mendefinisikan angka looping merupakan kelipatan 2, maka masukkan nama Tono ke dalam variabel data array kosong
- Jika angka pada variabel yang mendefinisikan angka looping merupakan kelipatan 4, maka masukkan nama Anton ke dalam variabel data array kosong
- Jika angka pada variabel yang mendefinisikan angka looping merupakan kelipatan 5, maka masukkan nama Budi ke dalam variabel data array kosong
6. Tampilkan variabel hari digabungkan dengan variabel data array
NOTE : Angka 0 dibagi dengan angka berapapun maka nilainya akan habis
*/

for (var i = 7; i < 32; i++) {
    var tampung = [];
    var hari = 'Tanggal ' + i + ': ';
    var count = i - 7;
    if (i % 5 === 0) {
        tampung.push('Tempat Fitness Tutup')
    } else {
        if (count % 2 === 0) {
            tampung.push('Tono')
        }
        if (count % 4 === 0) {
            tampung.push('Anton')
        }
        if (count % 5 === 0) {
            tampung.push('Budi')
        }
    }
    console.log(hari + tampung)
}