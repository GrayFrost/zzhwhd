import dayjs from "dayjs";
import type { StaticImageData } from "next/image";

import zhuhaiImage from "../public/images/travel/zhuhai/1.jpg";
import changshaImage from "../public/images/travel/changsha/1.jpg";
import chongqingImage from '../public/images/travel/chongqing/06.png';
import chengduImage from '../public/images/travel/chengdu/05.png';
import wuhanImage from '../public/images/travel/wuhan/01.png';
import dongguanImage from '../public/images/travel/dongguan/03.png';
import guangzhouImage from '../public/images/travel/guangzhou/01.png';
import zhanjiangImage from '../public/images/travel/zhanjiang/01.png';
import shenzhenImage from '../public/images/travel/shenzhen/18.png';

export interface TravelData {
  id: string;
  lngLat: [number, number];
  name: string;
  image: string;
  imageStatic: StaticImageData;
  postUrl: string;
  description?: string;
  time: Date;
}

const travelData: TravelData[] = [
  {
    id: "shenzhen",
    name: "深圳",
    lngLat: [114.07, 22.55],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-shenzhen",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "chongqing",
    name: "重庆",
    lngLat: [106.54, 29.59],
    image: "/images/travel/chongqing/06.png",
    imageStatic: chongqingImage,
    postUrl: "/travel-chongqing",
    time: dayjs("2021-04-02").toDate(),
  },
  {
    id: "chengdu",
    name: "成都",
    lngLat: [104.06, 30.52],
    image: "/images/travel/chengdu/05.png",
    imageStatic: chengduImage,
    postUrl: "/travel-chengdu",
    time: dayjs("2024-04-06").toDate(),
  },
  {
    id: "wuhan",
    name: "武汉",
    lngLat: [114.31, 30.52],
    image: "/images/travel/wuhan/01.png",
    imageStatic: wuhanImage,
    postUrl: "/travel-wuhan",
    time: dayjs("2021-05-01").toDate(),
  },
  {
    id: "guangzhou",
    name: "广州",
    lngLat: [113.17, 23.08],
    image: "/images/travel/guangzhou/01.png",
    imageStatic: guangzhouImage,
    postUrl: "/travel-guangzhou",
    time: dayjs("2023-01-14").toDate(),
  },
  {
    id: "dongguan",
    name: "东莞",
    lngLat: [113.75, 23.16],
    image: "/images/travel/dongguan/03.png",
    imageStatic: dongguanImage,
    postUrl: "/travel-dongguan",
    time: dayjs("2023-02-18").toDate(),
  },
  {
    id: "zhanjiang",
    name: "湛江",
    lngLat: [110.35, 21.27],
    image: "/images/travel/zhanjiang/01.png",
    imageStatic: zhanjiangImage,
    postUrl: "/travel-zhanjiang",
    time: dayjs("2023-10-28").toDate(),
  },
  {
    id: "fuzhou",
    name: "福州",
    lngLat: [119.3, 26.08],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-fuzhou",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "xinjiang",
    name: "新疆",
    lngLat: [87.62, 43.82],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-xinjiang",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "changsha",
    name: "长沙",
    lngLat: [113.09, 28.21],
    image: "/images/travel/changsha/1.jpg",
    imageStatic: changshaImage,
    postUrl: "/travel-changsha",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "guizhou",
    name: "贵州",
    lngLat: [106.71, 26.57],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-guizhou",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "huizhou",
    name: "惠州",
    lngLat: [114.41, 23.09],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-huizhou",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "chaoshan",
    name: "潮汕",
    lngLat: [116.37, 23.09],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-chaoshan",
    time: dayjs("2024-08-02").toDate(),
  },
  {
    id: "zhuhai",
    name: "珠海",
    lngLat: [113.09, 22.55],
    image: "/images/travel/zhuhai/1.jpg",
    imageStatic: zhuhaiImage,
    postUrl: "/travel-zhuhai",
    time: dayjs("2023-06-22").toDate(),
  },
  {
    id: "shenzhen",
    name: "深圳",
    lngLat: [114.05, 22.54],
    image: "/images/travel/shenzhen/18.png",
    imageStatic: shenzhenImage,
    postUrl: "/travel-shenzhen",
    time: dayjs("2026-08-20").toDate(),
  },
];

export const getTravelData = async () => {
  return {
    data: travelData
  }
}