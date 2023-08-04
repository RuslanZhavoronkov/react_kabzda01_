import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UncontrolledOnOff } from './UncontrolledOnOff';



export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

// const callback = action('on or off clicked')
export const OnModeSecret = () => <UncontrolledOnOff defaultOn={true} onChange={x => x}/> //включенный режим
export const OnMode = React.memo(OnModeSecret)


export const OffModeSecret = () => <UncontrolledOnOff defaultOn={false} onChange={x => x}/> //включенный режим
export const OffMode = React.memo(OffModeSecret)

export const DefaultInputValueSecret = () => <input defaultValue = {'yo'} /> //включенный режим
export const DefaultInputValue = React.memo(DefaultInputValueSecret)



export const BugModeSecret = () => <div>Unsync when change defaultValue when already rendered</div>
export const BugMode = React.memo(BugModeSecret)


export const ModeChangingSecret = () => {
    const [value, setValue]=useState<boolean>(true);
   return  <UncontrolledOnOff  onChange={setValue} />;
}

export const ModeChanging = React.memo(ModeChangingSecret)
