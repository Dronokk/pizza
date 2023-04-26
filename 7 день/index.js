function dis()
{ 
    var number = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var randN = "";
        while (randN.length < 6) {
          randN += number[Math.floor(Math.random() * number.length)];
        }
        alert("Ваш промокод: " + randN);
}