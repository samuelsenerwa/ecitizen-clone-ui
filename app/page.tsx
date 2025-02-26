import { Eye, Languages, PersonStanding, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default async function SignUp() {


  return (
    <section className="w-full overflow-x-hidden min-h-screen">
      <div className="h-full">
        <div className="grid lg:grid-cols-2 h-screen gap-8 items-stretch">
          {/* Left Column - Centered Content */}
          <div className="flex flex-col items-center justify-center px-6 py-12 sm:py-0">
            <div className="flex items-center justify-between w-full px-4 sm:px-20">
              {/* Centered Logo */}
              <div className="flex lg:flex-1 justify-center">
                <Image
                  src="/ecitizen-logo.png"
                  alt="Republic of Kenya Coat of Arms"
                  width={200}
                  height={150}
                  className="h-48 w-48 sm:h-48 sm:w-48 md:h-48 md:w-48 object-cover"
                  priority
                />
              </div>

              {/* Icons on the far right */}
              <div className="flex items-end gap-4 ml-4">
                <div className="flex items-center gap-2 rounded-full bg-blue-500 h-8 w-8 px-2 py-1.5">
                  <Languages className="text-white" />
                </div>
                <div className="flex items-center gap-2 rounded-full bg-blue-500 h-8 w-8 px-2 py-1.5">
                  <PersonStanding className="text-white" />
                </div>
              </div>
            </div>


            <div className="w-full max-w-[400px] space-y-6 ">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-[#1a1f36]">One Login</h1>
                <p className="text-gray-600">All Government Services</p>
              </div>

              <form className="space-y-6 py-12">
                <div className="space-y-2">
                  <Label htmlFor="email">
                  Email address or ID number <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                  id="email" 
                  className="h-12 px-4" 
                  required 
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">
                      Password <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <Input id="password" type="password" className="h-12 px-4 pr-12" required />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="w-4 h-4 border-[#00954a] rounded bg-white text-[#00954a]"
                    />
                    <label htmlFor="remember" className="text-sm leading-none text-gray-600">
                      Remember for 30 days
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline font-semibold">
                    Forgot Password
                  </Link>
                </div>

                <Button className="h-12 w-full bg-[#00a651] text-base font-bold hover:bg-[#00954a] rounded-3xl">
                  <p className="text-sm">Sign In</p>
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="bg-[#00a651]/10 h-12 items-center justify-center rounded-full text-base font-bold text-gray-700"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00a651] ">
                      <QrCode className="text-white" />
                    </div>
                    <p className="text-xs">Sign in with Digital ID</p>
                  </Button>
                </div>
              </form>

              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>


          {/* Right Column - Full-height Image */}
          <div className="hidden lg:block relative min-h-[90vh] lg:min-h-[auto]">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/hero.png"
                alt="Professional using KYC solution"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1440px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-20 p-8">
                <div className="rounded-2xl bg-white/60 p-6 text-start backdrop-blur-sm max-w-[720px]">
                    <h2 className="leading-tight text-3xl font-bold text-gray-800">
                    Over 8,000 Government services now available at your fingertips
                    </h2>
                    <p className="text-gray-600 mt-4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}