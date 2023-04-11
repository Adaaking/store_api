import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import {  url } from '../../api/api'


const getProduct = async () => {
   const response = await axios.get(url)
   return response.data
}
const getCategories = async () => {
    const response = await axios.get(url + "/categories")
    return response.data
 }

 const getBycategory  = async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return response.data
 }
function* fetchProducts() {
    try {
        const products = yield call(getProduct)
        yield put({ type: "GET_PRODUCTS_SUCCESS",products:products})
    } catch (error) {
        yield put({ type: 'GET_PRODUCTS_FAILED',message:error.message})
    }
}

function* fetch_by_catecory(category) {
    try {
        const products = yield call(getBycategory,category.payload)
        yield put({ type: "GET_PRODUCTS_SUCCESS",products:products})
    } catch (error) {
        yield put({ type: 'GET_PRODUCTS_FAILED',message:error.message})
    }
}

function* fetchCategories() {
    try {
        const categories = yield call(getCategories)
        localStorage.setItem("category", JSON.stringify(categories))
        yield put({ type: "GET_CATEGORIES_SUCCESS",categories:categories})
    } catch (error) {
        yield put({ type: 'GET_CATEGORIES_SUCCESS',message:error.message})
    }
}

function* productSaga() {
   yield takeEvery("GET_PRODUCTS",fetchProducts)
   yield takeEvery("GET_CATEGORIES",fetchCategories) 
   yield takeEvery("GET_BY_CATEGORY",fetch_by_catecory) 
}

export default productSaga;