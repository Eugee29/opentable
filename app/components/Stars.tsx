import fullStar from "@/public/icons/full-star.png";
import halfStar from "@/public/icons/half-star.png";
import emptyStar from "@/public/icons/empty-star.png";
import Image from "next/image";

interface Props {
  rating: number;
  className?: string;
}

export default function Stars({ rating, className = "" }: Props) {
  const getStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));
      if (difference >= 1) stars.push(fullStar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStar);
        else if (difference > 0.2 && difference <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else stars.push(emptyStar);
    }
    return stars;
  };

  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {getStars().map((star, i) => (
        <li key={i}>
          <Image
            className="h-4 w-4"
            src={star}
            alt={`${star}`}
            width={0}
            height={0}
            sizes="100vw"
          />
        </li>
      ))}
    </ul>
  );
}
