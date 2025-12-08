# Formatador de datas

## Dia de 06 de Dezembro de 2025

Dada uma data no formato "Month day, year", retorne a data no formato "YYYY-MM-DD".

- O mês indicado será o nome completo do mês em inglês. Por exemplo: "January", "February", etc.
- No valor retornado, preencha o mês e o dia com zeros à esquerda, se necessário, para garantir dois dígitos.
- Por exemplo, dado "December 6, 2025", retorne "2025-12-06".

## Testes

1. Esperando :1. format_date("December 6, 2025")deve retornar "2025-12-06".
1. Esperando :2. format_date("January 1, 2000")deve retornar "2000-01-01".
1. Esperando :3. format_date("November 11, 1111")deve retornar "1111-11-11".
1. Esperando :4. format_date("September 7, 512")deve retornar "512-09-07".
1. Esperando :5. format_date("May 4, 1950")deve retornar "1950-05-04".
1. Esperando :6. format_date("February 29, 1992")deve retornar "1992-02-29".
