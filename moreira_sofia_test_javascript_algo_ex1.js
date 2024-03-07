let to_verify = new Array(9);


const F11 = () => {
    for (let i = 0; i<= 8 ; i++) {
        let arr1 = array_number[i].split(' ');
        arr1.forEach((v, i, a) => a[i] = parseInt(v));
        to_verify[i] = arr1;
    }
};

const F12 = () => {
    to_verify.forEach(line => {
        let table_line = document.createElement('div');
        table_line.style.width = '200px';
        table_line.style.height = '20px';
        table_line.style.display = 'flex';
        table_line.style.flexDirection = 'row';
        
        line.forEach(column_value => {
            let table_cell = document.createElement('div');
            table_cell.style.width = '20px';
            table_cell.style.height = '20px';
            table_cell.style.border = '1px solid black';
            table_cell.style.textAlign= 'center';
            table_cell.style.align = 'middle';
            table_cell.innerHTML = column_value;
            table_line.append(table_cell);
        });

        document.body.append(table_line);
    });

    document.body.lastChild.style.marginBottom = '30px';
};
