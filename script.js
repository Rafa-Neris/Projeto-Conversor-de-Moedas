
const convertButton = document.querySelector(".convert-button")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencySelect = document.querySelector(".currency-select")

function convertValue() {
    // Pegar o valor do input e converter para número
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value);

    // Elementos do DOM para mostrar os valores
    const convertedValueToConvert = document.querySelector(".currency-value-to-convert");
    const convertedValueConverted = document.querySelector(".currency-value");
    
    const dolarToday = 5.2;
    const euroToday = 6.2;

    // Formatadores para moedas
    const formatBRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
    const formatUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
    const formatEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

    // Mostrar o valor em BRL formatado
    convertedValueToConvert.innerHTML = formatBRL.format(inputCurrencyValue);

    // Variável para o valor convertido
    let convertedValue;

    // Verificar qual moeda foi selecionada e converter
    if (currencySelect.value === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday;
        convertedValueConverted.innerHTML = formatUSD.format(convertedValue);
    } else if (currencySelect.value === "euro") {
        convertedValue = inputCurrencyValue / euroToday;
        convertedValueConverted.innerHTML = formatEUR.format(convertedValue);
    } else {
        // Caso nenhuma moeda selecionada, limpar campo convertido
        convertedValueConverted.innerHTML = "";
    }

    console.log("Valor convertido:", convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./dolar.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./euro.png";
    } else {
        currencyName.innerHTML = "Selecione a moeda";
        currencyImage.src = "./default.png";
    }
   
}

currencySelect.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", convertValue);
convertButton.addEventListener("click", convertValue)
