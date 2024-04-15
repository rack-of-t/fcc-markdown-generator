const defaultMardown = `test
this is multiline text
more text
# Heading 1 Element
## Heading 2 Element

Hered a bit of in-line code \`<div></div>\`

Heres a code block:
\`\`\`
function () {
    if (this = 0) {
        return answer;
    }
}
\`\`\`
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default defaultMardown;