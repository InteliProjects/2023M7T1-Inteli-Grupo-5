
# Custos Iniciais:

EC2 T2 micro (bastion): Dentro do nível gratuito (se qualificado). Caso contrário, aproximadamente $0.013 por hora.

RDS PostgreSQL com 20GB de espaço: Dentro do nível gratuito (se qualificado). Caso contrário, aproximadamente $0.045 por hora.

ECR: Sem custo inicial. Pagamento conforme o uso de armazenamento e transferência de dados.

EKS T3 Medium: Dependendo da região e da disponibilidade da instância, aproximadamente $0.038 por hora.

Internet Gateway, NAT Gateway, Route Tables, VPC: Sem custo inicial separado. Serão parte do custo associado ao uso.

Bucket S3: Sem custo inicial. Pagamento conforme o uso de armazenamento e transferência de dados.

Cloudfront como CDN: Sem custo inicial. Pagamento conforme o uso de transferência de dados e solicitações.

Security Groups: Sem custo inicial separado. Serão parte do custo associado ao uso.

Custos Recorrentes:

EC2 T2 micro (bastion): Aproximadamente $0.013 por hora.

RDS PostgreSQL com 20GB de espaço: Dependendo da região, aproximadamente $0.045 por hora.

ECR: Pagamento conforme o uso de armazenamento e transferência de dados.

EKS T3 Medium: Aproximadamente $0.038 por hora.

Internet Gateway, NAT Gateway, Route Tables, VPC: Sem custo direto, mas incluídos na fatura como parte do uso.

Bucket S3: Pagamento conforme o uso de armazenamento e transferência de dados.

Cloudfront como CDN: Pagamento conforme o uso de transferência de dados e solicitações.

Security Groups: Sem custo direto, mas incluídos na fatura como parte do uso.

# Custo de Escalabilidade:


Levando em consideração que a aplicação de alta demanda requer 10 instâncias EC2 (ou pods EKS) para lidar com a carga durante o pico de tráfego. Cada uma dessas instâncias é uma instância do tipo T3 Medium, que custa aproximadamente $0,038 por hora. Se essas instâncias estiverem em execução durante 24 horas por dia durante um mês, o custo seria:

$0,038 por hora x 24 horas x 30 dias x 10 instâncias = $273,60 por mês

Porém o custo de escala dependerá do número de instâncias e do tempo em execução, a calculadora de preços da AWS pode obter estimativas mais precisas com base nas configurações exatas de escalabilidade.



