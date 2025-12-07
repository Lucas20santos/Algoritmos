# Contagem de permutações

## Dia de 4 de Dezembro

Dada uma string, retorne o número de permutações distintas que podem ser formadas a partir de seus caracteres.

- Uma permutação é qualquer reordenação dos caracteres na sequência de caracteres.
- Não conte permutações duplicadas.
- Se a sequência contiver caracteres repetidos, as repetições devem ser contadas apenas uma vez.
- A string conterá apenas letras ( A-Z, a-z).

Por exemplo, dado "abb", retorne 3porque existem três maneiras únicas de organizar as letras: "abb", "bab", e "bba".

## Testes

1. Esperando :1. count_permutations("abb")deve retornar 3.
1. Esperando :2. count_permutations("abc")deve retornar 6.
1. Esperando :3. count_permutations("racecar")deve retornar 630.
1. Esperando :4. count_permutations("freecodecamp")deve retornar 39916800.
