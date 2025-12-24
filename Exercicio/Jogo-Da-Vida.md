# Jogo da Vida

Dada uma matriz (vetor de vetores) que representa o estado atual no Jogo da Vida de Conway, retorne o próximo estado da matriz usando estas regras:

- Cada célula está ou 1(viva) ou 0(morta).
- As células vizinhas de uma célula são as até oito células circundantes (verticalmente, horizontalmente e diagonalmente).
- As células nas bordas têm menos de oito vizinhos.

## Regras para atualização de cada célula:

- Qualquer célula viva com menos de duas células vizinhas vivas morre (subpopulação).
- Qualquer célula viva com duas ou três células vizinhas vivas continua ativa.
- Qualquer célula viva com mais de três células vizinhas vivas morre (superpopulação).
- Qualquer célula morta com exatamente três células vizinhas vivas volta a viver (reprodução).

## Por exemplo, dado:

`
[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
`

retornar:

```
[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
```

Cada célula é atualizada de acordo com o número de vizinhos vivos. Por exemplo, [0][0]permanece morta (2 vizinhos vivos), [0][1]permanece viva (2 vizinhos vivos), [0][2]morre (3 vizinhos vivos) e assim por diante.

## Testes

1. Esperando :1. game_of_life([[0, 1, 0], [0, 1, 1], [1, 1, 0]])deve retornar [[0, 1, 1], [0, 0, 1], [1, 1, 1]].
1. Esperando :2. game_of_life([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]])deve retornar [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].
1. Esperando :3. game_of_life([[1, 0, 0], [0, 1, 0], [0, 0, 1]])deve retornar [[0, 0, 0], [0, 1, 0], [0, 0, 0]].
1. Esperando :4. game_of_life([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]])deve retornar [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].

## Soluções

- [Python]()
- [Javascript]()
