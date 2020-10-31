export const saveTemplate = (val) => {
    return {
      type: "SAVE_TEMPLATE",
      val,
    };
  };
  
  export const clearTemplate = () => {
    return {
      type: "CLEAR_TEMPLATE",
    };
  };
  