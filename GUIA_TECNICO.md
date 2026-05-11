# Guia Técnico: Como funciona o "30 Segundos"?

Olá, futuro dev! Este sistema foi construído com tecnologias Web padrão (HTML, CSS e JS). Aqui está o que precisas de saber para entender e expandir este projeto.

### 1. Arquitetura de Ficheiros
- `index.html`: A estrutura do jogo (os "ossos").
- `src/style.css`: A estética e animações (o "aspeto").
- `src/script.js`: A lógica de jogo e gestão de dados (o "cérebro").

### 2. Como as Palavras são Geradas?
Tudo começa no ficheiro `script.js` dentro do objeto `WORDS_DATABASE`. 
Cada categoria é uma lista de listas. Se quiseres adicionar um novo tema, basta seguir esta estrutura:
```javascript
"minha_categoria": [
    ["Palavra1", "Palavra2", "Palavra3", "Palavra4", "Palavra5"],
    ...
]
```

### 3. A Lógica do Timer
Usamos a função nativa do JavaScript `setInterval`. Ela executa um bloco de código a cada 1000ms (1 segundo). Quando o tempo chega a zero, chamamos a função `endRound()`.

### 4. Gestão de Ecrãs
O jogo não muda de página. Ele apenas esconde e mostra secções (screens). Usamos uma classe CSS `.active` que alterna o `display: none` para `display: flex`.

### 5. Desafios para Estudantes (Hackathon Style)
Se quiseres treinar as tuas habilidades, tenta implementar:
1. **Ranking Persistente**: Usar `localStorage` para guardar as pontuações mesmo após fechar o navegador.
2. **Novos Sons**: Alterar os efeitos sonoros na pasta assets.
3. **Multi-idioma**: Criar um seletor para Português/Inglês.

---
*Divirtam-se a codar!*
