import { getItemsUseCase } from "./use-cases/get-items.use-case";
import { getItemUseCase } from "./use-cases/get-item.use-case";


export const itemController =  {
    getAll: getItemsUseCase,
    get: getItemUseCase
}
