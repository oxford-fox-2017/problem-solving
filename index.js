// 1. Bikin Variable (nama)- untuk tampung nama yang keluar sesuai hari kedatangan
// 2. Loop 7 sampe 31 - 7 hari mulai 31 hari selesai.
//   2.1 Dalam loop bikin switch case
//   2.2 Kondisi 1-Pertama kalo x sama dengan 7 nama sama dengan 'Tono, Anton, Budi'
//   2.3 Kondisi 2-Setiap lima hari tempat fitness Tutup
//   2.4 Kondisi 3-Kalo ketiga orang tersebut hadir
//   2.5 Kondisi 4- Kalo Tono & Anton hadir
//   2.6 Kondisi 5-Kalo Tono & Budi hadir
//   2.7 Kondisi 6-Kalo Tono hadir
//   2.8 Kondisi 7 Kalo Budi hadir
// 3.End loop
// 4. console.log ('Tanggal '+x+': '+nama)
// 5. Reset Variable

var nama ="";
for(var x=7; x<=31; x++){
  switch(true){
    case(x===7): nama='Tono, Anton, Budi';break;
    case (x%5 ===0): nama='Tempat Fitness Tutup';break;
    case ((x-7)%5 ===0 && (x-7)%4===0 && x%2!==0): nama ='Tono, Anton, Budi';break;
    case ((x-7)%4 ===0 &&x%2 !==0 && x%5 !==0 ):nama ='Tono, Anton';break;
    case (x%2 !==0 && x%5 !==0 && (x-7)%5 ===0 ):nama='Tono, Budi';break;
    case (x%2 !==0 && x%5 !==0 ): nama = 'Tono';break;
    case ((x-7)%5 ===0):nama='Budi';break;
  }
  console.log ('Tanggal '+x+': '+nama);
  var nama ="";
}
