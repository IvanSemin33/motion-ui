# Motion UI Design System

**📖 [Storybook](https://ivansemin33.github.io/motion-ui/?path=/docs/iconography--docs)**

Motion UI is a comprehensive design system built for creating interactive and visually appealing user interfaces with a strong emphasis on animations and transitions. This design system consists of more than 30 individual components, all built using React and TypeScript, and designed to seamlessly integrate with the Framer Motion library. With Motion UI, you can easily add delightful motion and interactivity to your web applications.

## Table of Contents
- [Motion UI Design System](#motion-ui-design-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Local Installation](#local-installation)
    - [Package Installation - IN PROGRESS](#package-installation---in-progress)
  - [Components](#components)
  - [Usage](#usage)
  - [Customization](#customization)
  - [Contributing - IN PROGRESS](#contributing---in-progress)
  - [License](#license)

## Introduction

Motion UI is designed to help web developers and designers create visually engaging and responsive user interfaces. It provides a collection of reusable components, each of which is meticulously crafted to offer a smooth user experience. These components are optimized for performance and are built to support a wide range of animation and motion effects.

## Getting Started

To get started with Motion UI, follow these simple steps:

### Prerequisites

- Node.js
- NPM or Yarn

### Local Installation

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:IvanSemin33/motion-ui.git
    ```
2. Navigate to the project directory: 

   ```bash
   cd motion-ui
   ```

3. Install the dependencies:

   ```bash 
    npm install
    ```

4. Start the development server:

   ```bash
   npm run storybook
   ```

5. Open your browser and navigate to `http://localhost:6006` to view the Storybook.
   


### Package Installation - IN PROGRESS

1. Create a new React project or open an existing one.

2. Install the Motion UI package using NPM or Yarn:

   ```bash
   npm install motion-ui
   ```

   or

   ```bash
   yarn add motion-ui
   ```

3. Import the components you need and start adding motion to your user interface.

## Components

Motion UI offers a diverse collection of more than **30** components, each designed to provide dynamic, interactive, and animated user experiences. These components support a wide range of animation props from the Framer Motion library, making it easy to create stunning visual effects.

## Usage

Using Motion UI is straightforward. Simply import the desired component into your React project and customize it to fit your design requirements. Here's an example of how to use the `Button` component:

```jsx
import { Button, EButtonSizes } from 'motion-ui';

const MyComponent = () => {
  return (
    <Button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0 }}
      size={EButtonSizes.MEDIUM}
    >
      Click Me
    </Button>
  );
}
```

Each component supports a variety of Framer Motion props, giving you full control over the animation and motion effects applied.

## Customization

Motion UI is highly customizable. You can modify the appearance, behavior, and animation properties of each component to match your project's specific needs. Refer to the documentation for detailed instructions on how to customize the components.

## Contributing - IN PROGRESS

We welcome contributions from the open-source community to help enhance and expand the capabilities of Motion UI. If you're interested in contributing, please follow the guidelines outlined in our [Contributing Guide](CONTRIBUTING.md).

## License

Motion UI is open-source software distributed under the MIT License. Please read our [License](LICENSE) for details on usage and distribution.

---

Thank you for choosing Motion UI Design System. We hope you find it a valuable tool for creating captivating user interfaces with rich motion and animations. If you have any questions, feedback, or issues, please feel free to reach out to our community or file an issue on our GitHub repository. Enjoy creating delightful user experiences with Motion UI!