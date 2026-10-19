const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const renda = Number(document.getElementById("renda").value);
    const gastos = Number(document.getElementById("gastos").value);

    let saldo = renda - gastos;
    let mensagem = "";

    if (saldo > 0) {
        mensagem = "Parabéns! Você gastou menos do que recebeu.";
    } else if (saldo === 0) {
        mensagem = "Atenção! Você utilizou toda a sua renda.";
    } else {
        mensagem = "Cuidado! Seus gastos ultrapassaram sua renda.";
    }

    resultado.innerHTML = `
        <h3>Olá, ${nome}!</h3>
        <p>Sua renda: R$ ${renda}</p>
        <p>Seus gastos: R$ ${gastos}</p>
        <p>Saldo: R$ ${saldo}</p>
        <p>${mensagem}</p>
    `;
});
