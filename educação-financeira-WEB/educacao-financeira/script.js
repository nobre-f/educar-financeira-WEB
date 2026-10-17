
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const renda = Number(document.getElementById("renda").value);
    const gastos = Number(document.getElementById("gastos").value);

    let saldo = renda - gastos;
    const dinheiro = saldo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    let mensagem = "";

    if (saldo > 0) {
        mensagem = "Parabéns! Você gastou menos do que recebeu.";
    } else if (saldo === 0) {
        mensagem = "Atenção! Você utilizou toda a sua renda.";
    } else {
        mensagem = "Cuidado! Seus gastos ultrapassaram sua renda.";
    }

    resultado.innerHTML = `
        <h3></h3>
        <p>Sua renda: ${renda.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</p>
        <p>Seus gastos: ${gastos.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</p>
        <p>Saldo: ${dinheiro}</p>
        <p>${mensagem}</p>
    `;

    resultado.querySelector("h3").textContent = `Olá, ${nome}!`;
});
