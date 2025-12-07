def count_permutations(s:str):
    valores_unicos:set = set(list(s))
    repeticao = [s.count(char) for char in valores_unicos]
    num_permutacao:int = 0

    def fatorial(num):
        if num in [0, 1]:
            return 1
        else:
            fat = 1
            for val in range(1, num + 1):
                fat *= val
            return fat

    if repeticao:
        num_permutacao = fatorial(len(s))
        dividendo = 1
        for val in repeticao:
            dividendo *= fatorial(val)
    return int(num_permutacao / dividendo)

count_permutations("abb")
count_permutations("abc")
count_permutations("racecar")
count_permutations("freecodecamp")
