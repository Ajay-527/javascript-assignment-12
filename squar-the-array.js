function squarOfArray() {
  var arrelement = document.getElementById("ArrayElements").value.split(" ");
  var [...arry] = arrelement;
  let newarr = [];
  arry.map((num) => {
    newarr.push(num * num);
  });
  alert(newarr);
}
