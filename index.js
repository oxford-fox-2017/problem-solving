function problemSolving(){
    let tono = 2;
    let anton = 4;
    let budi = 5;
    let gym = 5;
    let tanggal = 7;

    for(var i=0; i<25; i++){
        let datang = []
        if(i % 2 == 0){
            datang.push("Tono")
        }
        if(i % 4 == 0){
            datang.push("Anton")
        }
        if(i % 5 == 0){
            datang.push("Budi")
        }
        if(tanggal % 5 == 0){
            datang.push("Tempat Fitness Tutup")
        }
        console.log("Tanggal"+tanggal+":"+datang);
        tanggal++;
    }
}

problemSolving();