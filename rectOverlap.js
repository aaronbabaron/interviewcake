function rectOverlap(rect1, rect2) {
  var first = { x: rect1.leftX + rect1.width, y: rect1.bottomY + rect1.height };
  var second = { x: rect2.leftX + rect2.width, y: rect2.bottomY + rect2.height };

  var smallerX, smallerY;
  var largerX, largerY;
  var yCounter = xCounter = 0;

  var intersect = {};

  if (rect2.leftX < first.x && rect2.leftX >= rect1.leftX) {
    smallerX = rect2.leftX;  
    ++xCounter;
  }   
  
  if (second.x < first.x && second.x >= rect1.leftX) {
    largerX = second.x;
    ++xCounter;
  }
  
  if (rect2.bottomY < first.y && rect2.bottomY >= rect1.bottomY) {
    smallerY = rect2.bottomY;
    ++yCounter;
  }
  
  if (second.y < first.y && second.y >= rect1.bottomY) {
    largerY = second.y;
    ++yCounter;
  }


  if (xCounter === 2) {
    intersect.leftX = rect2.leftX;
    intersect.width = rect2.width;
  } else if (xCounter === 1) {
    if (smallerX) {
      intersect.leftX = smallerX;
      intersect.width = first.x - smallerX;
    } else if (largerX) {
      intersect.leftX = rect1.leftX;
      intersect.width = largerX - rect1.leftX;
    }
  } 

  if (yCounter === 2) {
    intersect.bottomY = rect2.bottomY;
    intersect.height = rect2.height;
  } else if (yCounter === 1) {
    if (smallerY) {
      intersect.bottomY = smallerY;
      intersect.height = first.y - smallerY;
    } else if (largerY) {
      intersect.bottomY = rect1.bottomY;
      intersect.height = largerY - rect1.bottomY;
    }
  }

  return intersect;
}

var one = {
  leftX: 1,
  bottomY: 5,
  width: 9,
  height: 5
};

var two = {
  leftX: 5,
  bottomY: 7,
  width: 10,
  height: 8
};

console.log(rectOverlap(one, two))

two.bottomY = 0;
two.height = 7;

console.log(rectOverlap(one, two))
