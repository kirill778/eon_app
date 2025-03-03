import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface LectureCardProps {
  title: string
  subtitle: string
  rating: string
  reviewCount: string
  viewCount: string
  duration: string
  imageUrl: string
}

export function LectureCard({
  title, 
  subtitle,
  rating,
  reviewCount,
  viewCount,
  duration,
  imageUrl = '/f1.png'
}: LectureCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-black/0 text-white w-full rounded-none h-[26.5vh] shadow-none">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full">
        <div 
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(49.14% 37.87% at 50% 50%, #000 0%, rgba(185, 185, 185, 0.15) 63.5%, rgba(153, 153, 153, 0.00) 100%)',
            WebkitMaskImage: 'radial-gradient(49.14% 37.87% at 50% 50%, #000 0%, rgba(185, 185, 185, 0.15) 63.5%, rgba(153, 153, 153, 0.00) 100%)'
          }}
        />
      </div>

      {/* Product Type Badge */}
      <div className="absolute top-[8.2%] left-[4.2%] z-10 flex items-center gap-2 rounded-full px-3 py-1.5">
        <div className="h-5 w-5">
          <img 
            src="/lecture_ico.svg" 
            alt="Лекция"
            className="h-[14px] w-[14px] absolute top-[25%] left-[20%]"
          />
        </div>
        <span className="text-sm font-medium">Лекция</span>
      </div>

      <CardHeader className="pb-0 relative z-10">
        <div className="flex items-start gap-2">
          <div className="flex-1">
            <h3 className="text-[15px] w-[170px] font-[600] leading-[18.15px] absolute top-[78%] left-[15%]">
              {title}
            </h3>
            <h4 className="text-[15px] w-[170px] font-[600] leading-[18.15px] absolute top-[110%] left-[15%]">
              {subtitle}
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/share_ico.svg" alt="Share" className="h-[18.96px] w-[18.89px] absolute top-[45%] left-[80%]" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 relative z-10">
        <div className="mt-[8%] flex items-center gap-2 text-sm text-[#FFF] absolute left-[15%]">
          <div className="flex items-center gap-1">
            <span>☆</span>
            <span>{rating} ({reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/vector.svg" alt="Лекция" className="h-[12px] w-[12px] ml-[0px]" />
            <span>{viewCount}</span>
          </div>
          <div className="flex items-center gap-1 absolute left-[-6vw] top-[2.8vh]">
            <img src="/time.svg" alt="Time" className="h-3 w-3" />
            <span className="text-[13px] ml-[1.3vw] font-normal leading-[15.73px]">{duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-end relative z-10">
        <div className="flex items-center gap-3">
          <Button className="rounded-full w-[120px] h-[44px] absolute top-[8vh] left-[59vw] gap-[10px] pt-[13px] pr-[28px] pb-[13px] pl-[28px] bg-[rgba(10,114,74,1)] hover:bg-emerald-700 shadow-[inset_0px_1px_1px_0px_rgba(36,186,128,1)] text-[15px]">
            Оценить
          </Button>
          <Button variant="ghost" size="icon" className="w-[50px] h-[26.923px] absolute top-[10.3vh] left-[15vw] border-[1px] border-[rgba(255,255,255,0.08)] rounded-[17px] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.8)]">
            <span className="text-[11px] font-[400] tracking-[1px]">РУС </span>
          </Button>
        </div>
      </CardFooter>

      <Button variant="ghost" size="icon" className="rounded-full">
        <img src="/icon_fav2.svg" alt="Share" className="h-[18.96px] w-[18.89px] absolute top-[29%] left-[80%]" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <img src="/chat_btn.svg" alt="Share" className="h-[25px] w-[25px] absolute top-[46%] left-[79%]" />
      </Button>
    </Card>
  )
} 