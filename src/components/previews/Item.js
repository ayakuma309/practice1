import React, { useCallback, useMemo } from 'react';
import Config from "../../config";

const categoryInfo = Config["category_info"]
const itemInfo = Config["item_info"]

const Item = ({type,id}) => {

  const zIndex = useMemo(()=>{
    const { zIndex = 0 } = categoryInfo[type] || {};
    return zIndex
  },[type]);

  
  const Component = useCallback(
    (components)=>{
      const { component: SVGComponent } = itemInfo[id] || {};
      return <SVGComponent {...components} />;
  },[id]);

  return <Component style={{ zIndex }}/>
}

export default Item
