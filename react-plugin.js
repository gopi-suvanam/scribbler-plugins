await import('https://unpkg.com/react@17/umd/react.production.min.js');
await  import('https://unpkg.com/react-dom@17/umd/react-dom.production.min.js');
if (typeof Babel === 'undefined') {
  	// Babel is not defined, load it
	await import("https://unpkg.com/@babel/standalone/babel.min.js");
}


const temp_evaluate= worker.evaluate;
const new_evaluate=code=>{
  const regex = /^\/\/>\s*jsx/i;

 if( regex.test(code))
 {
	 const updatedCode = code.replace(regex, "");
     const transpiledCode = Babel.transform(updatedCode, { presets: ['react'] }).code;
	 return  temp_evaluate(	transpiledCode);
	}
	return temp_evaluate(code);
	
}

worker.evaluate=new_evaluate;
