// LOGIN
$(function () {
    $.post(`${URL_BASE+URL_LOGIN}`, {
            email: "TraiaBarbosa@email.com",
            password: "TraiaBarbosa@123"
        },
        function (data) {
            TOKEN = data.authorization
            localStorage.setItem('token', data.authorization)
            // localStorage.removeItem('carrinho')
            getAllProducts()
            getAllClients()
            // fecthGames()
        },
        "JSON"
    );
});

function getAllClients() {
    $.get('http://localhost:3000/usuarios',
        function (data) {
            localStorage.setItem('clientes', JSON.stringify(data.usuarios))
        },
        "json"
    );
}

function getClientId() {
    let email = localStorage.getItem('usuario_logado')
    let users = JSON.parse(localStorage.getItem('clientes'))
    return users.filter(e => e.email == email)[0]
}

// function fecthGames() {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//             "X-RapidAPI-Key": "8e95f39d66msha57ddd2541a4616p114b9cjsn4674f86105ef"
//         }
//     };

//     $.ajax(settings).done(function (response) {
//         response.forEach(e => {
//             addProdutos(e.title, e.thumbnail)
//         });
//     });
// }


// function addProdutos(nome, foto) {
//     $.ajax({
//         url: `${URL_BASE+URL_PRODUTOS}`,
//         type: 'post',
//         data: {
//             nome: nome, preco: getRandomInt(), descricao: foto, quantidade: getRandomInt()
//         },
//         headers: {
//             Authorization: TOKEN
//         },
//         dataType: 'json',
//         success: function (data) {
//             Swal.fire(
//                 `${data.message}`,
//                 '',
//                 'success'
//             )
//         }
//     });
// }

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(400);
    return Math.floor(Math.random() * (max - min)) + min;
}

// function getRandomFloat() {
//     const str = (Math.random() * (500.00 - 10.00) + 10.00).toFixed(2);

//     return parseFloat(str);
// }

$('#logout').click(function (e) {
    e.preventDefault();
    location.href = '/Dashboard/login.html'
});

// let interval = setInterval(() => {
//     let cart = new Cart().getCart()
//     let qtd
//     if (cart) {
//         cart.produtos.forEach(e => {
//             qtd += e.quantidade
//         })

//         $('#cart-qtd').empty().append(qtd)
//     }
// }, 1000)