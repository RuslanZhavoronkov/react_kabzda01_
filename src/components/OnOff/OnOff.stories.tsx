import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';



export default {
    title: 'OnOff stories',
    component: OnOff,
}

// const callback = action('on or off clicked')
export const OnMode = () => <OnOff on={true} onChange={x => x}/> //включенный режим
export const OffMode = () => <OnOff on={false} onChange={x => x}/> //включенный режим

export const ModeChanging = () => {
    const [value, setValue]=useState<boolean>(true);
   return  <OnOff on={value} onChange={setValue} />;
}

function action(arg0: string): (on: boolean) => void {
    throw new Error('Function not implemented.');
}
