import { Card, CardFooter } from "../ui/card";

export default function StudentFeedback() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What Our Students Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied students about their experiences with our online courses.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
          <Card className="rounded-lg bg-background p-6 shadow-sm">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  "The courses on this platform are truly exceptional. I've learned so much and it's helped me
                  advance my career."
                </p>
              </div>
              <CardFooter className="mt-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Jane Doe</div>
                  <div className="text-muted-foreground">Software Engineer</div>
                </div>
              </CardFooter>
            </blockquote>
          </Card>
          <Card className="rounded-lg bg-background p-6 shadow-sm">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  "I was able to learn new skills and advance my career with the help of these online courses.
                  Highly recommended!"
                </p>
              </div>
              <CardFooter className="mt-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">John Smith</div>
                  <div className="text-muted-foreground">Data Analyst</div>
                </div>
              </CardFooter>
            </blockquote>
          </Card>
          <Card className="rounded-lg bg-background p-6 shadow-sm">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  "The instructors are knowledgeable and engaging. I've gained valuable skills that I can apply in
                  my work immediately."
                </p>
              </div>
              <CardFooter className="mt-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Sarah Lee</div>
                  <div className="text-muted-foreground">Marketing Manager</div>
                </div>
              </CardFooter>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  )
}