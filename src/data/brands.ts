// export const brands = [
//   {
//     name: "MTN",
//     imgUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/960px-New-mtn-logo.jpg?20220217143058",
//   },

//   {
//     name: "Coca Cola",
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPM7J9OpT60ApwcCZG_4NAUORNfpRZczt5hQ&s",
//   },

//   {
//     name: "IFC",
//     imgUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/International_Finance_Corporation_logo.svg/2560px-International_Finance_Corporation_logo.svg.png?20210711041020",
//   },

//   {
//     name: "Vitamilk",
//     imgUrl: "https://images.seeklogo.com/logo-png/52/1/vitamilk-logo-png_seeklogo-527320.png"
//   },
// ];
import { type Transition, type TargetAndTransition, type VariantLabels } from "motion/react";

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
    name: "Airtel Tigo",
    imgUrl: "https://adroit360.com/wp-content/uploads/2021/01/4.png",
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
    name: "World Energy",
    imgUrl:
      "https://adroit360.com/wp-content/uploads/2021/01/1796-x-430-EM.png",
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  {
    name: "Legon Cities",
    imgUrl:
      "https://adroit360.com/wp-content/uploads/2021/01/LCFC-Logo-resized-60.png",
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
];
