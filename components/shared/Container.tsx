import { cn } from '@/lib/utils';
import React from 'react';
import {Props} from './interfaces';


export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};