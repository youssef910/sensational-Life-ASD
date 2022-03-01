-- load uuid extention:
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- drop existing tables:
DROP TABLE IF EXISTS public.users CASCADE;

DROP TABLE IF EXISTS public.bookmarks CASCADE;

DROP TABLE IF EXISTS public.timetables;

CREATE TABLE public.users (
    id uuid NOT NULL DEFAULT uuid_generate_v4 (),
    name varchar NOT NULL,
    email varchar NOT NULL,
    pwd varchar NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE public.timetables (
    id uuid NOT NULL DEFAULT uuid_generate_v4 (),
    title varchar NOT NULL,
    age_group varchar,
    quantity varchar,
    link varchar NOT NULL,
    CONSTRAINT timetables_pk PRIMARY KEY (id)
);

CREATE TABLE public.bookmarks (
    user_id uuid NOT NULL,
    resource_id uuid NOT NULL,
    resource_type varchar,
    CONSTRAINT bookmarks_un UNIQUE (user_id, resource_id),
    CONSTRAINT users_fk FOREIGN KEY (user_id) REFERENCES public.users (id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED
);

