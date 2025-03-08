import React, { useRef } from "react";
import { Star, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  avatar?: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [isReviewsCollapsed, setIsReviewsCollapsed] = React.useState(false);
  const reviewsTopRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    reviewsTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      <div ref={reviewsTopRef} className="flex items-start justify-between">
        <div className="">
          <div className="ml-[14%] mt-[1%]  flex items-center gap-2">
            <span className="text-[15px] font-semibold">153 отзыва</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-white" />
              <span className="text-sm text-gray-400">{`4 (58)`}</span>
            </div>
          </div>
          <p className="text-[11px] ml-[14%] w-[150%] text-gray-400">Оставить отзыв можно только после покупки</p>
        </div>
        
      </div>
      <Button
          variant="ghost"
          size="sm"
          className="text-gray-400"
          onClick={() => setIsReviewsCollapsed(!isReviewsCollapsed)}
        >
          <span className="ml-[50%] text-[14px] pr-[10%]">Свернуть</span>
          {isReviewsCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>

      {!isReviewsCollapsed && (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-[28px] bg-white/5 p-4 shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.50)] backdrop-blur-[12.5px]">
              <div className=" items-center gap-4">
                <div className="flex items-center gap-4 mt-[5%] ml-[4%]">
                <Avatar className="h-[70px] w-[70px] shrink-0 border border-white/10">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.author} />
                    ) : (
                      <AvatarFallback className="bg-black/40 text-sm">{review.initials}</AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex-1">
                    <div className="">
                      <span className="text-[13px] text-gray-400 relative top-[-1.1vh]">{review.date}</span>
                      <div className="flex items-center mt-[-3%]">
                        <Star className="mt-[-1%] h-3 w-3 fill-white-400" />
                        <span className="ml-1 text-sm">{review.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-medium w-[80%] mt-[-1%]">{review.author}</h4>
                  </div>
                </div>
                <div className="mt-[2%] ml-[5%]">
                {review.text && <p className="text-sm text-gray-200">{review.text}</p>}
                </div>
              </div>
            </div>
          ))}

          <div className="flex pt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[15px] text-gray-400 ml-[7%]"
              onClick={scrollToTop}
            >
            К началу отзывов <ChevronUp className="ml-[4%] h-4 w-4" />
            </Button>
          </div>

          <div className="ml-[7%]" style={{marginTop: '13%'}}>
            <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                <line x1="0" y1="0.5" x2="275" y2="0.5" stroke="rgba(255, 255, 255, 0.30)" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}; 


