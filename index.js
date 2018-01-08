
/**
 * 
 * pseudocode
 * 1. tentuin inputnya mau dalam bentuk apa
 * 2. bikin inputnya dalam bentuk array of object
 * 3. dimana nanti tiap obj memiliki nama orang dan waktu mereka mengunjungi gym
 * 4. pada function : 
 *  - buat perulangan untuk menghitung hari dari tanggal 7 sampe tanggal 31
 *      - buat kondisi apa bila hari adalah keliapatan 5 maka log 'gym hari ini libur',dan lanjutkan proses ke looping berikutnya
 *      - akses input yang sudah diberikan
 *      - buat pengecekan , apakah hari ini jadwal orang tersebut untuk datang atau tidak
 *          -- jika iya masukan nama orang tersebut pada array penampung
 *  - end loop
 *  - log array yang penampung
 */
function problemSolve(input) {
    for (let index = 7; index <= 31; index++) {
        let arr = []
        if ((index) % 5 == 0) {
           console.log('tanggal : '+index +' '+'gym hari ini lbur')
            continue
        }
        input.forEach(row => {
            if ((index - 7) % row.waktu == 0) {
                arr.push(row.name)
            }
        })
        console.log('tanggal: ' + index + " " + arr)
    }
}


let arrObj = [
    {
        name: 'tono',
        waktu: 2
    },
    {
        name: 'anton',
        waktu: 4,

    },
    {
        name: 'budi',
        waktu: 5
    }
]

problemSolve(arrObj)