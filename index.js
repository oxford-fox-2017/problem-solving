'use strict'

/*
1. buat array of object untuk member yang isinya inputan (ada name dan day)
2. looping sebanyak 31 kali dan dimulai dari index ke 7
3. buat variabel array tampung
4. kondisi
   kalau index habis dibagi 5 print "tempat fitness libur"
   else
   looping setiap objek dari array of object objMember
    kondisi
    kalau index - 7 habis dibagi day setiap member, push ke array tampung name nya
5. print array tampungnya
*/

let objMember = [
  {
    name  : 'Tono',
    day   : 2,
  },
  {
    name  : 'Anton',
    day   : 4,
  },
  {
    name  : 'Budi',
    day   : 5,
  }
]

function problemSolving(obj) {
  for (let i = 7; i < 32; i++) {
    let arrPerson = []
    if ((i % 5) === 0) {
      console.log(`Tanggal ${i}: Tempat Fitness Libur`);
    } else {
      obj.forEach(person => {
        if ((i-7) % person.day === 0) {
          arrPerson.push(' ' + person.name)
        }
      })
      console.log(`Tanggal ${i}:${arrPerson}`);
    }
  }
}

problemSolving(objMember);
