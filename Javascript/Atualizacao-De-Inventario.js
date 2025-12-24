// PRIMEIRA VERSÃO => FEITA POR MIM

function updateInventory(inventory, shipment)
{
  const inventario = new Map();
  const armazenamento = [];
  
  for(const item of inventory)
  {
    inventario.set(item[1], item[0]);
  }

  for(const item of shipment)
  {
    const invetarioAtual = inventario.get(item[1])  || 0;
    inventario.set(item[1], invetarioAtual + item[0]);
  }
  
  for (const valor of inventario.entries())
  {
    armazenamento.push([valor[1], valor[0]]);
  }
  
  return armazenamento;
}

// SEGUNDA VERSÃO => COM AJUDA DA IA

function updateInventory(inventory, shipment) 
{
  const invMap = new Map(inventory.map(([qnt, nome]) => [nome, qnt]));
  for(const [qnt, nome] of shipment)
  {
    const qntAtual = invMap.get(nome) || 0;
    invMap.set(nome, qntAtual + qnt);
  }
  return Array.from(invMap, ([nome, qnt]) => [qnt, nome]);
}

/**
* 1. Versão Limpa e Moderna (Recomendada)
* 
* Esta versão reduz a verbosidade e utiliza a desestruturação de arrays [quantidade, nome], tornando o código muito mais fácil de ler.
* 
* O que mudou e por que é melhor?
* 
* 1. new Map(inventory.map(...)): O construtor do Map aceita um array de arrays. Ao transformar seu inventário inicial antes, você elimina o primeiro loop for.
* 
* 2. Desestruturação [qnt, nome]: Em vez de usar item[0] e item[1], usamos nomes reais. Isso evita confusão sobre qual índice é a quantidade e qual é o nome.
* 
* 3. Array.from(invMap, ...): O Array.from aceita uma função de mapeamento como segundo argumento. Isso substitui a criação do array vazio e o loop .push() manual.
* 
*/

// TERCEIRA VERSÃO => COM AJUDA DA IA
function updateInventory(inventory, shipment) 
{
  return Array.from([...inventory, ...shipment]
  .reduce((acc, [qnt, nome]) => {
      acc.set(nome, (acc.get(nome) || 0) + qnt);
      return acc;
  }, new Map()), 
  
  ([nome, qnt]) => [qnt, nome]);
}

/**
 * 2. Versão com reduce (Estilo Funcional)
 * 
 * Se você gosta de encadeamento de métodos, pode fazer assim:
 * 
 * Por que essa é interessante?
 *
 * [...inventory, ...shipment]: Junta tudo em uma única lista antes de processar.
*  
* reduce: Processa toda a contagem em uma única expressão, retornando o Map preenchido.
 */

