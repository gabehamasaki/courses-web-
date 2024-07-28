import type { Course } from "@/types/courses";
import { Card, CardContent, CardTitle } from "../ui/card";

const response = await fetch(import.meta.env.PUBLIC_API_URL + "/courses");

const data = await response.json();
const courses: Course[] = data.courses;

export default function FeaturedCourses() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Featured Courses</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Explore Our Courses</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our extensive catalog of online courses and find the perfect fit for your learning goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
              <img
                src={course.image_url}
                width="550"
                height="310"
                alt={course.name}
                className="aspect-video w-full object-cover object-center"
              />
              <CardContent className="p-4">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold group-hover:underline text-primary">
                    {course.name}
                  </h3>
                  <h5 className="text-muted-foreground/80 text-xs">By {course.teacher.name}</h5>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}