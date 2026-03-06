
# 📟 Documentação da Calculadora CLI(Usando Interface)

## 📋 Descrição Geral
Aplicação de linha de comando (CLI) que implementa uma calculadora interativa com suporte a múltiplas operações matemáticas. O usuário digita comandos textuais e recebe os resultados em tempo real.

## 🎯 Objetivo
Fornecer uma interface simples e intuitiva para realizar cálculos matemáticos através do terminal, com loop contínuo até que o usuário decida sair.

## ⚙️ Funcionalidades

### 🔄 Loop Principal
- A aplicação executa em um ciclo infinito
- A cada iteração, a tela é limpa automaticamente
- Menu de ajuda é exibido a cada novo ciclo
- Usuário pode digitar "sair" para encerrar

### ⌨️ Interface de Entrada
- Sistema de perguntas e respostas via terminal
- Comandos no formato: `operação valor1 valor2 valor3`
- Case insensitive (maiúsculas/minúsculas não importam)
- Validação básica de comandos

### ⏸️ Controle de Fluxo
- Pausa após cada operação aguardando Enter
- Recursão para manter o programa em execução
- Limpeza de memória com fechamento de interfaces

## 🧮 Operações Matemáticas

### ➕ Somar
- **Descrição:** Soma dois números
- **Entrada:** `somar 5 3`
- **Processamento:** a + b
- **Saída:** Resultado da soma

### ➖ Subtrair
- **Descrição:** Subtrai dois números
- **Entrada:** `subtrair 10 4`
- **Processamento:** a - b
- **Saída:** Resultado da subtração

### ✖️ Multiplicar
- **Descrição:** Multiplica dois números
- **Entrada:** `multiplicar 6 7`
- **Processamento:** a × b
- **Saída:** Resultado da multiplicação

### ➗ Dividir
- **Descrição:** Divide dois números
- **Entrada:** `dividir 15 3`
- **Processamento:** a ÷ b
- **Saída:** Resultado da divisão

### 📈 Elevar
- **Descrição:** Potenciação
- **Entrada:** `elevar 2 3`
- **Processamento:** a ^ b
- **Saída:** Resultado da potência

### 🧮 Bhaskara
- **Descrição:** Calcula raízes de equação de 2º grau
- **Entrada:** `baskhara 1 -3 2`
- **Processamento:** ax² + bx + c = 0
- **Saída:** Valores de x1 e x2

### √ Radiciação
- **Descrição:** Raiz enésima de um número
- **Entrada:** `radiciação 27 3`
- **Processamento:** a ^ (1/b)
- **Saída:** Raiz calculada

## 🚦 Fluxo de Execução

### Passo 1: Inicialização
- Limpeza do console
- Exibição de mensagem de boas-vindas
- Exibição do menu de ajuda

### Passo 2: Entrada do Usuário
- Aguarda digitação do comando
- Captura a string completa
- Verifica comando de saída

### Passo 3: Processamento
- Separa a string em tokens (espaços)
- Extrai operador e números
- Converte strings para números
- Executa operação correspondente
- Exibe resultado formatado

### Passo 4: Controle
- Aguarda usuário pressionar Enter
- Fecha interfaces de leitura
- Reinicia o processo (recursão)

### Passo 5: Saída
- Usuário digita "sair"
- Exibe mensagem de despedida
- Encerra todas as interfaces
- Finaliza o programa

## 📊 Tabela de Comandos

| Comando | Descrição | Parâmetros | Exemplo Completo |
|---------|-----------|------------|------------------|
| somar | Adição | num1, num2 | somar 5 3 |
| subtrair | Subtração | num1, num2 | subtrair 10 4 |
| multiplicar | Multiplicação | num1, num2 | multiplicar 6 7 |
| dividir | Divisão | num1, num2 | dividir 15 3 |
| elevar | Potência | base, expoente | elevar 2 3 |
| baskhara | Equação 2º grau | a, b, c | baskhara 1 -3 2 |
| radiciação | Raiz | número, índice | radiciação 27 3 |
| sair | Encerrar | nenhum | sair |

## 🔧 Requisitos do Sistema

### Dependências
- **Node.js:** Ambiente de execução JavaScript
- **TypeScript:** Superset JavaScript com tipagem
- **Módulo Readline:** Interface nativa para I/O no terminal

### Arquivos Necessários
- **app.ts:** Arquivo principal da aplicação
- **calculadora.ts:** Classe com métodos matemáticos
- **mensagem.ts:** Classe com métodos de exibição

## 🎨 Interface do Usuário

### Mensagens Exibidas
- **Boas-vindas:** Mensagem inicial amigável
- **Ajuda:** Lista de comandos disponíveis
- **Prompt:** "Digite sua operação aqui:"
- **Resultado:** "Resultado: [valor]"
- **Continuar:** "Pressione Enter para continuar..."
- **Saída:** "Adeus"

### Tratamento de Erros
- Comando inválido → "Não é valido"
- Números inválidos → NaN (Not a Number)
- Parâmetros insuficientes → undefined


