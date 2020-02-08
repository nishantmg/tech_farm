export class Consumption {
    id: number;
    code: string
    animal_code: string;
    food_code: string;
    consumed_unit: string;
    consumption_amount: string;
    status: boolean = true;
    created_at?: Date = new Date();
    updated_at?: Date = new Date();
}
