# Introdução

O desafio de maximizar a quantidade de usuários com as requisições atendidas, enquanto minimizar a quantidade de recursos ociosos, tem sido uma questão central na evolução da tecnologia. Esta necessidade de equilíbrio entre eficiência e capacidade de resposta tem moldado a paisagem tecnológica, tornando-se um pilar essencial para empresas na era digital (Addis et al., 2013).
Nesse contexto, soluções como o EC2 da AWS são fundamentais para fornecer capacidades de computação escalável. Combinado com o AWS Route 53, que gerencia o tráfego DNS, e o AWS CloudFront, que distribui conteúdo globalmente, as organizações podem garantir uma entrega de conteúdo mais rápida e confiável. O armazenamento, por sua vez, é otimizado através do AWS S3, proporcionando um armazenamento de objetos protegidos e escaláveis.
Devido à sensibilidade da arquitetura de computação em nuvem, surgiram alguns problemas de segurança. Como resultado, riscos e vulnerabilidades de segurança só precisam ser identificados com urgência por meio da avaliação de redes em nuvem(VINOTH S. et al., 2022). Dessa forma, a segurança é reforçada por meio de soluções como o Bastion Host, que permite acesso seguro às instâncias EC2, e o NAT Gateway, que permite que instâncias em uma sub-rede privada se conectem à Internet. O ELB (Elastic Load Balancer) desempenha um papel crucial na distribuição do tráfego de entrada, garantindo que as aplicações sejam escaláveis ​​e confiáveis.
No lado do desenvolvimento, frameworks como Next.js e Nest.js têm emergido como líderes, permitindo um desenvolvimento ágil e eficiente. O Next.js, uma estrutura React, é conhecido por sua capacidade de renderização do lado do servidor, enquanto o Nest.js, um framework Node.js, oferece uma arquitetura modular e extensível.
O autoscaling, combinado com essas tecnologias, tem sido uma resposta adaptativa às demandas flutuantes. A verdadeira excelência é alcançada através da combinação de agendamento inteligente, monitoramento rigoroso e gestão competente da infraestrutura (BAUER et al., 2018; SCHWARZKOPF et al., 2013). A ascensão da Infraestrutura como Código (IaC) forneceu um caminho replicável para a otimização de recursos, elevando a automação a novos patamares (MORRIS & KEHOE, 2016).
Contudo, muitas organizações ainda enfrentam desafios, como o aumento de custos com a utilização da nuvem pública, forçando os clientes corporativos a melhorar os gastos (CONVERGÊNCIADIGITAL; IDEYAMA, Fernando, 2023). A interação harmoniosa entre diferentes ferramentas e plataformas torna-se crucial à medida que o ambiente tecnológico evolui. Diante da crescente complexidade tecnológica, a adaptabilidade é a chave para a sobrevivência e a prosperidade.

# Trabalhos relacionados
A partir dos pontos abordados a respeito da escalabilidade e disponibilidade de uma aplicação, tratando principalmente de questões a serem examinadas como latência, redução de custo e a vinculação com a experiência do usuário a fim de obter um serviço que se adapte à demanda. Esta seção tem como objetivo apresentar problemas semelhantes, assim como alternativas existentes que fundamentam a abordagem do problema de forma concomitante ao evidenciar o enriquecimento e incentivo para abordar a solução proposta neste artigo. 

Destacando a questão de tornar uma aplicação escalável e que atenda todas as requisições, Ebling et al. (2021) descreve um dos trechos do livro 'Cloud Computing' de Cezar Taurion, ressaltando a imprevisibilidade da demanda como um complicador adicional ao ambiente de empresas cada vez mais interconectadas. Para o autor, esta demanda imprevisível exige que os sistemas tenham condições de se adaptar à variação instantânea a flutuações graves. No passado, as empresas de tecnologia possuíam muitos hardwares e softwares, gerando assim muitos gastos com manutenção e licenças. 
Com a computação em nuvem, isso mudou, pois seu ambiente virtualizado permite que muitas pessoas acessem um mesmo aplicativo, sem ter que pagar por várias licenças do mesmo software por máquina (SILVEIRA, Tiago; CARVALHO, Leonardo, 2020). Tal afirmação comprova o forte cenário empresarial com a introdução da computação em nuvem, mas é essencial destacar que a tecnologia apresenta pontos que requerem atenção ao ser inovador, como a garantia de manter a disponibilidade do sistema e também o aspecto financeiro para manter a continuidade. Desse modo, é reforçado que 'A indisponibilidade, seja por falha de hardware ou de software, implica direta ou indiretamente em perda de dinheiro por parte da organização. Os prejuízos causados ​​pela indisponibilidade serão ainda maiores se isso for causado pelo mau funcionamento do dispositivo que armazenava os dados.' (CIPRIANI, Otávio, 2009). 

