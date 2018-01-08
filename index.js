/*
loop tanggal dari 7 - 31
set jadwal isinya tanggal + hasil loop i
set nama dengan array kosong
jika i habis dibagi 5 maka tambah ke jadwal 'tempat fitness tutup'
else
    set start ke 0 (i-7) tanggal 7 ==0, 8=1, 9=2,10=3,11=4,12=5,dst
    jika start habis dibagi 2 maka tambah Tono
    jika start habis dibagi 4 maka tambah Anton
    jika start habis dibawgi 5 maka tambah Budi
munculkan semua

*/
for (let i = 7; i<=31 ; i++){
    let jadwal = 'Tanggal '+i+':';
    let nama = [];
    //console.log(jadwal);
    if(i%5===0){
        jadwal+= ' Tempat Fitness Tutup';
    }
    else{
        let start = i-7;
        if(start%2===0){
            nama.push(' Tono');
        }
        if(start%4===0){
            nama.push(' Anton');
        }
        if(start%5===0){
            nama.push(' Budi');
        }
    }
    
console.log(jadwal+nama.join());
};
