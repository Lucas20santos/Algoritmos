# Exercicios JavaScript

## Encontre a diferença simétrica

O termo matemático diferença simétrica ( △ou ⊕) de dois conjuntos é o conjunto de elementos que pertencem a um dos dois conjuntos, mas não a ambos.

Por exemplo, para os conjuntos

```md
A = {1, 2, 3} e
B = {2, 3, 4},
A △ B = {1, 4}.
```

A diferença simétrica é uma operação binária, o que significa que opera apenas sobre dois elementos. Portanto, para avaliar uma expressão envolvendo diferenças simétricas entre três elementos ( A △ B △ C), você deve realizar uma operação de cada vez. Assim, para conjuntos Ae Bacima, e C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Crie uma função que receba dois ou mais arrays e retorne um array com a diferença simétrica entre eles. O array retornado deve conter apenas valores únicos ( sem duplicatas ).

### Testes

1. Esperando :1. sym([1, 2, 3], [5, 2, 1, 4])deve retornar [3, 4, 5].
1. Esperando :2. sym([1, 2, 3], [5, 2, 1, 4])deve conter apenas três elementos.
1. Esperando :3. sym([1, 2, 3, 3], [5, 2, 1, 4])deve retornar [3, 4, 5].
1. Esperando :4. sym([1, 2, 3, 3], [5, 2, 1, 4])deve conter apenas três elementos.
1. Esperando :5. sym([1, 2, 3], [5, 2, 1, 4, 5])deve retornar [3, 4, 5].
1. Esperando :6. sym([1, 2, 3], [5, 2, 1, 4, 5])deve conter apenas três elementos.
1. Esperando :7. sym([1, 2, 5], [2, 3, 5], [3, 4, 5])deve retornar [1, 4, 5].
1. Esperando :8. sym([1, 2, 5], [2, 3, 5], [3, 4, 5])deve conter apenas três elementos.
1. Esperando :9. sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])deve retornar [1, 4, 5].
1. Esperando :10. sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])deve conter apenas três elementos.
1. Esperando :11. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])deve retornar [2, 3, 4, 6, 7].
1. Esperando :12. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])deve conter apenas cinco elementos.
1. Esperando :13. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])deve retornar [1, 2, 4, 5, 6, 7, 8, 9].
1. Esperando :14. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])deve conter apenas oito elementos.
