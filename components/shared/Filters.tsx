import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './Title';
import { FilterCheckbox } from './FilteredCheckbox';
import { Input } from '../ui';
import { RangeSlider } from './RangeSlider';
import { CheckboxFilterGroup } from './CheckboxFilterGroup';
import {Props} from './interfaces';



export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>


        <div className='flex flex-col gap-5'>
            <FilterCheckbox text='Новинки' value='1' />
            <FilterCheckbox text='То, что любят все' value='2' />
        </div>


        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>
            <div className='flex gap-3 mb-5'>
                <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                <Input type='number' min={100} max={1000} placeholder='1000'/>
            </div>
            <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
        </div>

        <CheckboxFilterGroup 
            title='Ингредиенты' 
            className='mt-5' 
            limit={6} 
            items={[
                {
                    text: 'Помидоры',
                    value: '1',
                },
                {
                    text: 'Огурцы',
                    value: '2',
                },
                {
                    text: 'Соус',
                    value: '3',
                },
                {
                    text: 'Помидоры',
                    value: '1',
                },
                {
                    text: 'Огурцы',
                    value: '2',
                },
                {
                    text: 'Соус',
                    value: '3',
                },
                {
                    text: 'Помидоры',
                    value: '1',
                },
                {
                    text: 'Огурцы',
                    value: '2',
                },
                {
                    text: 'Соус',
                    value: '3',
                },
                {
                    text: 'Помидоры',
                    value: '1',
                },
                {
                    text: 'Огурцы',
                    value: '2',
                },
                {
                    text: 'Соус',
                    value: '3',
                },
                {
                    text: 'Помидоры',
                    value: '1',
                },
                {
                    text: 'Огурцы',
                    value: '2',
                },
                {
                    text: 'Соус',
                    value: '3',
                },
            ]} 
            defaultItems={[
                {
                    text: 'Помидоры',
                    value: '1',
                },
                {
                    text: 'Огурцы',
                    value: '2',
                },
                {
                    text: 'Соус',
                    value: '3',
                },
            ]} />

    </div>
  )
};