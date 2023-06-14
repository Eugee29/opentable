import { Review } from "@prisma/client";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <div className="mb-7 border-b pb-7">
      <div className="flex">
        <div className="flex w-1/6 flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
            <h2 className="text-sm font-medium uppercase text-white">
              {review.first_name[0] + review.last_name[0]}
            </h2>
          </div>
          <span className="text-center text-sm font-medium capitalize">
            {review.first_name} {review.last_name}
          </span>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="mr-5 flex">*****</div>
          </div>
          <div className="mt-5">
            <p>{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
