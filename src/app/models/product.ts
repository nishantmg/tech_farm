export class Product {
    id: number;
    code: string = Math.random().toString(36).substr(2);
    animal_code: string;
    product_name: string;
    short_name: string;
    measurement_unit: string;
    status: boolean = true;
    created_at?: Date = new Date();
    updated_at?: Date = new Date ();
}
