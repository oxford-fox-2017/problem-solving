let status = [];
for(let i = 7; i <= 31; i++) {
    if(i === 7) {
        status.push('Tono');
        status.push('Anton');
        status.push('Budi');
    } else if(i % 5 === 0) {
        status.push('Tempat Fitnes Tutup');
    } else {
            if((i-7) % 2 === 0) {
                status.push('Tono');
            } 
            if((i-7) % 4 === 0) {
                status.push('Anton');
            }
            if ((i - 7) % 5 === 0) {
                status.push('Budi');
            }
    } 
    console.log('Tanggal ' + i + ': ' + status);
    status = [];
}
