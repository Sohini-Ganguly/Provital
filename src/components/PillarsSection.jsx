// import React from "react";
// import PillarCard from "./PillarCard";
// import "../styles/PillarsSection.scss";

// const pillars = [
//   {
//     tab: "Nutrition",
//     icon: "/images/nutrition.jpg",
//     badgeIcon: "/icons/bp.svg",
//     stat: "121/80 mmHg",
//     title: "Nutrition",
//     description: "Whole food, plant-predominant diet to prevent, treat, and reverse illness.",
//   },
//   {
//     tab: "Physical activity",
//     icon: "/images/exercise.jpg",
//     badgeIcon: "/icons/time.svg",
//     stat: "32 minutes",
//     title: "Physical activity",
//     description: "Regular activity helps weight management, mental health, and more.",
//   },
//   {
//     tab: "Restorative sleep",
//     icon: "/images/sleep.jpg",
//     badgeIcon: "/icons/sleep.svg",
//     stat: "8 hours",
//     title: "Restorative sleep",
//     description: "Consistent, quality sleep supports brain and body health.",
//   },
//   {
//     tab: "Stress management",
//     icon: "/images/stress.jpg",
//     badgeIcon: "/icons/hr.svg",
//     stat: "60 bpm",
//     title: "Stress management",
//     description: "Manage stress to improve overall mental and physical well-being.",
//   },
//   {
//     tab: "Social connection",
//     icon: "/images/social.jpg",
//     badgeIcon: "/icons/heart.svg",
//     stat: "Feeling better",
//     title: "Social connection",
//     description: "Meaningful relationships reduce chronic disease risk.",
//   },
//   {
//     tab: "Substance abuse",
//     icon: "/images/substance.jpg",
//     badgeIcon: "/icons/days.svg",
//     stat: "62 days",
//     title: "Substance abuse",
//     description: "Avoid harmful substances to improve long-term health.",
//   },
// ];

// const PillarsSection = ({ cardRefs }) => {
//   return (
//     <div className="pillar-cards-row">
//       {pillars.map((pillar, index) => (
//         <PillarCard
//           key={index}
//           ref={(el) => (cardRefs.current[index] = el)}
//           {...pillar}
//         />
//       ))}
//     </div>
//   );
// };

// export default PillarsSection;
