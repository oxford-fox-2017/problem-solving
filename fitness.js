// Release 0 : Build from Pseudocode
// lakukan perulangan dari tanggal 7 s/d tanggal 31;
// tanggal 7 maka output nya = tono, anton, budi;
// 2 hari sekali nama Tono di print;
// 4 hari sekali nama Anton di print;
// 5 hari sekali nama Budi di print;
// setiap tanggal kelipatan 5, fitness tutup .


var containerTono  = 7,
    containerAnton = 7,
    containerBudi  = 7;
 
for (var i = 7; i <= 31; i++) {
    var result = [];

    if(i == 7) {
        result = ['tono', 'anton', 'budi'];
    }

    if( (i - containerTono) == 2 ) {
        result.push("tono");
        containerTono = i;
    }

    if( (i - containerAnton) == 4 ) {
        result.push("anton");
        containerAnton = i;
    }

    if( (i - containerBudi) == 5 ) {
        result.push("budi");
        containerBudi = i;
    }

    if (i % 5 == 0) {
        result = [];
        result.push("Tempat Fitness Tutup")
    }

    console.log("tanggal " +i+ "  : " +result);
}


















