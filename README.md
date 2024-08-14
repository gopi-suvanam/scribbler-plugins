

# Scribbler Plugin Repository

Welcome to the **Scribbler Plugin Repository**! This repository is dedicated to hosting plugins specifically designed to enhance the functionality and developer experience of [Scribbler](https://scribbler.live), a JavaScript notebook tool. These plugins are distinct from generic JavaScript libraries in that they modify Scribbler's environment directly, enabling new features, syntax support, and developer utilities.

## Overview

Scribbler plugins extend the capabilities of the Scribbler environment by allowing developers to use various languages, libraries, and tools directly within their notebooks. Unlike libraries, which provide general-purpose JavaScript utilities, plugins are purpose-built to integrate with Scribbler's core functionality, making it more powerful and developer-friendly.

## Available Plugins

### 1. React Plugin

The **React Plugin** allows Scribbler users to work with React and JSX effortlessly. With this plugin, you can:

- Dynamically load the React and ReactDOM libraries.
- Transpile JSX code within your Scribbler notebook using a special directive.

#### How to Use

1. Include the React Plugin in your Scribbler notebook.

2. Use the `//>jsx` directive in your code blocks to write JSX.

```javascript
//>jsx
const App = () => (
  <div>
    <h1>Hello, Scribbler with React and JSX!</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

3. The plugin automatically handles the transpilation of JSX to JavaScript and the loading of React libraries.

### 2. TypeScript Plugin (Coming Soon)

The **TypeScript Plugin** will allow you to write TypeScript directly in Scribbler using the `//>ts` directive. The plugin will handle the transpilation from TypeScript to JavaScript, enabling type-safe development within your notebooks.

### 3. Python Plugin (Coming Soon)

The **Python Plugin** will bring Python support to Scribbler using the `//>python` directive. This plugin will enable running Python code directly within Scribbler, leveraging in-browser Python runtimes.

## Installing Plugins

To install a plugin, include it in your Scribbler notebook using the appropriate `<script>` tag from a CDN or local path. Each plugin's usage instructions will provide detailed steps on how to integrate it into your workflow.

```javascript
import("https://cdn.jsdelivr.net/gh/gopi-suvanam/scribbler-plugins/react-plugin.min.js")
```

## Contributing

We welcome contributions from the community! If you'd like to add a new plugin or improve an existing one, feel free to fork this repository and submit a pull request. Please make sure to follow the contribution guidelines.

## Future Plans

This repository is designed to evolve with Scribbler. As new requirements and ideas emerge, we plan to add more plugins that enhance the Scribbler experience. Some ideas on the roadmap include:

- **Markdown Plugin**: Support for Markdown rendering directly within Scribbler.
- **Charting Plugin**: Integration with popular charting libraries for data visualization.
- **Custom Language Plugins**: Support for languages like Ruby, Go, or Rust in Scribbler.

## License

This repository is licensed under the MIT License. Feel free to use, modify, and distribute the plugins as per the license terms.

## Contact

For any questions or feedback, please open an issue in the repository or reach out to the Scribbler community.

