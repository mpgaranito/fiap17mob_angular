# Exemplo de Aplicação PWA Utilizando o Framework Angular.

## Pré-requisitos

- Nodejs ([https://nodejs.org/en/download/](https://nodejs.org/en/download/))
- Cliente Git ([https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao/](https://www.hostinger.com.br/tutoriais/tutorial-do-git-basics-introducao/))
- CLI do Firebase ([https://firebase.google.com/docs/cli/?hl=pt-br](https://firebase.google.com/docs/cli/?hl=pt-br))



## Instalação do Angular

O comando que deve ser executado a partir do terminal é o seguinte:

$ npm install -g @angular/cli

## Obter o código fonte da aplicação

Criar um diretório local, pelo terminal.

$ mkdir fiap

Entre no diretório.

$ cd fiap

Baixe o repositório do código fonte do GitHub.

$ git clone [https://github.com/mpgaranito/fiap17mob\_angular.git](https://github.com/mpgaranito/fiap17mob_angular.git)

## Instalação de dependências de pacotes

Após ter o repositório, devemos baixar as dependências.

$ cd fiap17mob\_angular

Depois

$ npm install

## Execução do projeto

Utilize o CLI do Angular com o comando abaixo

$ ng serve

Abra o Browser e navegue até a seguinte URL:

 http://localhost:4200

## Login na aplicação

Para entrar na tela de cadastro do projeto, deve-se usar o login [admin@admin.com.br](mailto:admin@admin.com.br) senha admin.

Após isso, deve ser possível logar com o usuário cadastrado pela aplicação.

## _Deploy_ em produção

Para realizar o _Deploy_ deve-se executar os comandos na sequência:

$ ng build --prod

Depois, para subir a aplicação para o _Firebase Hosting_

$ firebase deploy

**OBS: Demora aproximadamente 5 minutos para as alterações do**  **deploy**  **refletir em produção.**

Finalmente, acessar o link [https://angular-52901.firebaseapp.com/](https://angular-52901.firebaseapp.com/) para verificação do site em produção.

** **
