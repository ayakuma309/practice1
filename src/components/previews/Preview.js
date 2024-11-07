import React from 'react';
import { useSelectedItems } from '../../AppContext';
import { ItemType } from '../../consts';
import Item from './Item';
import "./Preview.css";

const Preview = () => {
  const selectedItem = useSelectedItems();
  return (
    <>
      <div
        className='preview-view'
        id='target-component'
        style={{ backgroundColor: "#fff" }}
      >
        <Item type={ItemType.Eyes} id={selectedItem[ItemType.Eyes]} />
        <Item type={ItemType.Mouth} id={selectedItem[ItemType.Mouth]}/>
        <Item type={ItemType.Body} id={selectedItem[ItemType.Body]}/>
      </div>
    </>
  )
}

export default Preview;
