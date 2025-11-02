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
