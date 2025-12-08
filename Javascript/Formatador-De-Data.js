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

// TERCEIRA SOLUÇÃO

function formatDate(dateString) 
{
    // ... dicionario (mapa)
    // ...

    // Usa RegEx para extrair o mês, dia e ano em grupos separados
    const match = dateString.match(/(\w+)\s(\d+),\s(\d+)/);
    
    // match[1] = Mês (ex: "December")
    // match[2] = Dia (ex: "6")
    // match[3] = Ano (ex: "2025")
    
    const mes = dicionario[match[1]];
    const ano = match[3];
    const dia = match[2].padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
}

// SOLUÇÃO QUE PASSANDO NO TESTES

function formatDate(dateString) 
{
    // Mapeamento de nomes de meses para números de dois dígitos
    const monthMap = {
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
    
    // 1. Divide a string: ["Month", "day,", "year"]
    const parts = dateString.split(" ");
    
    // 2. Extrai e formata o MÊS (MM)
    const month = monthMap[parts[0]];

    // 3. Extrai e formata o DIA (DD)
    // Remove a vírgula do final da string do dia (ex: "6," se torna "6")
    const dayRaw = parts[1].replace(',', ''); 
    // Garante que o dia tenha 2 dígitos (ex: "6" se torna "06")
    const day = dayRaw.padStart(2, '0');
    
    // 4. Extrai o ANO (YYYY)
    // Não precisa de parseInt, apenas use a string (ex: "2025" ou "512")
    const year = parts[2];

    // 5. Retorna no formato YYYY-MM-DD
    return `${year}-${month}-${day}`;
}

