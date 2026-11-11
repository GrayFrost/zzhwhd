interface MonthItem {
  month: number;
  images: { url: string; description?: string }[];
}

interface GalleryItem {
  year: number;
  months: MonthItem[];
}

export const gallery: GalleryItem[] = [
  {
    year: 2025,
    months: [
      {
        month: 1,
        images: [
          { url: "/images/years/2025/01.jpg", description: "完美的橙子" },
          { url: "/images/years/2025/02.jpg", description: "试礼服" },
          { url: "/images/years/2025/03.jpg", description: "毛主席" },
        ],
      },
    ],
  },
  {
    year: 2024,
    months: [
      {
        month: 1,
        images: [
          { url: "/images/years/2024/01.jpg", description: "" },
          { url: "/images/years/2024/02.jpg", description: "" },
          { url: "/images/years/2024/03.jpg", description: "" },
        ],
      },
    ],
  },
  {
    year: 2023,
    months: [
      {
        month: 1,
        images: [
          { url: "/images/years/2023/01.jpg", description: "" },
          { url: "/images/years/2023/02.jpg", description: "" },
          { url: "/images/years/2023/03.jpg", description: "" },
        ],
      },
    ],
  },
  {
    year: 2022,
    months: [
      {
        month: 1,
        images: [
          { url: "/images/years/2022/01.jpg", description: "" },
          { url: "/images/years/2022/02.jpg", description: "" },
          { url: "/images/years/2022/03.jpg", description: "" },
        ],
      },
    ],
  },
  {
    year: 2021,
    months: [
      {
        month: 1,
        images: [
          { url: "/images/years/2021/01.jpg", description: "" },
          { url: "/images/years/2021/02.jpg", description: "" },
          { url: "/images/years/2021/03.jpg", description: "" },
        ],
      },
    ],
  },
  {
    year: 2020,
    months: [
      {
        month: 1,
        images: [
          { url: "/images/years/2020/01.jpg", description: "" },
          { url: "/images/years/2020/02.jpg", description: "" },
          { url: "/images/years/2020/03.jpg", description: "" },
        ],
      },
    ],
  },
];
