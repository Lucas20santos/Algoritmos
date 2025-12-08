def format_date(date_string:str) -> str:

    dicionario:dict = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    }

    formatacao:list = date_string.split(" ")
    ano:str = formatacao[2]
    mes:str = dicionario[formatacao[0]]
    dia_aux:str = formatacao[1].replace(",", "")
    dia:str = f"0{dia_aux}" if int(dia_aux) < 10 else f"{dia_aux}"

    return f"{ano}-{mes}-{dia}"

format_date("December 6, 2025")
format_date("January 1, 2000")
format_date("November 11, 1111")
format_date("September 7, 512")
format_date("May 4, 1950")
format_date("February 29, 1992")
