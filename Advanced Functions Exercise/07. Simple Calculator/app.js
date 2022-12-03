function calculator() {
    let field1 = null;
    let field2 = null;
    let result = null


    return {
        init,
        add,
        subtract
    }

    function init(sel1, sel2, resSel) {
        field1 = document.querySelector(sel1);
        field2 = document.querySelector(sel2);
        result = document.querySelector(resSel);
    }

    function add() {
        result.value = Number(field1.value) + Number(field2.value);
    }

    function subtract() {
        result.value = Number(field1.value) - Number(field2.value);
    }
}




