// Calculate the triangle
function calculateTriangleArea() {
    const triangleInputValue = getInputValue('triangle-base');
    const triangleHeightValue = getInputValue('triangle-height');
    const area = 0.5 * triangleInputValue * triangleHeightValue;
    setValueToInnerText('area', area);
}


// Calculate the rectangle
function calculateRectangleArea() {
    const rectangleWidthValue = getInputValue('rectangle-width');
    const rectangleLengthValue = getInputValue('Rectagle-L');
    const rectangleArea = rectangleLengthValue * rectangleWidthValue;
    setValueToInnerText('rectangle-area', rectangleArea);
}

// calculate the parallelogram

function parallelogramCalculate() {
    const base = getInputValue('parallelogram-base');
    const width = getInputValue('parallelogram-width')
    const area = base * width;
    setValueToInnerText('parallelogram-area', area)
}


// Rhombus calculate
function RhombusCalculate() {
    const rhombusBase = getInputValue('Rhombus-base')
    const rhombusHeight = getInputValue('Rhombus-width');
    const result = (rhombusBase * rhombusHeight) / 2
    setValueToInnerText('Rhombus-area', result)
}


// Pentagon area calculate 
function pentagonAreaCalculate() {
    const pentagonP = getInputValue('pentagon-p');
    const pentagonB = getInputValue('pentagon-b');

    const result = 0.5 * pentagonP * pentagonB;
    setValueToInnerText('pentagon-area', result);

}

// Getting the all input value
function getInputValue(inputId) {
    const base = document.getElementById(inputId)
    const baseValue = parseFloat(base.value);
    return baseValue;
}

// ellipse calculate
function ellipseAreaCalculate() {
    const ellipseArea = getInputValue('ellipse-a');
    const ellipseBase = getInputValue('ellipse-b');
    const result = Math.PI * ellipseArea * ellipseBase;
    setValueToInnerText('ellipse-area', result.toFixed(2))
}


// Set the result to the span tag
function setValueToInnerText(elementId, result) {
    const element = document.getElementById(elementId);
    element.innerText = result;
}