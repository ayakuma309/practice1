import React from 'react'
import { updateCategory, useDispatch, useSelectedCategory } from '../../AppContext';
import Config from '../../config';
import "./ListCategories.css"

const { category_order, category_info } = Config;
const listCategories = category_order
// ItemType.Body,ItemType.Eye,ItemType.Mouth,
const ListCategories = () => {
  const selectedCategoryId = useSelectedCategory();
  const dispatch = useDispatch();

  return (
    <div className='list-categories'>
      {listCategories.map( (categoryId)=>{
        const category = category_info[categoryId] || {};
        const { name, key } = category;
        const handleClick = () => {
          dispatch(updateCategory(categoryId))
        }
        return (
          <div
            className={`category ${ selectedCategoryId === categoryId ? "selected" : "" }`}
            key={key}
            onClick={handleClick}
          >
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ListCategories
