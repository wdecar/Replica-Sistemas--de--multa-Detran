# Sistema de Multas DETRAN

Este é um projeto simples de verificação de velocidade de um carro desenvolvido em HTML, CSS e JavaScript. Ele permite que o usuário insira a velocidade do carro e veja uma mensagem indicando se está dentro do limite de velocidade ou se foi multado.

## Estrutura do Projeto

projeto-detran/
│
├── src/
│ ├── _css/
│ │ └── stylos.css
│ ├── _imagens/
│ │ └── favicon-16x16.png
│ │ └── logodetranept.jpg
│ ├── _js/
│ │ └── veloci.js
│
├── index.html
└── README.md


## Funcionalidades

- Verificação da velocidade inserida pelo usuário.
- Exibição de mensagens diferentes para velocidades dentro e fora do limite permitido.
- Feedback ao usuário sobre a necessidade de dirigir com cinto de segurança.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/projeto-detran.git

## Funcionalidades

- Verificação da velocidade inserida pelo usuário.
- Exibição de mensagens diferentes para velocidades dentro e fora do limite permitido.
- Feedback ao usuário sobre a necessidade de dirigir com cinto de segurança.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/projeto-detran.git

Navegue até o diretório do projeto:
cd projeto-detran
Abra o arquivo index.html no seu navegador:

Pode ser aberto diretamente clicando duas vezes no arquivo ou arrastando-o para o navegador.
Use a aplicação:

Digite a velocidade do carro no campo de entrada e clique no botão "Verificar".
Veja a mensagem exibida abaixo do botão.
Arquivos do Projeto
index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="src/_imagens/favicon-16x16.png">
    <link rel="stylesheet" href="src/_css/stylos.css">
    <script src="src/_js/veloci.js" defer></script>
    <title>DETRAN</title>
</head>
<body>
    <h1>Sistema de Multas</h1>
    <div class="sistema">
        Velocidade do carro: <input type="number" name="txtvel" id="txtvel">
        <input type="button" value="Verificar" onclick="calcular()">
    </div>
    <div id="res"></div>
</body>
</html>
body {
    background-image: url("../_imagens/logodetranept.jpg");
    background-size: cover; /* Para cobrir toda a área do body */
    background-position: center; /* Para centralizar a imagem */
    margin: auto;
    text-align: center;
    padding-top: 100px; /* Adiciona um pouco de espaçamento no topo */
}
h1 {
    margin: 0; /* Remove as margens padrão */
    padding: 20px 0; /* Adiciona espaçamento superior e inferior */
    text-align: center;
}
.sistema {
    margin: 20px 0; /* Adiciona margem superior e inferior */
}
input[type="number"], input[type="button"] {
    margin: 10px 0; /* Adiciona margem superior e inferior */
}
function calcular() {
    var txtvel = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtvel.value);

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;

    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>Multado</strong> por excesso de velocidade</p>`;
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Contato
Para quem quiser entrar em contato comigo:

Nome: Seu Nome
E-mail: gomeede@hotmail.com
LinkedIn: https://www.linkedin.com/in/edenilson-gomes-836a9a236/
GitHub: https://github.com/wdecar
Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.



