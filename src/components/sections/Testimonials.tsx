import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Mr. Amit Patel",
      handle: "@amitpatel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The best thing is - This team's Behavior, Work, Dedication, Design, Patience and Hard Working make everyone fall for them and their Design. They know what a client wants, they understand the taste of what client needs! I really appreciate And thank you",
    href: "#"
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyasharma",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our kitchen is designed by RTX Infrastructure. I would like to specially mention Mr. Rajesh who was extremely cooperative and professional in the way he designed & handled our project from start to end. Also I should say thanks to Mr. Rajesh he design and have given his finishing touch to create our dream kitchen. Thank you RTX Infrastructure!"
  },
  {
    author: {
      name: "Deepika Verma",
      handle: "@deepikaverma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "This team led by Mr Rajesh is aware what perfection means. They understand what commitment to work, time limit and the client means. Worked on a 3d visualization of a project on Children School with this firm. Extremely satisfied with the delivery of product in such a short time. Kudos Team Rajesh. Keep it up and All the best!"
  },
  {
    author: {
      name: "Mr. Rajesh Agarwal",
      handle: "@rajeshagarwal",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Seriously I'm spellbound about this team and their Designing accuracy. They designed my flat and Recently Designed my Company Office (TechCorp Solutions Pvt. Ltd.) In a very high end concept with full space utilization. They're doing a great job with their knowledge and perfection."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="What Clients Say About Us"
      description="Trusted by homeowners, businesses, and professionals for exceptional interior design and architectural solutions"
      testimonials={testimonials}
    />
  )
}

export default TestimonialsSectionDemo;