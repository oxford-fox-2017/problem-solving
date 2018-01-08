function problem_solving(input) {
  let bulan = 31
  let buka = 7
  for (let i = buka; i <= bulan; i++) {
    if (i === buka) {
      console.log('Tanggal :' + i + ' Tono, Anton, Budi')
    } else if (i % 5 === 0) {
      console.log('Tanggal :' + i + ' Tempat Fitnes Libur')
    } else {
      let result = []
      jadwal.forEach(value => {
        if ( (i - 7) % value.waktu === 0 ) {
          result.push(value.nama)
        }
      })
      console.log(`Tanggal ${i}: ${result}`)
    }

  }
}

let jadwal = [{
    nama: 'Tono',
    waktu: 2
  },
  {
    nama: 'Anton',
    waktu: 4
  },
  {
    nama: 'Budi',
    waktu: 5
  }
]

problem_solving(jadwal)