class Polygon {
  constructor (array) {
     this.polygon = array;
  }

  get countSides (){
      return this.polygon.length;
  }

  get perimeter (){
      return this.polygon.reduce((total, amount) => total + amount)
  }
}


class Triangle extends Polygon {
  get isValid(){
      this.polygon.sort();
      return this.polygon[0] + this.polygon[1] > this.polygon[2];
  }
}

class Square extends Polygon {
  get isValid(){
      return this.polygon[0] === this.polygon[1], this.polygon[0] === this.polygon[2], this.polygon[0] === this.polygon[3]
      }

  get area (){
      return this.polygon[0] *this.polygon[1];
  }
  }