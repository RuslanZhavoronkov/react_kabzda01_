import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UncontrolledAccordion } from './UncontrolledAccordion';



export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}

// const callback = action('on or off clicked')
export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'} /> //включенный режим
export const UsersUncollapsedMode = () => <UncontrolledAccordion titleValue={'Users'} />

export const ModeChanging = () => {
    
   return  <UncontrolledAccordion titleValue={'Users'} />;
}

