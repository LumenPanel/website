"use client";

import FadeUp from "@/components/fade-up";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="mt-24 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden min-h-72">
          <CardContent className="relative h-full">
            <motion.div
              animate={{
                backgroundPosition: [
                  "0% 0%",
                  "50% 40%",
                  "100% 100%",
                ],
                backgroundImage: [
                  "radial-gradient(farthest-corner, #111827, #e2e5ea)",
                  "radial-gradient(farthest-corner, #f9fafb, #f9fafb)",
                  "radial-gradient(farthest-corner, #111827, #e2e5ea)",
                  "radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)",
                ],
              }}
              transition={{
                backgroundPosition: {
                  times: [0, 0.5, 0.5, 1],
                  type: "spring",
                  repeat: Infinity,
                  duration: 10,
                  delay: 0.5,
                },
                backgroundImage: {
                  times: [0, 0.2, 0.8, 1],
                  repeat: Infinity,
                  duration: 10,
                  delay: 0.5,
                },
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-#06080a to-#e2e5ea bg-radial bg-cover flex flex-col justify-center items-center"
            >
              <motion.h3
                animate={{
                  color: ["var(--foreground)", "#fff"],
                }}
                transition={{
                  color: {
                    times: [0.25, 0.35, 0.7, 0.8],
                    type: "spring",
                    repeat: Infinity,
                    duration: 10,
                    delay: 1,
                  },
                }}
                className="z-50 font-semibold text-2xl mix-blend-difference"
              >
                Light and Dark Mode Included.
              </motion.h3>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden col-span-2">
          <CardContent>
            <CardHeader>
              <CardTitle className="text-2xl">
                Manage your clients with ease!
              </CardTitle>
            </CardHeader>
          </CardContent>
        </Card>
        <Card className="min-h-72">
          <CardHeader>
            <CardTitle className="text-2xl">
              Internationalization built in
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Built in support for the most popular payment gateways
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
        <CardHeader>
            <CardTitle className="text-2xl">
              User experience as a top priority
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </section>
  );
}
