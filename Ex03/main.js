
function printFibonacci() {
        let fib = [1,0];
        let fibonacci = [];
        let number = document.getElementById('inNumber').value;
        for (let i = 2; i < number; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
            if (fib[i]<number){
                fibonacci.push(fib[i]);
            }
        }
        document.getElementById("result").innerHTML = "Dãy fibonaci gồm : "+fibonacci;
}