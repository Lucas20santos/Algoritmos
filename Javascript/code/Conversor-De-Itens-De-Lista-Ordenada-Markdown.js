function convertListItem(markdown)
{
  const lista = markdown.split(" ");
  const list_item = lista.filter(val => val);
  
  const first_item = list_item[0];
  
  if (first_item.length != 2)
  {
    return 'Invalid format';
  }
  else
  {
    if(!Number.isFinite(Number(first_item[0])))
    {
      return 'Invalid format'
    }
    else
    {
      let newString = list_item.slice(1).join(' ');
      return "<li>" + newString + "</li>"
    }
  }
}