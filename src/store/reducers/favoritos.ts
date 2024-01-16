import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,

  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
