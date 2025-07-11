# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-07-11

### Fixed
- Added TypeScript declaration files (`.d.ts`) to the package to fix the warning:
  > Could not find a declaration file for module 'orakulo-react-ui'.

## [1.0.1] - 2025-07-11

### Added
- Added MIT license file and license metadata to the package.

## [1.0.0] - 2025-07-11

### Added

- **Initial release** of Orakulo React UI - A modern React component library
- **Core Components:**
  - `Button` - Versatile button component with multiple variants (default, secondary) and sizes (sm, md, lg)
  - `Input` - Form input component with label, error handling, and icon support
  - `Select` - Dropdown select component with customizable options
  - `Checkbox` - Checkbox component with label and error states
  - `Textarea` - Multi-line text input with character count and validation
  - `Badge` - Status and label badges with multiple variants
  - `Modal` - Modal dialog component with different variants (info, success, warning, error)

### Features

- **Theme System:** Built-in light and dark theme support
- **Customizable Styling:** CSS custom properties for easy theme customization
- **Tailwind CSS Integration:** Built with Tailwind CSS v4 for consistent styling
- **TypeScript Support:** Full TypeScript definitions included
- **Icon Support:** Integration with Material Design Icons (@mdi/react)

### Technical Details

- **Build System:** Vite-based build with library mode
- **Package Exports:** ES modules and UMD builds
- **Style Distribution:** CSS files included in package for easy customization
- **Peer Dependencies:** React 18+ and React DOM 18+
- **Storybook Integration:** Component documentation and examples

### Installation

```bash
npm install orakulo-react-ui
```

### Basic Usage

```jsx
import { Button, Input, Select } from "orakulo-react-ui";
import "orakulo-react-ui/styles";

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Input label="Name" placeholder="Enter your name" />
      <Select
        label="Country"
        options={[{ value: "us", label: "United States" }]}
      />
    </div>
  );
}
```

### Theme Customization

```css
:root {
  --primary: #ff0000;
  --background: #f8f9fa;
  --foreground: #333333;
}
```

This release provides a solid foundation for building modern React applications with consistent, accessible, and customizable UI components.
