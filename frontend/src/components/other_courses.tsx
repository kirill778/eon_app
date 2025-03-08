import React from "react";
import { Star, ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RouteIcon as Course } from "lucide-react";

interface OtherCoursesProps {
  title: string;
  title2: string;
  courseTitle: string | React.ReactNode;
  author: string;
  rating: string;
  students: string;
  duration: string;
  price: string;
  isVerified: boolean;
  imageUrl?: string;
}

export const OtherCourses: React.FC<OtherCoursesProps> = ({
  title,
  title2,
  courseTitle,
  author,
  rating,
  students,
  duration,
  price,
  isVerified,
  imageUrl = '/f1.png'
}) => {
  return (
    <div className="space-y-6 ml-[9%] pb-[100%]" style={{marginTop: "7%"}}>
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold">{title}</h2>
      </div>

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-10 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="overflow-hidden ml-[-19%] w-[100vw]">
          <div className="relative">
            <div
              className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-cover bg-center h-[26vh]"
            >
              {/* Background Image with Mask */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: '130%', // Increased from 'cover' to 150%
                  backgroundPosition: 'center',
                  maskImage: 'radial-gradient(49.14% 37.87% at 50% 50%, #000 0%, rgba(185, 185, 185, 0.15) 63.5%, rgba(153, 153, 153, 0.00) 100%)',
                  WebkitMaskImage: 'radial-gradient(49.14% 37.87% at 50% 50%, #000 0%, rgba(185, 185, 185, 0.15) 63.5%, rgba(153, 153, 153, 0.00) 100%)'
                }}
              />
              {/* Gradient Overlay */}
              

              <div className="absolute inset-0 p-6 flex flex-col justify-between ml-[10%]">
                <div className="">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.498 3.04451L15.5513 2.44782L14.9547 2.50205C9.31961 3.01434 6.08126 4.62111 4.55717 6.59775C3.00395 8.61215 3.30941 10.9061 4.52161 12.4905L4.85932 12.9319L5.26269 12.5496C6.07558 11.7791 6.77408 11.1457 7.35536 10.6446C6.85429 11.2259 6.22095 11.9244 5.45042 12.7373L5.06807 13.1407L5.50949 13.4784C7.0941 14.6907 9.39214 14.9959 11.4085 13.443C13.3876 11.9188 14.9944 8.68004 15.498 3.04451Z" stroke="white"/>
                      <path d="M9 1C0.879927 1.73819 0.0791792 5.60429 1.66816 7.68123" stroke="white"/>
                    </svg>
                    <span>Курс</span>
                  </div>
                  <h3 className="mt-[1%] text-xl font-bold whitespace-pre-line leading-tight">
                    {courseTitle}
                  </h3>
                  <span className="text-xl font-bold">{price}</span>
                  <br/>
                  <span className="relative top-[4%]">{author}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm relative top-[4%]">
                    
                    
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{rating}</span>
                    </div>                   
                    <span>{students}</span>
                    <div className="flex items-center gap-1">
                      <Timer className="h-4 w-4" />
                      <span>{duration}</span>
                    </div>
                    
                  </div>

                  <div className="flex items-center " style={{marginTop: "2%"}}>
                    <div className="flex items-center gap-1">
                      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300 " style={{marginLeft: "3%",}}>
                      {isVerified ? "Верифицирован" : "Не верифицирован"}
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="ml-[0%]" style={{marginTop: '19%'}}>
        <svg 
          width="275" 
          height="1" 
          viewBox="0 0 275 1" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{flexShrink: 0}}
        >
          <line 
            x1="0" 
            y1="0.5" 
            x2="275" 
            y2="0.5" 
            stroke="rgba(255, 255, 255, 0.30)" 
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold">{title2}</h2>
      </div>

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-10 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="overflow-hidden ml-[-19%] w-[100vw]">
          <div className="relative">
            <div
              className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-cover bg-center h-[26vh]"
            >
              {/* Background Image with Mask */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: '130%', // Increased from 'cover' to 150%
                  backgroundPosition: 'center',
                  maskImage: 'radial-gradient(49.14% 37.87% at 50% 50%, #000 0%, rgba(185, 185, 185, 0.15) 63.5%, rgba(153, 153, 153, 0.00) 100%)',
                  WebkitMaskImage: 'radial-gradient(49.14% 37.87% at 50% 50%, #000 0%, rgba(185, 185, 185, 0.15) 63.5%, rgba(153, 153, 153, 0.00) 100%)'
                }}
              />
              {/* Gradient Overlay */}
              

              <div className="absolute inset-0 p-6 flex flex-col justify-between ml-[10%]">
                <div className="">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.498 3.04451L15.5513 2.44782L14.9547 2.50205C9.31961 3.01434 6.08126 4.62111 4.55717 6.59775C3.00395 8.61215 3.30941 10.9061 4.52161 12.4905L4.85932 12.9319L5.26269 12.5496C6.07558 11.7791 6.77408 11.1457 7.35536 10.6446C6.85429 11.2259 6.22095 11.9244 5.45042 12.7373L5.06807 13.1407L5.50949 13.4784C7.0941 14.6907 9.39214 14.9959 11.4085 13.443C13.3876 11.9188 14.9944 8.68004 15.498 3.04451Z" stroke="white"/>
                      <path d="M9 1C0.879927 1.73819 0.0791792 5.60429 1.66816 7.68123" stroke="white"/>
                    </svg>
                    <span>Курс</span>
                  </div>
                  <h3 className="mt-[1%] text-xl font-bold whitespace-pre-line leading-tight">
                    {courseTitle}
                  </h3>
                  <span className="text-xl font-bold">{price}</span>
                  <br/>
                  <span className="relative top-[4%]">{author}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm relative top-[4%]">
                    
                    
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{rating}</span>
                    </div>                   
                    <span>{students}</span>
                    <div className="flex items-center gap-1">
                      <Timer className="h-4 w-4" />
                      <span>{duration}</span>
                    </div>
                    
                  </div>

                  <div className="flex items-center " style={{marginTop: "2%"}}>
                    <div className="flex items-center gap-1">
                      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300 " style={{marginLeft: "3%",}}>
                      {isVerified ? "Верифицирован" : "Не верифицирован"}
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
    </div>
  );
}; 