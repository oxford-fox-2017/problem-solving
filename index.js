function aturJadwal (start,end){
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Tono 2 hari sekali
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Anton 4 hari sekali
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Budi 5 hari sekali
    var customer = [{
        nama: "Tono",
        reps: 2,
    },
    {
        nama: "Anton",
        reps: 4,  
    },
    {
        nama: "Budi",
        reps: 5, 
    }]

    // Menentukan jadwal perbulan
    for(var x = start; x<=end; x++){
        var jadwal = []
        jadwal.push(x)

        if(x % 5 === 0){
            console.log("Tanggal " + jadwal + ": Tempat Fitnes Tutup")
            x++

            jadwal = x
        }


        // Menentukan jadwal perhari
        var jadwalPerHari = []
        for(var y = 0; y <= customer.length - 1; y++){
            if((x-start) % customer[y].reps  === 0){
                jadwalPerHari.push(customer[y].nama)
            }
        }
        console.log("Tanggal " + jadwal + ": " + jadwalPerHari.join(", "))
    }

    
    
}

console.log(aturJadwal(7,31))
    