import { Select } from "./Select";

export default {
    title: 'Accordion',
    component: Select
}

export const ModeSelectChanging = () => <Select value='STUDENTS' onChange = {()=> alert('Yo')} 
items={[{title:'Dimych', value: '1'}, {title:'Valera', value: '2'}, {title:'Artem', value:'3'}, {title:'Victor', value: '4'}]}/>







//     const [value, setValue] = useState<boolean>(true)
//     const onChangeHandler = () => {
//         setValue(!value)
//     }
//     return <Accordion titleValue={"Users"} collapsed={value} onChange={onChangeHandler}
//         items={[{title:'Dimych', value: '1'}, {title:'Valera', value: '2'}, {title:'Artem', value:'3'}, {title:'Victor', value: '4'}]}
//         onClick={(value)=> {(alert(`User with ${value} should be happy`))}}/>
// }