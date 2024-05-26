# Preenchimento Automático de Endereço com CEP
Este projeto é uma implementação em JavaScript que utiliza a API do ViaCEP para preencher automaticamente os campos de endereço (rua, cidade e estado) a partir de um CEP fornecido. Quando o usuário digita um CEP válido, os campos de endereço são preenchidos automaticamente com os dados correspondentes.

# Funcionalidades
Entrada de CEP: O usuário insere um CEP em um campo de entrada.
Busca de Endereço: A aplicação faz uma requisição à API do ViaCEP para obter os dados do endereço correspondente ao CEP fornecido.
Preenchimento Automático: Os campos de rua, cidade e estado são preenchidos automaticamente com os dados retornados pela API.
Validação do CEP: A aplicação verifica se o CEP fornecido é válido e limpa os campos de endereço caso contrário.
<ul>
<li>Tecnologias Utilizadas</li>
<li>HTML</li>
<li>JavaScript</li>
<li>API ViaCEP</li>
</ul>

# Observações
No vídeo os campos abaixo estão todos cadastrados como logradouro então é só alterar de acordo com a API:<br>
        if (endereco && !endereco.error) {<br>
            ruaInput.value = endereco.logradouro || '';<br>
            cidadeInput.value = endereco.localidade || '';<br>
            estadoInput.value = endereco.uf || '';<br>
Certifique-se de que a entrada do CEP contém exatamente 8 caracteres numéricos.
Em caso de erro na comunicação com o servidor, uma mensagem de erro será exibida no console.
Se o CEP for inválido ou não encontrado, os campos de endereço serão limpos e uma mensagem de alerta será exibida.
# Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
