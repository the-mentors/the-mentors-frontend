export const CATEGORIES = [
  {
    name: "프로그래밍",
    code: 1000,
    createdAt: "2023-03-27T14:52:37.315609",
    updatedAt: "2023-03-27T14:52:37.315609",
    subCategories: [
      {
        name: "백엔드",
        code: 1100,
        createdAt: "2023-03-27T14:52:37.318609",
        updatedAt: "2023-03-27T14:52:37.318609",
      },
      {
        name: "프론트엔드",
        code: 1200,
        createdAt: "2023-03-27T14:52:37.318609",
        updatedAt: "2023-03-27T14:52:37.318609",
      },
      {
        name: "AI",
        code: 1300,
        createdAt: "2023-03-27T14:52:37.319608",
        updatedAt: "2023-03-27T14:52:37.319608",
      },
      {
        name: "데이터 엔지니어",
        code: 1400,
        createdAt: "2023-03-27T14:52:37.319608",
        updatedAt: "2023-03-27T14:52:37.319608",
      }
    ]
  },
  {
    name: "교육",
    code: 2000,
    createdAt: "2023-03-27T14:52:37.316609",
    updatedAt: "2023-03-27T14:52:37.316609",
    subCategories: [
      {
        name: "수학",
        code: 2100,
        createdAt: "2023-03-27T14:52:37.320609",
        updatedAt: "2023-03-27T14:52:37.320609",

      },
      {
        name: "영어",
        code: 2200,
        createdAt: "2023-03-27T14:52:37.320609",
        updatedAt: "2023-03-27T14:52:37.320609",
      },
      {
        name: "과학",
        code: 2300,
        createdAt: "2023-03-27T14:52:37.321608",
        updatedAt: "2023-03-27T14:52:37.321608",
      }
    ],
  },
  {
    name: "투자",
    code: 3000,
    createdAt: "2023-03-27T14:52:37.317609",
    updatedAt: "2023-03-27T14:52:37.317609",
    subCategories: [
      {
        name: "부동산",
        code: 3100,
        createdAt: "2023-03-27T14:52:37.321608",
        updatedAt: "2023-03-27T14:52:37.321608",
      },
      {
        name: "주식",
        code: 3200,
        createdAt: "2023-03-27T14:52:37.321608",
        updatedAt: "2023-03-27T14:52:37.321608",
      },
      {
        nam: "암호화폐",
        code: 3300,
        createdAt: "2023-03-27T14:52:37.322608",
        updatedAt: "2023-03-27T14:52:37.322608",
      }
    ]
  },
];



export const SELECT_CATEGORIES = [
  {
    label: "프로그래밍",
    value: 1000,
    parent: 0,
  },
  {
    label: "백엔드",
    value: 1100,
    parent: 1000
  },

  {
    label: "프론트엔드",
    value: 1200,
    parent: 1000
  },
  {
    label: "AI",
    value: 1300,
    parent: 1000
  },
  {
    label: "데이터 엔지니어",
    value: 1400,
    parent: 1000
  }
  ,
  {
    label: "교육",
    value: 2000,
    parent: 0,
  },
  {
    label: "수학",
    value: 2100,
    parent: 2000,

  },
  {
    label: "영어",
    value: 2200,
    parent: 2000,
  },
  {
    label: "과학",
    value: 2300,
    parent: 2000,
  },

  {
    label: "투자",
    value: 3000,
    parent: 0
  },
  {
    label: "부동산",
    value: 3100,
    parent: 3000

  },
  {
    label: "주식",
    value: 3200,
    parent: 3000
  },
  {
    label: "암호화폐",
    value: 3300,
    parent: 3000
  }
];
