import React, { useState } from "react";
import "./App.css";
import { Accordion, ItemType } from "./components/Acoordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";



function App() {


  let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState<boolean>(false)
  let [items, setItems] = useState<ItemType[]>(
    [
      { title: 'Sushi', value: '1' },
      { title: 'Milk', value: '2' },
      { title: 'Aqua', value: '3' }
    ]
  )

  const onChangeCollapsedHandler = () => {
    setAccordionCollapsed(!accordionCollapsed)
  }

  const onClick = (value: any) => {
    console.log(value)
  }

  return (
    <div className={"App"}>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating />
      <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={onChangeCollapsedHandler} items={items} onClick={onClick} />
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      
    </div>
  );
}

export default App;






{/* ---------------------------------------------------------------------------------------------------------------------------------------------- */ }

{/* <OnOff /><OnOff on = {switchOn}  onChange={setSwitchOn}/>
      <OnOff />
      <OnOff />
      <OnOff />
      <UncontrolledAccordion titleValue={"Users"} /> */}
{/* <OnOff />
      <UncontrolledAccordion titleValue={"Menu"} /> */}
{/* <Rating value={ratingValue}  onClick={setRatingValue}/> */ }

{/* <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true} /> */}


{/* <OnOff on={true} />
      <OnOff on={false} /> */}

{/* <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      Article 3 */}


// type PageTitlePropsType = {
//   title: string;
// };

// function PageTitle(props: PageTitlePropsType) {
//   console.log("AppTitle rendering");
//   return <h1>{props.title}</h1>;
// }

// export default App;//kndclkdnsckn
