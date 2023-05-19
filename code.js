function translateCode() {
  const sourceCode = document.getElementById('source-code').value;
  const targetLanguage = document.getElementById('target-language').value;

  // Implement the translation logic based on target language
  let translatedCode = '';

    if (targetLanguage === 'python') {
    // Implement translation to Python
    translatedCode = translateToPython(sourceCode);
  } else if (targetLanguage === 'javascript') {
    // Implement translation to JavaScript
    translatedCode = translateToJavaScript(sourceCode);
  } else if (targetLanguage === 'C') {
    translatedCode = translateToC(sourceCode);
  }
  // Add more translation logic for other target languages as needed

  // Set the translated code in the textarea
  document.getElementById('translated-code').value = translatedCode;
}

// Function to translate code to Python
function translateToPython(code) {
  // Implement translation logic to Python
  // Replace this placeholder with your actual translation logic
  code = code.replace(/if\s*\((.*?)\)\s*{/g, 'if $1:');
  code = code.replace(/}\s*else\s*{/g, 'else:');
  code = code.replace(/}\s*else if\s*\((.*?)\)\s*{/g, 'elif $1:');
  
  // Replace for loops
  code = code.replace(/for\s*\(.*?;(.*?);(.*?)\)\s*{/g, 'for $1 in range($2):');
  
  // Replace while loops
  code = code.replace(/while\s*\((.*?)\)\s*{/g, 'while $1:');
  
  // Replace function declaration
  code = code.replace(/function\s*(.*?)\s*\((.*?)\)\s*{/g, 'def $1($2):');
  
  // Replace console.log statements
  code = code.replace(/console.log\s*\((.*?)\);/g, 'print($1)');
  
  // Add additional translation rules as needed
  
  return code;
}
// Function to translate code to JavaScript
function translateToJavaScript(code) {
  // Implement translation logic to JavaScript
  // Replace this placeholder with your actual translation logic
   // Replace if statements
   code = code.replace(/if\s*(.*?):/g, 'if ($1) {');
   code = code.replace(/else\s*:/g, '} else {');
   code = code.replace(/elif\s*(.*?):/g, '} else if ($1) {');
 
   // Replace for loops
   code = code.replace(/for\s*(.*?)\s*in\s*range\((.*?)\):/g, 'for (let $1 = 0; $1 < $2; $1++) {');
 
   // Replace while loops
   code = code.replace(/while\s*(.*?):/g, 'while ($1) {');
 
   // Replace function declaration
   code = code.replace(/def\s*(.*?)\s*\((.*?)\):/g, 'function $1($2) {');
 
   // Replace print statements
   code = code.replace(/print\s*\((.*?)\)/g, 'console.log($1);');
 
   // Add additional translation rules as needed
 
   return code;
 }


function translateToC(code) {

// Function to translate if statements
  code = code.replace(/if\s*(.*?):/g, 'if ($1) {');
  code = code.replace(/elif\s*(.*?):/g, '} else if ($1) {');
  code = code.replace(/else:/g, '} else {');

// Function to translate for loops
  code = code.replace(/for\s*(.*?)\s*in\s*range\((.*?)\):/g, 'for ($1 = 0; $1 < $2; $1++) {');

  code = code.replace(/while\s*(.*?):/g, 'while ($1) {');

// Function to translate function declarations

  code = code.replace(/def\s*(.*?)\s*\((.*?)\):/g, '$1($2) {');

// Function to translate print statements
  code = code.replace(/print\s*\((.*?)\)/g, 'printf("%s", $1)');

  return code;
}


// Attach event listener to the translate button
const translateButton = document.getElementById('translate-button');
translateButton.addEventListener('click', translateCode);
