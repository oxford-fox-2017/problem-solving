function problem(input){
    console.log(`Example Output`)
    for (let i = 7; i < 32; i++) {
        if(i%5==0){
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        }else{
            let result=[]
            jadwal.forEach(org=>{
                if((i-7)%org.waktu==0){
                    result.push(org.name)
                }
            })
            console.log(`Tanggal ${i}: ${result}`)
        }
    }
}
let jadwal=[
    {
        name:"tono",
        waktu:2
    },
    {
        name:"anton",
        waktu:4
    },
    {
        name:"budi",
        waktu:5
    }
]
problem(jadwal)