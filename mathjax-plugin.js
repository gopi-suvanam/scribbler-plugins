await import("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js");

const old_run=worker.run;
const new_run=async function(_block_id){
   old_run(_block_id); 
	await MathJax.typesetPromise();
}
worker.run=new_run;
