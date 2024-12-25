import { SiCodeforces, SiRust, SiStreamlit } from "react-icons/si";

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-500 h-500",
    titleClassName: "justify-end",
    img: "/blog1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

import {
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandPython,
} from "@tabler/icons-react";

export let projects = [
  {
    id: 1,
    title: "SubPaper",
    des: "SubPaper is an Android app that provides high-quality wallpapers from Reddit.",
    img: "/subpaper.jpeg",
    iconLists: [
      <IconBrandFlutter />,
      <IconBrandFirebase />,
      <IconBrandPython />,
    ],
    link: "app.saikat.in/subpaper",
    href: "https://app.saikat.in/subpaper",
  },
  {
    id: 2,
    title: "Otter",
    des: "Data-Driven Financial Insights",
    img: "/otter.png",
    iconLists: [<IconBrandFlutter />, <IconBrandFirebase />],
    link: "github.com",
    href: "https://github.com/dis70rt/otter",
  },
  {
    id: 3,
    title: "snake-rs",
    des: "A simple Snake Game built in Rust using the egui crate.",
    img: null,
    iconLists: [<SiRust />],
    link: "github.com",
    href: "https://github.com/dis70rt/snake-rs",
  },
  {
    id: 4,
    title: "cfrps",
    des: "Streamlit Framework, to get random Codeforces problem sets.",
    img: "/cfrps.png",
    iconLists: [<SiStreamlit />, <IconBrandPython />, <SiCodeforces />],
    link: "codefrps.streamlit.app",
    href: "https://codefrps.streamlit.app",
  },
];
