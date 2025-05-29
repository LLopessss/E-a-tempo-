# E aí, tempo? 🌧

![Logo do Projeto](https://img.shields.io/badge/E%20a%C3%AD%2C%20tempo%3F-Conscientiza%C3%A7%C3%A3o%20Ambiental-4e5ff9)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)

## 📋 Sobre o Projeto

*E aí, tempo?* é um projeto de conscientização ambiental desenvolvido com o objetivo de educar a população sobre os impactos das chuvas intensas causadas principalmente pelo descarte incorreto de lixo nas áreas urbanas. O site oferece informações educativas, alertas climáticos e soluções práticas para mitigar os problemas relacionados a alagamentos e enchentes.

### 🎯 Objetivos

- *Conscientizar* a população sobre a relação entre descarte incorreto de lixo e alagamentos
- *Informar* sobre condições climáticas e alertas preventivos
- *Educar* sobre práticas sustentáveis de descarte de resíduos
- *Prevenir* danos causados por chuvas intensas através de informação
- *Promover* atitudes ambientalmente responsáveis

## 👥 Equipe de Desenvolvimento

| Nome | RM | Função | GitHub | LinkedIn |
|------|----|---------|---------|---------| 
| *Pedro Gomes* | 562606 | Desenvolvedor Full-Stack | [@pedrogomes](https://github.com/Pedrogomesz) | [Pedro Gomes](https://www.linkedin.com/in/pedrogoomes/) |
| *Gustavo Freire* | 561334 | Desenvolvedor Back-end | [@gustavofreire](https://github.com/ghfreiree) | [Gustavo Freire](https://www.linkedin.com/in/gustavo-ganaha-freire-0815bb353/) |
| *Lucas Lopes* | 563544 | Desenvolvedor Back-end | [@lucaslopes](https://github.com/LLopessss) |

## 🚀 Tecnologias Utilizadas

### Frontend
- *HTML5* - Estruturação semântica do conteúdo
- *CSS3* - Estilização e layout responsivo
  - CSS Grid Layout
  - Flexbox
  - Media Queries
  - Variáveis CSS (Custom Properties)
  - Animações e Transições
- *JavaScript (Vanilla)* - Interatividade e funcionalidades dinâmicas
  - DOM Manipulation
  - Event Listeners
  - Form Validation
  - Intersection Observer API
  - Local Storage (futuras implementações)

### Design e UX/UI
- *Font Awesome* - Ícones vetoriais
- *Google Fonts* - Tipografia (Segoe UI como fallback)
- *Design Responsivo* - Mobile First Approach
- *Acessibilidade* - Práticas WCAG 2.1

### Ferramentas de Desenvolvimento
- *Visual Studio Code* - Editor de código
- *Git* - Controle de versão
- *GitHub* - Repositório e colaboração
- *Browser DevTools* - Debug e testes
- *Lighthouse* - Auditoria de performance e acessibilidade

## 📁 Estrutura do Projeto


e-ai-tempo/
├── index.html              # Página inicial
├── sobre.html              # Página sobre o projeto
├── faq.html                # Perguntas frequentes
├── clima.html              # Informações climáticas
├── contato.html            # Formulário de contato
├── integrantes.html        # Equipe do projeto
├── README.md               # Documentação
├── css/
│   ├── style.css           # Estilos principais
│   └── responsive.css      # Media queries e responsividade
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── imgs/
│   ├── enchente.jpg        # Imagem principal (ilustração de enchente)
│   ├── gustavo.jpg         # Imagem gustavo (foto do gustavo)
│   ├── logo.png            # Imagem logo (foto do logo)
│   ├── lucaslopes.png      # Imagem lucas (foto lucas)
│   ├── pedro.png           # Imagem pedro (foto pedro)
│   ├── sustentavel.svg     # Imagem sustentavel 
│   └── chuva.png           # Imagem de alagamento



## 🌐 Páginas e Funcionalidades

### 🏠 *Página Inicial (index.html)*
- Hero section com call-to-action
- Seção informativa sobre concentração de lixo
- Cards de impactos das chuvas intensas
- Soluções e atitudes sustentáveis
- Design responsivo com ilustrações

### ℹ *Página Sobre (sobre.html)*
- Missão e objetivos do projeto
- Importância da conscientização ambiental
- Explicação sobre impactos do descarte incorreto
- Cards informativos sobre objetivos

### ❓ *FAQ (faq.html)*
- Sistema de accordion interativo
- Perguntas frequentes sobre:
  - Código Vermelho meteorológico
  - Como ajudar a comunidade
  - Relação entre lixo e enchentes
  - Funcionamento do projeto
  - Tipos de alertas meteorológicos

### 🌤 *Clima (clima.html)*
- Card de clima atual (São Paulo)
- Previsão para 5 dias
- Alertas meteorológicos visuais
- Dicas de prevenção categorizadas:
  - Em casa
  - Na rua
  - Descarte de lixo
- Seção de atitudes sustentáveis

### 📞 *Contato (contato.html)*
- Formulário com validação JavaScript:
  - Nome (obrigatório)
  - E-mail (obrigatório + validação)
  - Assunto (opcional)
  - Mensagem (obrigatória)
- Informações de contato
- Links para redes sociais
- Layout responsivo em duas colunas

### 👨‍💻 *Integrantes (integrantes.html)*
- Cards individuais da equipe
- Informações de cada membro (Nome, RM, Função)
- Links para redes sociais profissionais
- Seção sobre o projeto acadêmico

## 🎨 Design System

### 🎨 *Paleta de Cores*
```css
:root {
    --primary-color: #4e5ff9;      /* Azul principal */
    --secondary-color: #6c7ae0;    /* Azul secundário */
    --accent-color: #ff7f50;       /* Laranja de destaque */
    --text-color: #333;            /* Texto principal */
    --light-text: #fff;            /* Texto claro */
    --light-bg: #f5f7ff;           /* Fundo claro */
    --dark-bg: #1a1a2e;            /* Fundo escuro */
    --blue-bg: #4e5ff9;            /* Fundo azul */
    --gray-bg: #f0f2f5;            /* Fundo cinza */
}
