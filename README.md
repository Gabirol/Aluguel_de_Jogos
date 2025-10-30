# 🚀 Desafios alura - Projeto 03: Aluguel de Jogos

Este projeto simula o comportamento de um sistema simples de aluguel e devolução de jogos utilizando JavaScript para manipular o DOM.
Cada card de jogo possui um botão que alterna entre os estados "Alugar" e "Devolver", além de alterar a aparência do item visualmente.

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Preview](#%EF%B8%8F-preview)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#%EF%B8%8Ffuncionalidades)
- [Como executar o projeto](#-como-executar-o-projeto)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Aprendizados](#-aprendizados)
- [Autor](#%E2%80%8D-autor)

---


## 📖 Sobre o projeto

A proposta deste projeto é treinar manipulação do DOM, organização de funções, toggle de classes e alteração dinâmica de conteúdo, aplicando mudanças na interface sem recarregar a página.

- Ao clicar no botão de cada jogo, o script:
- Seleciona o elemento correspondente no DOM
- Alterna a classe da imagem (alugado ↔ disponível)
- Atualiza o texto e estilo do botão

---

## 🖼️ Preview

![Preview](https://github.com/user-attachments/assets/84148eb5-9d72-4439-8ae2-e7da816b400a)

---


## 🛠 Tecnologias utilizadas

- **HTML5** — estrutura e elementos da página  
- **CSS3** — estilização visual e responsividade  
- **JavaScript (ES6+)** — lógica para controle de estados no DOM 

---

## ⚙️ Funcionalidades

A chamada principal recebe o número do jogo:
```
alterarStatus(1);
```

E a partir disso:

**1. Seleciona o card do jogo pelo ID**

2. Executa duas funções:

- `alterarImg()` → Alterna a classe visual da imagem

- `alterarBotao()` → Alterna o estado do botão e o texto exibido

---

## 🧭 Como executar o projeto

### 🔹 Localmente.

1. Clone este repositório:
   ```bash
   git clone https://git@github.com:Gabirol/Aluguel_de_Jogos.git


## 🗂 Estrutura de Pastas

Este projeto contém desafios práticos desenvolvidos durante o curso de JavaScript.  
Abaixo está a organização das pastas e arquivos.

├── css/ # Estilização visual do projeto (CSS)
│ ├── _reset.css
│ ├── main.css

├── assets/ # Imagens, icones e simbulos.

│ ├── fade_bar.svg

│ ├── hachuras.svg

│ ├── logo.svg

│ └── monopoly.png

│ └── preview.gif 

│ └── takanoka.png

│ └── ticket_to_ride.png

│

├── js/ # Scripts JavaScript do projeto

│ ├── app.js 

│ 

│

├── index.html # Estrutura principal da interface (HTML)


---

## 💡 Aprendizados

- Seleção de elementos no DOM (getElementById, querySelector)
- Uso de condicional de segurança (if (!item) return ...)
- Toggle de classes (classList.toggle())
- Manipulação de conteúdo textual (textContent)
- Separação da lógica em funções reutilizáveis
- Organização e clareza no código

> Este projeto me ajudou a aprender como funciona os DOM colocando em pratica.

---

## 👨‍💻 Autor

**Gabriel Alves**

**📧 galves.ag2003@gmail.com**

**🔗 [LinkedIn](www.linkedin.com/in/gabriel-alves-gonçalves-28220a205)
• [GitHub](https://github.com/Gabirol)**


