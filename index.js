/*
1. buat variable object buat pelanggan dan hari dia masuk
2. looping dimulai dr tanggal 7 dan berakhir di tanggal 31
3. kalo kelipatan 5 berarti tempat tutup,
4. else kalo (hari-7) modulus dari hari orang == 0 maka push ke array
5. print tanggal dan array
*/

let obj = [{
    nama : 'Tono',
    hari : 2
  }, {
    nama : 'Anton',
    hari : 4
  }, {
    nama : 'Budi',
    hari : 5
  }
]

for (var i = 7; i <= (31); i++) {
  let pelanggan = []
  if(i % 5 == 0){
    pelanggan.push('Tempat Fitness Tutup')
  } else{
    obj.forEach(data =>{
      if((i-7) % data.hari == 0){
        pelanggan.push(data.nama)
      }
    })
  }
  console.log(`Tanggal ${i}: ${pelanggan}`);
}
