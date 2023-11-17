-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
