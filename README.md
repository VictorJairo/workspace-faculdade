#  workspace-faculdade Documentação

tecnologia_para_front_end_avançado_2024-02: Aqui é onde estão arquivados os exercícios vistos em sala de aula.  

site_uniesp: Aqui é onde esta arquivado o projeto que fizemos em sala de aula como conclusão de nossos estudos.

#  site_uniesp 
### Em nosso projeto criamos uma aplicação, um site baseado em **React** e utilizamos de algumas bibliotecas sendo elas

* *Json Server:*  com esta biblioteca podemos fazer uma **API Restful** simulada utilizando apenas **um arquivo JSON** onde o JSON vai permitir que abstraímos de um possível back end que utilizariamos para extrair os dados a serem retornados via API. 

* *Axios:*  com esta biblioteca deixamos as requesições HTTP mais amigaveis facilitando o envio de requisições para REST API e transformando automaticamente dados JSON

* *React Router:* com esta biblioteca podemos fazer de maneira amigavel rotas url entre diversos componentes em nossa aplicação.

* *Mui:* biblioteca que permite que a estilização de nosso projeto seja mais amigável.

### Arquitetura do Projeto

`data/db.json` É onde esta armazenado o .json onde substituimos um futuro back-end, nesse arquivo armazenamos noticias que então são utilizadas pelo `Json Server`

`site_uniesp/public` Onde armazenamos imagens e icones utilizados no projeto

`src/components` Onde armazenamos os componentes como a Navbar que utiliza o `React Router` para direcionar rotas url entre as páginas. e o BannerAd que serve para exibir um banner de propaganda.

`src/pages/admin` É aqui onde armazenamos as diversas páginas de nossa aplicação separando-as por módulos 

`src/app.jsx` Arquivo principal de nosso projeto onde utilizamos nossos componentes e modulos

* O resto do projeto são simplesmente configurações padrões do React e de nossas bibliotecas utilizadas