Por outro lado, abrangendo o processo de adoção da computação em nuvem e o desafio para construir uma rede de grande escala e alta performance que possuísse seus recursos otimizados, principalmente em relação ao objetivo de diminuir problemas com interrupções de custo e desempenho de uma aplicação. Kumar et al. (2019) afirmam que 'Na última década, o aumento das vantagens (aplicações diversas e complexas) de serviços em nuvem está aumentando a carga de trabalho no ambiente de nuvem. Técnicas de agendamento ineficientes enfrentam os desafios de recursos superutilizados e subutilizados (desequilibrados), ou que levam à gestão do desempenho do serviço (em caso de utilização excessiva) ou ao desperdício de recursos da nuvem (em caso de subutilização). 

Baseando-se nos trabalhos apresentados nesta seção, é possível obter uma visão geral de como a ausência da computação em nuvem torna uma empresa cada vez mais obsoleta ao possuir um sistema local. No entanto, também levanta considerações quando a falta de controle e uso inadequado da tecnologia em nuvem na tentativa de escalar, aumenta os recursos ociosos no sistema, tendo a perda financeira uma das consequências ocasionais. Tais trabalhos serviram como evidência das problemáticas existentes e, como solução, demonstram boas práticas ao usar serviços em nuvem, sendo referência para a melhoria da solução desenvolvida e apresentada brevemente neste artigo.

# Materiais e métodos

Nesta seção, serão apresentados os materiais e métodos que foram empregados no desenvolvimento da aplicação escalável para a Stone. O objetivo é fornecer uma visão geral das ferramentas e abordagens utilizados e citar como esses elementos se integram na construção da aplicação.

Como citado anteriormente, a construção da aplicação foi baseada no ambiente de nuvem da AWS. 

Utilizaremos como recurso base para hospedagem das aplicações as instâncias EC2 (Amazon Elastic Compute Cloud) que são basicamente máquinas virtuais escaláveis. Elas permitem que serviços e aplicativos sejam executados em diferentes sistemas operacionais, com diferentes configurações de hardware para as máquinas. Dessa maneira, garante-se que a capacidade computacional da aplicação seja escalável, de acordo com a demanda. Para rotear o tráfego da internet para os recursos da AWS, como servidores web, utilizou-se o serviço AWS Route 53, um serviço de DNS que permite registrar e gerenciar nomes de domínio na internet.

Visando diminuir a latência da aplicação e garantir a alta disponibilidade da aplicação, utilizou-se o AWS CloudFront, um serviço de entrega de conteúdo, que distribui conteúdo, como páginas web, imagens e vídeo, de maneira eficiente e rápida para usuários finais em todo o mundo. O Amazon S3 (Simple Storage Service), um serviço de armazenamento em nuvem da AWS que permite armazenar e recuperar dados, também foi utilizado, principalmente para armazenamento de conteúdo estatíco.

Para garantir a seguração da aplicação, foram adotadas algumas medidas, levando em consideração a organização da VPC (Virtual Private Cloud) da AWS. A VPC permite com que isolemos nossa infraestrutura em uma rede privada virtual, proporcionando um ambiente mais controlado, evitando comportamentos indesejados e que prejudiquem a segurança da aplicação. Para garantir acesso seguro às instâncias EC2 da aplicação, utilizou-se um Bastion Host, que é basicamente uma instância EC2, localizada em uma sub-rede pública, responsável por dar acesso às instâncias EC2 privadas. Além disso, implementou-se o NAT Gateway, um recurso que age como instância intermediária, permitindo que as instâncias privadas consigam acessar a internet mas ao mesmo tempo não sejam expostas à Internet para que sejam acessadas, protegendo a infraestrutura de ameaças externas. Por fim, foram implementadas ferramentas de monitoramento em tempo real da aplicação,  como o AWS CloudWatch, para monitorar o comportamento da aplicação e detectar atividades suspeitas. 

