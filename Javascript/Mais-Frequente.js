/*
Map

O Map é uma estrutura de dados nativa introduzida no JavaScript (ES6) que oferece uma maneira mais flexível e robusta de armazenar pares chave-valor em comparação com os objetos JavaScript tradicionais ({}).

O que é um Map()?

Um Map é essencialmente um dicionário ou mapa que mapeia chaves para valores. A principal diferença para um objeto normal é que um Map preserva o tipo e a ordem de suas chaves.

Principais Diferenças e Vantagens do Map vs. Objeto ({})

Característica	|   Objeto JavaScript ({})  |	Map()|
-----------------------------------------------------------------------
Tipo de Chave |	Apenas Strings ou Symbols.	|   Qualquer tipo de valor (incluindo objetos, funções, números e booleanos).
-----------------------------------------------------------------------
Ordem	|   As chaves não têm uma ordem garantida (especialmente antes do ES2015).	|   A ordem de inserção das chaves é garantida e preservada.
-----------------------------------------------------------------------
Tamanho	|   O tamanho precisa ser calculado manualmente (Object.keys().length).	|   Tem uma propriedade .size fácil de usar.
-----------------------------------------------------------------------
Iteração    |	Requer Object.keys(), Object.values() ou Object.entries().	|   É diretamente iterável (pode usar for...of).

Por que ele resolveu seu problema anterior?

No seu problema de contagem de palavras, o Map foi crucial porque ele permite chaves de tipos diferentes:

```javascript
const m = new Map();

m.set(true, "Isso é um booleano");
m.set("true", "Isso é uma string");

console.log(m.get(true));    // Saída: "Isso é um booleano"
console.log(m.get("true"));  // Saída: "Isso é uma string" 
```

Se você usasse um objeto normal ({}), as chaves true e "true" seriam ambas convertidas para a string "true", sobrescrevendo uma à outra.

Métodos Principais do Map

Aqui estão os métodos mais comuns para interagir com um Map:

|Método|	Descrição|	Exemplo
--------------------------------------------------------------------------------------
new Map()|	Cria um novo mapa.	|const meuMapa = new Map();
--------------------------------------------------------------------------------------
.set(chave, valor)|	Adiciona ou atualiza um par chave-valor.|	meuMapa.set('nome', 'João');
--------------------------------------------------------------------------------------
.get(chave)|	Recupera o valor associado a uma chave.	|meuMapa.get('nome'); // 'João'
--------------------------------------------------------------------------------------
.has(chave)|	Verifica se uma chave existe (retorna true ou false).|	meuMapa.has('nome'); // true
--------------------------------------------------------------------------------------
.delete(chave)|	Remove um par chave-valor específico.|	meuMapa.delete('nome');
--------------------------------------------------------------------------------------
.clear() |	Remove todos os elementos do mapa.|	meuMapa.clear();
--------------------------------------------------------------------------------------
.size	|Propriedade que retorna o número de pares.	|meuMapa.size;
--------------------------------------------------------------------------------------

Em resumo, use Map quando precisar de um armazenamento flexível onde as chaves podem ser de qualquer tipo ou quando a ordem de inserção for importante. Use objetos ({}) quando estiver apenas armazenando dados estruturados simples ou quando precisar de métodos JSON.
*/

function mostFrequent(arr)
{
  
  const frequencia = new Map();
  // Contar as ocorrencia
  for(const item of arr)
  {
    const contagemAtual = frequencia.get(item) || 0;
    frequencia.set(item, contagemAtual + 1);
  }
  
  let valorMaisFrequente;
  let contagemMaxima = 0;

  
  for(const [valor, cont] of frequencia.entries())
  {
    if (cont > contagemMaxima)
    {
      contagemMaxima = cont;
      valorMaisFrequente = valor;
    }
  }
  
  return valorMaisFrequente;
}

mostFrequent(["a", "b", "a", "c"])
mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])
mostFrequent([true, false, "false", "true", false])
mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])
