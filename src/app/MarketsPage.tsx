import { marketItems } from '../data/market';
import { MarketCard } from '../features/markets/MarketCard';
export function MarketsPage(){return <div><h1 className="text-3xl font-bold">Markets</h1><p className="mt-2 text-slate-500">Mock data prepared for replacement by a real market-data service.</p><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{marketItems.map(item=><MarketCard key={item.symbol} item={item}/>)}</div></div>}
