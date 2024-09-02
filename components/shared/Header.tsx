import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container'
import Image from 'next/image'
import {Button} from '../ui'
import { ArrowRight, CircleUser, ShoppingCart, User } from 'lucide-react';
import {Props} from './interfaces';

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' alt='Logo' width={45} height={45} />
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Лавка kitchen</h1>
                        <p className='text-sm text-gray-400'>Свежий взгляд на вкусную еду</p>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <Button variant='outline' className='flex items-center gap-1'>
                        <User size={16} />
                            Войти
                    </Button>
                    <div>
                        <Button className='group relative'>
                            <b>520р</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3' />
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                                <ShoppingCart size={16} className="relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                            <ArrowRight size={20} className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
                        </Button>
                    </div>
                </div>

            </Container>
        </header>
    )
}