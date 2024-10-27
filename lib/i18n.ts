import type { AvailableLanguageTag } from "@/paraglide/runtime"
import { Middleware, Navigation, PrefixStrategy } from "@inlang/paraglide-next"

export const strategy = PrefixStrategy<AvailableLanguageTag>()

export const middleware = Middleware({ strategy })
export const { Link, useRouter, usePathname, redirect, permanentRedirect } = Navigation({ strategy })

export * as m from "@/paraglide/messages"