"use client"

import { useState, useEffect, useMemo } from "react"
import {
  Bell,
  Computer,
  Heart,
  Leaf,
  ChevronLeft,
  ChevronRight,
  TreePine,
  SlidersHorizontal,
  ChevronDown,
  MoreVertical,
  Home,
  Monitor,
  GraduationCap,
  FileText,
  Wrench,
  Check,
  Search,
} from "lucide-react"
import Image from "next/image"
import { FiltersDialog } from "./filters-dialog"
import { useRouter } from 'next/navigation'

interface CourseItem {
  title: string
  price: string
  instructor: string
  rating: string
  reviews: string
  students: string
  backgroundImage?: string
  verified: boolean
  id: string
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

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "services">("courses")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popularity")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<FilterValues>({} as FilterValues)
  const router = useRouter()

  const slides = [
    {
      title: "Программирование с 1 до 0",
      price: "Бесплатно",
      instructor: "Касперский Троян Олегович",
      rating: "4.8",
      reviews: "58",
      students: "130",
      duration: "1 час 30 мин",
    },
    {
      title: "Квантовая физика для котов",
      price: "2500 р/час",
      instructor: "Шрёдингер Феликс Котович",
      rating: "4.9",
      reviews: "201",
      students: "612",
      duration: "2 часа",
    },
    {
      title: "Искусство складывания носков",
      price: "1500 р/час",
      instructor: "Аккуратный Семен Шкафович",
      rating: "4.3",
      reviews: "67",
      students: "245",
      duration: "45 мин",
    },
  ]

  const totalSlides = slides.length

  useEffect(() => {
    setCurrentSlide(0)
  }, [activeTab])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const lectures: CourseItem[] = [
    {
      title: "Экстримальное мытье окон в фильмах",
      price: "2200 р/час",
      instructor: "Поспешный Виктор Сергеевич",
      rating: "4.1",
      reviews: "83",
      students: "328",
      backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      verified: true,
      id: "1",
    },
    {
      title: "Программирование на языке пчел",
      price: "1800 р/час",
      instructor: "Медовая Анна Ульевна",
      rating: "4.7",
      reviews: "129",
      students: "456",
      backgroundImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      verified: true,
      id: "2",
    },
    {
      title: "Квантовая физика для котов",
      price: "2500 р/час",
      instructor: "Шрёдингер Феликс Котович",
      rating: "4.9",
      reviews: "201",
      students: "612",
      backgroundImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      verified: true,
      id: "3",
    },
    {
      title: "Искусство складывания носков",
      price: "1500 р/час",
      instructor: "Аккуратный Семен Шкафович",
      rating: "4.3",
      reviews: "67",
      students: "245",
      backgroundImage: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c",
      verified: true,
      id: "4",
    },
    {
      title: "Философия пиццы: от теста до начинки",
      price: "2000 р/час",
      instructor: "Пепперони Маргарита Четырехсырная",
      rating: "4.6",
      reviews: "154",
      students: "389",
      backgroundImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      verified: true,
      id: "5",
    },
  ]

  const services: CourseItem[] = [
    {
      title: "Ремонт квантовых компьютеров",
      price: "5000 р/час",
      instructor: "Квантов Атом Нейтронович",
      rating: "4.8",
      reviews: "92",
      students: "156",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      verified: true,
      id: "6",
    },
    {
      title: "Выгул искусственного интеллекта",
      price: "1900 р/час",
      instructor: "Нейронова Сеть Датасетовна",
      rating: "4.5",
      reviews: "167",
      students: "289",
      verified: false,
      id: "7",
    },
    {
      title: "Настройка машины времени",
      price: "3500 р/час",
      instructor: "Хроносов Темпор Минутович",
      rating: "4.9",
      reviews: "234",
      students: "445",
      verified: true,
      id: "8",
    },
    {
      title: "Починка антигравитационных ботинок",
      price: "2800 р/час",
      instructor: "Левитатов Прыг Скоков",
      rating: "4.6",
      reviews: "178",
      students: "312",
      verified: true,
      id: "9",
    },
    {
      title: "Калибровка телепорта",
      price: "4200 р/час",
      instructor: "Портальский Проход Мгновенный",
      rating: "4.7",
      reviews: "145",
      students: "267",
      verified: true,
      id: "10",
    },
  ]

