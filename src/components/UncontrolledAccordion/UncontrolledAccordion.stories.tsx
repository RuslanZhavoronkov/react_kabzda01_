import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UncontrolledAccordion } from './UncontrolledAccordion';



export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}

// const callback = action('on or off clicked')
export const MenuCollapsedModeSecret = () => <UncontrolledAccordion titleValue={'Menu'} /> //включенный режим
export const MenuCollapsedMode = React.memo(MenuCollapsedModeSecret)

export const UsersUncollapsedModeSecret = () => <UncontrolledAccordion titleValue={'Users'} />
export const UsersUncollapsedMode = React.memo(UsersUncollapsedModeSecret)

export const ModeChangingSecret = () => {
    
   return  <UncontrolledAccordion titleValue={'Users'} />;
}

export const ModeChanging = React.memo(ModeChangingSecret)