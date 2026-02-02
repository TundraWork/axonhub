import type React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface TwoColumnAuthProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  rightFooter?: React.ReactNode;
  rightMaxWidthClassName?: string; // e.g. 'max-w-md'
}

export default function TwoColumnAuth({
  title,
  description,
  children,
  rightFooter,
  rightMaxWidthClassName = 'max-w-md',
}: TwoColumnAuthProps) {
  const { t } = useTranslation();
  return (
    <div className='mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14'>
      <div className='hidden lg:flex lg:flex-col lg:justify-center'>
        <div className='max-w-lg'>
          <div className='text-sm font-medium text-slate-600'>{t('auth.brand.title')}</div>
          <h2 className='mt-2 text-3xl font-semibold tracking-tight text-slate-900'>Railgun One</h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>{t('auth.brand.description')}</p>
        </div>
      </div>

      <div className='flex w-full flex-col items-center'>
        <div className={`w-full ${rightMaxWidthClassName}`}>
          <Card className='border-slate-200 bg-white shadow-sm'>
            <CardHeader className='px-6 pt-8 pb-6 sm:px-8'>
              <CardTitle className='text-2xl font-semibold tracking-tight text-slate-900'>{title}</CardTitle>
              {description ? <CardDescription className='mt-2 text-sm leading-relaxed text-slate-600'>{description}</CardDescription> : null}
            </CardHeader>
            <CardContent className='px-6 pb-8 sm:px-8'>{children}</CardContent>
          </Card>

          {rightFooter ? <div className='mt-6 text-center'>{rightFooter}</div> : null}
        </div>
      </div>
    </div>
  );
}
