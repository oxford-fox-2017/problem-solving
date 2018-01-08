/*
Start from 7 to 31
If date adalah kelipatan 5 
    maka Tempat Fitnes Tutup
else
    Hari di mulai dari 0 dari tanggal 7
    jika hari kelipatan 2 maka si Tono ngegym
    jika hari kelipatan 4 maka si Anton ngegym
    jika hari kelipatan 5 maka si Budi ngegym
*/

function newa (){
    for ( i = 7; i <= 31; i++){
        let member = '';
        if( i % 5 === 0){
            console.log('Tanggal ' + i + ": Tempat Fitnes Tutup");
        }else{
            if ( (i - 7) % 2 === 0){
                member += 'Tono, ';
            }
            if ( (i - 7) % 4 === 0){
                member += 'Anton, ';
            }
            if ( (i - 7) % 5 === 0){
                member += 'Budi, ';
            }
            console.log('Tanggal ' + i + ': ' + member);
        }
    }
    return ' ';
}

console.log(newa());