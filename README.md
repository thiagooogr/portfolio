# dev::portfolio

Portfolio pessoal de um desenvolvedor front-end em formação. Tema terminal/cyberpunk,
feito apenas com **HTML, CSS e JavaScript puros** — sem frameworks, sem build, sem
dependências.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)

## Sobre

Front-end em formação, de Campina Grande - PB. Comecei na web com HTML e CSS e foi
justamente aí que percebi que queria ir fundo — hoje é o JavaScript que me mantém
estudando todo dia.

## Funcionalidades

- **Matrix rain** — fundo animado em `<canvas>`, redesenhado a cada 50ms
- **Terminal do hero** — bloco estático que simula uma sessão de shell, com cursor piscando
- **Efeito de digitação** — texto do subtítulo trocando entre frases, com cursor piscando
- **Barras de skill animadas** — `IntersectionObserver` dispara o preenchimento ao entrar na viewport
- **Efeito glitch** — `::before`/`::after` com `clip-path` animado no título
- **Menu mobile** — navegação off-canvas abaixo de 768px
- **Formulário de contato** — validação de e-mail no client-side (demo, não envia e-mail)

## Estrutura

```
.
├── index.html          # marcação de todas as seções
├── css/
│   └── style.css       # estilos + variáveis CSS + responsivo
├── js/
│   └── main.js         # matrix rain, digitação, skills, menu, formulário
└── assets/img/         # logo, avatar e thumbnails dos projetos
```

## Rodando localmente

O projeto é estático, então basta abrir o `index.html` no navegador. Se preferir um
servidor local:

```bash
python3 -m http.server 8080
# acessa http://localhost:8080
```

## Publicando

O repositório está em <https://github.com/thiagooogr/portfolio>. O site é hospedado
com Cloudflare Pages a partir da branch `main` — cada `git push` dispara um deploy
automático.

## Contato

- Email: [thiagogr@gmail.com](mailto:thiagogr@gmail.com)
- GitHub: [@thiagooogr](https://github.com/thiagooogr)
- LinkedIn: [in/thiagooogr](https://linkedin.com/in/thiagooogr)
