import dayjs from "dayjs";

interface TravelData {
  id: string;
  lngLat: [number, number];
  name: string;
  image: string;
  postUrl: string;
  description?: string;
  time: Date;
}

export const travelData: TravelData[] = [
  {
    id: "shenzhen",
    name: "深圳",
    lngLat: [114.07, 22.55],
    image: "",
    postUrl: "/travel-shenzhen",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "chongqing",
    name: "重庆",
    lngLat: [106.54, 29.59],
    image: "",
    postUrl: "/travel-chongqing",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "chengdu",
    name: "成都",
    lngLat: [104.06, 30.52],
    image: "",
    postUrl: "/travel-chengdu",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "fuzhou",
    name: "福州",
    lngLat: [119.3, 26.08],
    image: "",
    postUrl: "/travel-fuzhou",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "xinjiang",
    name: "新疆",
    lngLat: [87.62, 43.82],
    image: "",
    postUrl: "/travel-xinjiang",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "changsha",
    name: "长沙",
    lngLat: [113.09, 28.21],
    image: "",
    postUrl: "/travel-changsha",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "dongguan",
    name: "东莞",
    lngLat: [113.75, 23.16],
    image: "",
    postUrl: "/travel-dongguan",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "guizhou",
    name: "贵州",
    lngLat: [106.71, 26.57],
    image: "",
    postUrl: "/travel-guizhou",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "wuhan",
    name: "武汉",
    lngLat: [114.31, 30.52],
    image: "",
    postUrl: "/travel-wuhan",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "huizhou",
    name: "惠州",
    lngLat: [114.41, 23.09],
    image: "",
    postUrl: "/travel-huizhou",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "chaoshan",
    name: "潮汕",
    lngLat: [116.37, 23.09],
    image: "",
    postUrl: "/travel-chaoshan",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "zhuhai",
    name: "珠海",
    lngLat: [113.09, 22.55],
    image: "",
    postUrl: "/travel-zhuhai",
    time: dayjs("2024-08-02").toDate(),
  },
];
