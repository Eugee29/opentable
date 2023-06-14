import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

interface Props {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props) {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-4 text-2xl font-bold">
        What {reviews.length} {reviews.length > 1 ? "people are" : "person is"}{" "}
        saying
      </h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
