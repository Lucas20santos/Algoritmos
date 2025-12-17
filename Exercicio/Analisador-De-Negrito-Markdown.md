# Analisador de negrito Markdown

## Dia 10 de dezembro de 2025

Dada uma string que pode incluir texto em negrito em Markdown, retorne a string HTML equivalente.

- O texto em negrito em Markdown é qualquer texto que começa e termina com dois asteriscos ( ***) ou dois sublinhados ( __*).
- Não pode haver espaços entre o texto e os asteriscos ou sublinhados, mas pode haver espaços no próprio texto.
- Converter todas as ocorrências em negrito em btags HTML e retornar a string.

Por exemplo, dado "**This is bold**", retorne "<b>This is bold</b>".

Observação: o console pode não exibir tags HTML em strings ao registrar mensagens. Verifique o console do navegador para ver os registros com as tags incluídas.

## Testes

1. Esperando :1. parse_bold("**This is bold**")deve retornar "<b>This is bold</b>".
1. Esperando :2. parse_bold("__This is also bold__")deve retornar "<b>This is also bold</b>".
1. Esperando :3. parse_bold("**This is not bold **")deve retornar "**This is not bold **".
1. Esperando :4. parse_bold("__ This is also not bold__")deve retornar "__ This is also not bold__".
1. Esperando :5. parse_bold("The **quick** brown fox __jumps__ over the **lazy** dog.")deve retornar "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.".

## Soluções

- [Python](../Python/Analisador-De-Negrito-Markdown.py)
- [Javascript](../Javascript/Analisador-De-Negrito-Markdown.js)

