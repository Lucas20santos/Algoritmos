# PRIMEIRA VERSÃO => MINHA VERSAO

def update_inventory(inventory, shipment):
    my_inv = dict()
    
    for (qnt, nome) in inventory + shipment:
        if nome not in my_inv.keys():
            my_inv[nome] = qnt
        else:
            my_inv[nome] += qnt
    
    return [[val[1], val[0]] for val in my_inv.items()]

# SEGUNDA VERSÃO => COM AJUDA DA IA

# Seu código está muito bom e funcional, seguindo uma lógica correta de unificar as listas e usar um dicionário para somar os valores.
#
# Para 2025, existem apenas 3 pequenos ajustes que podem deixar seu código mais profissional, "pythônico" e performático:
#
# 1. Evite usar .keys() na verificação
# Em Python, if nome in my_inv: já busca nas chaves de forma muito mais rápida do que if nome in my_inv.keys(). O uso do .keys() cria uma visualização desnecessária para essa verificação simples.
#
# 2. Use o método .get() ou defaultdict
# Em vez do if/else, você pode usar my_inv.get(nome, 0), que retorna o valor atual ou 0 se a chave não existir. Isso reduz as linhas de código.
#
# 3. Ordenação (Importante)
# Geralmente, em desafios de programação como o do FreeCodeCamp (de onde esse exercício costuma vir), o resultado deve estar em ordem alfabética.
#

def update_inventory(inventory, shipment):
    my_inv = {}
    for qnt, nome in inventory + shipment:
        my_inv[nome] = my_inv.get(nome, 0) + qnt
    
    return [[qnt, nome] for nome, qnt in my_inv.items()]

