function problemSolve(input) {
    for (let index = 7; index <= 31; index++) {
        let arr = []
        if ((index) % 5 == 0) {

            arr.push('hari ini gym libur')
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