Para assegurar a escalabilidade da infraestrutura, utilizou-se o recurso de Auto Scaling Group da AWS. Esse serviço, permite que a infraestrutura da aplicação se expanda ou se reduza automaticamente, adicionando ou removendo instâncias EC2 de acordo com o uso da CPU, ou alguma outra métrica de interesse. Dessa maneira, é possível lidar com picos de tráfego sem a necessidade de intervenção manual, como solicitado pela Stone. Em conjunto com esse recurso, utiliza-se também o Elastic Load Balancer (ELB), para distribuir o tráfego de entrada entre as instâncias disponíveis, o que não apenas melhora o desempenho da aplicação mas também a sua segurança, pois o ELB pode detectar e mitigar tráfego malicioso ou ataques distribuídos.

O armazenamento de dados será gerenciado por uma instância PostgreSQL do Amazon RDS,  um serviço de banco de dados relacional totalmente gerenciado pela AWS, que facilita a configuração, operação e escalabilidade de bancos de dados, garantindo, assim, uma solução durável e escalável para os dados do sistema.

Além dos recursos mencionados acima, utilizou-se o Kubernetes, um sistema para implantar, escalonar e gerenciar aplicativos em contêineres em qualquer lugar. Isso foi feito em conjunto com o Amazon Kubernetes Service (EKS) da AWS, que simplifica ainda mais a implantação do Kubernetes na nossa aplicação na AWS (Amazon Web Services, 2023).

Por fim, para automatizar a configuração e o provisionamento de recursos na AWS, utilizou-se o Terraform  (HashiCorp, 2023), uma ferramenta de Infraestrutura como Código (IaC) que permite criar, modificar e gerenciar a infraestrutura da aplicação de maneira eficiente e replicável. E, para automatizar a implantação, gerenciamento e a atualização dos aplicativos em contêineres dentro de clusters Kubernetes, utilizou-se o Helme, um gerenciador de pacotes para Kubernetes.

Saindo do contexto da infraestrutura da aplicação, no desenvolvimento web foram utilizados dois frameworks de desenvolvimento poderosos, que desempenharam um papel fundamental para que a aplicação fosse mais eficiente e tivesse um melhor desempenho. No lado do cliente, utilizou-se o Next.js, um framework React que se destaca por ser uma solução altamente otimizada, que torna o processo de desenvolvimento mais eficiente. Dentre as principais vantagens dessa ferramenta, destaca-se a renderização do lado do servidor (SSR), roteamento simples e o hot reloading. Já no lado do back-end, o Nest.js foi adotado. Esse é um framework Node.js que se concentra na criação de servidores escaláveis e robustos, trazendo alguns ganhos significativos, como a adoção de uma arquitetura modular, a injeção de dependências e escalabilidade.

Para garantir a qualidade da aplicação e assegurar que ela de fato é escalável, fez-se uso da ferramenta K6, que permite que, por meio de scripts escritos em javascript, seja possível simular cenários de trafégo intenso, avaliar o desempenho da aplicação em momentos de muita carga e coletar métricas mais precisas da eficiência da infraestrutura criada. Assim, é mais fácil identificar gargalos e, portanto, otimizar a aplicação.

# Resultados

A implementação da aplicação para a Stone utilizando serviços da AWS, os frameworks de desenvolvimento web e o K6, citados anteriormente, trouxe resultados significativos.

A utilização das instâncias EC2 e do Auto Scaling Group permitiu que a aplicação se ajustasse aos picos de acesso de maneira automática, sem intervenção manual, como era necessário no contexto do BBB na aplicação da Stone. Ao mesmo tempo, quando a demanda é baixa, a infraestrutura é reduzida para economizar recursos.

Com a utilização do ELB, a aplicação se tornou mais disponível e confiável, uma vez que mesmo quando uma instância EC2 falha, esse serviço direciona o tráfego para instâncias saudáveis, mantendo a continuidade do sistema.

Implementando uma VPC, com Bastion Host, NAT Gateway e o monitoramento contínuo dessa infraestrutura, obteve-se um ambiente seguro para a aplicação, o que é essencial em um sistema que será altamente acessado.

Com a replicação dos dados em diferentes zonas de disponibilidade e com o uso do AWS RDS, permitiu-se uma maior disponibilidade e resiliência dos dados. Assim, assegura-se que mesmo em situações de falha, os dados permanecerão acessíveis e protegidos.

Em termos de impacto para o negócio, pode-se citar a otimização de custos, uma vez que a infraestrutura não consome aquilo que não é necessário; aumento na experiência do usuário, garantindo menor latência a alta disponibilidade da aplicação, o que é convertido em maior satisfação do cliente e maior retenção; segurança dos dados; replicabilidade da infraestrutura, utilizando o terraform; e, por fim, maior agilidade no desenvolvimento, com a utilização do Next.js e do Nest.js, permitindo que a equipe fizesse entregas mais rapidamente, além de garantir que a aplicação foi construída com tecnologias de ponta e modernas.

