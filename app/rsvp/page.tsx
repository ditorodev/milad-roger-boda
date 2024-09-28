"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
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

export default function RSVPForm() {
  const [guestCount, setGuestCount] = useState(1)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted")
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center justify-center">
            <Utensils className="mr-2" />
            Wedding RSVP & Dietary Preferences
          </CardTitle>
          <CardDescription className="text-center">
            Please confirm your attendance and let us know about your dietary
            needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
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
                <Label htmlFor="additional-info">Additional Information</Label>
                <Textarea
                  id="additional-info"
                  placeholder="Any other details you'd like us to know?"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-6">
              Submit RSVP
            </Button>
          </form>
        </CardContent>
      </Card>

      {showToast && (
        <Toast className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md">
          RSVP submitted successfully!
        </Toast>
      )}
    </div>
  )
}
