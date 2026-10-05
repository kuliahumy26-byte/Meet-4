class PersegiPanjang:
    panjang = int
    lebar = int

    def __init__(self, panjang, lebar):
        self.panjang = panjang
        self.lebar = lebar

    def hitung_keliling(self):
        return (2 * self.panjang) + (2 * self.lebar)
    
    def hitung_luas(self):
        return self.panjang * self.lebar
    
    def __str__(self):
        return ("Keliling persegi panjang: " +str(self.hitung_keliling()) + "cm " +"\nLuas Persegi Panjang: " + str(self.hitung_luas()) + "cm")

panjang = int(input("Masukkan panjang: "))
lebar = int(input("Masukkan lebar: "))
kotak = PersegiPanjang(panjang, lebar)

print(kotak)