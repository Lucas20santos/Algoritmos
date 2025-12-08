function formatDate(dateString)
{
    dicionario = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05",
        June: "06",
        July: "07",
        August: "08",
        September: "09",
        October: "10",
        November: "11",
        December: "12"
    };
    
    const dateFormat = dateString.split(" ");
    const mes = dicionario[dateFormat[0]];
    const ano = parseInt(dateFormat[2], 10).toString();
    
    const diaStringComVirgula = dateFormat[1];
    const diaStringLimpa = diaStringComVirgula.replace(',', '');
    
    const dia = diaStringLimpa.padStart(2, '0');
    
    const stringFormated = `${ano}-${mes}-${dia}`;

    return stringFormated;
}

console.log(formatDate("December 6, 2025"))
console.log(formatDate("January 1, 2000"))
console.log(formatDate("November 11, 1111"))
console.log(formatDate("September 7, 512"))
console.log(formatDate("May 4, 1950"))
console.log(formatDate("February 29, 1992"))