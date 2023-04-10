import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import {  url } from '../../api/api'


const getProduct = async () => {
   const response = await axios.get(url)
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

function* productSaga() {
   yield takeEvery("GET_PRODUCTS",fetchProducts) 
}

export default productSaga;