"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import MiladRoger1 from "@/images/milad-roger-1.jpg"
import MiladRoger2 from "@/images/milad-roger-2.jpg"
import MiladRoger3 from "@/images/milad-roger-3.jpg"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
export default function Home() {
  return (
    <div className="flex flex-col p-20 gap-16 bg-neutral-50 items-center justify-items-center min-h-screen">
      <span className="flex flex-col gap-6 items-center">
        <h1 className="text-8xl font-[family-name:var(--font-style-script)] text-neutral-800">
          Milad & Roger
        </h1>
        <p className="max-w-md text-center text-neutral-600">
          ¡Nos casamos y estamos ilusionados de rodearnos de nuestra gente
          favorita!
        </p>
      </span>
      <Card className="p-1 rounded-md">
        <CardContent className="p-0">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000
              })
            ]}
            className="w-[380px] bg-white/10 rounded-sm overflow-hidden border "
          >
            <CarouselContent>
              <CarouselItem className="h-[640px] w-full pl-1">
                <div className="relative h-full w-full">
                  <Image
                    src={MiladRoger1}
                    alt="Milad & Roger"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-[640px] w-full pl-1">
                <div className="relative h-full w-full">
                  <Image
                    src={MiladRoger2}
                    alt="Milad & Roger"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-[640px] w-full pl-1">
                <div className="relative h-full w-full">
                  <Image
                    src={MiladRoger3}
                    alt="Milad & Roger"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </CardContent>
      </Card>
    </div>
  )
}
