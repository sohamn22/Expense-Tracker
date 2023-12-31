
let expenses = [];
let totalamt = 0;
const inputselect = document.getElementById("input-type");
const amtinput = document.getElementById('amt-input');
const dateinput = document.getElementById('date-input');
const addbutton = document.getElementById('add-button');
const expensebody = document.getElementById('expense-body');
const amttotal = document.getElementById('total-amt');
const descr = document.getElementById("description");

addbutton.addEventListener('click', function () {
    const type = inputselect.value;
    const amt = parseFloat(amtinput.value); 
    const datee = dateinput.value;
    const describe = descr.value;

    if (type === "") {
        alert("Please select an Expense type!");
        return;
    }
    if (isNaN(amt) || amt <= 0) {
        alert("Please enter a valid amount!");
        return;
    }
    if (datee === "") {
        alert("Please enter a date!");
        return;
    }

    expenses.push({ type, amt, datee, describe });
    totalamt += amt;
    amttotal.textContent = totalamt;
    

    amtinput.value = '';
    dateinput.value = '';
    descr.value = '';

    const newrow = expensebody.insertRow();
    const typecell = newrow.insertCell();
    const amtcell = newrow.insertCell();
    const datecell = newrow.insertCell();
    const desriptioncell = newrow.insertCell();
    const deletecell = newrow.insertCell();

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', function () {
            expenses.splice(expenses.indexOf(expense),1);
            totalamt -= expense.amt;
            amttotal.textContent = totalamt;
            expensebody.removeChild(newrow);
    });
    typecell.textContent = type;
    amtcell.textContent = amt;
    datecell.textContent = datee;
    desriptioncell.textContent = describe; 
    deletecell.appendChild(deletebtn);
});

