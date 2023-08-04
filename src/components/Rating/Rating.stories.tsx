import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Rating, RatingValueType } from './Rating';



export default {
    title: 'Rating stories',
    component: Rating,
}


export const EmptyStarsSecret = () => <Rating value={0} onClick={x => x} />
export const EmptyStars = React.memo(EmptyStarsSecret)

export const RatingSecret1 = () => <Rating value={1} onClick={x => x} />
export const Rating1 = React.memo(RatingSecret1)

export const RatingSecret2 = () => <Rating value={2} onClick={x => x} />
export const Rating2 = React.memo(RatingSecret2)

export const RatingSecret3 = () => <Rating value={3} onClick={x => x} />
export const Rating3 = React.memo(RatingSecret3)

export const RatingSecret4 = () => <Rating value={4} onClick={x => x} />
export const Rating4 = React.memo(RatingSecret4)

export const RatingSecret5 = () => <Rating value={5} onClick={x => x} />
export const Rating5 = React.memo(RatingSecret5)


export const RatingChangeSecret = () => {
    const [rating, setRating]=useState<RatingValueType>(3);
   return  <Rating value={rating} onClick={setRating} />;
}

export const RatingChange = React.memo(RatingChangeSecret)