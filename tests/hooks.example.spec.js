describe("Main", () => {
  // roda uma vez, antes do bloco
  before(() => {
    console.log("before");

    // inicia uma conexão no banco
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    console.log("after");

    // fecha uma conexão no banco
    // apaga um conjunto de dados
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => console.log("beforeEach"));

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => console.log("afterEach"));

  it("test 1", () => console.log("test 1"));

  it("test 2", () => console.log("test 2"));
});
