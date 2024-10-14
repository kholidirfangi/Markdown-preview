import  { useState } from 'react';
import { marked } from 'marked';

// Set options for marked to enable GitHub Flavored Markdown
marked.setOptions({
  breaks: true, // Interpret carriage returns as line breaks
  gfm: true, // Use GitHub Flavored Markdown
});

const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <main>
      <h1 className="title">Markdown Previewer</h1>
      <div className="flex-col">
        <div className="editor">
          <h2>Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="preview">
          <h2>Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default MarkdownPreviewer;
