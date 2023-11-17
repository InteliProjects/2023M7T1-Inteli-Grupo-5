# Grupo-5

<table>
<td><a href= "https://www.inteli.edu.br/"><img src="./docs/img/inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="30%"></a>
</td>
</tr>
</table>

# Introdução

Este é o repositório dos arquivos dos alunos do Módulo 7 do curso de Ciência da Computação do Inteli no 3º trimestre de 2023. Durante este trimestre está sendo desenvolvido um projeto em parceria com a Stone.

# Projeto: _Aplicações escaláceis em sistemas distribuídos_

# Grupo: _G5_

# Integrantes:

- [Allan dos Santos Casado](Allan.Casado@sou.inteli.edu.br)
- [Frederico Schur](Frederico.Schur@sou.inteli.edu.br)
- [Gábrio Lina da Silva](Gabrio.Silva@sou.inteli.edu.br)
- [Giovana Lisbôa Thomé](Giovana.Thome@sou.inteli.edu.br)
- [Thomas Barton](Thomas.Barton@sou.inteli.edu.br)
- [Vinícius Souza Santos](Vinicius.Santos@sou.inteli.edu.br)
- [Yasmin Vitória Rocha de Jesus](Yasmin.Jesus@sou.inteli.edu.br)

# Descrição

No atual módulo, está sendo desenvolvido um sistema web escalável, isto é, capaz de lidar com o aumento da demanda de requisições, e distribuído, ou seja, capaz de manter um alto desempenho ao espalhar o processamento por vários servidores interconectados. A aplicação tem o contexto de uma loja de produtos da empresa Stone, vendedora de maquininhas de pagamento e serviços de crédito focados para empreendedores.

O problema foi trazido a partir da alta demanda de acessos ao site da empresa após irem ao ar no programa Big Brother Brasil (BBB) como patrocinadores. O projeto atual busca uma arquitetura em nuvem, utilizando serviços da Amazon Web Services (AWS), para suprir a alta demanda de requisições do site da Stone.

# Documentação

Os arquivos da documentação deste projeto estão na pasta [docs/index.md](docs/index.md), e o seu conteúdo é publicado via GitHub Pages.

# Artigo Científico

A criação de um artigo científico é uma etapa fundamental em muitos projetos do curso de Ciência da Computação. Esse documento desempenha um papel crucial na disseminação de conhecimento, na apresentação de resultados de pesquisas e no compartilhamento de ideias inovadoras. Além disso, o artigo serve como uma documentação formal que ajuda a organizar e comunicar o trabalho realizado no projeto.

Existem várias razões pelas quais criamos um artigo como parte do nosso projeto de Ciência da Computação. Primeiramente, o artigo é uma ferramenta eficaz para comunicar nossas descobertas e conquistas a um público mais amplo. Ele nos permite apresentar de forma clara e concisa os objetivos do projeto, os métodos utilizados, os resultados obtidos e as conclusões tiradas. Isso é crucial, pois o campo da Ciência da Computação é altamente dinâmico e colaborativo, e compartilhar nossas descobertas com outros pesquisadores é essencial para o avanço da disciplina.

Além disso, a criação de um artigo nos desafia a aprofundar nossa compreensão do assunto. Escrever um artigo requer uma pesquisa aprofundada, uma revisão crítica da literatura relevante e uma análise cuidadosa dos resultados. Esses processos ajudam a solidificar nosso conhecimento e aprimorar nossas habilidades de pesquisa.

Outra razão importante para criar um artigo é a oportunidade de receber feedback valioso. Ao submeter nosso artigo a conferências, revistas acadêmicas ou colegas de pesquisa, temos a chance de receber comentários construtivos que podem nos ajudar a melhorar nosso trabalho e a abordagem do projeto. Esse processo de revisão por pares é essencial para garantir a qualidade e a validade das descobertas científicas.

Por fim, a organização do artigo em uma pasta chamada "artigo" facilita o acesso e a referência futura ao nosso trabalho. Ter um local designado para documentos relacionados ao projeto torna mais fácil compartilhar o artigo com colegas de equipe, orientadores e outros interessados.

Em resumo, criar um artigo como parte de um projeto de Ciência da Computação é essencial para comunicar nossas descobertas, aprofundar nossa compreensão do assunto, receber feedback valioso e organizar nosso trabalho. Portanto, a pasta "artigo" é um recurso valioso que abriga um documento que desempenha um papel crucial em nossa jornada acadêmica e contribui para o avanço da Ciência da Computação como um todo.

