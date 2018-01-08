/* 
input : tono , 2 hari sekali : tanggal 7,9,11,13 -> ganjil  
        anton ,4 hari sekali : tanggal 7,11,15,19 -> ganjil 
        budi , 5 hari sekali : tanggal 7,12,17,22 -> ganjil dan genap
tiap tanggal kelipatan 5 libur 
outputnya :
1.tono : 7,9,11,13,15(Tempat fitnes libur) -> tanggal%2 !== 0  dan tanggal%5 !==0
2.budi : 7,12,17,22,27 -> agar mendapat nilai pasti, tanggal%5 == 2
3.tono,anton :11,19,23,31 -> i%2 !==0 && i%4 === 3, i%5 !== 0(soalnya klu gk pake ini nanti hari libur nya ke skip tanggal 15)
4.tono,budi :17 -> dengan menggabungkan syarat tono dan budi
5.tono,budi,anton : 27 -> i%4 === 3 && i%2 !== 0 && i%5 === 2 , masuk ke semua tanggal orang yang fitnes
6.Tempat fitnes libur : 10,15,20,25,30 -> tanggal/5 === 0
*/


function problemSolving(){
console.log (`tanggal 7: Tono,Anton,Budi `) 
 for (var i = 8 ; i <= 31 ; i++ ){ 
    if (i%4 === 3 && i%2 !== 0 && i%5 === 2){
      console.log (`Tanggal ${i}: Tono,Anton,Budi`)
    }else if (i%2 !==0 && i%4 === 3 && i%5 !== 0){  
      console.log (`Tanggal ${i}: Tono,Anton`)
    }
    else if (i%5 == 2 && i%2 !== 0 ){ 
      console.log (`Tanggal ${i}: Tono,Budi`) 
    }
    else if ( i%2 !== 0 && i%5 !== 0){
      console.log (`Tanggal ${i}: Tono`)
     }
     else if(i%5 == 2 ){
       console.log(`Tanggal ${i}: Budi`)
     } 
    else if (i%5 === 0){
     console.log (`Tanggal ${i}: Tempat Fitness Tutup`)
   }else {
     console.log (`Tanggal ${i}:`)
   } 
  }
} 

problemSolving()