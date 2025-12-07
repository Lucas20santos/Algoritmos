def to_snake(camel:str):
    # Primeira SOlução:
    new_string:str = ""
    for char in camel:
        if char == char.upper():
            new_string += "_" + char.lower()
        else:
            new_string += char

    return new_string

    # Segunda Solução:
    return "".join(["_" + char.lower() if char == char.upper() else char for char in camel])