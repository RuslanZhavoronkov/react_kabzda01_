import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired');
const onClickCallback = action ('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback} />;
export const UserCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
    items={[{title:'Dimych', value: '1'}, {title:'Valera', value: '2'}, {title:'Artem', value:'3'}, {title:'Victor', value: '4'}]}
    onClick={onClickCallback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    const onChangeHandler = () => {
        setValue(!value)
    }
    return <Accordion titleValue={"Users"} collapsed={value} onChange={onChangeHandler}
        items={[{title:'Dimych', value: '1'}, {title:'Valera', value: '2'}, {title:'Artem', value:'3'}, {title:'Victor', value: '4'}]}
        onClick={(value)=> {(alert(`User with ${value} should be happy`))}}/>
}