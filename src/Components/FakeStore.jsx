import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {filterProduct, getCategory, products} from '../features/actions/products'
  
  export default function FakeStore() {
    const productis = useSelector(state => state.productReducer.products);
    const categories = useSelector(state => state.productReducer.categories) || JSON.parse(localStorage.getItem('category'));
    const [selectedCategory, setSelectedCategory] = useState(null);

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(products())
      dispatch(getCategory())
    }, [dispatch])
  
    const handleCategoryChange = (e) => {
      const category = e.target.value;
      setSelectedCategory(category);
    }
  
    const handleReset = () => {
      setSelectedCategory("");
      dispatch(products());
    }
  
    const handleSearch = () => {
      if (selectedCategory) {
        dispatch(filterProduct(selectedCategory))
      } else {
        dispatch(products())
      }
    }


    return (
      <div className="max-w-[100vw]">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto justify-center items-center text-center">
            <h1 className="text-base font-semibold leading-6 text-gray-900 mb-6 mt-5" >FAKE STORE</h1>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex justify-center gap-6">
              <form className="mr-20">
              <select
                  className="p-4 rounded-md"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Category</option>
                  {categories && categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </form>
            <button
             onClick={handleSearch}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
            <button
            onClick={handleReset}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              reset
            </button>
          </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                      ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      category
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {productis && productis.map((product, Idx) => (
                    <tr key={product.id} className={Idx % 2 === 0 ? undefined : 'bg-gray-50'}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {product.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  