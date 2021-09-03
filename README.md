# Aplicativo de Notícias

Bem-vindos à primeira a demonstração do aplicativo de notícias

Aqui você vai encontrar o código-fonte e descrição do desenvolvimento de nossa aplicação.

## License
![GitHub](https://img.shields.io/github/license/Markgt07/App-Feed-de-Noticias)
## Sobre o projeto
Aplicativo educacional prezando boas práticas, feito com o intuito de demonstrar conhecimento na área de desenvolvimento mobile, bem como
domínio utilizando o JavaScript e seus frameworks, integração com banco de dados e api.

# Tecnologias Utilizadas
 - JavaScript
 - React Native
 - Css
 - FireBase
 - expo
## bibliotecas
 - React Navigation
 
# Como executar o projeto
## pré-requisitos: expo/node.js
```bash
  # clonar repositório
  git clone https://github.com/Markgt07/App-Feed-de-Noticias.git
  
  # entrar na pasta do projeto
  cd App-Feed-de-Noticias
  
  # instalar dependências
  npm install
  
  # inicializar o expo
  expo start
  ``` 
# Jornada
## dificuldades
 - Separação de arquivos <br/>
 Ao longo do projeto fui fazendo em um único arquivo, funcionou corretamente, porém o código fica muito confuso, então por boas práticas é bom separar a estilização e as functions.
A dificuldade foi separar estes depois que o aplicativo já estava pronto, a estilização foi fácil, o problema era as funções, pois eu achava no começo que a NoticiaScreen não estava puxando as props do HomeScreen, mas na verdade o problema era nas importações.


- Estilização <br/>
Outro problema era a estilização, principalmente no botão (```TouchebleOpacity```) das noticias da página Home, pois o resumo do conteúdo da notícia além de ficar subindo não estava limitando para encaixar na view, então procurei a uma forma de limitar a quantidade de linhas e achei a propriedade numberOfLines.

Também tive que procurar uma maneira de arredondar a imagem para se encaixar perfeitamente na view que estava arredondada , a solução foi estilizar a própria imagem com ```overflow:’hidden’``` e ```borderRadius```

## Ideias Abandonadas
- Footer (rodapé) <br/>
No arquivo guia foi mostrado que o app teria o rodapé, tive dificuldade em lembrar como fazer, pois no desenvolvimento web tem a tag ```<Footer>```, no react native nao tem, mas solucionei usando ```<view><Text>Footer</Text></View>```, decidi não usar , pois achei que geraria uma poluição visual e não ficaria agradável (bonito).

- Tab Navigation <br/>
Tive a ideia de implementar o Tab navigation, mas como era um app de duas páginas só serviria para mostrar o domínio do react navigation, outro problema foi o tempo.

- Página de autenticação (login) <br/>
Esta iria em conjunto com o Tab Navigation, para poder deixar o app mais robusto e acrescentar nos tabs, o problema foi o mesmo do acima

- Api <br/>
decidi usar o mockapi, pois como a estrutura é pequena já supriria a necessidade,
mas como o intuito da api seria consumi-la para exibir as informações na tela e o firebase já tinha sanado esse problema seria re-trabalho utiliza-lo, ainda estou vendo uma forma de criar a api para mostrar o domínio, mas sem consumir pelo app , pois o firebase já está com esta função.



# Autor
Marcelo Fabio Louzeiro B. <br/>
https://www.linkedin.com/in/marcelo-fabio-a04811191/
 

