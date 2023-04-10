import * as type from '../types'


export const products = () => {
    return {
        type: type.GET_PRODUCTS,
    }
}


export const filterProduct = (category) => {
    return {
        type: type.FILTER_BY_CATEGORY,
        payload: category
    }
}
