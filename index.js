// 1. Set nilai "tanggal_hari_ini" dengan nilai 7
// 2. Perulangan :
//     Buat baru variabel person;
//     Jika "tanggal_hari_ini" sama dengan 7, tambah variabel person dengan "Tono, Anton, Budi, "
//     Jika "tanggal_hari_ini" sama dengan atau lebih besar dari 31, keluar dari Perulangan

//     Jika sisa bagi dari "tanggal_hari_ini" dibagi 2 sama dengan 0, maka CETAK "Tono, "
//     Jika sisa bagi dari "tanggal_hari_ini" dibagi 4 sama dengan 0, maka CETAK "Anton, "
//     Jika sisa bagi dari "tanggal_hari_ini" dibagi 5 sama dengan 0, maka CETAK "Budi, "

//     TAMBAH NILAI +1 pada "tanggal_hari_ini"

//     CETAK "tanggal_hari_ini"


for(var i=7; i<=31; i++){

    var person = "";

    if(i==7){
        person = "Tono, Anton, Budi, ";
    }
    else if(i % 10 == 0){
        person = "Tempat fitnes tutup";
    }
    else{
        if((i-7)%2 ==0){
            person += "Tono, "
        }
    
        if((i-7)%4 ==0){
            person += "Anton, "
        }
    
        if((i-7)%5 ==0){
            person += "Budi, "
        }
    }

    console.log("Tanggal : "+i+": "+person);
}