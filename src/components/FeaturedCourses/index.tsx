import type { Course } from "@/types/courses";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react";

const response = await fetch(import.meta.env.PUBLIC_API_URL + "/courses");

const data = await response.json();
const courses: Course[] = data.courses;

export default function FeaturedCourses() {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Featured Courses</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Explore Our Courses</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our extensive catalog of online courses and find the perfect fit for your learning goals.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full mt-8">
          <Carousel
            opts={{ loop: true, }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {courses.map((course) => (
                <CarouselItem key={course.id} className="group sm:basis-1/2 md:basis-1/3 cursor-pointer">
                  <Card className="relative max-h-96 min-h-96 h-full rounded-lg bg-background group-hover:bg-primary  scale-95 group-hover:scale-100 shadow-md transition-all">
                    <img
                      src={course.image_url}
                      width="550"
                      height="310"
                      alt={course.name}
                      className="aspect-video w-full object-cover object-center rounded-t-sm"
                    />
                    <CardContent className="p-4 border-t-2 border-primary group-hover:border-primary-foreground">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold group-hover:underline text-primary group-hover:text-white ">
                          {course.name}
                        </h3>
                        <h5 className="text-muted-foreground/80 text-xs group-hover:text-primary-foreground ">By {course.teacher.name}</h5>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground group-hover:text-muted line-clamp-2 text-ellipsis">
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}