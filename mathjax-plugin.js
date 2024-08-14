await import("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js");

const outputDivs = document.querySelectorAll('.output');
let typesetting = false;

const observer = new MutationObserver(async () => {
  if (!typesetting) {
    typesetting = true;
    await MathJax.typesetPromise();
    console.log('Typesetting complete');
    typesetting = false;
  }
});

outputDivs.forEach((div) => {
  observer.observe(div, {
    childList: true,
    subtree: true,
  });
});
