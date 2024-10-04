CREATE TABLE IF NOT EXISTS blogs (
id SERIAL NOT NULL UNIQUE PRIMARY KEY,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at TIMESTAMP NOT NULL DEFAULT NOW() CONSTRAINT new_update_date CHECK (created_at < updated_at OR created_at = updated_at),
title TEXT NOT NULL,
content TEXT NOT NULL, 
position TEXT NOT NULL DEFAULT 'all',
category TEXT NOT NULL DEFAULT 'others',
author TEXT NOT NULL DEFAULT 'anonymous',
thumbnail_url TEXT,
hidden BOOLEAN NOT NULL DEFAULT false);


CREATE TABLE IF NOT EXISTS auth (
id SERIAL NOT NULL UNIQUE PRIMARY KEY,
username TEXT NOT NULL, 
password_hash TEXT NOT NULL,
refresh_token TEXT UNIQUE DEFAULT NULL);


CREATE TABLE IF NOT EXISTS notify (
id SERIAL NOT NULL UNIQUE PRIMARY KEY,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
email TEXT NOT NULL,
question TEXT,
is_answer BOOLEAN DEFAULT false,
answer TEXT DEFAULT NULL,
answered_at TIMESTAMP DEFAULT NULL);

CREATE TABLE IF NOT EXISTS projects (
id SERIAL NOT NULL UNIQUE PRIMARY KEY,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at TIMESTAMP NOT NULL DEFAULT NOW() CONSTRAINT new_update_date CHECK (created_at < updated_at OR created_at = updated_at),
title TEXT NOT NULL,
content TEXT NOT NULL, 
position TEXT NOT NULL DEFAULT 'default',
category TEXT NOT NULL DEFAULT 'others',
author TEXT NOT NULL DEFAULT 'anonymous',
thumbnail_url TEXT,
hidden BOOLEAN NOT NULL DEFAULT false);

INSERT INTO auth(username, password_hash) VALUES ("admin@gmail.com", "nhatvai123");