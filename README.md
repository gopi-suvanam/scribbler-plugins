

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

### 2. MathJax Plugin 

To load the `MathJax-Plugin` in Scribbler and use it, you can dynamically import the plugin using the `import()` function. This plugin will enable you to easily render mathematical expressions within your Scribbler notebook using LaTeX syntax.

### **How to Load MathJax-Plugin in Scribbler**

You can load the `MathJax-Plugin` dynamically with the following steps:

1. **Import the Plugin:**
   Use the `import()` function to load the `MathJax-Plugin` from the specified URL.
```javascript
// Step 1: Dynamically import the MathJax-Plugin
await import("https://cdn.jsdelivr.net/gh/gopi-suvanam/scribbler-plugins/mathjax-plugin.js");
```

2. **Use the Plugin to Render Math:**
   After loading the plugin, you can write mathematical expressions using LaTeX syntax, and the plugin will automatically render them.

Here’s how to do it:


```
This is an inline math example: `E = mc^2`

This is a block math example:
\\[
\\frac{a}{b} + \\frac{b}{c} = \\frac{a + b + c}{abc}
\\]
```

Here is another block example:

```
### 5. Statistics
<p>\(\mu = \frac{\sum x_i}{n}\)</p>
<p>\(\sigma^2 = \frac{\sum (x_i - \mu)^2}{n - 1}\)</p>
<p>\(P(X = x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\)</p>
```

### 3. TypeScript Plugin (Coming Soon)

The **TypeScript Plugin** will allow you to write TypeScript directly in Scribbler using the `//>ts` directive. The plugin will handle the transpilation from TypeScript to JavaScript, enabling type-safe development within your notebooks.

### 4. Python Plugin (Coming Soon)

The **Python Plugin** will bring Python support to Scribbler using the `//>python` directive. This plugin will enable running Python code directly within Scribbler, leveraging in-browser Python runtimes.

## Installing Plugins

To install a plugin, include it in your Scribbler notebook using the appropriate `<script>` tag from a CDN or local path. Each plugin's usage instructions will provide detailed steps on how to integrate it into your workflow.

```javascript
await import("https://cdn.jsdelivr.net/gh/gopi-suvanam/scribbler-plugins/react-plugin.min.js")
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

