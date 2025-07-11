# Orakulo React UI

Uma biblioteca de componentes React com suporte a temas claro e escuro.

## Instalação

```bash
npm install orakulo-react-ui
```

## Uso Básico

```jsx
import { Button, Input, Select, Checkbox, Textarea } from "orakulo-react-ui";

function App() {
  return (
    <div>
      <Button variant="default">Clique aqui</Button>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Select
        label="País"
        options={[
          { value: "br", label: "Brasil" },
          { value: "us", label: "Estados Unidos" },
        ]}
      />
      <Checkbox label="Aceito os termos" />
      <Textarea label="Descrição" placeholder="Digite sua descrição..." />
    </div>
  );
}
```

## Personalização de Temas

### 1. Importar os estilos (Obrigatório)

```jsx
// Importar os estilos da biblioteca
import "orakulo-react-ui/styles";
```

### 2. Personalizar cores

Para personalizar as cores, você pode sobrescrever as variáveis CSS. Crie um arquivo CSS no seu projeto:

```css
/* meu-tema.css */
:root {
  /* Cores primárias */
  --primary: #ff0000; /* Vermelho */
  --primary-foreground: #ffffff;

  /* Cores de fundo */
  --background: #f8f9fa;
  --card: #ffffff;

  /* Cores de texto */
  --foreground: #333333;
  --card-foreground: #333333;

  /* Cores de input */
  --input: #ffffff;
  --border: #e2e8f0;
}

/* Tema escuro */
.dark {
  --primary: #ff6666;
  --background: #1a1a1a;
  --foreground: #ffffff;
  --input: #2a2a2a;
  --border: #404040;
}
```

E importe após os estilos da biblioteca:

```jsx
import "orakulo-react-ui/styles";
import "./meu-tema.css";
```

### 3. Aplicar tema escuro

Para ativar o tema escuro, adicione a classe `dark` ao elemento raiz:

```jsx
// JavaScript
document.documentElement.classList.add("dark");

// React
useEffect(() => {
  document.documentElement.classList.add("dark");
}, []);
```

## Variáveis CSS Disponíveis

### Cores de Fundo

- `--background`: Fundo principal
- `--card`: Fundo de cards

### Cores de Texto

- `--foreground`: Texto principal
- `--card-foreground`: Texto em cards
- `--muted-foreground`: Texto secundário

### Cores Primárias

- `--primary`: Cor primária
- `--primary-foreground`: Texto sobre cor primária

### Cores Secundárias

- `--secondary`: Cor secundária
- `--secondary-foreground`: Texto sobre cor secundária
- `--muted`: Cor de destaque
- `--muted-foreground`: Texto sobre cor de destaque

### Cores de Erro

- `--destructive`: Cor de erro
- `--destructive-foreground`: Texto sobre cor de erro

### Cores de Interface

- `--border`: Cor das bordas
- `--input`: Fundo dos inputs
- `--ring`: Cor do ring de foco

## Componentes Disponíveis

### Button

```jsx
<Button variant="default" size="md">
  Texto
</Button>
```

**Props:**

- `variant`: "default" | "secondary" | "outline"
- `size`: "sm" | "md" | "lg"

### Input

```jsx
<Input label="Nome" placeholder="Digite seu nome" />
```

**Props:**

- `label`: string (obrigatório)
- `error`: string (opcional)
- `icon`: ReactNode (opcional)
- `rightIcon`: ReactNode (opcional)

### Select

```jsx
<Select label="País" options={[{ value: "br", label: "Brasil" }]} />
```

**Props:**

- `label`: string (obrigatório)
- `options`: Array<{value: string, label: string}> (obrigatório)
- `error`: string (opcional)
- `icon`: ReactNode (opcional)

### Checkbox

```jsx
<Checkbox label="Aceito os termos" />
```

**Props:**

- `label`: string (obrigatório)
- `error`: string (opcional)

### Textarea

```jsx
<Textarea
  label="Descrição"
  placeholder="Digite sua descrição..."
  rows={4}
  maxLength={500}
  showCharacterCount={true}
/>
```

**Props:**

- `label`: string (obrigatório)
- `error`: string (opcional)
- `helperText`: string (opcional)
- `icon`: ReactNode (opcional)
- `rightIcon`: ReactNode (opcional)
- `rows`: number (padrão: 4)
- `maxLength`: number (opcional) - Limite máximo de caracteres
- `showCharacterCount`: boolean (opcional) - Mostra contador de caracteres

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar Storybook
npm run storybook

# Build da lib
npm run build
```
