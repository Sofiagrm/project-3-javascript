const F31 = () => {
    to_verify.forEach((line, index) => {
        if(!F21(line)) {
            const live_error = "Line " + (index+1) + " incorrect!";

            let table_line = document.createElement('div');
            table_line.style.width = '350px';
            table_line.style.height = '20px';
            table_line.style.display = 'flex';
            table_line.style.flexDirection = 'row';

            let table_error_cell = document.createElement('div');
            table_error_cell.style.width = '150px';
            table_error_cell.style.height = '20px';
            table_error_cell.style.border = '1px solid black';
            table_error_cell.style.textAlign= 'center';
            table_error_cell.style.align = 'middle';
            table_error_cell.innerHTML = live_error;
            table_line.append(table_error_cell);

            
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
        }
    });
};


const F32 = () => {

    const transposed_to_verify = to_verify[0].map((_, colIndex) => to_verify.map(row => row[colIndex]));

    transposed_to_verify.forEach((line, index) => {
        if(!F21(line)) {
            const live_error = "Column " + (index+1) + " incorrect!";

            let table_line = document.createElement('div');
            table_line.style.width = '350px';
            table_line.style.height = '20px';
            table_line.style.display = 'flex';
            table_line.style.flexDirection = 'row';

            let table_error_cell = document.createElement('div');
            table_error_cell.style.width = '150px';
            table_error_cell.style.height = '20px';
            table_error_cell.style.border = '1px solid black';
            table_error_cell.style.textAlign= 'center';
            table_error_cell.style.align = 'middle';
            table_error_cell.innerHTML = live_error;
            table_line.append(table_error_cell);

            
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
        }
    });
};

const F33 = (array) => {

    let sections_to_verify = new Array();


    for (var i = 0; i <= 6; i=i+3) {
        console.log('nova section');
        var j = i+3;
        let section = to_verify.slice(i, j);
        console.log(section)
    }




    //const transposed_to_verify = to_verify[0].map((_, colIndex) => to_verify.map(row => row[colIndex]));
/*
    transposed_to_verify.forEach((line, index) => {
        if(!F21(line)) {
            const live_error = "Column " + (index+1) + " incorrect!";

            let table_line = document.createElement('div');
            table_line.style.width = '350px';
            table_line.style.height = '20px';
            table_line.style.display = 'flex';
            table_line.style.flexDirection = 'row';

            let table_error_cell = document.createElement('div');
            table_error_cell.style.width = '150px';
            table_error_cell.style.height = '20px';
            table_error_cell.style.border = '1px solid black';
            table_error_cell.style.textAlign= 'center';
            table_error_cell.style.align = 'middle';
            table_error_cell.innerHTML = live_error;
            table_line.append(table_error_cell);

            
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
        }
    });
    */
};