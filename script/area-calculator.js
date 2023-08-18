// Calculate the triangle
function calculateTriangleArea() {
    const triangleInputValue = getInputValue('triangle-base');
    const triangleHeightValue = getInputValue('triangle-height');
    if (isNaN(triangleInputValue) || isNaN(triangleHeightValue)) {
        alert('Please enter a valid number');
        return;
    }
    const area = 0.5 * triangleInputValue * triangleHeightValue;
    setValueToInnerText('area', area);
}


// Calculate the rectangle
function calculateRectangleArea() {
    const rectangleWidthValue = getInputValue('rectangle-width');
    const rectangleLengthValue = getInputValue('Rectagle-L');
    if (isNaN(rectangleWidthValue) || isNaN(rectangleLengthValue)) {
        alert('Please enter a valid number');
        return;
    }
    const rectangleArea = rectangleLengthValue * rectangleWidthValue;
    setValueToInnerText('rectangle-area', rectangleArea);
}

// calculate the parallelogram

function parallelogramCalculate() {
    const base = getInputValue('parallelogram-base');
    const width = getInputValue('parallelogram-width')
    const name = document.getElementById('parallelogram').innerText;
    if (isNaN(base) || isNaN(width)) {
        alert('Please enter a valid number');
        return;
    }
    const area = base * width;
    setValueToInnerText('parallelogram-area', area);
    // add card details in the cart container
    addToCalculationEntry(name, area);
}


// Rhombus calculate
function RhombusCalculate() {
    const rhombusBase = getInputValue('Rhombus-base')
    const rhombusHeight = getInputValue('Rhombus-width');
    if (isNaN(rhombusBase) || isNaN(rhombusHeight)) {
        alert('Please enter a valid number');
        return;
    }
    const result = (rhombusBase * rhombusHeight) / 2
    setValueToInnerText('Rhombus-area', result)
}


// Pentagon area calculate 
function pentagonAreaCalculate() {
    const pentagonP = getInputValue('pentagon-p');
    const pentagonB = getInputValue('pentagon-b');
    if (isNaN(pentagonP) || isNaN(pentagonB)) {
        alert('Please enter a valid number');
        return;
    }
    const result = 0.5 * pentagonP * pentagonB;
    setValueToInnerText('pentagon-area', result);

}

// ellipse calculate
function ellipseAreaCalculate() {
    const ellipseArea = getInputValue('ellipse-a');
    const ellipseBase = getInputValue('ellipse-b');
    if (isNaN(ellipseArea) || isNaN(ellipseBase)) {
        alert('Please enter a valid number');
        return;
    }
    const result = Math.PI * ellipseArea * ellipseBase;
    setValueToInnerText('ellipse-area', result.toFixed(2))
}

// Getting the all input value
function getInputValue(inputId) {
    const base = document.getElementById(inputId)
    const baseValue = parseFloat(base.value);
    base.value = '';
    return baseValue;
}




// Set the result to the span tag
function setValueToInnerText(elementId, result) {
    const element = document.getElementById(elementId);
    element.innerText = result;
}

function addToCalculationEntry(shapeType, result) {
    // console.log('coming sonn!!!')
    const cartContainer = document.getElementById('cart-container');
    const count = cartContainer.childElementCount;
    const p = document.createElement('p');
    cartContainer.appendChild(p);
   
    p.innerHTML = `${count+1}. ${shapeType} ${result} <button class="btn btn-success ms-3 btn-sm">Submit</button>`;
    // console.log(shapeType + " " + result);
}