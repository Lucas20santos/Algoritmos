function compressString(sentence)
{
    const arrayPalavras = sentence.split(" ");
    
    const contagem = arrayPalavras.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    const chaves = Object.keys(contagem);


    const partesFormatadas = chaves.map(chave => {
        const valor = contagem[chave];

        if (valor > 1)
        {
            return `${chave}(${valor})`
        }
        else
        {
            return `${chave}`;
        }
    })

    const resultado = partesFormatadas.join(" ");

  return resultado;
}

compressString("yes yes yes please") // deve retornar "yes(3) please".
// compressString("I have have have apples") // deve retornar "I have(3) apples".
// compressString("one one three and to the the the the") // deve retornar "one(2) three and to the(4)".
// compressString("route route route route route route tee tee tee tee tee tee") // deve retornar "route(6) tee(6)".
