'use strict'

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
