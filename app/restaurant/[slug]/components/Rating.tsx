import Stars from "@/app/components/Stars";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import { Review } from "@prisma/client";

interface Props {
  reviews: Review[];
}

export default function Rating({ reviews }: Props) {
  const rating = calculateReviewRatingAverage(reviews);

  return (
    <div className="flex items-end">
      <div className="mt-2 flex items-center">
        <Stars rating={rating} />
        <p className="ml-3">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="ml-4">
          {reviews.length} review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
