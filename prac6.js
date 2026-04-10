console.log("start :");

const output = document.getElementById("console-output");
let out = document.createElement('div');
function log(a, shouldAlert = true, makeNew = false) {
    if (makeNew) out = document.createElement('div');
    out.innerText += `\n ${a} \n`;
    output.appendChild(out);
    if (shouldAlert) alert(a);
}

function ask(question, option) {
    var ans = prompt(question);
    log(question, false, true);
    log(ans, false);
    if (ans == option) {
        log("correct !");
    } else {
        log(`Oops! correct answer was option ${option}`);
    }
}

var question = `
Question 1.
what are the ways to declare variables in js ?
option 1: const
option 2 : var
option 3 : let
option 4 : all of the above
enter your answer : 
`;

ask(question, 4);

question = `
Question 2.
how do you add a script in a html webpage?
option 1 : using <code> tag
option 2 : using <src> tag
option 3 : using <script> tag
enter your answer : 
`
ask(question, 3);

question = "enter a number to print the table of it";
var num = parseInt(prompt(question));
log(question, false, true);
log(`you selected ${num}`);

var ans = ``;
var forLoop = `Using for loop : 
    for(i=1;i<=10;i++){
    console.log(\` \${num} * \${i} = \${num*i} \`);
    }`
log(forLoop, true, true);

for (i = 1; i <= 10; i++) {
    ans += (`${num} * ${i} = ${num * i} \n`);
}
log(ans, false);

var whileLoop = `Using while loop :
    i = 1;
    while(i<=10){
    console.log(\` \${num} * \${i} = \${num*i} \`);
    i++;
    }`
log(whileLoop, true, true);

ans = ``;
i = 1;
while (i <= 10) {
    ans += (`${num} * ${i} = ${num * i} \n`);
    i++;
}
log(ans, false);