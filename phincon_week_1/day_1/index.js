console.log('hello');

const insertRow = (no, className, inst, acr, numbStu) => {
  document.querySelector(`#table-bootcamp2 tbody`).insertAdjacentHTML(
    'beforeend',
    `<tr>
<td>${no}</td>
<td>${className}</td>
<td>${inst}</td>
<td>${acr}</td>
<td>${numbStu}</td>
</tr>`
  );
};

insertRow(4, 'c++', 'ben', 'CFJK', 10);
