function graduate(credential) {
  return function (fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D');

// the function graduate(credential) is called with one argument, the string 'M,D'
// this looks like graduate('M.D')
// calling graduate('M.D') returns the anoynmous function within the graduate function's codeblock
// the string 'M.D' passed in as an argument for the credential parameter is stored somewhere for later use until the function gets rid of it
// the returned anonymous function is assigned to the const variable medicalSchool

const lawSchool = graduate('Esq');

console.log(medicalSchool('Anthony'));
console.log(lawSchool('Anthony'));
