'use client'

import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './FilteredCheckbox';
import { Input } from '../ui';

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceHolder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceHolder = 'Поиск ...',
    onChange,
    defaultValue,
    className,
    
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  }

  const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())): defaultItems
  return (
    <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {
            showAll && (
                <div className='mb-5'>
                    <Input onChange={e => onChangeSearchInput(e.target.value)} placeholder={searchInputPlaceHolder} className='bg-gray-50 border-none'></Input>
                </div>
            )
        }

        <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
            {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        onCheckedChange={(ids) => console.log(ids)}
                        checked={false}
                    />
                ))
            }
        </div>
        {
            items.length > limit && (
                <div className={showAll ? 'border-top border-top neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
                        {showAll ? '- Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )
        }
    </div>
  )
};