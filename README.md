# Orakulo React UI

A React component library with light and dark theme support.

## Installation

```bash
npm install orakulo-react-ui
```

## Basic Usage

```jsx
import { Button, Input, Select, Checkbox, Textarea } from "orakulo-react-ui";

function App() {
  return (
    <div>
      <Button variant="default">Click here</Button>
      <Input label="Name" placeholder="Enter your name" />
      <Select
        label="Country"
        options={[
          { value: "br", label: "Brazil" },
          { value: "us", label: "United States" },
        ]}
      />
      <Checkbox label="I accept the terms" />
      <Textarea label="Description" placeholder="Enter your description..." />
    </div>
  );
}
```

## Theme Customization

### 1. Import styles (Required)

```jsx
// Import library styles
import "orakulo-react-ui/styles";
```

### 2. Customize colors

To customize colors, you can override CSS variables. Create a CSS file in your project:

```css
/* my-theme.css */
:root {
  /* Primary colors */
  --primary: #ff0000; /* Red */
  --primary-foreground: #ffffff;

  /* Background colors */
  --background: #f8f9fa;
  --card: #ffffff;

  /* Text colors */
  --foreground: #333333;
  --card-foreground: #333333;

  /* Input colors */
  --input: #ffffff;
  --border: #e2e8f0;
}

/* Dark theme */
.dark {
  --primary: #ff6666;
  --background: #1a1a1a;
  --foreground: #ffffff;
  --input: #2a2a2a;
  --border: #404040;
}
```

And import it after the library styles:

```jsx
import "orakulo-react-ui/styles";
import "./my-theme.css";
```

### 3. Apply dark theme

To activate dark theme, add the `dark` class to the root element:

```jsx
// JavaScript
document.documentElement.classList.add("dark");

// React
useEffect(() => {
  document.documentElement.classList.add("dark");
}, []);
```

## Available CSS Variables

### Background Colors

- `--background`: Main background
- `--card`: Card background

### Text Colors

- `--foreground`: Main text
- `--card-foreground`: Text in cards
- `--muted-foreground`: Secondary text

### Primary Colors

- `--primary`: Primary color
- `--primary-foreground`: Text on primary color

### Secondary Colors

- `--secondary`: Secondary color
- `--secondary-foreground`: Text on secondary color
- `--muted`: Accent color
- `--muted-foreground`: Text on accent color

### Error Colors

- `--destructive`: Error color
- `--destructive-foreground`: Text on error color

### Interface Colors

- `--border`: Border color
- `--input`: Input background
- `--ring`: Focus ring color

## Available Components

### Button

```jsx
<Button variant="default" size="md">
  Text
</Button>
```

**Props:**

- `variant`: "default" | "secondary" | "outline"
- `size`: "sm" | "md" | "lg"

### Input

```jsx
<Input label="Name" placeholder="Enter your name" />
```

**Props:**

- `label`: string (required)
- `error`: string (optional)
- `prefixIcon`: ReactNode (optional)
- `suffixIcon`: ReactNode (optional)

### Select

```jsx
<Select label="Country" options={[{ value: "br", label: "Brazil" }]} />
```

**Props:**

- `label`: string (required)
- `options`: Array<{value: string, label: string}> (required)
- `error`: string (optional)
- `prefixIcon`: ReactNode (optional)

### Checkbox

```jsx
<Checkbox label="I accept the terms" />
```

**Props:**

- `label`: string (required)
- `error`: string (optional)

### Textarea

```jsx
<Textarea
  label="Description"
  placeholder="Enter your description..."
  rows={4}
  maxLength={500}
  showCharacterCount={true}
/>
```

**Props:**

- `label`: string (required)
- `error`: string (optional)
- `helperText`: string (optional)
- `prefixIcon`: ReactNode (optional)
- `suffixIcon`: ReactNode (optional)
- `rows`: number (default: 4)
- `maxLength`: number (optional) - Maximum character limit
- `showCharacterCount`: boolean (optional) - Show character counter

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build
```
