<h1>Fluxos alternativos</h1>

O fluxo principal de uma aplicação web é a sequência de passos que os usuários seguem para alcançar uma determinada meta ou concluir uma tarefa específica. No entanto, a natureza das interações humanas com as tecnologias significa que os usuários podem tomar diferentes caminhos, seja por escolha ou erro. É importante que as aplicações web sejam projetadas e desenvolvidas com a consideração desses fluxos alternativos, garantindo que os usuários tenham uma experiência consistente, útil e intuitiva, independentemente do caminho que escolham seguir. Para isso, são analisados diversas casos de possíveis fluxos alternativos, e a seguir, listados:

<h2>Recuperação de senha</h2>

* <b>Introdução -</b> Caso o usuário esqueça sua senha, é possível recuperá-la através do fluxo de recuperação de senha. Para acessar este fluxo, o usuário deve ir até a tela de login, e clicar no link “Esqueci minha senha”.
* <b>Email -</b> Com isso, o usuário é redirecionado para uma página onde deve inserir o email da conta cadastrada da qual deseja recuperar a senha.
    * Nesta etapa, é realizada uma verificação do email, para identificar se o email inserido existe em nosso banco de dados. Caso o email não exista, a página retorna uma mensagem de erro informando que não há uma conta cadastrada com este email, e induzindo-o a criar uma.
* <b>Pergunta de segurança -</b> Inserindo-o, o usuário é novamente redirecionado para uma página onde deve ser informada a resposta para a pergunta de segurança escolhida pelo usuário no momento de cadastro. Caso a resposta dada pelo usuário condiga com a resposta armazenada no banco de dados, o usuário é redirecionado para uma página onde deve inserir uma nova senha e confirmá-la. 
    * Em caso contrário, a página retorna uma mensagem de erro ao usuário, informando que a resposta está incorreta.
* <b>Nova senha -</b> Caso a senha inserida seja diferente da senha anterior do usuário, a senha deve ser trocada, e o usuário poderá logar utilizando a nova senha.
    * Caso a senha inserida seja igual a senha anterior, ou caso a senha não respeite as normas mínimas para senhas seguras da aplicação, a página retorna uma mensagem de erro informando o motivo da senha não ser aceita.

<h2>Edição das informações cadastradas</h2>

* <b>Introdução -</b> Este fluxo é fundamental para permitir que os usuários mantenham suas informações atualizadas e precisas. A qualquer momento, um usuário pode precisar alterar seu nome, endereço, código PIX ou outras informações associadas à sua conta. Para realizar essas alterações, o processo de edição das informações cadastradas é disponibilizado de forma simples e segura.
* <b>Acesso ao fluxo -</b> Para acessar este fluxo, o usuário deve estar logado e clicar no ícone de seu perfil. Dessa forma, é aberta uma janela, e lá, é possível clicar no botão “editar informações”.
* <b>Edição das informações cadastradas -</b> Clicando no botão, o usuário é redirecionado para uma página contendo todas as informações cadastradas do usuário, e nela, o usuário tem a opção de modificar qualquer uma delas.
    * Para cada informação modificada, é feita uma verificação para identificar se a informação é válida (Como por exemplo: Email ter algum “@” e terminar com .com, .br, e outros; Senha condizer com as normas mínimas de segurança da aplicação; CEP válido)
* <b>Confirmar mudanças -</b> Ao finalizar a edição de cadastro, o usuário passa por uma confirmação, onde pode confirmar as alterações ou cancelá-las, retornando a como eram antes.

<h2>Deleção de conta</h2>

* <b>Introdução -</b> A exclusão de conta é uma função importante para se ter quando lidando com contas de usuários. Neste fluxo, um usuário com uma conta cadastrada pode deletar a conta e apagar suas informações do banco de dados. Para acessar este fluxo, o usuário deve estar logado e clicar no ícone de seu perfil. Dessa forma, é aberta uma janela, e lá, é possível clicar no botão “editar informações”. Ao clicar neste botão, o usuário será redirecionado para uma página com todas as suas informações, e no final da tela, um botão vermelho de exclusão da conta.
* <b>Acesso e exclusão da conta -</b> Clicando neste botão, uma janela de confirmação abrirá, onde o usuário pode cancelar a exclusão, voltando para a janela anterior, ou aguardar no mínimo 5 segundos, e então, clicar no botão vermelho “Confirmar exclusão”
* <b>Logout da conta -</b> Vale ressaltar que o mesmo fluxo se aplica para a função de logout da conta da usuário, onde a única diferença é que o usuário deve clicar no botão "desconectar" direto em vez de clicar no "editar informações"

<h2>Remoção de maquininhas disponíveis</h2>

* <b>Introdução -</b> Com a constante evolução na tecnologia das maquininhas e nos planos disponíveis para clientes, a opção de exclusçao de uma maquininha ateriormente adicionada se prova essencial. Para isso, este fluxo trata-se da deleção de uma maquininha. Para acessar este fluxo, inicialmente, o usuário que já tenha cadastrado uma maquininha deve clicar no botão no cabeçalho da página "Meus produtos".
* <b>Escolha da maquininha -</b> Clicando nele, o usuário é redirecionado para uma página contendo todos os produtos cadastrados por ele. Lá, ele pode selecionar qualquer maquininha disponível clicando em sua divisão.
* <b>Deleção e confirmação -</b> Entrando nas informações de uma maquininha específica, uma dos botões disponíveis é o "Deletar plano", clicando nele, é aberta uma janela onde o usuário deve confirmar a deleção, e quando a deleção for confirmada, o registro da maquininha não estará mais salva, assim, concluindo a deleção da mesma.

<h2>Cancelamento de compra</h2>

* <b>Introdução -</b> O cancelamento de compra é um recurso importante para permitir que os usuários possam desfazer uma compra caso mudem de ideia ou por outros motivos. Esse fluxo alternativo visa fornecer uma maneira eficiente e conveniente para os usuários cancelarem uma compra recente.
* <b>Acompanhamento de pedido -</b> Após o usuário efetuar uma compra bem-sucedida, é fornecido um número de pedido e um status de acompanhamento. Para cancelar a compra, o usuário deve acessar a seção "Meus pedidos".
* <b>Identificação do pedido -</b> Na página de acompanhamento do pedido, o usuário deve localizar o pedido específico que deseja cancelar. Junto a esse pedido, haverá um botão com a opção "Cancelar compra".
* <b>Confirmação do cancelamento -</b> Ao clicar no botão "Cancelar compra", o sistema exibirá uma janela de confirmação para garantir que o usuário realmente deseja prosseguir com o cancelamento. Nesse ponto, o usuário pode escolher entre confirmar o cancelamento ou cancelar a operação e retornar à página de acompanhamento.
* <b>Processo de cancelamento -</b> Se o usuário optar por confirmar o cancelamento, o sistema iniciará o processo de cancelamento da compra, e a compra será cancelada e o usuário pode optar por retornar à loja online ou ao catálogo de produtos. Caso contrário, o usuário será redirecionado para a página anterior, e nada irá mudar.
