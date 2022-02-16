const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: []
}

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTO
document.getElementById("#transaction-form").addEventListener("submit", function(e) {
    e.preventDefault;

    const value = parseFloat(document.getElementById("valor-input").value);
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
            <div class="row mb-4">
               <div class="col-12">
                   <h3 class="fs-2"> R$ ${cashIn[index].value.toFixed(2)}</h3>
                   <div class="container p-0">
                       <div class="row">
                           <div class="col-12 col-md-8">
                               <p>${cashIn[index].description}</p>
                       </div>
                       <div class="col-12 col-md-3 d-flex justify-content-end">
                           ${cashIn[index].date}
                       </div>
                   </div>
               </div>
           </div>
            `
        
        })

        document.getElementById(transactions-list).innerHTML = getTransactionsHtml;
    }

}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}