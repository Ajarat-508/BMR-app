function convert() {
    const inchesInput = document.getElementById('inchesInput').value;
    const centimeters = parseFloat(inchesInput) * 2.54;
    const result = document.getElementById('result');
    result.innerText = `${inchesInput} inches is equal to ${centimeters.toFixed(2)} centimeters.`;
}
