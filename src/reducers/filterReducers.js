export const initialState = {
  inventory: [],
};

export const inventoryReducer = (state, action) => {
    switch (action.type) {
      case 'FILTER_DEPARTMENT':
        if (action.department === 'All departments') {
          return {
            ...state,
            inventory: action.inventoryData,
          };
        }
        const filteredByDepartment = action.inventoryData.filter(
          (item) => item.department === action.department
        );
        return {
          ...state,
          inventory: filteredByDepartment,
        };
  
      case 'FILTER_LOW_STOCK':
        let filteredInventory = [...state.inventory];
        const filteredByLowStock = filteredInventory.filter(
          (item) => item.stock <= 10
        );
        return {
          ...state,
          inventory: filteredByLowStock,
        };
  
      case 'SORT':
        let sortedInventory = [...state.inventory];
        switch (action.sortBy) {
          case 'name':
            sortedInventory.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'price':
            sortedInventory.sort((a, b) => a.price - b.price);
            break;
          case 'stock':
            sortedInventory.sort((a, b) => a.stock - b.stock);
            break;
          default:
            sortedInventory.sort((a, b) => a.name.localeCompare(b.name));
            break;
        }
        return {
          ...state,
          inventory: sortedInventory,
        };
  
      default:
        return state;
    }
  };