# Estrutura de pastas

A seguir estão descritos os principais arquivos e pastas do repositório:

```
.
├── AWS Icons
├── codigo_mvp_basico
│   ├── backend
│   │   └── ...
│   ├── frontend
│   │   └── ...
│   ├── docs
│   │   ├── img
│   │   ├── videos
│   │   └── ...
│   ├── infraestructure
│   │   ├──global
│   │   └── ...
├── README.md
└── ...
```

# Especificações do backend

Para construção do backend do sistema, foram utilizadas as seguintes tecnologias:

- [NestJS](https://nestjs.com/): framework de Nodejs para server-side applications;
- [Prisma](https://www.prisma.io/): object relational mapper para migração e manipulação do banco de dados;
- [TypeScript](https://www.typescriptlang.org/): linguagem de programação principal.

O NestJS utiliza a injeção de dependência para realizar o controle de dependências entre diferentes módulos e também mantê-los o mais desacoplados possível. A injeção de dependência é um padrão de projeto que permite que as classes recebam suas dependências de uma fonte externa em vez de criá-las internamente.

Em outras palavras, os serviços de manipulação do banco de dados do backend estão sendo injetados nos arquivos controladores. Ambos módulos podem ser identificados pelos decoradores `@Injectable()` e `@Controller()`.

A seguir está a organização de pastas do backend:

```
backend
├── betyl (pasta com a API denominada Betyl)
│   ├── prisma (arquivos padrões do Prisma/banco de dados)
│   ├── src
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── app.service.ts
│   │   └── ... (demais arquivos e pastas contendo serviços e controladores das rotas da API)
│   ├── test
│   ├── .env.template (template de variáveis de ambiente)
│   ├── nest-cli.json
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
```

# Especificações do frontend

Para construção do frontend do sistema, foram utilizadas as seguintes tecnologias:

- [React](https://react.dev/): biblioteca de construção de interfaçes web;
- [NextJS](https://nextjs.org/): framework de React para aplicações web;
- [TailwindCSS](https://tailwindcss.com/): framework de css para estilização de interfaces web;
- [TypeScript](https://www.typescriptlang.org/): linguagem de programação principal.

NextJS é um framework para criação de interfaces web construído em cima do React, que permite a criação de Single Page Applications com suporte para SSR (Server Side Rendering) e CSR (Client Side Rendering). Além disso, traz um sistema de roteamento onde cada arquivo `page.jsx` dentro da pasta padrão `pages` corresponde a uma rota. No presente projeto, a pasta correspondente ao roteamento de páginas é `app`.

Foi utilizada também a biblioteca de estilos Tailwind, que traz classes de personalização de CSS prontas para uso.

Organização de pastas:

```
frontend
├── stones-store
│   ├── public
│   │   └── ... (imagens e arquivos de imports)
│   ├── src
│   │   ├── app
│   │   │   ├── page.tsx
│   │   │   └── ... (demais pastas de rotas e arquivos do Next)
│   │   ├── components
│   │   │   └── ... (componentes de React reutilizados)
│   │   ├── services
│   │   │   └── ... (serviços de requisições)
│   ├── .env.local.template (template de variáveis de ambiente)
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── ...
└── ...
```

## Implantação da Arquitetura

Este é o guia de implantação para a nova arquitetura da nossa solução, que utiliza Amazon Elastic Kubernetes Service (EKS) para execução e gerenciamento dos serviços e GitHub Actions para automação dos processos de deploy.

### Passo 1: Configuração Inicial

1. **Acesso ao Ambiente do Learner Lab AWS:** Certifique-se de que você está acessando o ambiente do Learner Lab AWS. O `role_arn` do cluster EKS no Terraform (`infrastructure/global/eks.tf`) deve ser ajustado para corresponder ao ambiente do Learner Lab. Essa configuração é essencial para garantir que os recursos sejam provisionados no ambiente correto.

2. **Criação da Chave do Bastion Host:** A chave de acesso para o Bastion Host precisa ser criada.  Isso é necessário para permitir o acesso seguro ao Bastion Host. Após criada na AWS, seu nome deve ser alterado em `infrastructure/global/bastion.tf`.

3. **Configuração das Credenciais do banco de dados:** A senha e credenciais do banco de dados precisam ser configuradas no terraform em `infrastructure/global/database.tf`, na seção `aws_db_instance`. Elas serão posteriormente utilizadas para configurar as variáveis de ambiente do banco de dados em cada microsserviço.

### Passo 2: Provisionando a Infraestrutura

1. **Terraform (Arquivos em `infrastructure/global`):** Navegue até o diretório `infrastructure/global` onde os arquivos Terraform estão localizados.

2. **Execução do Terraform:** Execute os comandos do Terraform para criar a infraestrutura necessária na AWS. Isso inclui a configuração de redes, instâncias EC2 (Bastion Host) e outras dependências.

    ```bash
    terraform init
    terraform apply
    ```

3. **Modificação do Helm Charts:** Após a infraestrutura estar provisionada, você deve modificar os arquivos Helm Charts de cada microsserviço, que estão localizados no diretório `infrastructure/charts/<nome-do-microsserviço>/values.yaml`. Certifique-se de que as configurações de ambiente, como `NODE_ENV`, `PORT` e `DATABASE_URL`, estão corretamente configuradas de acordo com as configurações do ambiente e o endpoint/credenciais do banco de dados criado.

   Exemplo:

   ```yaml
   env:
     - name: NODE_ENV
       value: production
     - name: PORT
       value: "5000"
     - name: DATABASE_URL
       value: "postgresql://postgres:<YOUR_PASSWORD>@<ENDPOINT-DO-BANCO>:5432/stone"
   ```

### Passo 3: Deploy

Nossa arquitetura utiliza deploy por meio do GitHub Actions. Quando um commit é feito em uma branch, ocorre o build e a modificação dos Helm Charts de cada aplicação. As imagens docker são enviadas à um repositório ECR, e o deploy é realizado em pods no cluster EKS. A única modificação necessária nesta etapa é a alteração das credenciais da AWS em `.github/deploy.yaml`, de acordo com as providenciadas no learner lab. Altere as seguintes linhas no inicio da pipeline:

```
env:
  AWS_KEY: <AWS-KEY>
  AWS_SECRET: <AWS-SECRET>
  AWS_TOKEN: <AWS-SESSION-TOKEN>
  AWS_REGION: us-east-1
  ECR_REPOSITORY_NAME: image-repo
```

Lembre-se de manter o repositório atualizados e configurado corretamente para aproveitar ao máximo esse processo.

Com esses passos, você deve ser capaz de implantar a nova arquitetura com sucesso. Certifique-se de que todas as configurações, como o `role_arn` do cluster EKS e as configurações do banco de dados, estejam corretas para garantir o funcionamento adequado da aplicação.

## Acessando o Cluster e Recuperando o Endereço para o Frontend da Aplicação

Para acessar o cluster EKS (Amazon Elastic Kubernetes Service) e recuperar o endereço do LoadBalancer para o frontend da aplicação, siga os seguintes passos:

### 1. Acessando o Cluster EKS

#### a. Instale o AWS CLI (Command Line Interface) se ainda não estiver instalado no seu sistema. Você pode seguir as instruções da [documentação oficial](https://aws.amazon.com/cli/).

#### b. Configure as credenciais da AWS utilizando o AWS CLI. Se você ainda não configurou as credenciais, execute o comando abaixo e siga as instruções para fornecer suas credenciais AWS.

```bash
aws configure
```

#### c. Instale o kubectl, que é uma ferramenta usada para interagir com clusters Kubernetes. Você pode seguir as instruções para a instalação na [documentação oficial do kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

#### d. Execute o seguinte comando para configurar o kubectl com o o cluster EKS:

```bash
aws eks update-kubeconfig --name eks-prod
```

### 2. Recuperando o Endereço do LoadBalancer para o Frontend da Aplicação

Agora que você está conectado ao cluster, podemos recuperar o endereço do ELB usando o seguinte comando:

```bash
kubectl get svc stones-store-frontend
```

Isso exibirá informações sobre o serviço, incluindo o endereço externo do LoadBalancer sob a coluna "EXTERNAL-IP". Anote esse endereço e a primeira porta exibida. Eles serão usados para acessar o frontend da aplicação.

Lembre-se de que este endereço pode levar algum tempo para ser provisionado após o deploy ou atualização do serviço. Certifique-se de que o serviço esteja em um estado operante antes de tentar acessá-lo.

### 3. Acessando o Frontend da Aplicação

Agora que você tem o endereço do LoadBalancer, você pode acessar o frontend da aplicação em um navegador da web. O endereço deve ser inserido no seguinte formato:

```bash
http://<ENDEREÇO-DO-LOADBALANCER>:<PORTA>
``` 
## Configurando Grafana e Prometheus
**Preparando o Ambiente**

Antes de instalar o Prometheus e o Grafana, é necessário preparar o ambiente instalando o Metric Server e o EBS CSI Driver.

**Instalando o Metric Server**


### Instala o Metric Server
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

#### Verifica se o Metric Server está rodando
kubectl get deployment metrics-server -n kube-system


**Instalando o EBS CSI Driver**


### Instala o EBS CSI Driver
Execute o seguinte comando para instalar o EBS CSI Driver:
```
eksctl create addon --name aws-ebs-csi-driver --cluster eks-prod --service-account-role-arn arn:aws:iam::916589015610:role/LabRole_EBS_CSI_DriverRole --force
```


### Instalando o Prometheus

1. Adicione o repositório do Prometheus à sua lista de repositórios do Helm:

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

2. Atualize a lista de repositórios:

```
helm repo update
```

3. Liste os repositórios adicionados e verifique que o Prometheus está na lista:

```
helm repo list
```

4. Crie um namespace para o Prometheus:

```
kubectl create namespace prometheus no cluster
```

5. Instale o Prometheus usando o Helm:
Navegue até o diretório `infrastructure/charts` e execute o seguinte comando:

```
helm install prometheus prometheus-community/prometheus \
    --namespace prometheus \
    --set alertmanager.persistentVolume.storageClass="gp2" \
    --set server.persistentVolume.storageClass="gp2" \
    --values prometheus/values.yaml
```

1. Verifique se o Prometheus está rodando:

```
kubectl get all -n prometheus
```

**Visualizando o Painel do Prometheus**

1. Faça um port-forward para o deployment do Prometheus Server:

```
kubectl port-forward deployment/prometheus-server 9090:9090 -n prometheus
```

2. Acesse o painel do Prometheus em `http://localhost:9090/graph`.

### Instalando o Grafana

1. Adicione o repositório do Grafana à sua lista de repositórios do Helm:

```
helm repo add grafana https://grafana.github.io/helm-charts
```

2. Atualize a lista de repositórios:

```
helm repo update
```

3. Crie um namespace para o Grafana:

```
kubectl create namespace grafana
```

4. Instale o Grafana usando o Helm:

Navegue até o diretório `infrastructure/charts` e execute o comando abaixo, substituindo `<YOUR-GRAFANA-PASSWORD>` pela senha que você deseja usar para acessar a plataforma:
```
helm install grafana grafana/grafana \
    --namespace grafana \
    --set persistence.storageClassName="gp2" \
    --set persistence.enabled=true \
    --set adminPassword='<YOUR-GRAFANA-PASSWORD>' \
    --values grafana/values.yaml \
    --set service.type=LoadBalancer
```

5. Verifique se o Grafana está rodando:

```
kubectl get all -n grafana
```

**Visualizando o Painel do Grafana**

1. Obtenha o endereço do LoadBalancer do serviço Grafana:

```
kubectl get svc grafana -n grafana -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

2. Acesse o painel do Grafana em `http://<endereço-do-loadbalancer>` utilizando o usuário `admin` e a senha que você definiu na instalação.

### Conclusão

Seguindo os passos acima, você terá instalado e configurado o Prometheus e o Grafana no seu cluster EKS. Você pode acessar o painel do Grafana e importar o dashboard do Prometheus para visualizar as métricas do cluster.

# Tags

* SPRINT 1:
  * Requisitos
  * Arquitetura inicial
  * Entendimento do Negócio
  * Entendimento do Usuário
* SPRINT 2:
  * Arquitetura aprimorada
  * Artigo v1.0
* SPRINT 3:
  * Modelagem e Implementação final
  * Artigo v2.0
* SPRINT 4:
  * Relatório Técnico
  * Testes da aplicação
  * Artigo v3.0
* SPRINT 5:
  * Alterações e refinamentos finais na aplicação
  * Artigo finalizado
  * Análise de Custos
  * Readme
  * Pitch

# Licença

<table>
  <tr><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"></tr>
</table>

<table>
  <tr><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></tr>
</table>

[Application 4.0 International](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1)