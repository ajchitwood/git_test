function displaySum() {
    //getElementById will get all HTML elements by a specific "id" attribute
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);
// from https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/