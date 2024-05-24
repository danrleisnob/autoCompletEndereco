const cepInput = document.getElementById('cep');
const rua = document.getElementById('rua');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

async function pegarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const endereco = await response.json();
    return endereco;
}

async function preencherCampos() {
    const cep = cepInput.value;
    if (cep.length === 8) {
        const cepInfo = await pegarEndereco(cep);

        if (cepInfo && !cepInfo.erro) {
            rua.value = cepInfo.logradouro || '';
            cidade.value = cepInfo.localidade || '';
            estado.value = cepInfo.uf || '';
        } else {
            alert('CEP não encontrado');
            limparCampos();
        }
    } else if (cep.length < 8) {
        limparCampos();
    }
}

function limparCampos() {
    rua.value = '';
    cidade.value = '';
    estado.value = '';
}

cepInput.addEventListener('input', preencherCampos);
