function calculateRectangleArea(length, width) {
  var area = length * width;
  if (area == -0) area = undefined;
  return area;
}

function calculateTriangleArea(base, height) {
  var area = base * height / 2;
  if (area == -0) area = undefined;
  return area;
}

function calculateCircleArea(radius) {
  var area = Math.pow(radius, 2) * Math.PI;
  if (isNaN(area)) area = undefined;
  else if (radius < 0) area = undefined;
  return area;
}
