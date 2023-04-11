import * as type from '../types'


export const products = () => {
    return {
        type: type.GET_PRODUCTS,
    }
}

export const getCategory = () => {
    return {
        type:  type.GET_CATEGORIES
    }
}

export const filterProduct = (category) => {
    return {
        type: type.GET_BY_CATEGORY,
        payload: category
    }
}
