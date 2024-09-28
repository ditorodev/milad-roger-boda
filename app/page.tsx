"use client"
import RSVPModal from "@/components/RSVPModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useState } from "react"
import Background from "../images/bg.jpg"
import MiladRoger1 from "../images/milad-roger-1.jpg"
import MiladRoger2 from "../images/milad-roger-2.jpg"
import MiladRoger3 from "../images/milad-roger-3.jpg"

export default function Home() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false)

  return (
    <div className="relative w-screen h-screen overflow-clip flex items-center justify-center">
      <Image
        src={Background}
        width={1920}
        height={1080}
        className="absolute inset-0 z-10 object-cover"
        alt="Background"
      />
      <ScrollArea className="relative z-40 h-screen max-w-xl -mx-auto">
        <div className="flex flex-col p-10 py-20 gap-10 md:gap-16 items-center justify-items-center min-h-full">
          <span className="flex flex-col gap-4 items-center opacity-90">
            <h1 className="text-5xl lg:text-7xl font-[family-name:var(--font-style-script)] text-neutral-800">
              Milad & Roger
            </h1>
            <p className="max-w-md text-sm lg:text-base text-center text-neutral-600">
              ¡Nos casamos y estamos ilusionados de rodearnos de nuestra gente
              favorita!
            </p>
          </span>
          <Card className="p-1 w-full rounded-md shadow-xl max-w-sm">
            <CardContent className="p-0">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000
                  })
                ]}
                className="w-full bg-white/10 rounded-sm overflow-hidden border"
              >
                <CarouselContent>
                  <CarouselItem className="h-[480px] lg:h-[640px] w-full pl-1">
                    <div className="relative h-full w-full">
                      <Image
                        src={MiladRoger1}
                        alt="Milad & Roger"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-[480px] lg:h-[640px] w-full pl-1">
                    <div className="relative h-full w-full">
                      <Image
                        src={MiladRoger2}
                        alt="Milad & Roger"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-[480px] lg:h-[640px] w-full pl-1">
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
              </Carousel>
            </CardContent>
          </Card>
          <Card className="p-0 w-full rounded-md shadow-none max-w-sm lg:-mt-10">
            <CardContent className="flex flex-col p-0 text-md">
              <div className="border-b border-neutral-200 p-4">
                <h2 className="text-lg font-semibold flex items-center gap-2 pb-3">
                  <span className="text-xl">📅</span>Fecha y hora
                </h2>
                <p className="text-neutral-600 font-medium">
                  8 de Junio de 2025
                </p>
                <p className="text-neutral-600">Ceremonia: 17:00h</p>
              </div>

              <div className="p-4 border-b border-neutral-200">
                <h2 className="text-lg font-semibold flex items-center gap-2 pb-3">
                  <span className="text-xl">📍</span>Lugar
                </h2>
                <p className="text-neutral-600 font-medium">Torre del Pi</p>
                <p className="text-neutral-600">
                  Carretera a Premià de Mar, 27,
                  <br />
                  08338 Premià de Dalt, Barcelona
                </p>
              </div>

              <div className="space-y-2 p-4 border-b border-neutral-200">
                <h2 className="text-lg font-semibold flex items-center gap-2 pb-3">
                  <span className="text-xl">🚗</span>Cómo Llegar
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">En coche</p>
                    <p className="text-neutral-600">
                      Encontrarás parking gratuito al llegar
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">En autobús</p>
                    <p className="text-neutral-600">
                      Salida desde Barcelona: 16:00h
                      <br />
                      Regreso desde Torre del Pi: 04:00h
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <Button
                  className="w-full"
                  onClick={() => setIsRSVPModalOpen(true)}
                  type="button"
                >
                  RSVP
                </Button>
              </div>
            </CardContent>
          </Card>
          <span className="max-w-sm lg:-mt-8 px-2">
            <p className="text-sm text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </span>
        </div>
        <div className="pointer-events-none fixed inset-x-0 bottom-0 h-32 z-50 bg-gradient-to-t from-white to-transparent" />
      </ScrollArea>
      <div className="absolute inset-0 z-30 backdrop-blur-sm bg-white/80" />

      <RSVPModal isOpen={isRSVPModalOpen} onOpenChange={setIsRSVPModalOpen} />
    </div>
  )
}
