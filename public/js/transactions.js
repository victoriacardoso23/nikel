const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: []
}

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault;

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const tybe = document.querySelector('input[name="tybe-input"]:checked').value;

    data.transactions.unshift({
        value: value, tybe: tybe, description : description, date: date 
    })

    saveData(data);
    e.target.resert();
    myModal.hide();

    
    alert("Lançamento adicionado com sucesso.");
})

getTransactions();

checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }

    getTransactions();

}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function getTransactions() {
    const transactions = data.transactions;
    let getTransactionsHtml = ``;

    if(transactions.length) {
        transactions.forEach((item) => {
            let tybe = "Entrada";

            if(item.tybe === "2") {
                tybe = "Saída"
            }

            transactionsHtml += `
            
            
            
            
            
            
            
            `
        
        })

        document.getElementById(transactions-list).innerHTML = getTransactionsHtml;
    }

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}