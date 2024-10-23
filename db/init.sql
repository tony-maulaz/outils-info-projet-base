DROP SCHEMA IF EXISTS test;
CREATE SCHEMA test;
set SCHEMA 'test';

DROP TABLE IF EXISTS tests;

CREATE TABLE tests(
    id SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

insert into tests (description) values ('Test 1');
insert into tests (description) values ('Test 2');
insert into tests (description) values ('Test 3');