# Exercicios Algoritmo

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

## Atualização de inventário

Compare e atualize o estoque armazenado em uma matriz 2D com uma segunda matriz 2D de uma nova entrega. Atualize as quantidades dos itens de estoque existentes (em unidades arr1). Se um item não for encontrado, adicione o novo item e a quantidade à matriz de estoque. A matriz de estoque retornada deve estar em ordem alfabética por item.

## Testes

1. Esperando :1. A função updateInventorydeve retornar um array.
1. Esperando :2. updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])deve retornar um array com comprimento 6.
1. Esperando :3. updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])deve retornar [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
1. Esperando :4. updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])deve retornar [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
1. Esperando :5. updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])deve retornar [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
1. Esperando :6. updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])deve retornar [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].


```js
    function sym(...args) 
    {
    let diferenca = [];
    const getSymmetricDifference = (setA, setB) => 
    {
        const diff1 = [...setA].filter(val => !setB.has(val));
        const diff2 = [...setB].filter(val => !setA.has(val))

        return new Set([...diff1, ...diff2])
    }

    let currentDifference = new Set(args[0]);
    for (let i = 1; i < args.length; i++) 
    {
        const nextArray = args[i];
        const nextSet = new Set(nextArray);
        currentDifference = getSymmetricDifference(currentDifference, nextSet);

    }
    return Array.from(currentDifference).sort();
    }

    console.log(sym([1, 2, 3], [5, 2, 1, 4]));

```
