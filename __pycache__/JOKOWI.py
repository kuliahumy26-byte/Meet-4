
class Budi():
    x=0
    y=0
    

class Asep():
    z=100
    a=200

class Point3D(Point):
    def_init_(self,x y, z):
    Point._init__(self, x, y)
    self.z = z

    def translate(self, dx, dy, dz):
        Point.translate(self, dx, dy)
        self.z += z
        