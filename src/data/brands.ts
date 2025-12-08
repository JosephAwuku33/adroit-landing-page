import {
  type Transition,
  type TargetAndTransition,
  type VariantLabels,
} from "motion/react";

type Brand = {
  name: string;
  imgUrl: string;
  initial: boolean | TargetAndTransition | VariantLabels | undefined;
  whileInView: TargetAndTransition | VariantLabels | undefined;
  transition: Transition;
};
export const brands: Brand[] = [
  {
    name: "MTN",
    imgUrl: "https://adroit360.com/wp-content/uploads/2021/01/3.png",
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Coca Cola",
    imgUrl: "https://adroit360.com/wp-content/uploads/2023/06/6.png",
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  },
  {
    name: "Magnate",
    imgUrl:
      "https://adroit360.com/wp-content/uploads/2021/01/MAGNATE-copy_heightx80.png",
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
  },

  {
    name: "IFC",
    imgUrl: "https://www.ifpri.org/wp-content/uploads/2020/03/ifc.png",
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Ghana Bar Association",
    imgUrl: "https://adroit360.com/wp-content/uploads/2023/06/gba.png",
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeIn" },
  },
  {
    name: "Gulf Energy",
    imgUrl:
      "https://adroit360.com/wp-content/uploads/2021/01/GULF-logo-sized.png",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },

  {
    name: "Access Bank",
    imgUrl: "https://adroit360.com/wp-content/uploads/2021/01/2.png",
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Texas Drilling",
    imgUrl:
      "https://res.cloudinary.com/dsttnkan0/image/upload/fl_preserve_transparency/v1765212036/texas_drilling_znw44e.jpg?_s=public-apps",
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Catharina Foundation",
    imgUrl:
      "https://catharinascarefoundation.com/wp-content/uploads/2020/05/Catharinas-Care-Foundation-logo-favicon-144.jpg",
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
];
