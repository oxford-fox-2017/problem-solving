let answer;

for (let i = 7; i <= 31; i++) {
    let today = [];
    answer = `Tanggal ${i}: `
    if (i % 5 === 0) {
        answer += 'Tempat Fitness Tutup';
    } else {
        let day = i-7;
        if (day%2 === 0) today.push('Tono');
        if (day%4 === 0) today.push('Anton');
        if (day%5 === 0) today.push('Budi');
    }
    console.log(answer + today.join(', ') || '');
}