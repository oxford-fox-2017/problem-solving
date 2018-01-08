/*
1. buat looping untuk menentukan jadwal gym tiap bulannya.
2. buat kondisi if untuk menentukan tanggal tutup gym.

 */

var openGym = 7;
var month = 31;
// var visitor1 = {name: "Tono", schedule: 2};
// var visitor2 = {name: "Anton", schedule: 4};
// var visitor3 = {name: "Budi", schedule: 5};
// var closed = "Tempat Fitness Tutup";

//  for (var i = openGym; i <= month; i++){
//      if(i % 5 === 0){
//          console.log("Tanggal " + i + " : " + closed);
//      }else if(i % visitor1.schedule === 1){
//          console.log("Tanggal " + i + " : " + visitor1.name);
//      }
//      console.log("Tanggal " + i + " : ");
//      for (var j = openGym; j <= month; j+=2){
//          console.log("Tanggal " + i + " : " + visitor1.name);
//      }
//  }

var visitor = [{
    nama:"Tono",
    schedule:2
},
{
    nama:"Anton",
    schedule: 4
},
{
    nama:"Budi",
    schedule: 5
},
{
    nama:"Kevin",
    schedule: 6
}];

for(var i = openGym; i <= month; i++){
    var jadwal = [];
    jadwal.push(i);
    var membersPerHari = [];
    if(i % 5 === 0){
        console.log("Tanggal " + jadwal + " : Tempat Fitness Tutup");
        i++;
        jadwal = i;
    }
    for(var j = 0; j < visitor.length; j++){
        if((i - openGym) % visitor[j].schedule === 0){
            membersPerHari.push(visitor[j].nama);
        }
    }
    console.log("Tanggal " + jadwal + " : " + membersPerHari.join(", "));
}

// console.log(visitor[0].nama);