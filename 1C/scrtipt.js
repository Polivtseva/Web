function Search() {
    let inputText = document.getElementById('myInput');
    let tab = document.getElementById('myTable');
    let regPhrase = new RegExp(inputText.value, 'i');
    let check = false;
    for (let i = 1; i < tab.rows.length; i++) {
        check = false;
        for (let j = tab.rows[i].cells.length - 1; j >= 0; j--) {
            check = regPhrase.test(tab.rows[i].cells[j].innerHTML);
            if (check) break;
        }
        if (check) {
            tab.rows[i].style.display = "";
        } else {
            tab.rows[i].style.display = "none";
        }

    }
}