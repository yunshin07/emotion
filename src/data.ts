export type DataType = {
  id: number;
  topic: string;
  icons: {
    id: number;
    desc: string;
  }[];
};

export const basePath = 'assets/htmls/images';

export const iconTranslation = [
  {
    id: 'thanks',
    desc: '고마워요.',
  },
  {
    id: 'cool',
    desc: '멋져요.',
  },
  {
    id: 'funny',
    desc: '웃겨요.',
  },
  {
    id: 'angry',
    desc: '화나요.',
  },
  {
    id: 'sad',
    desc: '슬퍼요.',
  },
  {
    id: 'embarrased',
    desc: '부끄러워요.',
  },
  {
    id: 'good',
    desc: '좋아요.',
  },
  {
    id: 'ok',
    desc: '괜찮아요.',
  },
  {
    id: 'afraid',
    desc: '무서워요.',
  },
  {
    id: 'nonsense',
    desc: '어이없어요.',
  },
  {
    id: 'envy',
    desc: '부러워요.',
  },
  {
    id: 'shame',
    desc: '안타까워요.',
  },
  {
    id: 'touching',
    desc: '감동이예요.',
  },
];

export const iconData: DataType[] = [
  {
    id: 0,
    topic: `정치`,
    icons: [
      {
        id: 0,
        desc: `thanks`,
      },
      {
        id: 1,
        desc: `cool`,
      },
      {
        id: 2,
        desc: `funny`,
      },
      {
        id: 3,
        desc: `angry`,
      },
      {
        id: 4,
        desc: `sad`,
      },
      {
        id: 5,
        desc: `embarrased`,
      },
    ],
  },
  {
    id: 1,
    topic: `경제`,
    icons: [
      {
        id: 0,
        desc: `good`,
      },
      {
        id: 1,
        desc: `thanks`,
      },
      {
        id: 2,
        desc: `ok`,
      },
      {
        id: 3,
        desc: `envy`,
      },
      {
        id: 4,
        desc: `angry`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `embarrased`,
      },
    ],
  },
  {
    id: 2,
    topic: `사회`,
    icons: [
      {
        id: 0,
        desc: `good`,
      },
      {
        id: 1,
        desc: `thanks`,
      },
      {
        id: 2,
        desc: `ok`,
      },
      {
        id: 3,
        desc: `funny`,
      },
      {
        id: 4,
        desc: `angry`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `nonsense`,
      },
      {
        id: 7,
        desc: `afraid`,
      },
    ],
  },
  {
    id: 3,
    topic: `생활 문화`,
    icons: [
      {
        id: 0,
        desc: `good`,
      },
      {
        id: 1,
        desc: `ok`,
      },
      {
        id: 2,
        desc: `funny`,
      },
      {
        id: 3,
        desc: `envy`,
      },
      {
        id: 4,
        desc: `angry`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `nonsense`,
      },
      {
        id: 6,
        desc: `afraid`,
      },
    ],
  },
  {
    id: 4,
    topic: `IT/과학`,
    icons: [
      {
        id: 0,
        desc: `thanks`,
      },
      {
        id: 1,
        desc: `ok`,
      },
      {
        id: 2,
        desc: `funny`,
      },
      {
        id: 3,
        desc: `envy`,
      },
      {
        id: 4,
        desc: `angry`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `nonsense`,
      },
    ],
  },
  {
    id: 5,
    topic: `세계`,
    icons: [
      {
        id: 0,
        desc: `thanks`,
      },
      {
        id: 1,
        desc: `cool`,
      },
      {
        id: 2,
        desc: `ok`,
      },
      {
        id: 3,
        desc: `funny`,
      },
      {
        id: 4,
        desc: `envy`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `nonsense`,
      },
      {
        id: 7,
        desc: `afraid`,
      },
      {
        id: 8,
        desc: `embarrased`,
      },
    ],
  },
  {
    id: 6,
    topic: `연예`,
    icons: [
      {
        id: 0,
        desc: `good`,
      },
      {
        id: 1,
        desc: `cool`,
      },
      {
        id: 2,
        desc: `ok`,
      },
      {
        id: 3,
        desc: `funny`,
      },
      {
        id: 4,
        desc: `angry`,
      },
      {
        id: 5,
        desc: `sad`,
      },
      {
        id: 6,
        desc: `nonsense`,
      },
      {
        id: 7,
        desc: `shame`,
      },
    ],
  },
  {
    id: 7,
    topic: `스포츠`,
    icons: [
      {
        id: 0,
        desc: `good`,
      },
      {
        id: 1,
        desc: `cool`,
      },
      {
        id: 2,
        desc: `ok`,
      },
      {
        id: 3,
        desc: `envy`,
      },
      {
        id: 4,
        desc: `sad`,
      },
      {
        id: 5,
        desc: `nonsense`,
      },
      {
        id: 6,
        desc: `afraid`,
      },
      {
        id: 7,
        desc: `shame`,
      },
    ],
  },
];

export const aTypeIcons = [
  {
    id: 0,
    desc: `cool`,
  },
  {
    id: 1,
    desc: `good`,
  },
  {
    id: 2,
    desc: `touching`,
  },
  {
    id: 3,
    desc: `angry`,
  },
  {
    id: 4,
    desc: `sad`,
  },
]
