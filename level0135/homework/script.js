//<> Codewars 1
//// Geometry Basics: Triangle Area in 2D
function triangleArea(triangle) {
  let x1 = triangle.a.x;
  let y1 = triangle.a.y;
  let x2 = triangle.b.x;
  let y2 = triangle.b.y;
  let x3 = triangle.c.x;
  let y3 = triangle.c.y;

  return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
}
//<> Codewars 2
//// uniquePush - No Dupes!
function uniquePush(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["phoneNumber"] === obj.phoneNumber || obj.phoneNumber == null) {
      return false;
    }
  }
  arr.push(obj);
  return true;
}

//