let getSchedule = () => {
  // set people
  let people = ['Tono', 'Anton', 'Budi'];
  // set turnedEvery for every person
  let turnedEvery = [2, 4, 5];
  // create result variabel to store array value
  let result = [];

  // do looping from 7 to 31
  for (var i = 7; i <= 31; i++) {
    // create workers variabel to put worker list in
    let workers = [];
    // if i is equal to 7, the start point of date
    if (i === 7) {
      // then, workers is equal to people, and push string that will be used as Output inside result variable
      workers = people;
      result.push(`Tanggal ${i}: ${workers}`)
      // else
    } else {
      // if the result of i % 5 is equal to zero, then push 'Tempat Fitness Tutup' into workers variable
      if (i % 5 === 0) {
        workers.push(`Tempat Fitness Tutup`)
      }
      // do looping from zero to less than array of people length
      for (var j = 0; j < people.length; j++) {
        // if the result of (i - 7) % by the person's turnedEvery is equal to zero
        if ((i - 7) % turnedEvery[j] === 0) {
          // push person into workers variable
          workers.push(people[j])
        }
      }
      // then, push string that will be used as Output inside result variabel
      result.push(`Tanggal ${i}: ${workers}`)
    }
  }
  // then, return the result that is joined by new line
  return result.join('\n');
}

console.log('Output');
console.log(getSchedule());
