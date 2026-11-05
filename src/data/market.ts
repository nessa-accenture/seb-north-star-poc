export type MarketItem = { name: string; symbol: string; value: string; change: number };
export const marketItems: MarketItem[] = [
  { name: 'OMX Stockholm 30', symbol: 'OMXS30', value: '2,648.42', change: 0.82 },
  { name: 'Euro Stoxx 50', symbol: 'STOXX50E', value: '5,218.10', change: -0.24 },
  { name: 'EUR / SEK', symbol: 'EURSEK', value: '11.03', change: 0.12 },
  { name: 'Ericsson B', symbol: 'ERIC B', value: '84.62 SEK', change: 1.34 }
];
