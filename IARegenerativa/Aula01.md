# Fundamentos de IA Regenerativa

## O que é IA Regenerativa

- Geração de Linguagem Natural
- Geração de código
- Geração de Imagem

## Modelos de linguagem grande

Os aplicativos de IA gerativa são alimentados por LLMs (modelos de lingaguem grandes), que são um tipo especializado de modelo de machine liarning que você pode usar para executar tarefas de PLN (processamento de linguagem natural), incluindo:

- Determinar um sentimento ou classificar de outra forma o texto em idioma natural
- Resumir um texto.
- Camparar várias fontes de texto quanto à similaridade semântica.
- Geração de nova linguagem natural.

## Modelos de linguagem grandes: Transformador parte 1

A arquitetura do modelo do transformador consite de dois componentes principais, ou blocos.

- Um bloco codificador que cria representações semânticas do vocabulario de treinamento.
- Um bloco decodificador que gera novas sequência de linguagem.

## Modelos de linguagem grandes: Transformador parte2

- O texto é tokenizado para que cada palavra ou frase seja representado por um token numerico exclusivo.
- Inserceções (valores de vetores com várias dimensões) são atribuidas ao token.
- As camadas de atenção examinam cada token por vez e determinam valores incorporados que refletem o relacionamento semantico entre os token.
- No decodificador, essas relações são usadas para prever a sequencia mais provável de tokens.

## Modelos de linguagem grande: Tokenização

1. Etapa um: tokenização
    - A primeira etpa no treinamento de um modleo de transformador é decompor o texto de treinamento em tokens.
    - **Frase de exemplo**: Eu ouvi um cachorro latir alto para um gato.
        - Eu 1
        - ouvi 2
        - um 3
        - cachorro 4
        - latir 5
        - alto 6
        - para 7
        - gato 8
    - A frase agora é representada ocm os tokens: [1, 2, 3, 4, 5, 6, 7, 8]
    - Observe que "um" é tokenizado como 3 apenas uma vez.
    - Da mesma forma, a frase "Eu ouvi um gato" poderia ser representada com as fichas [1 2 3 8].

## Modelos de linguagem grandes: Inserções

1. Etapa dois: **inserções**
    - As relações entre os tokens são capturadas como vetores, conhecidos como inserções.

## Modelos de linguagem grandes: Atenção

1. Etapa três: **ateção**
    - Capture as forças das relações entre tokens usando a técnica de atenção.
    - Vários tokens possiveis podem vir depois de cachorro.
    - o token mais próvavel é adicionado à sequencia nesse caso, **"latir"**

## Conceitos básicos de IA Generativas – Copilotos

- Os copilotos são frequentemente integrados a outros aplicativos e fornecem uma maneira para os usuarios obterem ajuda com tarefas comuns a partir de um modelo generativo de IA.
- Os desenvolvedores podem criar copilotos que enviam prompts para grandes modleos de linguagem e geram conteúdo para uso em aplicativos.
- Os usuários empresariias podem usar copilotos para aumentar sua produtividade e criatividade com conteúdo gerado por IA.

## Conceitos básicos de IA Generativa - Engenharia de prompts

### Aprimorar as respostas de IA generativa com a engenharia de prompts

- O termo engenharia de prompt descreve o processo de aprimoramente de prompts.
- Os desenvolvedores que projetam aplicativos e consumidores que usam aplicativos podem aprimorar a qualidade das respostas da IA gerativa usando linguagem direta, mensagens do sitema, exemplos e/ou dados de fundamentação.

