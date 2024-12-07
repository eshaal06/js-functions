function removeVowels(input) {
    return input.replace(/[aeiou]/g, '');
  }
  
  const inputString = prompt();
  const result = removeVowels(inputString);
  document.write(result); 
  