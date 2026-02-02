"use client"

import { motion } from "framer-motion"
import SphereImageGrid, { ImageData } from "@/components/ui/img-sphere"

// Real RIV Solar customers featured first, then additional testimonials
const TESTIMONIAL_IMAGES: ImageData[] = [
  // REAL CLIENTS - Featured prominently
  { id: "real1", src: "/clients/client-1.png", alt: "Real Customer", title: "Maria S. - Riverside", description: "RIV Solar exceeded all my expectations. Professional from start to finish!" },
  { id: "real2", src: "/clients/client-2.png", alt: "Real Customer", title: "Robert J. - Corona", description: "Best decision we ever made. Our bill went from $400 to almost nothing!" },
  { id: "real3", src: "/clients/client-3.png", alt: "Real Customer", title: "Mike T. - Moreno Valley", description: "Honest company, no pressure sales. Just facts and real savings." },
  { id: "real4", src: "/clients/client-4.png", alt: "Real Customer", title: "Susan L. - Temecula", description: "The installation was quick and clean. Love my new solar panels!" },
  { id: "real5", src: "/clients/client-5.png", alt: "Real Customer", title: "Diana M. - Murrieta", description: "Finally free from SCE rate hikes. Thank you RIV Solar!" },
  { id: "real6", src: "/clients/client-6.png", alt: "Real Customer", title: "David K. - Hemet", description: "From $350/month to $12. The savings are real!" },
  // Additional testimonials to fill the sphere
  { id: "c7", src: "https://randomuser.me/api/portraits/men/45.jpg", alt: "Customer", title: "Robert S. - Perris", description: "Installed in 2 weeks. Now we produce more than we use!" },
  { id: "c8", src: "https://randomuser.me/api/portraits/women/33.jpg", alt: "Customer", title: "Amanda H. - Lake Elsinore", description: "Honest pricing, no hidden fees." },
  { id: "c9", src: "https://randomuser.me/api/portraits/men/52.jpg", alt: "Customer", title: "Chris P. - Beaumont", description: "My electric bill is basically $0 now!" },
  { id: "c10", src: "https://randomuser.me/api/portraits/women/17.jpg", alt: "Customer", title: "Michelle D. - Banning", description: "The whole process was seamless." },
  { id: "c11", src: "https://randomuser.me/api/portraits/men/62.jpg", alt: "Customer", title: "Kevin B. - San Jacinto", description: "Finally free from SCE rate hikes!" },
  { id: "c12", src: "https://randomuser.me/api/portraits/women/89.jpg", alt: "Customer", title: "Rachel M. - Menifee", description: "Our home value increased and bills decreased." },
  { id: "c13", src: "https://randomuser.me/api/portraits/men/11.jpg", alt: "Customer", title: "Steven G. - Wildomar", description: "Best investment we've made in our home." },
  { id: "c14", src: "https://randomuser.me/api/portraits/women/22.jpg", alt: "Customer", title: "Nicole F. - Canyon Lake", description: "RIV Solar made going green affordable!" },
  { id: "c15", src: "https://randomuser.me/api/portraits/men/36.jpg", alt: "Customer", title: "Brian T. - Norco", description: "Transparent process from start to finish." },
  { id: "c16", src: "https://randomuser.me/api/portraits/women/55.jpg", alt: "Customer", title: "Emily R. - Jurupa Valley", description: "No gimmicks, just honest solar." },
  { id: "c17", src: "https://randomuser.me/api/portraits/men/81.jpg", alt: "Customer", title: "Jason K. - Eastvale", description: "Saved $2,400 first year alone." },
  { id: "c18", src: "https://randomuser.me/api/portraits/women/79.jpg", alt: "Customer", title: "Stephanie L. - Calimesa", description: "Professional, punctual, and the savings are real." },
  { id: "c19", src: "https://randomuser.me/api/portraits/men/94.jpg", alt: "Customer", title: "Mark H. - Yucaipa", description: "They answered every question." },
  { id: "c20", src: "https://randomuser.me/api/portraits/women/91.jpg", alt: "Customer", title: "Laura C. - Redlands", description: "Our neighbors are jealous of our $15 electric bills!" },
  { id: "c21", src: "https://randomuser.me/api/portraits/men/43.jpg", alt: "Customer", title: "Tom W. - Fontana", description: "Quick install, immediate savings." },
  { id: "c22", src: "https://randomuser.me/api/portraits/women/37.jpg", alt: "Customer", title: "Maria G. - Ontario", description: "Finally, a company that delivers on promises." },
  { id: "c23", src: "https://randomuser.me/api/portraits/men/55.jpg", alt: "Customer", title: "James P. - Rancho Cucamonga", description: "Best home upgrade ever." },
  { id: "c24", src: "https://randomuser.me/api/portraits/women/63.jpg", alt: "Customer", title: "Ashley M. - Upland", description: "Zero down, zero regrets." },
  { id: "c25", src: "https://randomuser.me/api/portraits/men/67.jpg", alt: "Customer", title: "Derek S. - Chino", description: "Smooth process A to Z." },
  { id: "c26", src: "https://randomuser.me/api/portraits/women/47.jpg", alt: "Customer", title: "Katie R. - Pomona", description: "My only regret is not doing it sooner." },
  { id: "c27", src: "https://randomuser.me/api/portraits/men/28.jpg", alt: "Customer", title: "Ryan L. - Claremont", description: "Exceeded all expectations." },
  { id: "c28", src: "https://randomuser.me/api/portraits/women/26.jpg", alt: "Customer", title: "Diana K. - Montclair", description: "Professional team, amazing results." },
  { id: "c29", src: "https://randomuser.me/api/portraits/men/18.jpg", alt: "Customer", title: "Carlos V. - Colton", description: "From skeptic to advocate." },
  { id: "c30", src: "https://randomuser.me/api/portraits/women/81.jpg", alt: "Customer", title: "Megan T. - Rialto", description: "Love seeing that $0 bill!" }
]

export function TestimonialSphereSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side - Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 uppercase tracking-tight font-[family-name:var(--font-barlow-condensed)] whitespace-nowrap">
              Real Families. <span className="text-orange-500">Real Savings.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join 2,500+ California homeowners who trusted RIV Solar to cut their energy bills and power their homes with sunshine.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {TESTIMONIAL_IMAGES.slice(0, 5).map((img) => (
                    <img
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      className="w-11 h-11 rounded-full border-[3px] border-white/50 object-cover"
                    />
                  ))}
                </div>
                <span className="text-white/70 text-sm font-medium">+2,500 happy families</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Interactive Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <SphereImageGrid
              images={TESTIMONIAL_IMAGES}
              containerSize={550}
              sphereRadius={200}
              dragSensitivity={0.5}
              momentumDecay={0.96}
              maxRotationSpeed={4}
              baseImageScale={0.18}
              hoverScale={1.3}
              perspective={1000}
              autoRotate={true}
              autoRotateSpeed={0.15}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
