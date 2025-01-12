import { createSlice } from '@reduxjs/toolkit';

// Crea lo slice per il carrello
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Inizializza gli oggetti come array vuoto
    },
    reducers: {
        // Aggiungi un item al carrello
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        // Rimuovi un item dal carrello
        removeItem: (state, action) => {
            const name = action.payload;
            state.items = state.items.filter(item => item.name !== name);
        },
        // Aggiorna la quantità di un item nel carrello
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    }
});

// Esporta le azioni per poterle utilizzare nei componenti
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Esporta il reducer come default per l'integrazione nello store Redux
export default CartSlice.reducer;
