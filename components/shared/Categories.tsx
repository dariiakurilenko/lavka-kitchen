'use client'
import { cn } from '@/lib/utils';
import React from 'react';
import {Props} from './interfaces';
import { useCategoryStore } from '@/store/category';


const categs = [
    { id: 1, name: 'Салаты' },
    { id: 2, name: 'Закуски' },
    { id: 3, name: 'Десерты' },
    { id: 4, name: 'Напитки' },
    { id: 5, name: 'Кофе' },
]; 

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                categs.map(({name, id}, index)  => (
                    <a className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                        href = {`/#${name}`}
                        key={index}>
                        <button>{name }</button>
                    </a>
                ))
            }

        </div>
    )
}