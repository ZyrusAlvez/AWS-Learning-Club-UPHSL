import { EventType } from "@/component/UpcomingEvent/Card"

type Event = {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  type: EventType;
  pictures: string;
};

export const events: Event[] = [
  {
    title: "Meet Magento Philippines",
    subtitle:
      "A major ecommerce conference bringing together students, developers, and industry professionals to explore modern online commerce. The event features expert talks, technical sessions, and real-world case studies focused on Magento, Adobe Commerce, and digital business growth.",
    date: "November 2025",
    location: "The Blueleaf, McKinley Hill, Taguig City",
    type: EventType.SEMINAR,
    pictures: "/event/MMPH25",
  },
  {
    title: "YGG Play Summit",
    subtitle:
      "A student-centered summit focused on gaming, Web3, and emerging digital careers. The event includes talks and discussions that introduce participants to blockchain gaming, esports, and opportunities within the global gaming industry.",
    date: "November 2025",
    location: "SM Aura, Bonifacio Global City",
    type: EventType.COMMUNITY,
    pictures: "/event/YPS2025",
  },
  {
    title: "Zero to 10X Developer",
    subtitle:
      "A hands-on developer event designed to help students strengthen their programming skills. Sessions focus on practical development workflows, problem-solving, and career growth to prepare participants for real-world software projects.",
    date: "October 2025",
    location: "Arthaland Century Pacific Tower, BGC",
    type: EventType.WORKSHOP,
    pictures: "/event/ZeroTo10X",
  },
  {
    title: "CCS Orientation 2025",
    subtitle:
      "An official orientation program welcoming new College of Computer Studies students. The event introduces academic guidelines, student organizations, and available resources to help students start their college journey with confidence.",
    date: "September 2025",
    location: "Performing Arts Theater, UPHSL",
    type: EventType.SEMINAR,
    pictures: "/event/CCS Orientation 2025",
  },
  {
    title: "TechCon 2025",
    subtitle:
      "A student-led technology conference highlighting current trends in computing and innovation. It features talks and workshops on software, cloud technologies, and emerging tools that encourage learning and collaboration.",
    date: "April 2025",
    location: "Performing Arts Theater, UPHSL",
    type: EventType.SEMINAR,
    pictures: "/event/TechCon 2025",
  },
  {
    title: "Ideathon 2025",
    subtitle:
      "A competitive ideation event where students collaborate to solve real-world challenges. Participants develop, refine, and pitch innovative ideas, building skills in creativity, teamwork, and problem solving.",
    date: "April 2025",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.COMPETITION,
    pictures: "/event/Ideathon 2025",
  },
];
