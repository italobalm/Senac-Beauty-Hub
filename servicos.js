document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const botaoProximo = document.querySelector(".proximo");
    const totalSpan = document.getElementById("total");
    const mensagemErro = document.getElementById("mensagemErro");

    let total = 0;

    // Função para calcular o total dos serviços selecionados
    function calcularTotal() {
        total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute("data-preco"));
            }
        });
        totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`; // Atualiza o total exibido
    }

    // Função para verificar se pelo menos um serviço foi selecionado
    function verificarSelecao() {
        let algumSelecionado = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                algumSelecionado = true;
            }
        });
        return algumSelecionado;
    }

    // Adiciona evento de mudança para atualizar o total sempre que um checkbox for marcado/desmarcado
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calcularTotal);
    });

    // Adiciona evento ao botão "Próximo"
    botaoProximo.addEventListener("click", function() {
        if (verificarSelecao()) {
            mensagemErro.style.display = "none"; // Esconde a mensagem de erro
            location.href = 'dias.html'; // Redireciona para a página dias.html
        } else {
            mensagemErro.style.display = "block"; // Exibe a mensagem de erro
        }
    });
});
