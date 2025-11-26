function fizzBuzz(n)
{
    return Array
      .from({length: n }, (_, i) => i + 1)
      .map((val) => 
    {
      return val % 15 === 0
      ? "FizzBuzz"
      : val % 3 === 0
      ? "Fizz"
      : val % 5 === 0
      ? "Buzz"
      : val
  });
}

/* MANEIRAS DE COMPARAR VETORES NO JAVASCRIPT
* 
* POR QUE ESSA MANEIRA DE COMPARAR STRINGS NO JAVASCRIPT NÃO É A MANEIRA
* CORRETA DE COMPARAR
*
* fizzBuzz(4) === [1, 2, "Fizz", 4];
* 
* POR QUE O OPERADOR '===' COMPARA REFERÊNCIA PARA OBJETOS ARRAY/OBJECTS, 
* NÃO O CONTEUDO. ENTÃO, ESSE OPERADOR DIZ SE DOIS OBJETOS ESTÃO APONTANDO
* PARA A MESMA REFERENCIA.
*
* LOGO:
* 
* [] === []            // false
* [1,2] === [1,2]      // false
* SÃO FALSOS, E ESSA RESPOSTA ESTÁ CORRETA SE OS DOIS OBJETOS APONTAREM 
* PARA REFERENCIAS DIFERENTES.
*/

/* PRIMEIRA MANEIRA
* 
* COMPARAR JSON STRINGS 
*/

fizzBuzz(2);
JSON.stringify(fizzBuzz(2)) === JSON.stringify([1, 2]);
console.log("===============================================")
/* SEGUNDA MANEIRA
* 
* COMPARAR JSON STRINGS 
*/

function arraysEqual(a, b)
{
  if(a.length != b.length) return false
  
  return a.every((v, i) => v === b[i])
}

fizzBuzz(4);
arraysEqual(fizzBuzz(4), [1, 2, "Fizz", 4])
console.log("===============================================")
fizzBuzz(8);
arraysEqual(fizzBuzz(8), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]);

fizzBuzz(20)
arraysEqual(fizzBuzz(20), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
console.log("===============================================")

fizzBuzz(50)
arraysEqual(fizzBuzz(50), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]);
