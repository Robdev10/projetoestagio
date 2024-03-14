function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        return true;
    }

   
    while (b <= numero) {
      
        let temp = a + b;
        
        if (temp === numero) {
            return true;
        }
      
        a = b;
        b = temp;
    }

    return false;
}

const numeroInformado = 8;

if (verificaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}