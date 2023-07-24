import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UncontrolledOnOff } from './UncontrolledOnOff';



export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

// const callback = action('on or off clicked')
export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={x => x}/> //включенный режим
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={x => x}/> //включенный режим

export const DefaultInputValue = () => <input defaultValue = {'yo'} /> //включенный режим



export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>


export const ModeChanging = () => {
    const [value, setValue]=useState<boolean>(true);
   return  <UncontrolledOnOff  onChange={setValue} />;
}

