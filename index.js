/*
1. Buat variabel result array kosong
2. buat perulangan dimulai dari angka 7 sampai dengan 31
	- jika i sama dengan 7, push 'Tono, Anton, Budi' kedalam result
	- jika i habis dibagi 5, push 'Tempat Fitness Tutup' kedalam result
	- jika hasil i-7 habis dibagi 2, push 'Tono' kedalam result 
	- jika hasil i-7 habis dibagi 4, push 'Anton' kedalam result 
	- jika hasil i-7 habis dibagi 5, push 'Budi' kedalam result 
3. Tampilkan 'Tanggal i : result'
*/


var result=[];
for(var i=7; i<=31; i++){
  if (i===7){
    result.push('Tono, Anton, Budi');
  }
  else if (i % 5 === 0){
    result.push('Tempat Fitness Tutup');
  }
  else{
    if ((i-7)%2===0 ){
      result.push('Tono');
    }
    if((i-7)%4===0){
      result.push('Anton');
    }
    if((i-7)%5===0){
      result.push('Budi');
    }
  }
   console.log('Tanggal '+i+': '+result);
   result=[];
}
