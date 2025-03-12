interface MonthItem {
  month: number;
  images: { url: string; description?: "" }[];
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
          { url: "/images/svelte/01-1.png", description: "" },
          { url: "/images/svelte/01-2.png", description: "" },
          { url: "/images/svelte/02-1.png", description: "" },
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
          {
            url: "/images/svelte/03-1.png",
            description: "",
          },
        ],
      },
    ],
  },
];
