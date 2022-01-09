document.addEventListener('DOMContentLoaded', () => {

    fetchData();

});







const loadHtmlTable = (data) => {
    const table = document.querySelector('table tbody');



    if (data.length === 0) {
        table.innerHTML = `<tr><td class='no-data' colspan='5'>No Data</td></tr>`
    }
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

}