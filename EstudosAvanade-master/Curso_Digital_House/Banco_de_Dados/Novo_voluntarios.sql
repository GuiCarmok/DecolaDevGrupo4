
    CREATE DATABASE DB_VOLUNTARIOS;
    DROP DATABASE DB_VOLUNTARIOS;
    USE DB_VOLUNTARIOS;
    
CREATE TABLE TB_SOLICITANTE(
     id_solicitante INT PRIMARY KEY AUTO_INCREMENT,
     fk_id_endereco INT,
     nome VARCHAR(30) NOT NULL,
     email VARCHAR(30) UNIQUE NOT NULL,
     senha VARCHAR(100) NOT NULL,
     cpf VARCHAR(15) UNIQUE NOT NULL
    );
ALTER TABLE TB_SOLICITANTE ADD CONSTRAINT FK_SOLICITANTE_ENDERECO FOREIGN KEY(fk_id_endereco) REFERENCES TB_ENDERECO(id_endereco);

-- SELECT * FROM TB_SOLICITANTE;
CREATE TABLE TB_VOLUNTARIO(
     id_voluntario INT PRIMARY KEY AUTO_INCREMENT,
     fk_id_endereco INT,
     nome VARCHAR(30) UNIQUE NOT NULL,
     email VARCHAR(30) UNIQUE NOT NULL,
     senha VARCHAR(100) NOT NULL,
     cpf VARCHAR(15) UNIQUE NOT NULL,
     servico VARCHAR(20),
     sobre_servico TEXT
    );
    
ALTER TABLE TB_VOLUNTARIO ADD CONSTRAINT FK_VOLUNTARIO_ENDERECO FOREIGN KEY(fk_id_endereco) REFERENCES TB_ENDERECO(id_endereco);

CREATE TABLE TB_ADMINISTRACAO(
     id_adm INT PRIMARY KEY AUTO_INCREMENT,
     nome_adm VARCHAR(30) UNIQUE NOT NULL,
     email_adm VARCHAR(30) UNIQUE NOT NULL,
     senha_adm VARCHAR(100) NOT NULL
    );
    
CREATE TABLE TB_SOLICITACOES(
     id_solicitacoes INT PRIMARY KEY AUTO_INCREMENT,
     fk_id_solicitante INT,
     fk_id_voluntario INT,
     servico VARCHAR(30),
     descricao TEXT,
     `status` VARCHAR(30)
    );
ALTER TABLE TB_SOLICITACOES ADD CONSTRAINT FK_SOLICITACOES_SOLICITANTE FOREIGN KEY(fk_id_solicitante) REFERENCES TB_SOLICITANTE(id_solicitante);
ALTER TABLE TB_SOLICITACOES ADD CONSTRAINT FK_SOLICITACOES_VOLUNTARIO FOREIGN KEY(fk_id_voluntario) REFERENCES TB_VOLUNTARIO(id_voluntario);
    
CREATE TABLE TB_ENDERECO(
     id_endereco INT PRIMARY KEY AUTO_INCREMENT,
     estado VARCHAR(30) NOT NULL,
     bairro VARCHAR(30) NOT NULL,
     cidade VARCHAR(30) NOT NULL,
     rua VARCHAR(30) NOT NULL,
     complemento VARCHAR(30)
    );

    
    