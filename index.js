let namaArray = []

for (let i = 7; i <= 31; i++) {
  let  konten =  ''
  if (i % 5 === 0) {
    konten += "Tempat Fitness Tutup"
  }
  else {
    if ((i-7) % 2 === 0) {
      konten += 'Tono, '
    }
    if ((i-7) % 4 === 0) {
      konten += 'Anton, '
    }
    if ((i-7) % 5 === 0) {
      konten += 'Budi '
    }
  }

console.log('Tanggal ' + i  + ': ' + konten);
}
