import { CoffeesService } from './coffees.service';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(paginationQuery: any): {};
    findOne(id: string): any;
    create(body: any): any;
    update(id: string, body: any): void;
    remove(id: string): void;
}
