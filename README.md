# Carrinho de compras com VUE.JS

Baixe os arquivos.
Abra a pasta com o VSCODE
Dentro do terminal Vs Code ou pelo PowerShell como administrador rode copie e execute as seguintes linhas:

cd shopping-cart
docker build -t dockervue .         //apertar enter, vai montar a imagem, para rodar a aplicação rode a seguinte linha:
docker run -p 8000:80 -it --name dockervue dockervue

Veja a site pelo endereço: http://localhost:8000/

Este projeto usa Docker para permitir que todos as máquinas consigam usar.
