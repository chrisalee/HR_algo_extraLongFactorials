/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

const extraLongFactorials = (n) => {
    n = BigInt(n);
    let factorial = 1n;
    for(let i = 1n; i <= n; i++) {
        factorial *= i;
    }
    
    console.log(factorial.toString());
    return factorial.toString();
}
