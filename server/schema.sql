CREATE TABLE posts (
    "postId" varchar UNIQUE NOT NULL,
    "type" smallint NOT NULL,
    "title" varchar(255) NOT NULL,
    "description" varchar NOT NULL,
    "originLink" varchar(255),
    "district" varchar(50),
    "address" varchar(255),
    "ownerPhone" varchar(13),
    "price" int,
    "active" bool NOT NULL DEFAULT true,
    "date" timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE users (
    "userId" varchar UNIQUE NOT NULL,
    "username" varchar UNIQUE NOT NULL,
    "email" varchar(100) UNIQUE NOT NULL,
    "password" varchar(255) NOT NULL,
    "firstName" varchar(255) NOT NULL,
    "lastName" varchar(255) NOT NULL,
    "gender" char NOT NULL,
    "phone" varchar(13) NOT NULL,
    "dateOfBirth" date NOT NULL
);

-- Update date trigger
CREATE OR REPLACE FUNCTION update_date()
RETURNS TRIGGER AS $$
BEGIN
    new."date" = current_timestamp;
    RETURN new;
END
$$
language plpgsql;

CREATE TRIGGER "UpdateDateTrigger"
BEFORE INSERT OR UPDATE ON posts
FOR EACH ROW EXECUTE PROCEDURE update_date();
