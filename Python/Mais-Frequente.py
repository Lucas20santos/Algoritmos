from collections import Counter

def most_frequent(arr:list):
    itemMaisFrequente = ""
    valorMaximo = -1

    for (item, value) in Counter(arr).items():
        if value > valorMaximo:
            valorMaximo = value
            itemMaisFrequente = item

    return itemMaisFrequente

most_frequent(["a", "b", "a", "c"])
most_frequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) 
most_frequent([True, False, "False", "True", False]) 
most_frequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) 
