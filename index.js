/*

PSEUDOCODE

Bikin array untuk setiap tanggal
Jika hari kelipatan 5 maka 'Tempat Fitness Libur'
Jika tidak maka:

Bikin for untuk Tono setiap 2 hari sekali
Push ke array tanggal yang sesuai
Bikin for untuk Anton setiap 4 hari sekali
Push ke array tanggal yang sesuai
Bikin for untuk Budi setiap 5 hari sekali
Push ke array tanggal yang sesuai

Console.log result

*/

var result = [];

for (let i=7; i<=31; i++){
  if(i%5===0){
    var arr =[];
    var libur = 'Tanggal ' +i+ ': Tempat Fitness Libur';
    arr.push(libur);
    result.push(arr);
  }else{
  var arr2 = [];
  var str = 'Tanggal ' +i+ ':';
  arr2.push(str);
  result.push(arr2);
  }
}

for (let i=0; i<result.length; i++){
  if(i%2===0 && (i+7)%5!==0){
    result[i].push('Tono');
  }
  
  if(i%4===0 && (i+7)%5!==0){
    result[i].push('Anton');
  }
  
  if(i%5===0 && (i+7)%5!==0){
    result[i].push('Budi');
  }
}

console.log(result);