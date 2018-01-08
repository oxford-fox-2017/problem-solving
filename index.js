/*
Yang diketahui / Input
-Tono 2 hari sekali
-Anton 4 hari sekali
-Budi 5 hari sekali
-Gym dibuka pada tanggal 7
-Tempat fitness tutup setiap kelipatan tanggal 5
-setiap bulan 31 hari

Pseudocode
lakukan perulangan yang dimulai dari angka dimana tanggal gym buka dan berakhir di angka gym tutup
buat kondisi dimana gym tutup setiap tanggal 5 dan kelipatannya


*/


function kalender(input) {

    for(let i = 7; i <= 31; i++){
            if(i % 5 === 0){
                console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
            } else {
                let hasil = [];
                for(let j = 0; j < input.length; j++){
                    if((i - 7) % input[j].waktu === 0){
                        hasil.push(input[j].nama)
                    }
                }
                console.log(`Tanggal ${i}: ${hasil}`)
            }
        }
    }

    let jadwal = [
        {
            nama: 'Tono',
            waktu: 2
        },
        {
            nama: 'Anton',
            waktu: 4
        },
        {
            nama:'Budi',
            waktu: 5
        }
    ]

console.log(kalender(jadwal))