var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color[0]);
console.log(Color[1]);
console.log(Color[2]);
