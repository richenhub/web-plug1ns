// import { get as getItem } from 'minecraft-icon-items';
import { Image, ImageProps } from '@mantine/core';
import React from 'react';

import itemsById from './itemsByIds.json';

const format = {
    num: /^\d+$/,
    incompleteId: /^\d+:$/,
    id: /^\d+:\d+$/,
};

const isNumeric = (key: number | string) => typeof key === "number" || format.num.test(key);

type Item = {
    id: string;
    name: string;
    meta: number;
    type: number;
    icon: string;
    bukkit: string;
};

const get = (key: number | string): Item | undefined => {
    if (isNumeric(key)) {
        const numericKey = `${key}:0` as keyof typeof itemsById;

        return itemsById[numericKey] ?? itemsById['0:0'];
    }

    const stringKey = key as keyof typeof itemsById;

    return itemsById[stringKey] ?? itemsById['0:0'];
};

const useMinecraftImage = () => {
    const getImage = (id: number | string) => {
        const imageUrl = `data:image/png;base64,${get(id)?.icon}`;

        return React.createElement<ImageProps>(Image, { h: '20', w: '20', src: imageUrl });
    };

    return {
        getImage,
    };
};

export default useMinecraftImage;