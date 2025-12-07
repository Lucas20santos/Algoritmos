function fatorial(num)
{
  let fat = 1;
  if(num === 0)
  {
    return 1;
  }
  else if(num === 1)
  {
    return 1;
  }
  else
  {
    for(let i = 1; i <= num; i++)
    {
      fat = fat * i;
    }
    return fat;
  }
}

function countCharacter(str, strSet)
{
  let contagem = [];
  let cont = 0;
  
  for(var item of strSet)
  {
    for(let i = 0; i < str.length; i++)
    {
        if (item === str[i])
        {
          cont += 1;
        }
    }
    contagem.push(cont);
    cont = 0;
  }
  
  return contagem;
}

function countPermutations(str) 
{
  const meuSet = new Set(str);
  const repeticao = countCharacter(str, meuSet);
  let dividendo = 1;
  
  for(let i = 0; i < repeticao.length; i++)
  {
    dividendo *= fatorial(repeticao[i]);
  }
 
  console.log(dividendo);
  return fatorial(str.length) / dividendo;
}
