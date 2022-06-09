CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

drop table if exists authors;

create table authors (
    id int not null primary key,
    name varchar,
    created_at timestamp,
    updated_at timestamp
);

drop table if exists books;

create table books (
    id uuid not null primary key default uuid_generate_v4(),
    name varchar(255) not null,
    author_id int not null,
    released_at date,
    time_to_read interval,

    constraint fk_books__author_id
        foreign key (author_id)
            references authors (id)
);

drop table if exists chapters;

create table chapters (
    id serial primary key,
    name varchar not null,
    book_id uuid not null,

    constraint fk_books__book_id
        foreign key (book_id)
            references books (id)
);


