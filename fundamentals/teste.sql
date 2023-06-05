INSERT INTO user(nome, email) VALUES(
    "Lucas",
    "teste@email.com"
);

CREATE TABLE teste(
	nome VARCHAR(50),
	email VARCHAR(100),
    numero INT(10)
);

INSERT INTO teste(nome, email, numero) VALUES(
    "Lucas",
    "teste@email.com",
    20
);

INSERT INTO teste(nome, email, numero) VALUES(
    "Maria",
    "teste@email.com",
    20
);

INSERT INTO teste(nome, email, numero) VALUES(
    "João",
    "teste@email.com",
    22
);

INSERT INTO teste(nome, email, numero) VALUES(
    "Mateus",
    "teste@email.com",
    18
);

SELECT * FROM teste WHERE numero <= 20;