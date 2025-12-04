import React from "react";
import { motion } from "framer-motion";

const reviewsData = [
  {
    id: 1,
    name: "Aarav Das",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
    text: "CodeKids course helped me learn JavaScript super easily!",
    date: "2025-11-30",
  },
  {
    id: 2,
    name: "Megha Roy",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 4,
    text: "Loved the interactive exercises, really fun and educational.",
    date: "2025-11-28",
  },
  {
    id: 3,
    name: "Ritik Sharma",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
    rating: 5,
    text: "Best course for beginners, highly recommend to all kids.",
    date: "2025-11-25",
  },
  {
    id: 4,
    name: "Tania Sen",
    photo: "https://randomuser.me/api/portraits/women/40.jpg",
    rating: 5,
    text: "Amazing content and super clear explanations!",
    date: "2025-11-20",
  },
  {
    id: 5,
    name: "Kabir Khan",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 4,
    text: "I feel confident now to build my own projects.",
    date: "2025-11-18",
  },
  // New Reviews
  {
    id: 6,
    name: "Anika Roy",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    text: "The teachers explained everything step by step, very patient and helpful!",
    date: "2025-11-15",
  },
  {
    id: 7,
    name: "Aditya Patel",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 4,
    text: "Loved the challenges! Made learning programming really fun.",
    date: "2025-11-12",
  },
  {
    id: 8,
    name: "Sofia Khan",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    text: "Highly recommend this course, I learned a lot in a short time.",
    date: "2025-11-10",
  },
  {
    id: 9,
    name: "Rohan Mehta",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "The coding exercises were very practical and easy to follow.",
    date: "2025-11-08",
  },
  {
    id: 10,
    name: "Priya Sharma",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 4,
    text: "Great explanations and examples, I feel more confident now.",
    date: "2025-11-05",
  },
  {
    id: 11,
    name: "Vivaan Singh",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5,
    text: "Fun learning experience! I can now build small projects on my own.",
    date: "2025-11-03",
  },
  {
    id: 12,
    name: "Naina Roy",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
    rating: 4,
    text: "I loved how interactive the lessons were, made learning enjoyable.",
    date: "2025-11-01",
  },
  {
    id: 13,
    name: "Kunal Verma",
    photo: "https://randomuser.me/api/portraits/men/95.jpg",
    rating: 5,
    text: "This course helped me understand JavaScript basics clearly.",
    date: "2025-10-28",
  },
  {
    id: 14,
    name: "Ishita Sen",
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 5,
    text: "Loved the small projects, they made learning very practical.",
    date: "2025-10-25",
  },
  {
    id: 15,
    name: "Arjun Das",
    photo: "https://randomuser.me/api/portraits/men/100.jpg",
    rating: 4,
    text: "Good content, easy to follow, and very interactive exercises.",
    date: "2025-10-20",
  },
];

// Card Component
const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    className="bg-[#234C6A] text-[#D2C1B6] p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex-shrink-0 flex flex-col justify-between"
    style={{ width: 250, height: 250 }}
  >
    {/* Top Section */}
    <div className="flex flex-col items-center">
      <img
        src={review.photo}
        alt={review.name}
        className="w-16 h-16 rounded-full border-2 border-[#456882] mb-2"
      />
      <h3 className="font-bold text-lg text-center">{review.name}</h3>
      <div className="flex text-yellow-400 justify-center">
        {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
      </div>
    </div>

    {/* Middle Section: Text */}
    <p
      className="text-sm text-center mt-2 overflow-hidden"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 4, // limit lines
        WebkitBoxOrient: "vertical",
      }}
    >
      {review.text}
    </p>

    {/* Bottom Section: Date */}
    <p className="text-xs text-gray-300 mt-auto">{review.date}</p>
  </motion.div>
);

// Marquee Component
const ReviewMarquee = () => {
  return (
    <section className="py-16 bg-[#1B3C53]">
      <h2 className="text-center text-[#D2C1B6] font-bold mb-8 text-3xl">
        What Our Students Are Saying
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {reviewsData.concat(reviewsData).map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        .animate-marquee {
          animation: scroll 25s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Hide scrollbar for better look */
        .animate-marquee::-webkit-scrollbar {
          display: none;
        }
        .animate-marquee {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ReviewMarquee;
