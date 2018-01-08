/* Buat perulangan
pada perulangan buat array kosong sebagai isi dari gym pada hari tersebut 
masukkan tanggal pada jawaban yang akan di console log 
jika tanggal kelipatan lima maka masukkan tulisan tempat fitness tutup pada jawaban
jika tidak, maka jika tanggal dikurangi tanggal buka habis dibagi 2 maka tambahkan tono di array, jika habis dibagi 4 tambahkan anton, jika habis dibagi 5 tambahkan budi.
lalu console log answer ditambah dengan isi gym hari ini jika tidak kosong, jika kosong tambahkan string kosong
*/

for (let i = 7; i <= 31; i++) {
    let today = [];
    let answer = `Tanggal ${i}: `
    if (i % 5 === 0) {
        answer += 'Tempat Fitness Tutup';
    } else {
        let day = i-7;
        if (day%2 === 0) today.push('Tono');
        if (day%4 === 0) today.push('Anton');
        if (day%5 === 0) today.push('Budi');
    }
    console.log(answer + today.join(', ') || '');
}