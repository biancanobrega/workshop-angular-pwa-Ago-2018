# Workshop Angular + PWA - PDM Academy
O objetivo desse workshop é apresentar de uma forma simples, dinâmica e prática o poder do Angular para a criação de Single Page Application e Progressive Web App.

## Projeto Exemplo
No diretório possui um projeto de exemplo, seguir os passos abaixo para executá-lo.
- Baixar o projeto;
- Executar o comando npm install dentro do diretório;
- Ng build --prod para os arquivos de distribuição;
- Dentro do diretório dist/exemplo executar o comando http-server -p 8080
	- *Se ainda não possuir o http-server instalado, utilizar o comando npm install http-server -g para a instalação.* 
	
## Desafio
O Desafio consiste na criação de uma aplicação de notícias, essa aplicação deverá ser desenvolvida com Angular 6 e também funcionar como um PWA. [Descrição do desafio.](https://github.com/BiaNobrega/workshop-angular-pwa-Ago-2018/blob/master/DESAFIO.md "Descrição do desafio")

## Novo Projeto
*Para auxiliar o desenvolvimento do desafio, abaixo um mini tutorial de como criar um novo projeto.*

#### Comando para criar um projeto
```javascript
ng new nome-do-projeto --routing
```
- *O --routing cria nosso arquivo de rotas e importa no modulo principal. Reparem que dentro do app.component.html foi criada uma tag <router-outlet></router-outlet> com essa marcação o Angular sabe que é aí que precisa inserir nossos componentes(páginas) que estão mapeados nas rotas;*
- *Opcional: --style=scss (Caso queira trabalhar com sass)*

#### Criando o modulo template (Agrupamento dos componentes de template (Cabecalho, Rodapé, Menu, etc))
*O comando abaixo criará o módulo template que terá nosso componentes.*
```javascript
ng g m template
```
#### Criando os componentes do template
*O primeiro comando criará um componente chamado cabecalho e o segundo rodapé. Como definimos o módulo no comando, ambos serão importados no TemplateModule;*
```javascript
ng g c template/cabecalho --module=template
ng g c template/rodape --module=template
```

#### Utilizando o cabeçalho e o rodapé no componente principal da aplicação
*A ideia é que o cabeçalho e o rodapé esteja em qualquer página criada, para isso é necessário colocarmos eles no componente principal da aplicação. Para isso, seguis os passos abaixo:*
1. Adicionar os dois componentes no exports no TemplateModule, isso é necessário para que os componentes estejam disponíveis para quem importar o TemplateModule;
2. Importar o TemplateModule no AppModule;
3. Adicionar as tags <app-cabecalho></app-cabecalho> e <app-rodape></app-rodape> dentro arquivo app.component.html. A tag de cabeçalho deve ser adicionada antes do <router-outlet></router-outlet> e a rodapé depois. Pois router-outlet é onde carregará nossos conteúdos;

