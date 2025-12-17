# Atualização de inventário

## Dia 12 de dezembro de 2025

Dado um array bidimensional representando o estoque da sua loja e outro array bidimensional representando uma remessa recebida, retorne o estoque atualizado.

- Cada elemento nas matrizes terá o formato: [quantity, "item"], onde quantityé um número inteiro e "item"é uma string.
- Atualize os itens no estoque adicionando a quantidade de quaisquer itens correspondentes da remessa.
- Se um item recebido não existir no estoque atual, adicione-o como uma nova entrada ao final do estoque.
- Devolva o estoque na ordem em que foi entregue e, por fim, inclua os novos itens na ordem em que aparecem na remessa.

Por exemplo, dado um estoque de [[2, "apples"], [5, "bananas"]]e uma remessa de [[1, "apples"], [3, "bananas"]], retorne [[3, "apples"], [8, "bananas"]].

## Testes

1. Esperando :1. update_inventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]])deve retornar [[3, "apples"], [8, "bananas"]].
1. Esperando :2. update_inventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]])deve retornar [[3, "apples"], [8, "bananas"], [4, "oranges"]].
1. Esperando :3. update_inventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]])deve retornar [[10, "apples"], [30, "bananas"], [20, "oranges"]].
1. Esperando :4. update_inventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])deve retornar [[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]].
