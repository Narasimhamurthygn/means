import { PipeTransform, Pipe } from "@angular/core";

import { Employee } from "../shared/employee.model";
@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: Employee[],filterBy: string): Employee[]{
       filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
        return filterBy ? value.filter((product: Employee) =>
        product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}