# Diferença Simétrica

## Dia 05 de dezembro de 2025

Dados dois arrays, retorne um novo array contendo a diferença simétrica entre eles.

- A diferença simétrica entre dois conjuntos é o conjunto de valores que aparecem em qualquer um dos conjuntos, mas não em ambos.
- Retorna os valores na ordem em que aparecem pela primeira vez nas matrizes de entrada.

## Testes

1. Esperando :1. difference([1, 2, 3], [3, 4, 5])deve retornar [1, 2, 4, 5].
1. Esperando :2. difference(["a", "b"], ["c", "b"])deve retornar ["a", "c"].
1. Esperando :3. difference([1, "a", 2], [2, "b", "a"])deve retornar [1, "b"].
1. Esperando :4. difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])deve retornar [2, 4, 6, 8].