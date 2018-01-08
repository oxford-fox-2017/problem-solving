/*
PSEUDOCODE :
1. Looping kalender mulai dari 7 sampai 31
2. Jika looping habis dibagi 5 maka tampilkan "Tempat Fitness Tutup"
3. Jika looping tidak habis habis dibagi 5 maka
   a. Looping array input member
   b. Jika (kalender - 7) habis dibagi dengan jadwal member maka tampilkan nama-nama membernya
*/

'uses strict'

function kalender_fitness(arrMember) {
  for (let i = 7; i <= 31; i++) {
    let result = ''
    let member = ''

    if (i % 5 === 0) {
      result = `Tanggal ${i}: Tempat Fitness Tutup`
    } else {
      for (let j = 0; j < arrMember.length; j++) {
        if ((i - 7) % arrMember[j].jadwal == 0) {
          member += arrMember[j].nama + ', '
        }
      }
      result = `Tanggal ${i}: ${member}`
    }
    console.log(result);
  }
}

let arrMember = [{
  nama    : 'Tono',
  jadwal  : 2,
}, {
  nama    : 'Anton',
  jadwal  : 4,
}, {
  nama    : 'Budi',
  jadwal  : 5,
}]
kalender_fitness(arrMember)
