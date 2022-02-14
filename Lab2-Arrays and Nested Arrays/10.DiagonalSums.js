function DiagonalSums (mat) {
    let primSum = 0;
    let secSum = 0;

    for (let i = 0; i < mat.length; i++) {

        primSum += mat[i][i];
        secSum += mat[i][mat.length - 1 - i];
    }

    if (mat.length % 2 !== 0) {

        let mid = Math.floor(mat.length / 2);
        secSum -= mat[mid][mid];
    }

    console.log(primSum + '\n' + primSum);
    
    

}
let arr = [
    [5, 50, 10],
    [8, 5, 145],
    [8, 33, 5]
];

DiagonalSums(arr);