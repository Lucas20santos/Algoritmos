# Conversor de itens de lista ordenada Markdown

## Dia 03 de dezembro de 2025

Dada uma string que representa um item de uma lista ordenada em Markdown, retorne a string HTML equivalente.

Um item válido de lista ordenada em Markdown deve:

- Comece com zero ou mais espaços, seguido de
- Um número (1 ou maior) e um ponto ( .), seguidos por
- Pelo menos um espaço, e então
- O texto do item da lista.

Se a string não tiver o formato exato acima, retorne "Invalid format". Caso contrário, envolva o texto do item da lista em litags e retorne a string.

Por exemplo, dado "1. My item", retorne "\<li>My item\</li>".

Observação: o console pode não exibir tags HTML em strings ao registrar mensagens. Verifique o console do navegador para ver os registros com as tags incluídas.

## Testes

1. Esperando :1. convert_list_item("1. My item")deve retornar "\<li>My item\</li>".
1. Esperando :2. convert_list_item(" 1.  Another item")deve retornar "\<li>Another item\</li>".
1. Esperando :3. convert_list_item("1 . invalid item")deve retornar "Invalid format".
1. Esperando :4. convert_list_item("2. list item text")deve retornar "\<li>list item text\</li>".
1. Esperando :5. convert_list_item(". invalid again")deve retornar "Invalid format".
1. Esperando :6. convert_list_item("A. last invalid")deve retornar "Invalid format".