# Conclusões

Sendo assim, conclui-se que este artigo apresenta os materiais e métodos utilizados para a implementação bem sucedida de uma aplicação escalável para a Stone.

Dessa maneira, a implementação da aplicação utilizando os recursos da AWS e dois frameworks modernos de desenvolvimento web traz resultados significativos em termos de eficiência operacional, experiência do usuário, redução de custos, otimização de recursos, segurança dos dados e disponibilidade da aplicação.

Para manter a aplicação escalável e adaptada às necessidades em constante evolução, algumas medidas podem ser tomadas. Dentre elas, pode-se citar a implementação de ferramentas de CI/CD, como o Jenkins, para automatizar o processo de entrega de software, acelerando o ciclo de desenvolvimento e aumentando a confiabilidade. Outra medida pode ser a utilização de funções serverless, como o AWS Lambda, o que pode ajudar na otimização de custos. Além disso, é razoável considerar a expansão da aplicação para ambientes multicloud. Apesar de aumentar a complexidade do sistema, isso proporciona ainda mais disponibilidade da aplicação e reduz a dependência de um único provedor de nuvem.










# Referência Bibliográfica
ADDIS et al. Uma abordagem hierárquica para o gerenciamento de recursos de plataformas em nuvem muito grandes, 2013. Disponível em: https://ieeexplore.ieee.org/document/6409357

Amazon Web Services. Amazon Elastic Kubernetes Service (EKS) - Amazon Web Services, 2023. Disponível em: https://aws.amazon.com/eks/

BAUER et al. Kubernetes em ação. Manning Publicações Co, 2018. Disponível em: https://www.oreilly.com/publisher/manning-publications/?page=6&sort=publication_date

CIPRIANI, Otávio. Replicação de bases de dados PostgreeSQL utilizando PGCluster, 2009. Disponível em: http://repositorio.ufla.br/bitstream/1/5544/1/MONOGRAFIA_Replica%C3%A7%C3%A3o%20de%20bases%20de%20dados% 20PostgreSQL%20utilizando%20PGCluster.pdf

CONVERGÊNCIADIGITAL; IDEYAMA, Fernando. A utilização de tecnologia de computação em nuvem e o impacto no ESG, 2023. Disponível em: https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/33928/TA_Cloud_ESG_FernandoIdeyama_vFinal.pdf?sequence=1&isAllowed=y

EBLING, Robertson et al. Proposta de uma plataforma de Cloud Computing para disponibilização de um sistema online para consultórios e clínicas por meio do modelo SaaS, 2021. Disponível em: https://www.tfgonline.lapinf.ufn.edu.br/media/midias/Robertson_Ebling. pdf

HashiCorp. Terraform by HashiCorp, 2023. Disponível em: https://www.terraform.io/

KUMAR, Mohit et al. Uma pesquisa abrangente sobre técnicas de agendamento em computação em nuvem, 2019. Disponível em: https://www.sciencedirect.com/science/article/abs/pii/S1084804519302036

MORRIS & KEHOE. Infraestrutura como código: gerenciando servidores na nuvem, 2016. "O'Reilly Media, Inc.". Disponível em: https://www.univates.br/bduserver/api/core/bitstreams/96c866a8-5716-4cf4-9da0-2a8412d904e1/content

SCHWARZKOPF et. al. Omega: agendadores flexíveis e escaláveis ​​para grandes clusters de computação. Nos Anais da 8ª Conferência Europeia ACM sobre Sistemas de Computador, 2013. Disponível em: http://dspace.sti.ufcg.edu.br:8080/jspui/bitstream/riufcg/12702/3/GIOVANNI%20FARIAS%20DA%20SILVA%20-%20TESE%20%28PPGCC%29%202019.pdf

SILVEIRA, Tiago; CARVALHO, Leonardo. Benefícios de redução de custo na infraestrutura da migração de serviços de computação em nuvem, 2020. Disponível em: http://raam.alcidesmaya.edu.br/index.php/projetos/article/view/290

VINOTH S. et al. Aplicação da computação em nuvem no setor bancário e no comércio eletrônico e ameaças de segurança relacionadas, 2022. Disponível em: https://www.sciencedirect.com/science/article/abs/pii/S2214785321071285

