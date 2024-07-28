import { Card, CardContent } from "../ui/card";

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
          <Card className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Course"
              className="aspect-video w-full object-cover object-center"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground group-hover:underline text-primary">
                Introduction to Web Development
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
              </p>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Course"
              className="aspect-video w-full object-cover object-center"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground group-hover:underline text-primary">
                Data Science Fundamentals
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Dive into the world of data science and learn how to extract insights from data.
              </p>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Course"
              className="aspect-video w-full object-cover object-center"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground group-hover:underline text-primary">
                Mastering Digital Marketing
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Explore the latest digital marketing strategies and techniques to grow your business.
              </p>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Course"
              className="aspect-video w-full object-cover object-center"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground group-hover:underline text-primary">
                Artificial Intelligence Essentials
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Gain a comprehensive understanding of the fundamentals of artificial intelligence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}