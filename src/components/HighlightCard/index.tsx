import { ReactNode } from 'react';

interface HighlightCardProps {
    children: ReactNode;
    title: string;
}

export const HighlightCard = ({ children, title }: HighlightCardProps) => {
    return (
        <div className='h-full bg-white rounded-lg p-6 min-h-[155px] flex flex-col justify-between'>
            <div className='text-primary-main pb-4'>{title}</div>
            <div>{children}</div>
        </div>
    );
};
