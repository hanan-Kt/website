const demos={
Python:{code:'name = "world"\nprint("Hello,", name)',note:"Python reads this line by line and runs it right away. No build step."},
JavaScript:{code:'const name = "world";\nconsole.log("Hello, " + name);',note:"JavaScript runs inside a browser or Node.js. The engine compiles hot code to machine code while it runs."},
C:{code:'#include <stdio.h>\nint main(void) {\n  printf("Hello, world\\n");\n  return 0;\n}',note:"C is compiled ahead of time into a machine-code program. You manage memory yourself."},
Rust:{code:'fn main() {\n    let name = "world";\n    println!("Hello, {name}");\n}',note:"Rust compiles to machine code and checks memory safety at compile time, with no garbage collector."},
Java:{code:'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, world");\n  }\n}',note:"Java compiles to bytecode, which the Java Virtual Machine runs on any computer."}
};
const tabs=document.getElementById("tabs"),pre=document.getElementById("code"),note=document.getElementById("note");
if(tabs){
Object.keys(demos).forEach((k,i)=>{const b=document.createElement("button");b.textContent=k;b.setAttribute("role","tab");b.onclick=()=>show(k);tabs.appendChild(b)});
function show(k){[...tabs.children].forEach(b=>b.setAttribute("aria-selected",b.textContent===k));pre.textContent=demos[k].code;note.textContent=demos[k].note}
show("Python");
}
