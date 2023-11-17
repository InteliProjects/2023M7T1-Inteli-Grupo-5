# Requisitos Funcionais e Não-Funcionais

Com base nos resultados das pesquisas constadas no documento [entendimento do usuário](./entendimento_usuario.md), foi realizada a elicitação de requisitos da aplicação genérica e do sistema de testes de carga:


- RF1: O sistema contempla uma função registro de usuário;
- RF2: O sistema contempla uma função login de usuário utilizando o email ou CPF;
- RF3: O sistema contempla uma função de adição de maquininhas à venda;
- RF4: O sistema contempla uma função de visualização em lista dos produtos disponíveis para compra;
- RF5: O sistema contempla uma função de compra dos produtos listados;
- RF6: O sistema contempla uma função recuperação de senha da conta do usuário;
- RF7: O sistema contempla uma função de edição das informações de registro da conta do usuário;
- RF9: O sistema contempla uma função de desconectar-se de sua conta;
- RF10: O sistema contempla uma função de deleção do registro da conta do usuário;
- RF11: O sistema contempla uma função de simulação de planos;
- RF12: O sistema contempla uma função de compra dos planos disponíveis;
- RF13: O sistema contempla uma função de pagamento com dados bancários;
- RF14: O sistema contempla uma função de verificação de conta através do documento de identificação do cliente;
- RF15: O sistema contempla uma função de vizualização da data prevista de entrega da maquininha;
- RF16: O sistema contempla uma função de vizualização do status do envio da maquininha comprada;
- RF17: O sistema contempla uma função de cancelamento de compra;
- RNF1: O sistema deve ser capaz de originar 35.000 requisições por segundo concretamente (Eficiência de Performance);
  - Plano de teste: São feitos testes de requisição para verificar se o sistema consegue receber 35.000 requisições por segundo sem cair.
- RNF2: É possível determinar a capacidade de carga da aplicação, ou seja, quantas requisições ela pode manipular de forma eficaz (Usabilidade);
  - Plano de teste: É feita uma comparação com o relatório produzido como resultado de cada rodada de teste onde os dois resultados devem ser iguais.
- RNF3: O sistema é escalável e resiliente, garantindo uma utilização eficiente de recursos e minimizando o desperdício (Eficiência de desempenho);
  - Plano de teste: É realizado um BenchMark para comparação de custos da solução desenvolvida com outras soluções parecidas. O custo por requisição da solução desenvolvida deve ser igual ou menor que o custo por requisição médio das soluções observadas no BanchMark.
- RNF4: O sistema contempla um meio de monitoração com o histórico de métrica dos testes (Manutenibilidade);
  - Plano de teste: É realizado um acompanhamento dos processos da aplicação através do console da AWS e comparada com os resultados guardados no histórico para validar os dados. Os dados verificados do histórico devem ser correspondentes aos dados observados no acompanhamento através do console.
- RNF5: O ambiente de teste e os testes de carga são configurados de forma rápida e eficiente (Eficiência de Performance);
  - Plano de teste: São realizados testes de requisição e anotados os tempos de resposta, tais que serão comparados a soluções similares para verificar a rapidez e eficiência. Os tempos de resposta no sistema desenvolvido devem ser iguais ou superiores ao das outras solução utilizadas na comparação.
- RNF6: O processo de teste é capaz de executar sem gerar problemas operacionais (Compatibilidade).
  - Plano de teste: São feitos testes de requisição acompanhados através dos LOGs na AWS para verificar possíveis erros. Para validar este requisito funcional, os testes devem rodar sem nenhum erro terminal.

Os requisitos estão separados em categorias de RF#, referente aos requisitos funcionais, e RNF#, referente aos requisitos não funcionais.