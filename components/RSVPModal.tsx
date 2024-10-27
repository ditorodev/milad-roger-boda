"use client";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { m } from "@/lib/i18n";
import { Utensils } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

interface RSVPModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export default function RSVPModal({ isOpen, onOpenChange }: RSVPModalProps) {
	const [guestCount, setGuestCount] = useState(1);
	const [showToast, setShowToast] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Here you would typically send the form data to your server
		console.log("Form submitted");
		setShowToast(true);
		setTimeout(() => {
			setShowToast(false);
			onOpenChange(false);
		}, 3000);
	};

	return (
		<Drawer open={isOpen} onOpenChange={onOpenChange}>
			<DrawerContent>
				<ScrollArea
					className={`h-[calc(100vh-8rem)] max-h-[960px]`}
				>
					<DrawerHeader className="px-10">
						<DrawerTitle className="text-2xl font-bold flex flex-col items-center justify-center gap-5">
							<Utensils className="rtl:ml-2 text-neutral-200 size-16" />
							{m.dietary_preferences_title()}
						</DrawerTitle>
						<DrawerDescription className="text-center text-md">
							{m.welcome_message()}
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 px-10 pb-0">
						<form onSubmit={handleSubmit}>
							<div className="space-y-4">
								<div>
									<Label htmlFor="guest-count">
										{m.dietary_preferences_guest_count()}
									</Label>
									<Select
										onValueChange={(value: string) =>
											setGuestCount(Number.parseInt(value))
										}
									>
										<SelectTrigger id="guest-count">
											<SelectValue
												placeholder={m.dietary_preferences_guest_count_placeholder()}
											/>
										</SelectTrigger>
										<SelectContent>
											{[...Array(5)].map((_, i) => (
												<SelectItem key={i + 1} value={(i + 1).toString()}>
													{m[
														`dietary_preferences_guest_count_options_${i + 1}` as keyof typeof m
													]()}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								{[...Array(guestCount)].map((_, index) => (
									<div
										key={`guest-${index}`}
										className="space-y-4 border-t pt-4"
									>
										<Label className="font-bold">
											{m.dietary_preferences_guest_info_guest({
												n: (index + 1).toString(),
											})}
										</Label>
										<div>
											<Label htmlFor={`name-${index}`}>
												{m.dietary_preferences_guest_info_full_name()}
											</Label>
											<Input
												id={`name-${index}`}
												placeholder={m.dietary_preferences_guest_info_full_name_placeholder()}
												required
											/>
										</div>
										<div>
											<Label>
												{m.dietary_preferences_guest_info_dietary_preferences()}
											</Label>
											<Select>
												<SelectTrigger>
													<SelectValue
														placeholder={m.dietary_preferences_guest_info_dietary_placeholder()}
													/>
												</SelectTrigger>
												<SelectContent>
													{/* TODO: translate bb */}
													<SelectItem value="none">No restrictions</SelectItem>
													<SelectItem value="vegetarian">Vegetarian</SelectItem>
													<SelectItem value="vegan">Vegan</SelectItem>
													<SelectItem value="gluten-free">
														Gluten-free
													</SelectItem>
													<SelectItem value="dairy-free">Dairy-free</SelectItem>
													<SelectItem value="other">Other</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div>
											<Label>
												{m.dietary_preferences_guest_info_allergies()}
											</Label>
											<Textarea
												placeholder={m.dietary_preferences_guest_info_allergies_placeholder()}
											/>
										</div>
										<div>
											<Label>
												{m.dietary_preferences_guest_info_transportation()}
											</Label>
											<RadioGroup
												defaultValue="no"
												className="flex rtl:space-x-reverse space-x-4"
											>
												<div className="flex items-center rtl:space-x-reverse space-x-2">
													<RadioGroupItem
														value="yes"
														id={`transport-yes-${index}`}
													/>
													<Label htmlFor={`transport-yes-${index}`}>
														{m.dietary_preferences_guest_info_transportation_options_yes()}
													</Label>
												</div>
												<div className="flex items-center rtl:space-x-reverse space-x-2">
													<RadioGroupItem
														value="no"
														id={`transport-no-${index}`}
													/>
													<Label htmlFor={`transport-no-${index}`}>
														{m.dietary_preferences_guest_info_transportation_options_no()}
													</Label>
												</div>
											</RadioGroup>
										</div>
									</div>
								))}
							</div>
							<div className="h-32" />

							<DrawerFooter className="bottom-0 absolute inset-x-0 bg-gray-50 border-t p-4 px-10">
								<Button type="submit" className="w-full">
									{m.dietary_preferences_submit()}
								</Button>
								<DrawerClose asChild>
									<Button variant="outline">
										{m.dietary_preferences_cancel()}
									</Button>
								</DrawerClose>
							</DrawerFooter>
						</form>
					</div>
				</ScrollArea>
			</DrawerContent>

			{showToast && (
				<Toast className="fixed bottom-4 rtl:left-4 right-4 bg-green-500 text-white p-4 rounded-md">
					RSVP submitted successfully!
				</Toast>
			)}
		</Drawer>
	);
}
