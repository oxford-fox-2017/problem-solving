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


// /*
// Tanggal 7: Tono, Anton, Budi
// Tanggal 8:
// Tanggal 9: Tono
// Tanggal 10: Tempat Fitness Tutup
// Tono, 2 hari sekali
// Anton, 4 hari sekali
// budi, 5 hari sekali
// */
