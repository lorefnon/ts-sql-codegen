CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

drop table if exists authors;

create table authors (
    id int not null primary key,
    name varchar,
    dob date,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);

drop table if exists books;

drop type if exists genre;

create type genre as enum ('fantasy', 'scifi', 'horror');

create table books (
    id uuid not null primary key default uuid_generate_v4(),
    name varchar(255) not null,
    price money not null,
    author_id int not null,
    released_at date,
    time_to_read interval,
    genre genre,
    weight_grams double precision,

    constraint fk_books__author_id
        foreign key (author_id)
            references authors (id)
);

drop table if exists chapters;

create table chapters (
    id serial primary key,
    name varchar not null,
    book_id uuid not null,
    metadata jsonb,
    title varchar,
    description text,

    constraint fk_books__book_id
        foreign key (book_id)
            references books (id)
);

drop view if exists author_books;

create view author_books as
    select
        books.*,
        authors.name as author_name
    from authors
    join books on books.author_id = authors.id;

