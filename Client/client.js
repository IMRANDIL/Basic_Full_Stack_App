document.addEventListener('DOMContentLoaded', () => {
    loadHtmlTable([]);
    fetchData();

});

const loadHtmlTable = (data) => {
    const table = document.querySelector('table tbody');



    if (data.length === 0) {
        table.innerHTML = `<tr><td class='no-data' colspan='5'>No Data</td></tr>`
    }
}


const fetchData = async () => {
    const data = await fetch('http://localhost:5000/getAll');
    const response = await data.json();
    console.log(response);
}