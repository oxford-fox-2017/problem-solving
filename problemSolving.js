//PSEUDOCODE
inisialisasi var tanggal awal 7
inisialisasi var bulan 31
inisialisasi array tanggal dari 7 hingga 31

push tono, anton, budi ke tanggal[tanggal awal]

FOR dari tanggal awal hingga sama dengan bulan, tanggal awal ++
	IF tanggal awal%5 = 0
		push libur ke tanggal[tanggal awal]
	ELSE IF tanggal awal%2 !=0 && tanggal awal%5 !=0
		push tono ke tanggal[tanggal awal]
	ELSE IF tanggal awal%4 && tanggal awal%5 !=0 
		push anton ke tanggal[tanggal awal]
	ELSE IF tanggal awal%5 && tanggal awal%5 !=0
		push budi ke tanggal[tanggal awal]
	END IF
END FOR

FOR dari var i = 7 hingga sama dengan bulan, i++
	CONSOLE.LOG "Tanggal " + i + ": " + array[i]
END FOR