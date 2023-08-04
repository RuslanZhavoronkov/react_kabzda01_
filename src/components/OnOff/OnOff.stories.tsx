import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';



export default {
    title: 'OnOff stories',
    component: OnOff,
}

// const callback = action('on or off clicked')
export const OnModeSecret = () => <OnOff on={true} onChange={x => x}/> //включенный режим
export const OnMode = React.memo(OnModeSecret)

export const OffModeSecret = () => <OnOff on={false} onChange={x => x}/> //включенный режим
export const OffMode = React.memo(OffModeSecret)

export const ModeChangingSecret = () => {
    const [value, setValue]=useState<boolean>(true);
   return  <OnOff on={value} onChange={setValue} />;
}

export const ModeChanging = React.memo(ModeChangingSecret)

function action(arg0: string): (on: boolean) => void {
    throw new Error('Function not implemented.');
}
