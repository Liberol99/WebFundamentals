import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//https://fakestoreapi.com/docs
// Başlangıç durumu
const initialState = {
    products: [],
    product: {},
    addedProduct: {},
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

// Asenkron işlev (Thunk) - Ürünleri API'den çekme
export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
)
export const getSingleProduct = createAsyncThunk('product/getSingleProduct',
    async (recId) => {
        const response = await fetch(`https://fakestoreapi.com/products/${recId}`);
        const data = await response.json();
        return data;
    }
)
export const addProduct = createAsyncThunk('product/addProduct',
    async (product) => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    }
)

// Dilimi oluşturma
export const fakeSlice = createSlice({
    name: 'fake',
    initialState,
    reducers: {
        // Senkron işlemler burada tanımlanabilir
    },
    extraReducers: (builder) => {
        builder
            //birinci api
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            //ikinci api
            .addCase(getSingleProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(getSingleProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            //üçüncü api
            .addCase(addProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.addedProduct = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

// Gerekli eylemleri dışa aktarma
export const { } = fakeSlice.actions

// Dilim (Reducer) dışa aktarma
export default fakeSlice.reducer
