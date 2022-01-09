document.addEventListener('DOMContentLoaded', () => {

    fetchData();

});







const loadHtmlTable = (data) => {
    const table = document.querySelector('table tbody');


    if (data.length === 0) {
        table.innerHTML = `<tr><td class='no-data' colspan='5'>No Data</td></tr>`;
        return;
    }
    let tableHtml = '';

    data.forEach(({ id, name, date_added }) => {
        tableHtml += `<tr><td>${id}</td><td>${name}</td><td>${new Date(date_added).toLocaleString()}</td><td><button class="delete-btn" data-id=${id}>Delete</button></td><td><button class="edit-btn" data-id=${id}>Edit</button></td></tr>`

    });
    table.innerHTML = tableHtml
}


const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', async () => {

    try {
        const nameInput = document.querySelector('#name-input');
        const name = nameInput.value;
        nameInput.value = '';


        const sendData = await fetch('http://localhost:5000/insert', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name: name })
        });

        const response = await sendData.json();
        insertRowIntoTable(response['data'])


    } catch (error) {
        console.log(error);
    }



})


const fetchData = async () => {
    const data = await fetch('http://localhost:5000/getAll');
    const response = await data.json();
    loadHtmlTable(response['data']);

}


const insertRowIntoTable = (data) => {

    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data')

    let tableHtml = '<tr>';

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'dateAdded') {
                data[key] = new Date(data[key]).toLocaleString();
            }
            tableHtml += `<td>${data[key]}</td>`
        }
    }
    tableHtml += `<td><button class="delete-btn" data-id=${data.id}>Delete</button></td><td><button class="edit-btn" data-id=${data.id}>Edit</button></td>`
    tableHtml += `</tr>`
    if (isTableData) {
        return table.innerHTML = tableHtml;
    }
    else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}