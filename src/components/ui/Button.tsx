import type { ButtonHTMLAttributes, ReactNode } from 'react';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: 'primary'|'secondary'|'ghost' };
export function Button({ children, variant='primary', className='', ...props }: Props) {
  const styles = { primary:'bg-seb-700 text-white hover:bg-seb-600', secondary:'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100', ghost:'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' };
  return <button className={`focus-ring rounded-lg px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`} {...props}>{children}</button>;
}
