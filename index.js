// Melakukan pengulangan dari tanggal 7 - 31
// Melakukan pengkondisionalan if saat tempat fitness tutup
// melakukan pengkondisionalan if saat setiap member datang ke tempat fitness sesuai dengan jadwal masing2


for(var i = 7; i<=31; i++){
	if(i%5 === 0){
		console.log('Tanggal '+ i +': Tempat Fitness Tutup');
	}else if((i-7)%2 === 0 && (i-7)%4 === 0 && (i-7)%5 === 0){
		console.log('Tanggal '+ i +': Tono, Anton, Budi,');
	}else if((i-7)%2 === 0 && (i-7)%4 === 0 ){
		console.log('Tanggal '+ i +': Tono, Anton');
	}else if((i-7)%2 === 0 && (i-7)%5 === 0 ){
		console.log('Tanggal '+ i +': Tono, Budi');
	}else if((i-7)%4 === 0 && (i-7)%5 === 0 ){
		console.log('Tanggal '+ i +': Anton, Budi');
	}else if((i-7)%2 === 0){
		console.log('Tanggal '+ i +': Tono');
	}else if((i-7)%5 === 0){
		console.log('Tanggal '+ i +': Budi');
	}else {
		console.log('Tanggal '+ i +':');
	}
}