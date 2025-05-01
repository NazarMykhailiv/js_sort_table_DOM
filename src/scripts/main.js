'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, colIndex) => {
    header.addEventListener('click', () => {
      const rowsArray = Array.from(tbody.querySelectorAll('tr'));

      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.children[colIndex].textContent.trim();
        const cellB = rowB.children[colIndex].textContent.trim();

        const a = parseCellValue(cellA);
        const b = parseCellValue(cellB);

        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      });

      rowsArray.forEach((row) => tbody.appendChild(row));
    });
  });

  function parseCellValue(val) {
    if (val.startsWith('$')) {
      return parseFloat(val.replace(/[^0-9.-]+/g, ''));
    }

    if (!isNaN(val)) {
      return parseFloat(val);
    }

    return val.toLowerCase();
  }
});
