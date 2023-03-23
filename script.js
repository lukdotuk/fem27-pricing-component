
let inputValue = document.getElementById("input-range"),
    valueOutput = document.getElementById("value-output"),
    discount = document.getElementById("discount");
    
function reset() {
  inputValue.value = 16;
  discountText()
}

function discountText() {
  if(screen.width >= 600) {
    discount.innerText = "25% discount";
  } else
  discount.innerText = "25%";
}

inputValue.addEventListener("input", () => {  
  const min = inputValue.min,
        max = inputValue.max,
        val = inputValue.value;
  valueOutput.innerHTML = val;
  inputValue.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
})

window.onresize = function() { discountText() }

