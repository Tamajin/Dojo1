// création de la fonction fizzbuzz (number)
function fizzbuzz(nombre) {
    if (nombre %3===0) {
        return "fizz";
    } else if(nombre %5 === 0){
        return "buzz";
    } else if(nombre %3 === 0 && nombre %5 === 0){  
        return "fizzbuzz";
    } else{  
        return nombre;
    }
}

// vérification des condition avec if else

// si nombre en paramètre est %3=0 return fizz

// si nombre en paramètre est %5=0 return buzz

// si nombre en paramètre est %3=0 && %5=0 return fizzbuzz

// sinon (else) return le nombre

fizzbuzz(15)