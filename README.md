# Landing Page - Clínica Odontológica Sorriso Perfeito

Este é um projeto de uma landing page responsiva para uma clínica odontológica fictícia, a "Sorriso Perfeito". O objetivo foi criar uma interface moderna, atraente e funcional, utilizando tecnologias web fundamentais como HTML, CSS e JavaScript.

## ✨ Visão Geral do Projeto

A página foi estruturada como uma "Single Page Application" (SPA) estática, onde a navegação entre as seções ocorre de forma fluida na mesma página. O design é limpo e profissional, focado em proporcionar uma excelente experiência de usuário (UX) tanto em desktops quanto em dispositivos móveis.

### 🚀 [Link para o Projeto (Substituir)](https://seu-usuario.github.io/seu-repositorio/)

---

## 🛠️ Passos do Desenvolvimento

O projeto foi desenvolvido seguindo as etapas abaixo:

### 1. Estruturação com HTML5

A base do site foi construída com HTML semântico para garantir acessibilidade e uma boa organização do conteúdo.

- **`index.html`**: Arquivo principal que contém toda a estrutura da página.
- **Seções Principais**:
  - `<header>`: Contém o logo e o menu de navegação principal.
  - `<section id="hero">`: A primeira dobra da página, com uma imagem de fundo, título de impacto e um Call-to-Action (CTA).
  - `<section id="about">`: Seção "Sobre Nós", com uma breve descrição da clínica.
  - `<section id="services">`: Apresenta os serviços oferecidos em um layout de grade.
  - `<section id="testimonials">`: Exibe depoimentos de pacientes.
  - `<section id="contact">`: Contém informações de contato e um formulário para envio de mensagens.
  - `<footer>`: Rodapé com informações de copyright.
- **Acessibilidade**: Uso de `aria-label` para botões e links sem texto descritivo.

### 2. Estilização com CSS3

O visual da página foi criado no arquivo `style.css`, utilizando recursos modernos do CSS para criar um layout flexível e atraente.

- **CSS Variables (`:root`)**: Definição de uma paleta de cores centralizada, facilitando a manutenção e a consistência do tema.
- **Layout Responsivo**:
  - **Flexbox**: Utilizado para alinhar itens no cabeçalho e na seção de contato.
  - **Grid Layout**: Aplicado para organizar os cards de serviços e depoimentos de forma eficiente.
  - **Media Queries**: Implementadas para adaptar o layout a diferentes tamanhos de tela (tablets e celulares), com foco especial no menu de navegação (menu hambúrguer).
- **Efeitos e Transições**:
  - Efeitos `hover` foram adicionados a botões e links para fornecer feedback visual ao usuário.
  - Transições suaves (`transition`) foram usadas para animar mudanças de estado, como o crescimento do sublinhado no menu e a elevação dos cards de serviço.
- **Fontes e Ícones**:
  - **Google Fonts**: A fonte "Poppins" foi importada para garantir uma tipografia moderna e legível.
  - **Font Awesome**: Biblioteca de ícones utilizada para ilustrar os serviços e informações de contato.

### 3. Interatividade com JavaScript (Vanilla JS)

A funcionalidade dinâmica da página foi implementada no arquivo `script.js`, sem o uso de frameworks externos.

- **Navegação Suave (Smooth Scrolling)**: Um script percorre todos os links de âncora (`<a href="#">`) e aplica um efeito de rolagem suave (`scrollIntoView({ behavior: 'smooth' })`) ao clicar, melhorando a experiência de navegação na página.

- **Menu Mobile (Hambúrguer)**:
  - Um `event listener` no botão de menu (`.menu-toggle`) adiciona ou remove a classe `.active` da lista de navegação (`.nav-list`).
  - O CSS utiliza a classe `.active` para exibir ou ocultar o menu em telas menores.

- **Fechar Menu ao Clicar Fora**: Para melhorar a usabilidade, um evento de clique no documento verifica se o clique ocorreu fora do menu ou do botão de toggle. Se sim, o menu é fechado.

- **Header Dinâmico**: Um `event listener` de `scroll` na janela (`window`) detecta a rolagem da página. Quando o usuário rola para além de uma certa altura (50 pixels), a classe `.scrolled` é adicionada ao `<header>`, permitindo estilizá-lo com um fundo sólido e sombra, melhorando a visibilidade sobre o conteúdo.

---

## 💻 Tecnologias Utilizadas

- **HTML5**: Para a marcação e estrutura do conteúdo.
- **CSS3**: Para estilização, layout e responsividade.
  - CSS Variables
  - Flexbox
  - Grid Layout
- **JavaScript (ES6+)**: Para interatividade e manipulação do DOM.
- **Font Awesome**: Para ícones vetoriais.
- **Google Fonts**: Para a tipografia do site.

---

## 🚀 Como Executar o Projeto

Como este é um projeto front-end estático, você não precisa de um servidor complexo para executá-lo.

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-diretorio
   ```
3. Abra o arquivo `index.html` diretamente no seu navegador de preferência.

   Alternativamente, você pode usar uma extensão como o **Live Server** no Visual Studio Code para visualizar o projeto com recarregamento automático.

---

## 📝 Licença

Este projeto é para fins de estudo e portfólio. Sinta-se à vontade para usá-lo como referência.

---
