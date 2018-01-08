function aturJadwal (start,end){
    // Buat sebuah pengulangan untuk mengeluarkan jadwal Tono 2 hari sekali
    var jadwalTono = []
    
        for(var x = start; x <= end; x+=2){
            jadwalTono.push(x)
        }
        
        // Validasi jadwal Tono
        console.log("Jadwal Tono: " + jadwalTono)

    // Buat Jadwal Anton 4 hari sekali
    var jadwalAnton = []
    
        for(var z = start;z<=end; z+=4){
            jadwalAnton.push(z)
        }
        
        // Validasi jadwal ANton
        console.log("Jadwal Anton: " + jadwalAnton)
    
    // Buat Jadwal Budi
    var jadwalBudi = []
    
        for(var i = start;i<=end; i+=5){
            jadwalBudi.push(i)
        }
    
        console.log("Jadwal Budi: " + jadwalBudi)
    
    
    
    
    var tanggal = "tanggal"
    var libur = "Tempat Fitness Tutup"
    
    
    var isi = "";
    
    for(var y = start; y<=end ;y++){
        var member = []
    
        if(y % 5 === 0){
            console.log(tanggal + " " + y + ": " + libur )
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

        console.log(tanggal + " " + y + ": " + member)
    }
}

console.log(aturJadwal(7,31))
    