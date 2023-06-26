<h1><br>
<p align="center">
Frameworks/Bibliotecas utilizadas
</p>
</h1>

Aplicação com deploy em https://todo-list-redux-typescript.vercel.app/ </br >
Histórico de desenvolvimento: https://github.com/programadorEmerson/todo-list-redux-typescript/commits/main

`ReactJs`</br>
O ReactJS é uma biblioteca JavaScript de código aberto para criação de interfaces de usuário interativas. Com sua abordagem baseada em componentes, permite dividir a interface em partes reutilizáveis. Utilizando o Virtual DOM, atualiza apenas as partes modificadas, melhorando o desempenho. O ReactJS usa JSX para mesclar JavaScript e HTML. É amplamente usado e possui uma comunidade ativa, além de extensões como o React Native para desenvolvimento mobile. É uma ótima escolha para criar interfaces dinâmicas e eficientes na web.

`Material-UI`</br>
Material Design é um sistema de design apoiado em código-fonte aberto que auxilia as equipes a criarem experiências digitais de alta qualidade padronizando todas as suas interfaces gráficas. o Material Design tem o princípio de ser simples, direto, chamativo, amigável e intuitivo, então cada elemento da interface deve se encaixar nessas características, além de ser muito bem documentada, ativamente mantida, com vários cases de sucesso, muito customizável, facilitando a criação de componentes com comportamentos padrões, como modals, formulários, além disso existe a possibilidade de customizar com CSS utilizando o padrão recomendado pela própria biblioteca.

`ESLint`</br>
É uma ferramenta de linting para código JavaScript que auxilia os desenvolvedores a identificar e corrigir problemas comuns no código-fonte. Ele analisa o código JavaScript em busca de padrões problemáticos, erros de sintaxe, práticas desencorajadas e outros problemas, fornecendo um feedback útil para melhorar a qualidade e a legibilidade do código, além de que é altamente configurável, permitindo que você personalize as regras de linting de acordo com as necessidades e preferências do seu projeto. Você pode especificar quais regras aplicar, quais regras ignorar, definir estilos de codificação, habilitar ou desabilitar plugins e muito mais. No geral, é uma ferramenta essencial para o desenvolvimento JavaScript, pois ajuda a melhorar a qualidade do código, evita erros comuns e promove boas práticas de programação.

`Eslint-plugin-import-helpers`</br>
É um plugin para o Eslint, uma ferramenta popular de linting de código JavaScript. Esse plugin específico fornece regras e funcionalidades extras relacionadas à importação de módulos e à organização de declarações de import. Com isso, você pode manter um padrão consistente nas importações do seu código, o que melhora a legibilidade e a manutenibilidade do mesmo. Ele oferece várias regras configuráveis para ajudar a evitar importações desorganizadas e garantir uma estrutura coerente nas declarações de import, além de que é uma ferramenta valiosa para equipes de desenvolvimento que desejam manter um código limpo e consistente. Ele ajuda a evitar problemas comuns relacionados à importação de módulos, promovendo boas práticas e padronização dentro do código JavaScript.

`Eslint-plugin-unused-imports`</br>
É um plugin para o Eslint, uma ferramenta popular de linting de código JavaScript. Esse plugin específico é projetado para ajudar a identificar e remover importações não utilizadas em seu código. Com ele você pode garantir que todas as importações em seu código sejam realmente usadas, evitando importações desnecessárias e reduzindo o tamanho do bundle do seu aplicativo, além de que você pode manter seu código mais limpo e livre de importações desnecessárias, o que contribui para uma melhor manutenibilidade e desempenho do seu aplicativo JavaScript.

`Commitizen`</br>
É uma ferramenta de linha de comando que facilita a criação de mensagens de commit padronizadas e semânticas. Ele visa promover uma boa prática de mensagens de commit, seguindo convenções definidas, como o [Conventional Commits](https://www.conventionalcommits.org/), que ajuda a manter um histórico de commit mais legível, organizado e compreensível.
Com o `commitizen`, você pode usar uma interface interativa para criar mensagens de commit seguindo um formato específico, incluindo o tipo de alteração, o escopo, uma descrição concisa e outras informações opcionais. Isso ajuda a fornecer contexto sobre as mudanças realizadas no código e facilita a navegação e a compreensão do histórico de commits além
de que é uma ferramenta útil para equipes que desejam adotar uma abordagem padronizada e semântica para mensagens de commit, tornando mais fácil rastrear e entender as alterações em um projeto.

`Redux`</br>
Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, sendo amplamente utilizada em conjunto com o ReactJS. Ela segue o padrão Flux e ajuda a gerenciar e manter o estado centralizado de uma aplicação de forma previsível e escalável.
No Redux, o estado global da aplicação é armazenado em uma única árvore de estado imutável. As mudanças no estado são feitas através de ações, que são objetos simples descrevendo o que aconteceu. Essas ações são despachadas para um "reducer" que especifica como o estado deve ser atualizado em resposta a cada ação. O reducer retorna um novo estado atualizado, mantendo o estado anterior intacto.

`Typescript`</br>
TypeScript é uma linguagem de programação desenvolvida pela Microsoft e é uma superset da linguagem JavaScript. Ela adiciona recursos de tipagem estática ao JavaScript, permitindo a definição de tipos para variáveis, parâmetros de função, objetos e outros elementos do código.
Uma das principais vantagens do TypeScript é o sistema de tipos. Ele permite detectar erros de tipagem em tempo de compilação, ajudando a encontrar bugs antes mesmo de executar o código. Com a adição de tipos, é possível ter um código mais robusto, legível e com menos erros.

`React-Csv`</br>
O react-csv é uma biblioteca JavaScript que fornece uma maneira simples de gerar e baixar arquivos CSV (Comma-Separated Values) a partir de dados em um aplicativo React. Ele oferece componentes e utilitários para facilitar a criação e manipulação de arquivos CSV.
Com o react-csv, você pode criar facilmente um componente CSVLink que, quando clicado, iniciará o download de um arquivo CSV contendo os dados fornecidos. Você pode personalizar as opções do arquivo CSV, como o separador de colunas, o nome do arquivo, as colunas a serem incluídas e outras configurações.

`React-Xlsx`</br>
A biblioteca react-xlsx é uma ferramenta útil para trabalhar com arquivos XLSX (Excel) em aplicativos React. Ela permite gerar e manipular planilhas do Excel de forma programática.
Com o react-xlsx, você pode criar componentes que geram arquivos XLSX a partir de dados estruturados. Esses dados podem ser tabelas, gráficos, relatórios ou qualquer outro formato suportado pelo Excel. A biblioteca oferece uma interface simples para formatar células, adicionar estilos, aplicar fórmulas e criar várias abas na planilha.

<h1><br>
<p align="center">
Importante para Executar a aplicação
</p>
</h1>

```bash
# Instalação de pacotes
$ npm install
# ou
$ yarn

# Testando local (Com Hot Reload)
$ npm run dev
# ou
$ yarn dev
```
