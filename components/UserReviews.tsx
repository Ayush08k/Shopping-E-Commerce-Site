
import React from 'react';
import { Review } from '../types';

interface UserReviewsProps {
  reviews: Review[];
  averageRating: number;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`h-5 w-5 flex-shrink-0 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);


const UserReviews: React.FC<UserReviewsProps> = ({ reviews, averageRating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Customer Reviews</h2>
      
      <div className="flex items-center mb-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Average Rating</h3>
          <p className="mt-1 text-sm text-gray-500">Based on {reviews.length} reviews</p>
        </div>
        <div className="ml-6">
          <p className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
          <div className="mt-1">
            <StarRating rating={averageRating} />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-t border-gray-200 pt-8">
            <div className="flex items-center">
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                <p className="mt-1 text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <h5 className="mt-4 font-medium text-gray-900">{review.title}</h5>
            <p className="mt-2 text-base text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
