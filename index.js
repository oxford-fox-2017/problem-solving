function aturJadwal (start,end){
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Tono 2 hari sekali
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Anton 4 hari sekali
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Budi 5 hari sekali
    var jadwalTono = []
    var jadwalAnton = []
    var jadwalBudi = []
    
        for(var x = start; x <= end; x++){
            if(x === start){
                jadwalTono.push(x)
                jadwalAnton.push(x)
                jadwalBudi.push(x)
                x++
            }

            if((x - start) % 2 === 0){
                jadwalTono.push(x)
            }

            if((x - start) % 4 === 0){
                jadwalAnton.push(x)
            }

            if((x - start) % 5 === 0){
                jadwalBudi.push(x)
            }
        }
    
    var tanggal = "tanggal"
    var libur = "Tempat Fitness Tutup"
    
    
    var isi = "";
    var hasil = "";
    
    for(var y = start; y<=end ;y++){
        var member = []
    
        if(y % 5 === 0){
            hasil = hasil + tanggal + " " + y + ": " + libur + "\n"
            y++
        } 
        
        if (jadwalTono.indexOf(y) !== -1){
           member.push("Tono")
        } 
        
        if(jadwalAnton.indexOf(y) !== -1){
            member.push("Anton")
        } 
        
        if(jadwalBudi.indexOf(y) !== -1){
            member.push("Budi")
        }

        hasil = hasil + tanggal + " " + y + ": " + member.join(", ") + "\n"
    }

    return hasil
}

console.log(aturJadwal(7,31))
    