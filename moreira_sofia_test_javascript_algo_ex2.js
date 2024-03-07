const F21 = (A) => {
    if(A.length !== 9) {
        alert('not a list of 9 elements!')
    }
    else {
        return A.every(v => A.indexOf(v) === A.lastIndexOf(v));
    }
};