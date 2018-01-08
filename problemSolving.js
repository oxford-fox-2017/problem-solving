//PSEUDOCODE
/*
  FOR dari var i = 7 hingga sama dengan 31
    IF i%5 = 0 Libur
    ELSE IF hari kelipatan 2 & 4 & 5 dari 0, tono budi anton masuk gym
    ELSE IF hari kelipatan 2 & 4 dari 0, tono dan anton masuk gym
    ELSE IF hari kelipatan 2 & 5 dari 0, tono dan budi masuk gym
    ELSE IF hari kelipatan 4 & 5 dari 0, anton dan budi masuk gym
    ELSE IF hari kelipatan 2 dari 0, tono masuk gym
    ELSE IF hari kelipatan 4 dari 0, anton masuk gym
    ELSE IF hari kelipatan 5 dari 0, budi masuk gym
    ELSE gym kosong
*/
// END FOR

function gym(string) {
  for(var i = 7; i <= 31; i++) {
    if(i%5 === 0) {
      console.log("Tanggal " + i +": Libur");
    } else if ((i-7)%2 === 0 && (i-7)%4 === 0 && (i-7)%5 === 0) {
      console.log("Tanggal " + i + ": Tono, Budi, Anton")
    } else if((i-7)%2 === 0 && (i-7)%4 === 0) {
      console.log("Tanggal " + i +": Tono, Anton");
    } else if((i-7)%2 === 0 && (i-7)%5 === 0) {
      console.log("Tanggal " + i +": Tono, Budi");
    } else if((i-7)%4 === 0 && (i-7)%5 === 0) {
      console.log("Tanggal " + i +": Anton, Budi");
    } else if ((i-7)%2 === 0) {
      console.log("Tanggal " + i + ": Tono");
    } else if ((i-7)%4 === 0) {
      console.log("Tanggal " + i + ": Anton");
    } else if((i-7)%5 === 0) {
      console.log("Tanggal " + i + ": Budi");
    } else {
      console.log("Tanggal " + i + ": ");
    }
  }
}

gym("Libur");