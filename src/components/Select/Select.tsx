import { useState } from "react";


export type ItemType = {
    title: string
    value: string
  }

export type SelectPropsType = {
    value: string
    onChange:(value: string) => void
    items: ItemType[]
  };
  
  export function Select(props: SelectPropsType) {
    const[value, setValue] = useState<string>('STUDENTS')
    const[selected, setSelected] = useState<boolean>(true)

    const onClickNameHandler = () => {
          setSelected(!selected)
    }
  
    return (
      <div>
        <div onClick = {onClickNameHandler}>{value}</div>
        {!selected && props.items.map(el => <div>{el.title}</div>)}
      </div>
    );
  }
  