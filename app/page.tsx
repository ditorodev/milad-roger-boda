"use client"
import RSVPModal from "@/components/RSVPModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { m } from "@/lib/i18n"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Flores from "../images/flores.png"
import MiladRoger1 from "../images/milad-roger-1.jpg"
import MiladRoger2 from "../images/milad-roger-2.jpg"
import MiladRoger3 from "../images/milad-roger-3.jpg"
import MiladRoger4 from "../images/milad-roger-4.jpg"
import MiladRoger5 from "../images/milad-roger-5.jpg"
import MiladRoger6 from "../images/milad-roger-6.jpg"
import MiladRoger8 from "../images/milad-roger-8.jpg"
import MiladRoger9 from "../images/milad-roger-9.jpg"
import MiladRoger11 from "../images/milad-roger-11.png"
import Background from "../images/verde.png"

export default function Home() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false)

  return (
    <div className="relative w-screen h-screen overflow-clip flex items-center justify-center">
      <Image
        src={Background}
        width={1920}
        height={1080}
        className="absolute inset-0 z-10 -top-10 -left-10 opacity-80"
        alt="Background"
      />
      <ScrollArea className="z-40 h-screen max-w-xl -mx-auto">
        <div className="flex flex-col mt-20 px-10 py-10 lg:py-20 items-center justify-items-center min-h-full">
          <motion.div
            className="relative flex flex-col gap-8 items-center opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.p
              className="max-w-md text-2xl font-medium text-center -mt-5 text-neutral-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              08 / 06 / 2025
            </motion.p>
            <motion.h1
              className="text-5xl lg:text-7xl font-[family-name:var(--font-style-script)] text-neutral-800"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Milad & Roger
            </motion.h1>
            <motion.p
              className="relative max-w-md text-xl text-center -mt-1 text-neutral-600 bg-white/30 rtl:text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.3 }}
            >
              {m.welcome_message()}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 w-full lg:translate-x-2 transform"
            initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 50, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Card className="p-1 w-full rounded-md shadow-xl md:ml-4 max-w-sm">
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
                    {[
                      { src: MiladRoger9, alt: "Milad & Roger 9" },
                      { src: MiladRoger1, alt: "Milad & Roger 1" },
                      { src: MiladRoger11, alt: "Milad & Roger 11" },
                      { src: MiladRoger5, alt: "Milad & Roger 5" },
                      { src: MiladRoger6, alt: "Milad & Roger 6" },
                      { src: MiladRoger3, alt: "Milad & Roger 3" }
                    ].map((image) => (
                      <CarouselItem
                        key={image.alt}
                        className="h-[480px] lg:h-[640px] w-full pl-1"
                      >
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 w-full "
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 80, filter: "blur(0px)" }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <Card className="p-0 w-full rounded-md shadow-none md:ml-4 max-w-sm">
              <CardContent className="flex flex-col p-0 text-md">
                <div className=" border-neutral-200 p-4 text-center">
                  <p className="text-neutral-600 font-medium text-xl font-serif">
                    <b>Domingo, 8 de Junio de 2025</b>
                  </p>
                  <p className="text-neutral-600 text-lg">a las 17:00h</p>
                </div>

                <div className="p-4 py-2">
                  <p className="text-neutral-600 font-bold">Torre del Pi</p>
                  <a
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4b6d485045ec1:0xc1fb98ac76fec688?sa=X&ved=1t:8290&ictx=111"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-neutral-600">
                      Carretera a Premià de Mar, 27,
                      <br />
                      08338 Premià de Dalt, Barcelona
                    </p>
                  </a>
                </div>

                <div className="p-4 border-t border-neutral-200 mt-7">
                  <Button
                    className="w-full"
                    onClick={() => setIsRSVPModalOpen(true)}
                    type="button"
                  >
                    {m.confirm_assistance()}
                  </Button>
                  <p className="text-neutral-600 pt-3 text-sm">
                    Queremos que te sientas cómodo y a la vez espectacular, por
                    lo que sugerimos traje formal que te haga feliz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <div className="h-32" />
        </div>
        <div className="pointer-events-none fixed inset-x-0 bottom-0 h-32 z-50 bg-gradient-to-t from-white to-transparent" />
      </ScrollArea>
      <div className="absolute inset-0 z-30 bg-white/40" />

      <RSVPModal isOpen={isRSVPModalOpen} onOpenChange={setIsRSVPModalOpen} />
    </div>
  )
}
