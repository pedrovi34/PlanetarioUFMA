const btnConfirmar = document.getElementById('btnConfirmar');
const dataInput = document.getElementById('data');
const horarioSelect = document.getElementById('horario');

btnConfirmar.addEventListener('click', () => {
    const dataSelecionada = dataInput.value;
    const horarioSelecionado = horarioSelect.value;

    if (dataSelecionada) {
        window.location.href = `detalhes.html?data=${dataSelecionada}&horario=${horarioSelecionado}`;
    } else {
        // Você pode adicionar uma mensagem de erro aqui, se desejar
        alert("Por favor, selecione uma data.");
    }
});

// Define a data mínima para hoje
const hoje = new Date();
const dataMinima = hoje.toISOString().split('T')[0];
document.getElementById('data').min = dataMinima;