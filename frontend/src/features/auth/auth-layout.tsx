import { LanguageSwitch } from '@/components/language-switch';

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='relative min-h-screen bg-slate-50 text-slate-900'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-white to-slate-50' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.06)_0%,transparent_45%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(2,132,199,0.08)_0%,transparent_40%)]' />
      </div>

      <nav className='sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/70 bg-white/80 px-6 py-4 backdrop-blur'>
        <div className='flex items-center space-x-3'>
          <img src='/logo.png' alt='Railgun One logo' className='h-8 w-8 rounded-sm ring-1 ring-slate-200' />
          <h1 className='text-lg font-semibold tracking-tight text-slate-900'>Railgun One</h1>
        </div>

        <div className='flex items-center space-x-2'>
          <LanguageSwitch />
        </div>
      </nav>

      <main className='relative z-10 min-h-[calc(100vh-64px)]'>{children}</main>
    </div>
  );
}
