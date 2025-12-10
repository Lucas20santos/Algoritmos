def convert_to_kgs(lbs):
    kg = lbs * 0.453592

    return f"{lbs} pound equals {kg:.2f} kilograms." if lbs == 1 else f"{lbs} pounds equals {kg:.2f} kilogram." if round(lbs * 0.453592, 2) == 1.00 else f"{lbs} pounds equals {kg:.2f} kilograms."

# convert_to_kgs(1)                 # deve retornar "1 pound equals 0.45 kilograms.".
# convert_to_kgs(0)                 # deve retornar "0 pounds equals 0.00 kilograms.".
# convert_to_kgs(100)               # deve retornar "100 pounds equals 45.36 kilograms.".
# convert_to_kgs(2.5)               # deve retornar "2.5 pounds equals 1.13 kilograms.".
# convert_to_kgs(2.20462)           # deve retornar "2.20462 pounds equals 1.00 kilogram.".
