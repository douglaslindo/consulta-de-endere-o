// script.js

document.getElementById('buscarBtn').addEventListener('click', function() {
    var cep = document.getElementById('cep').value;
    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado!');
                } else {
                    document.getElementById('logradouro').textContent = data.logradouro;
                    document.getElementById('bairro').textContent = data.bairro;
                    document.getElementById('cidade').textContent = data.localidade;
                    document.getElementById('estado').textContent = data.uf;
                    document.getElementById('cepResultado').textContent = data.cep;

                    // Exibe o resultado
                    document.getElementById('resultado').style.display = 'block';
                }
            })
            .catch(error => alert('Erro ao buscar CEP.'));
    } else {
        alert('Por favor, digite um CEP.');
    }
});