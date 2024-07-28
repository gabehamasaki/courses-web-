export default function Footer() {
  return (
    <footer className="bg-primary p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-primary-foreground">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Our Team
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            News
          </a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Courses</h3>
          <a href="#" className="hover:underline">
            Web Development
          </a>
          <a href="#" className="hover:underline">
            Data Science
          </a>
          <a href="#" className="hover:underline">
            Digital Marketing
          </a>
          <a href="#" className="hover:underline">
            Artificial Intelligence
          </a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Webinars
          </a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <a href="#" className="hover:underline">
            Email
          </a>
          <a href="#" className="hover:underline">
            Phone
          </a>
          <a href="#" className="hover:underline">
            Social Media
          </a>
        </div>
      </div>
    </footer>
  )
}