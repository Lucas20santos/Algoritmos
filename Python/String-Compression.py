from collections import Counter

def compress_string(sentence:str):

    listaPalavras = sentence.split(" ")
    contagem = Counter(listaPalavras)

    partes_formatadas = [f"{chave}({valor})" for chave, valor in contagem.items()]
 
    return " ".join(partes_formatadas).replace("(1)","")

compress_string("yes yes yes please") # deve retornar "yes(3) please".
# compress_string("I have have have apples") # deve retornar "I have(3) apples".
# compress_string("one one three and to the the the the") # deve retornar "one(2) three and to the(4)".
# compress_string("route route route route route route tee tee tee tee tee tee") # deve retornar "route(6) tee(6)".
