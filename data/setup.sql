DROP TABLE IF EXISTS product;

CREATE TABLE product(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL
);

CREATE TABLE shippingAddress(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    address TEXT NOT NULL,
    postalCode TEXT NOT NULL,
    country TEXT NOT NULL,
    phoneNumber TEXT NOT NULL
);

CREATE TABLE productOrder(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    productId INTEGER NOT NULL,
    shippingAdressId INTEGER NOT NULL,
    placementTime INTEGER NOT NULL,
    status TEXT NOT NULL,

    FOREIGN KEY(productId) REFERENCES product(id),
    FOREIGN KEY(shippingAdressId) REFERENCES shippingAddress(id)
);