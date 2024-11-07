import React from 'react';
import "./ListItems.css";
import Config from "../../config";
import { updateItem, useDispatch, useSelectedCategory, useSelectedItems } from '../../AppContext';

const { item_info, category_info } = Config;

const ListItems = () => {
  const selectedCategoryId = useSelectedCategory();
  const selectedItems = useSelectedItems();
  const selectedItemId = selectedItems[selectedCategoryId];
  const category = category_info[selectedCategoryId];
  const dispatch = useDispatch();

  if(!category){
    return null;
  }

  const { order } = category;

  if(!order || !order.length){
    return null;
  }

  return (
    <div className='list-items'>
      {order.map((itemId)=>{
        const item = item_info[itemId] || {};
        const {name, component: SVGImage } = item;

        const handleClick = () => {
          dispatch(
            updateItem({
              categoryId: selectedCategoryId,
              itemId: itemId,
            })
          );
        }
        return(
          <div
            className={`item ${selectedItemId === itemId ? "selected" : "" }`}
            key={itemId}
            onClick={handleClick}
          >
            <SVGImage />
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ListItems