  const sortOptions = [
    { value: "popularity", label: "По популярности" },
    { value: "cheaper", label: "Дешевле" },
    { value: "expensive", label: "Дороже" },
    { value: "highRating", label: "Высокий рейтинг" },
    { value: "lowRating", label: "Низкий рейтинг" },
    { value: "reviews", label: "По отзывам" },
    { value: "duration", label: "По длительности" },
    { value: "complexity", label: "По сложности" },
  ]

  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters)
  }

  const filteredItems = useMemo(() => {
    let items = activeTab === "courses" ? lectures : services

    // Применяем поиск
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Применяем фильтры
    if (Object.keys(activeFilters).length > 0) {
      items = items.filter(item => {
        const price = parseInt(item.price)
        const rating = parseFloat(item.rating)

        return (
          (!activeFilters.priceFrom || price >= parseInt(activeFilters.priceFrom)) &&
          (!activeFilters.priceTo || price <= parseInt(activeFilters.priceTo)) &&
          (!activeFilters.rating || rating >= activeFilters.rating) &&
          (!activeFilters.verified || item.verified)
        )
      })
    }

    // Применяем сортировку
    return [...items].sort((a, b) => {
      switch (sortBy) {
        case "cheaper":
          return parseInt(a.price) - parseInt(b.price)
        case "expensive":
          return parseInt(b.price) - parseInt(a.price)
        case "highRating":
          return parseFloat(b.rating) - parseFloat(a.rating)
        case "lowRating":
          return parseFloat(a.rating) - parseFloat(b.rating)
        case "reviews":
          return parseInt(b.reviews) - parseInt(a.reviews)
        default:
          return 0
      }
    })
  }, [activeTab, searchQuery, sortBy, activeFilters])

  const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`)
  }

  return (
    <div className="min-h-screen bg-[#091b21] text-white">
      <div className="max-w-md mx-auto px-4 py-6 pb-24">
        {/* Top Icons */}
        <div className="flex justify-between mb-0">
          <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="Компьютер">
            <Computer className="w-6 h-6 text-[#60ffa6]" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="">
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53.4682 31.0371C53.4682 34.493 50.7657 37.3191 47.4573 37.3191C44.1529 37.3191 41.4464 40.1451 41.4464 43.601V60.996C41.7334 64.1927 39.7603 67.0587 36.4639 67.9396" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M56.4212 67.9413C53.1248 67.0564 51.1517 64.1944 51.4387 60.9977C51.4387 57.4979 51.4387 46.4009 51.4387 45.0098" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M51.7578 55.2102C60.0965 61.544 71.8991 52.5556 66.6017 43.304C68.0925 42.2039 68.8737 40.4979 68.9854 38.764C69.097 37.05 68.5549 35.3121 67.4069 34.1123C64.9834 31.5812 60.2679 32.0156 58.4503 35.1965" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M37.5478 32.8828C37.5478 32.8828 36.5234 35.956 38.6799 37.6421" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M48.832 37.243C48.832 37.243 49.9043 37.2191 50.1952 37.2231C51.1519 37.2231 53.2166 37.6376 54.0258 39.5709" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M46.4241 67.9405V54.4518C46.4241 51.251 44.3075 48.7717 41.3459 48.2535C38.5198 47.7593 35.2712 48.2775 35.7496 43.5979C30.8747 46.8784 24.0586 43.4624 24.0586 37.4076C24.0586 32.6403 28.4591 29.1327 33.071 30.1132C31.9031 23.5443 39.7874 21.1566 42.9164 25.3061" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M62.7872 32.348C62.6795 31.9932 62.556 31.6384 62.4165 31.2917C60.4832 26.4686 55.7638 23.0605 50.2512 23.0605C45.3603 23.0605 41.0953 25.7431 38.8432 29.7132C38.1935 30.8612 37.9862 31.7221 37.5437 32.8781C36.3838 36.1705 32.7406 37.9124 29.4521 36.7485" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M60.6622 40.625C60.6622 45.6753 56.6085 49.7769 51.5781 49.8526" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M42.8061 25.2513C43.5088 24.7843 43.3913 24.3931 43.1445 24.2823C42.9741 24.8027 42.911 24.7839 43.0532 24.2551C42.786 24.2128 42.4724 24.4766 42.8061 25.2513Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M60.5893 56.95C62.2031 57.4361 62.6555 56.7568 62.5114 56.2358C61.4935 56.6369 61.442 56.5158 62.4369 56.0608C62.1615 55.5956 61.356 55.4493 60.5893 56.95Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M32.471 29.3137C31.5151 29.5653 31.4972 30.0436 31.7289 30.2599C32.1149 29.7474 32.1778 29.7922 31.8198 30.3246C32.1 30.4728 32.5476 30.299 32.471 29.3137Z" fill="white"/>
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="Уведомления">
            <Bell className="w-6 h-6 text-[#60ffa6]" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="Избранное">
            <Heart className="w-6 h-6 text-[#60ffa6]" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex rounded-full bg-[#0d3036] p-1 mb-8">
          <button
            onClick={() => setActiveTab("courses")}
            className={`flex-1 py-2 px-6 rounded-full transition-colors ${
              activeTab === "courses" ? "bg-[#26ff60] text-black font-medium" : "text-[#60ffa6]"
            }`}
          >
            Курсы
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`flex-1 py-2 px-6 rounded-full transition-colors ${
              activeTab === "services" ? "bg-[#26ff60] text-black font-medium" : "text-[#60ffa6]"
            }`}
          >
            Услуги
          </button>
        </div>

        {/* Course/Service Carousel */}
        <div className="relative mb-8 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-[#0d3036]/50 backdrop-blur-sm rounded-2xl p-6 relative h-[300px] mb-8 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 brightness-50"
                  />
                  <div className="relative z-10">
                    <button
                      onClick={prevSlide}
                      className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#091b21]/50 hover:bg-[#091b21]/70 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#60ffa6]" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#091b21]/50 hover:bg-[#091b21]/70 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6 text-[#60ffa6]" />
                    </button>
                    <div className="max-w-[250px] mx-auto">
                      <div className="flex items-center gap-2 text-[#60ffa6] mb-2">
                        <Leaf className="w-4 h-4" />
                        <span className="text-sm">Лекция</span>
                      </div>

                      <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                      <div className="text-lg font-bold mb-4 text-[#26ff60]">{slide.price}</div>

                      <div className="text-[#60ffa6] mb-3 text-sm">{slide.instructor}</div>

                      <div className="flex items-center gap-4 text-xs text-[#60ffa6]">
                        <div className="flex items-center gap-1">
                          <span>★</span>
                          <span>
                            {slide.rating} ({slide.reviews})
                          </span>
                        </div>
                        <div>{slide.students}</div>
                        <div className="flex items-center gap-1">
                          <span>◷</span>
                          <span>{slide.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-[#26ff60] mt-2">
                        <span>✓</span>
                        <span>Верифицирован</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-center z-10">
                      {slides.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full mx-1 ${
                            dotIndex === currentSlide ? "bg-[#26ff60]" : "bg-[#60ffa6]/50"
                          }`}
                          onClick={() => setCurrentSlide(dotIndex)}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <input
            type="search"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0d3036] rounded-full py-3 px-6 pl-12 text-[#60ffa6] placeholder-[#60ffa6]/50 outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#60ffa6]" />
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-between mb-6 relative">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-[#26ff60] p-2 rounded-lg hover:bg-[#0d3036] transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              <span>{sortOptions.find((opt) => opt.value === sortBy)?.label}</span>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#091b21] border border-[#0d3036] rounded-2xl overflow-hidden z-20 shadow-xl">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-[#0d3036] transition-colors ${
                        sortBy === option.value ? "text-[#26ff60]" : "text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <button 
            onClick={() => setIsFiltersOpen(true)} 
            className="flex items-center gap-2 text-[#26ff60] p-2 rounded-lg hover:bg-[#0d3036] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Фильтры</span>
          </button>
        </div>

        {/* Cards List */}
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={`bg-[#0d3036]/50 backdrop-blur-sm rounded-2xl p-6 mb-4 ${
              item.backgroundImage ? "relative overflow-hidden" : ""
            } cursor-pointer hover:bg-[#0d3036]/70 transition-colors`}
            onClick={() => router.push(`/courses/${item.id}`)}
          >
            {item.backgroundImage && (
              <Image
                src={item.backgroundImage || "/placeholder.svg"}
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 opacity-30"
              />
            )}
            <div className={`flex items-center gap-4 ${item.backgroundImage ? "relative z-10" : ""}`}>
              {activeTab === "services" && (
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-[#091b21]/50">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                      alt=""
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#26ff60] rounded-full p-0.5">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 text-[#60ffa6] mb-2">
                    {activeTab === "courses" ? (
                      <>
                        {index % 2 === 0 ? <Leaf className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                        <span className="text-sm">{index % 2 === 0 ? "Лекция" : "Курс"}</span>
                      </>
                    ) : (
                      <>
                        <Wrench className="w-4 h-4" />
                        <span className="text-sm">Услуга</span>
                      </>
                    )}
                  </div>
                  <button className="p-1 rounded-full hover:bg-[#091b21]/50 transition-colors">
                    <MoreVertical className="w-5 h-5 text-[#60ffa6]" />
                  </button>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                  <div className="text-lg font-bold mb-2 text-[#26ff60]">{item.price}</div>
                  <div className="text-[#60ffa6] mb-3 text-sm">{item.instructor}</div>

                  <div className="flex items-center gap-4 text-sm text-[#60ffa6]">
                    <div className="flex items-center gap-1">
                      <span>★</span>
                      <span>
                        {item.rating} ({item.reviews})
                      </span>
                    </div>
                    <div>{item.students}</div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-[#26ff60] mt-2">
                    <span>✓</span>
                    <span>Верифицирован</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Footer Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#091b21] border-t border-[#ffffff]/10 px-4 py-2">
          <div className="max-w-md mx-auto flex justify-between items-center">
            <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
              <Home className="w-6 h-6" />
              <span className="text-xs">Главная</span>
            </button>
            <button 
              onClick={() => router.push('/account')}
              className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2"
            >
              <Monitor className="w-6 h-6" />
              <span className="text-xs">Кабинет</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
              <GraduationCap className="w-6 h-6" />
              <span className="text-xs">Мои курсы</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
              <FileText className="w-6 h-6" />
              <span className="text-xs">Домашка</span>
            </button>
          </div>
        </div>
      </div>

      {/* Добавим компонент диалога */}
      <FiltersDialog 
        open={isFiltersOpen} 
        onOpenChange={setIsFiltersOpen}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  )
}

