# Compressão de cordas

## Dia 07 de dezembro de 2025

Dada uma frase em formato de cadeia de caracteres, retorne uma versão compactada da frase onde palavras duplicadas consecutivas são substituídas pela palavra seguida do número de vezes que ela se repete entre parênteses.

- Apenas duplicatas consecutivas são compactadas.
- As palavras são separadas por espaços simples.

Por exemplo, dado "yes yes yes please", retorne "yes(3) please".

## Testes

- Esperando :1. compressString("yes yes yes please")deve retornar "yes(3) please".
- Esperando :2. compressString("I have have have apples")deve retornar "I have(3) apples".
- Esperando :3. compressString("one one three and to the the the the")deve retornar "one(2) three and to the(4)".
- Esperando :4. compressString("route route route route route route tee tee tee tee tee tee")deve retornar "route(6) tee(6)".