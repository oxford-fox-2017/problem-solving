let getSchedule = () => {
  let people = ['Tono', 'Anton', 'Budi'];
  let turnedEvery = [2, 4, 5];
  let result = [];

  for (var i = 7; i <= 31; i++) {
    let workers = [];
    if (i === 7) {
      workers = people;
      result.push(`Tanggal ${i}: ${workers}`)
    } else {
      if (i % 5 === 0) {
        workers.push(`Tempat Fitness Tutup`)
      }
      for (var j = 0; j < people.length; j++) {
        if ((i - 7) % turnedEvery[j] === 0) {
          workers.push(people[j])
        }
      }
      result.push(`Tanggal ${i}: ${workers}`)
    }
  }
  return result.join('\n');
}

console.log('Output');
console.log('-----------------');
console.log(getSchedule());
