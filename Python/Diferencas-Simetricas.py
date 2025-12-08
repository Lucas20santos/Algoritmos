def difference(arr1:list, arr2:list) -> list:

    arr3 = filter(lambda x: x not in arr2, arr1)
    arr4 = filter(lambda x: x not in arr1, arr2)

    return list(arr3) + list(arr4)

difference([1, 2, 3], [3, 4, 5])
difference(["a", "b"], ["c", "b"])
difference([1, "a", 2], [2, "b", "a"])
difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
