-- Active: 1698945600332@@127.0.0.1@5432@api_zoologico@public
create table tbl_animal
(
    id serial primary key ,
    nombre varchar(500), 
    sonido varchar(10),
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_animal 
(nombre, sonido)
values
('Perro', 'Wouf'),
('Gato', 'Miau'), 
('Pato', 'Cuack');

update  tbl_animal 
set 
nombre = 'Serpiente', 
sonido = 'Sssss'
where id = '2';