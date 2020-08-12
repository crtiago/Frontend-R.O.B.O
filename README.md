# Frontend-R.O.B.O
R.O.B.O - Robô Operacional Binariamente Orientado (R.O.B.O) desenvolvido como Prova de Conceito (PoC)

![Robo](https://raw.github.com/crtiago/Frontend-R.O.B.O/master/src/assets/img/robot.png)

# Restrições para o funcionamento do R.O.B.O.
- O estado inicial dos movimentos é **Em Repouso**.
- Só poderá movimentar o **Pulso** caso o **Cotovelo** esteja **Fortemente Contraído**.
- Só poderá **Rotacionar** a **Cabeça** caso sua **Inclinação** da **Cabeça** não esteja em
estado **Para Baixo**.
- Ao realizar a progressão de estados, é necessário que sempre siga a ordem
crescente ou decrescente, por exemplo, a partir do estado 4, pode-se ir para
os estados 3 ou 5, nunca pulando um estado.
- Atenção aos limites! Se tentar enviar um estado inválido você irá corromper o
sistema do R.O.B.O.

# Características do Frontend
- Suporte a mobile.
- Apresentação dos estados atuais de cada membro do Robo através da API.
- Controle dos movimentos do Robo.

# Passos para executar o Frontend:
- Passo 1: executar o Backend disponível em [Backend Robo](https://github.com/crtiago/Backend-R.O.B.O).
- Passo 2: realizar o download do Frontend.
- Passo 3: abrir a pasta em uma IDE compatível com Angular, como por exemplo Visual Studio Code.
- Passo 4: abra um novo terminal de comando na sua IDE, e execute o comando **npm update**
- Passo 5: no terminal execute o comando **ng serve**
- Passo 6: abra um navegador de sua preferência, e navegue para o caminho http://localhost:4200/page-robo
