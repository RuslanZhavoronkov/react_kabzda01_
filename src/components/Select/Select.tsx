import { useState, KeyboardEvent, useEffect } from "react";
import s from './Select.module.css'
import React from "react";


export type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  value?: any
  onChange: (value: string) => void
  items: ItemType[]
};

export const SelectSecret = (props: SelectPropsType) => {
  // const[value, setValue] = useState<string>('Students')
  // const[selected, setSelected] = useState<boolean>(true)

  // const onClickNameHandler = () => {
  //       setSelected(!selected)
  // }

  const [active, setActive] = useState(true)
  const [hoveredElementValue, setHoveredElementValue] = useState<any>(props.value)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])


  const selectedItem = props.items.find(el => el.value === props.value)
  const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

  const toggleItems = () => setActive(!active);

  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  const onMouseHandler = (newValue: any) => {
    setHoveredElementValue(newValue)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLSpanElement>) => {

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1]

          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return;
          }
        }
      }
        if(!selectedItem) {
           props.onChange(props.items[0].value)
        }
       
    }

    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  return (

    <div className={s.select}>
      <span className={s.main} onClick={toggleItems} tabIndex={1}
        onKeyDown={onKeyDownHandler}>{selectedItem && selectedItem.title}</span>

      {active &&
        <div className={s.items}>
          {props.items.map(el => <div
            onMouseEnter={() => onMouseHandler(el.value)}
            className={hoveredItem === el ? `${s.item} ${s.selected}` : ''}
            onClick={() => onItemClick(el.value)}
            key={el.value}>{el.title}</div>)}
        </div>
      }

    </div>

  );
}



export const Select = React.memo(SelectSecret)