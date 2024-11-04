// Seleciono os elementos HTML que serão manipulados
const form = document.getElementById('account-form');
const accountList = document.getElementById('account-list');

// Array para armazenar os dados das contas cadastradas
let accounts = [];

// Função para adicionar uma nova conta ao array
function addAccount(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Coleta os dados dos campos do formulário
    const nick = document.getElementById('nick').value;
    const skins = document.getElementById('skins').value;
    const champions = document.getElementById('champions').value;
    const soloQ = document.getElementById('soloQ').value;
    const flex = document.getElementById('flex').value;
    const level = document.getElementById('level').value;
    const icons = document.getElementById('icons').value;
    const wards = document.getElementById('wards').value;
    const highestMastery = document.getElementById('highestMastery').value;

    // Cria um objeto representando a conta com os dados coletados
    const account = {
        nick,
        skins,
        champions,
        soloQ,
        flex,
        level,
        icons,
        wards,
        highestMastery
    };

    // Adiciona a nova conta ao array de contas
    accounts.push(account);

    // Atualiza a exibição da lista de contas cadastradas
    renderAccounts();

    // Limpa o formulário após o cadastro
    form.reset();
}

// Função para exibir todas as contas na lista HTML
function renderAccounts() {
    // Limpa a lista atual para evitar duplicação de itens
    accountList.innerHTML = '';

    // Percorre o array de contas e cria elementos HTML para cada uma
    accounts.forEach((account, index) => {
        const listItem = document.createElement('li'); // Cria um item de lista para cada conta
        listItem.innerHTML = `
            <strong>Nick:</strong> ${account.nick} <br>
            <strong>Skins:</strong> ${account.skins} <br>
            <strong>Campeões:</strong> ${account.champions} <br>
            <strong>Elo Solo Q:</strong> ${account.soloQ} <br>
            <strong>Elo Flex:</strong> ${account.flex} <br>
            <strong>Nível:</strong> ${account.level} <br>
            <strong>Ícones:</strong> ${account.icons} <br>
            <strong>Sentinelas:</strong> ${account.wards} <br>
            <strong>Maior Maestria:</strong> ${account.highestMastery}
        `;

        // Cria botões de edição e exclusão para cada conta
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editAccount(index); // Chama a função de edição ao clicar

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteAccount(index); // Chama a função de exclusão ao clicar

        // Adiciona os botões ao item da lista
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Adiciona o item da lista à lista de contas no HTML
        accountList.appendChild(listItem);
    });
}

// Função para editar uma conta existente
function editAccount(index) {
    // Obtém a conta que será editada a partir do array
    const account = accounts[index];

    // Preenche os campos do formulário com os dados da conta selecionada
    document.getElementById('nick').value = account.nick;
    document.getElementById('skins').value = account.skins;
    document.getElementById('champions').value = account.champions;
    document.getElementById('soloQ').value = account.soloQ;
    document.getElementById('flex').value = account.flex;
    document.getElementById('level').value = account.level;
    document.getElementById('icons').value = account.icons;
    document.getElementById('wards').value = account.wards;
    document.getElementById('highestMastery').value = account.highestMastery;

    // Remove a conta original para que possa ser substituída ao salvar
    accounts.splice(index, 1);

    // Atualiza a lista exibida, removendo temporariamente a conta editada
    renderAccounts();
}

// Função para excluir uma conta
function deleteAccount(index) {
    // Remove a conta do array de contas usando o índice
    accounts.splice(index, 1);

    // Atualiza a exibição da lista após a exclusão
    renderAccounts();
}

// Adiciona um evento de envio ao formulário, chamando a função de adicionar conta
form.addEventListener('submit', addAccount);
