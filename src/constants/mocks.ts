interface SingleNews {
  id: string;
  title: string;
  description: string;
  img: string;
}

export const SingleNewsMockObject: SingleNews[] = [
  {
    id: '1',
    title: 'DeFi Needs More Than ‘Synthetic High-Yield Products’: Dragonfly’s Haseeb Qureshi',
    description:
      'The venture capitalist discusses non-ZIRP monetary policy, rebooting crypto’s market structure and why Ponzi bubbles always burst.',
    img: 'https://op-official-us-1251101074.cos.na-siliconvalley.myqcloud.com/en/20240326094231684.jpg',
  },
  {
    id: '2',
    title: 'Stock & crypto markets are in a downtrend thanks to the Donald Trump tariff war',
    description:
      'MicroStrategy CEO Michael Saylor says the stock and crypto markets are in a downtrend thanks to the Donald Trump tariff war.',
    img: 'https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-146423736-1.jpg?w=563',
  },
];
