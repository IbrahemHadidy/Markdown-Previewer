const { useState, useEffect } = React;

const App = () => {
  const defaultMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// code block
const add = (a, b) => {
  return a + b;
};
\`\`\`
- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)
**Bold Text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    marked.setOptions({
      breaks: true });


    const preview = document.getElementById('preview');
    preview.innerHTML = marked(markdown);
  }, [markdown]);

  const handleChange = event => {
    setMarkdown(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("textarea", { id: "editor", value: markdown, onChange: handleChange }), /*#__PURE__*/
    React.createElement("div", { id: "preview" })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));