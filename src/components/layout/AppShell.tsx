import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
const nav = [{to:'/',label:'Overview'},{to:'/chat',label:'Chat'},{to:'/markets',label:'Markets'}];
export function AppShell() {
  const [dark,setDark] = useState(false);
  useEffect(()=>{ document.documentElement.classList.toggle('dark',dark); },[dark]);
  return <div className="min-h-screen">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded bg-seb-700 text-sm font-black text-white">SEB</div><div><p className="text-sm font-bold">North Star</p><p className="text-xs text-slate-500">Financial market assistant</p></div></div>
        <button className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm dark:border-slate-700" onClick={()=>setDark(v=>!v)} aria-label="Toggle colour theme">{dark?'Light':'Dark'} mode</button>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6"><Outlet /></main>
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 sm:static sm:mx-auto sm:mt-4 sm:max-w-7xl sm:border sm:border-x-0">
      <div className="mx-auto flex max-w-xl justify-around p-2">{nav.map(item=><NavLink key={item.to} end={item.to==='/'} to={item.to} className={({isActive})=>`focus-ring rounded-lg px-5 py-3 text-sm font-semibold ${isActive?'bg-seb-50 text-seb-700 dark:bg-seb-900 dark:text-emerald-200':'text-slate-500'}`}>{item.label}</NavLink>)}</div>
    </nav>
  </div>;
}
