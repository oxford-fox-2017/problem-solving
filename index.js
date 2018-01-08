// Inisialisasi variabel jadwal = array of object yang berisi nama dan waktu
// Inisialisasi variabel bulan = 31
// Inisialisasi variabel buka = 7
// Loop dari 'buka' sampai 'bulan'
// jika 'i' habis dibagi 5 sama dengan 0 maka tampilkan Tempat Fitnes Libur
// selain itu 
// Inisialisasi variabel result = []
// lakukan loop untuk mendapatkan value dari 'jadwal'
// jika 'i-7' habis dibagi 'jadwal.waktu' sama dengan 0
// maka push 'jadwal.nama' kedalam 'result'
// tampilkan tanggal i 'result'

function problem_solving(input) {
  let bulan = 31
  let buka = 7
  for (let i = buka; i <= bulan; i++) {
    if (i % 5 === 0) {
      console.log(`Tanggal ${i}: Tempat Fitnes Libur`)
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