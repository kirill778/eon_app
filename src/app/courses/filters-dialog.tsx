"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

interface FiltersDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onApplyFilters: (filters: FilterValues) => void
}

interface FilterValues {
  contentType: string[]
  durationFrom: string
  durationTo: string
  priceFrom: string
  priceTo: string
  rating: number
  language: string
  difficulty: number
  withTests: boolean
  withVideo: boolean
  verified: boolean
}

export function FiltersDialog({ open, onOpenChange, onApplyFilters }: FiltersDialogProps) {
  const [filters, setFilters] = React.useState<FilterValues>({
    contentType: ["courses"],
    durationFrom: "",
    durationTo: "",
    priceFrom: "",
    priceTo: "",
    rating: 0,
    language: "ru",
    difficulty: 0,
    withTests: false,
    withVideo: false,
    verified: false
  })

  const handleApply = () => {
    onApplyFilters(filters)
    onOpenChange(false)
  }

  const handleReset = () => {
    setFilters({
      contentType: ["courses"],
      durationFrom: "",
      durationTo: "",
      priceFrom: "",
      priceTo: "",
      rating: 0,
      language: "ru",
      difficulty: 0,
      withTests: false,
      withVideo: false,
      verified: false
    })
    onApplyFilters({} as FilterValues)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[320px] border-0 bg-[#091b21] p-4 text-white shadow-2xl">
        <DialogHeader className="mb-4 space-y-0 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-normal text-[#8B959E]">Фильтры</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-white/10"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-5">
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="courses"
                checked={filters.contentType.includes("courses")}
                onCheckedChange={(checked) => {
                  setFilters(prev => ({
                    ...prev,
                    contentType: checked 
                      ? [...new Set([...prev.contentType, "courses"])]
                      : prev.contentType.filter(type => type !== "courses")
                  }))
                }}
                className="h-4 w-4 rounded-full border-0 bg-[#0D3036] data-[state=checked]:bg-[#2A8050]"
              />
              <Label htmlFor="courses" className="font-normal">Курсы</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lectures"
                checked={filters.contentType.includes("lectures")}
                onCheckedChange={(checked) => {
                  setFilters(prev => ({
                    ...prev,
                    contentType: checked 
                      ? [...new Set([...prev.contentType, "lectures"])]
                      : prev.contentType.filter(type => type !== "lectures")
                  }))
                }}
                className="h-4 w-4 rounded-full border-0 bg-[#0D3036] data-[state=checked]:bg-[#2A8050]"
              />
              <Label htmlFor="lectures" className="font-normal">Лекции</Label>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-normal">Продолжительность</h3>
            <div className="flex gap-3">
              <div className="flex-1">
                <Select 
                  value={filters.durationFrom}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, durationFrom: value }))}
                >
                  <SelectTrigger className="h-10 w-full border-0 bg-[#0D3036] pl-2 pr-8 text-sm">
                    <span className="text-[#8B959E]">от</span>
                    <SelectValue placeholder="" className="pl-1" />
                    <span className="absolute right-2 text-sm text-[#8B959E]">мин</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="60">60</SelectItem>
                    <SelectItem value="90">90</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Select 
                  value={filters.durationTo}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, durationTo: value }))}
                >
                  <SelectTrigger className="h-10 w-full border-0 bg-[#0D3036] pl-2 pr-8 text-sm">
                    <span className="text-[#8B959E]">до</span>
                    <SelectValue placeholder="" className="pl-1" />
                    <span className="absolute right-2 text-sm text-[#8B959E]">мин</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="60">60</SelectItem>
                    <SelectItem value="90">90</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-normal">Стоимость</h3>
            <div className="flex gap-3">
              <div className="flex-1">
                <Select 
                  value={filters.priceFrom}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, priceFrom: value }))}
                >
                  <SelectTrigger className="h-10 w-full border-0 bg-[#0D3036] pl-2 pr-8 text-sm">
                    <span className="text-[#8B959E]">от</span>
                    <SelectValue placeholder="" className="pl-1" />
                    <span className="absolute right-2 text-sm text-[#8B959E]">руб</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1000">1000</SelectItem>
                    <SelectItem value="2000">2000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Select 
                  value={filters.priceTo}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, priceTo: value }))}
                >
                  <SelectTrigger className="h-10 w-full border-0 bg-[#0D3036] pl-2 pr-8 text-sm">
                    <span className="text-[#8B959E]">до</span>
                    <SelectValue placeholder="" className="pl-1" />
                    <span className="absolute right-2 text-sm text-[#8B959E]">руб</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1000">1000</SelectItem>
                    <SelectItem value="2000">2000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-normal">Рейтинг</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 ${filters.rating >= star ? "text-yellow-400" : "text-muted-foreground"}`}
                  onClick={() => setFilters({...filters, rating: star})}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-normal">Язык</h3>
            <Select
              value={filters.language}
              onValueChange={(value) => setFilters({...filters, language: value})}
            >
              <SelectTrigger className="h-10 w-full border-0 bg-[#0D3036] pl-2 pr-8 text-sm">
                <span className="text-[#8B959E]">Выберите язык</span>
                <SelectValue placeholder="" className="pl-1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">Рус</SelectItem>
                <SelectItem value="en">Eng</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-normal">Сложность</h3>
            <Slider
              value={[filters.difficulty]}
              max={2}
              step={1}
              className="w-full"
              onValueChange={(value) => setFilters({...filters, difficulty: value[0]})}
            />
            <div className="flex justify-between text-sm">
              <span className={filters.difficulty === 0 ? "text-foreground" : "text-muted-foreground"}>Новичок</span>
              <span className={filters.difficulty === 1 ? "text-foreground" : "text-muted-foreground"}>Средний</span>
              <span className={filters.difficulty === 2 ? "text-foreground" : "text-muted-foreground"}>Продвинутый</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="with-tests"
                checked={filters.withTests}
                onCheckedChange={(checked) => setFilters({...filters, withTests: checked as boolean})}
              />
              <Label htmlFor="with-tests" className="font-normal">
                С тестами
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="with-video"
                checked={filters.withVideo}
                onCheckedChange={(checked) => setFilters({...filters, withVideo: checked as boolean})}
              />
              <Label htmlFor="with-video" className="font-normal">
                С видео
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={filters.verified}
                onCheckedChange={(checked) => setFilters({...filters, verified: checked as boolean})}
              />
              <Label htmlFor="verified" className="font-normal">
                Верифицированный пользователь
              </Label>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              onClick={handleApply}
              className="flex-1 bg-[#2A8050] font-normal hover:bg-[#2A8050]/90"
            >
              Применить
            </Button>
            <Button 
              onClick={handleReset}
              className="flex-1 bg-[#1C2B31] font-normal text-white hover:bg-[#1C2B31]/90" 
              variant="secondary"
            >
              Сбросить
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

