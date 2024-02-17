export type Product = {
    id: number;
    name: string;
    price: number;
}

export type ShippingAdress = {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
}

export type ProductOrder = {
    id: number;
    product: Product;
    shippingAdress: ShippingAdress;
    placementTime: number;
    status: string;
}