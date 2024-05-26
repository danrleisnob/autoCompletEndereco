const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');


async function pegaDadosDeEndereco(cep){
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Ops. Parece que algo deu errado na requisção");
        }
        const endereco = response.json();
        return endereco;
    } catch (error) {
        console.error("Ops, houve uma falha no servidor", error);
        return null;
    }
}

async function preencherDadosDosInputs(){
    const cep = cepInput.value;
    if (cep.length === 8) {
        const endereco = await pegaDadosDeEndereco(cep);
        if (endereco && !endereco.error) {
            ruaInput.value = endereco.logradouro || '';
            cidadeInput.value = endereco.logradouro || '';
            estadoInput.value = endereco.logradouro || '';
        } else{
            alert("Ops, Parece que você não digitou um cep valido!");
            limparCampos();
        }
    } else {
        limparCampos();
    }
}

function limparCampos(){
    ruaInput.value = '';
    cidadeInput.value = '';
    estadoInput.value = '';
}

cepInput.addEventListener('input', preencherDadosDosInputs);