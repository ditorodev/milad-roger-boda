"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/toast"
import { Utensils } from "lucide-react"
import { useState } from "react"
import { ScrollArea } from "./ui/scroll-area"

interface RSVPModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function RSVPModal({ isOpen, onOpenChange }: RSVPModalProps) {
  const [guestCount, setGuestCount] = useState(1)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted")
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
      onOpenChange(false)
    }, 3000)
  }

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <ScrollArea className="h-[calc(100vh-8rem)] max-h-[960px]">
          <DrawerHeader className="px-10">
            <DrawerTitle className="text-2xl font-bold flex flex-col items-center justify-center gap-5">
              <Utensils className="mr-2 text-neutral-200 size-16" />
              Dietary Preferences
            </DrawerTitle>
            <DrawerDescription className="text-center text-md">
              Please confirm your attendance and let us know about your dietary
              needs.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 px-10 pb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label>Will you be attending?</Label>
                  <RadioGroup defaultValue="yes" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="attending-yes" />
                      <Label htmlFor="attending-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="attending-no" />
                      <Label htmlFor="attending-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="guest-count">
                    Number of guests attending (including yourself)
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setGuestCount(Number.parseInt(value))
                    }
                  >
                    <SelectTrigger id="guest-count">
                      <SelectValue placeholder="Select guest count" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {[...Array(guestCount)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Label>
                      {index === 0 ? "Your" : `Guest ${index + 1}'s`} Dietary
                      Preferences
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select dietary preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No restrictions</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="gluten-free">Gluten-free</SelectItem>
                        <SelectItem value="dairy-free">Dairy-free</SelectItem>
                        <SelectItem value="other">
                          Other (please specify)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Please specify any allergies or additional dietary requirements" />
                  </div>
                ))}

                <div>
                  <Label htmlFor="additional-info">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additional-info"
                    placeholder="Any other details you'd like us to know?"
                  />
                </div>
              </div>
              <div className="h-32" />

              <DrawerFooter className="bottom-0 absolute inset-x-0 bg-gray-50 border-t p-4 px-10">
                <Button type="submit" className="w-full">
                  Submit RSVP
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </div>
        </ScrollArea>
      </DrawerContent>

      {showToast && (
        <Toast className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md">
          RSVP submitted successfully!
        </Toast>
      )}
    </Drawer>
  )
}
