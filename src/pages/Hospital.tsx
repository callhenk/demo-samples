import HeaderWithDualNav from "@/components/hospital/HeaderWithDualNav";
import HeroSplit from "@/components/hospital/HeroSplit";
import ColorTile from "@/components/hospital/ColorTile";
import InfoCard from "@/components/hospital/InfoCard";
import NewsCard from "@/components/hospital/NewsCard";
import StatusDial from "@/components/hospital/StatusDial";
import { Users, Heart, BookOpen, Shield } from "lucide-react";

const Hospital = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWithDualNav />

      {/* Hero Section */}
      <HeroSplit
        image="https://picsum.photos/600/500?random=1"
        imageAlt="Children playing outdoors in a healthy environment"
        title="New Teen Health Info fact sheets are live"
        description="Our new fact sheets break down complex health topics into plain language for young people and families. Get the information you need in a clear, accessible format."
        ctaText="Read more"
        ctaHref="/guides"
      />

      {/* Quick-Access Tiles */}
      <section className="py-16 md:py-24 bg-[hsl(var(--hospital-bg-soft))]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorTile
              label="Your guide to our hospital"
              href="/guide"
              colorVar="--hospital-blue-bright"
              icon="🏥"
            />
            <ColorTile
              label="Kids Health Info"
              href="/health-info"
              colorVar="--hospital-yellow"
              icon="👶"
            />
            <ColorTile
              label="Clinical Practice Guidelines"
              href="/guidelines"
              colorVar="--hospital-orange"
              icon="📋"
            />
            <ColorTile
              label="Patient Portal"
              href="#"
              colorVar="--hospital-green"
              icon="👤"
            />
          </div>
        </div>
      </section>

      {/* Featured Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--hospital-text-strong))] mb-12">
            What's important today
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ED Status Card */}
            <div className="md:col-span-1 flex flex-col items-center justify-center bg-[hsl(var(--hospital-bg-soft))] rounded-xl p-8">
              <StatusDial level="normal" size={180} />
              <p className="text-sm text-[hsl(var(--hospital-text-muted))] text-center mt-6 mb-4">
                Check our current Emergency Department busyness before you travel.
              </p>
              <a
                href="#"
                className="text-[hsl(var(--hospital-blue-strong))] font-semibold hover:text-[hsl(var(--hospital-blue-bright))] transition-colors"
              >
                Check status
              </a>
            </div>

            {/* Teen Health Info Card */}
            <InfoCard
              title="Teen Health Info fact sheets"
              body="Comprehensive, age-appropriate health information written specifically for teenagers and young adults. Topics cover physical health, mental wellbeing, and common health concerns."
              icon="📚"
              ctaText="Explore fact sheets"
              ctaHref="/health-info/teen"
            />

            {/* Health Topics Card */}
            <InfoCard
              title="Health topics in simple language"
              body="Easy-to-understand explanations of health topics and medical conditions. Perfect for ages 12–25 and parents who want to support young people's health understanding."
              icon="💡"
              ctaText="Browse topics"
              ctaHref="/health-info/simple"
            />
          </div>
        </div>
      </section>

      {/* News / Stories Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--hospital-bg-soft))]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--hospital-text-strong))] mb-12">
            Latest News
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              image="https://picsum.photos/400/300?random=2"
              imageAlt="Community open day event"
              title="Community Open Day Highlights"
              date="March 15, 2024"
              excerpt="Hundreds of families joined us for our annual community open day. Meet staff, tour facilities, and learn about our services."
              href="/news/1"
            />

            <NewsCard
              image="https://picsum.photos/400/300?random=3"
              imageAlt="New clinic hours announcement"
              title="New Clinic Hours Now in Effect"
              date="March 12, 2024"
              excerpt="Several clinics have expanded their hours to better serve families. Check our department page for updated schedules."
              href="/news/2"
            />

            <NewsCard
              image="https://picsum.photos/400/300?random=4"
              imageAlt="Research spotlight on teen wellbeing"
              title="Research Spotlight: Teen Wellbeing Study"
              date="March 8, 2024"
              excerpt="Our latest research explores factors supporting mental health in adolescents. Initial findings show promising results."
              href="/news/3"
            />

            <NewsCard
              image="https://picsum.photos/400/300?random=5"
              imageAlt="New pediatric services"
              title="Introducing New Pediatric Services"
              date="February 28, 2024"
              excerpt="We're expanding our pediatric cardiology and neurology departments. Learn about new specialists joining our team."
              href="/news/4"
            />

            <NewsCard
              image="https://picsum.photos/400/300?random=6"
              imageAlt="Staff recognition event"
              title="Staff Recognition: Team Excellence Awards"
              date="February 22, 2024"
              excerpt="Celebrating outstanding contributions from our healthcare teams across all departments this month."
              href="/news/5"
            />

            <NewsCard
              image="https://picsum.photos/400/300?random=7"
              imageAlt="Health education workshop"
              title="Free Family Health Education Workshop"
              date="February 18, 2024"
              excerpt="Join us for hands-on workshops covering child development, nutrition, and injury prevention for parents."
              href="/news/6"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-block px-8 py-3 bg-[hsl(var(--hospital-blue-strong))] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View all news
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--hospital-text-strong))] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left: Organization info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Royal Children's Hospital Melbourne</h3>
              <p className="text-sm text-white/80 mb-4">
                Australia's leading pediatric healthcare facility dedicated to providing world-class, compassionate care for children and families.
              </p>
              <div className="space-y-2 text-sm text-white/80">
                <p>📍 50 Flemington Road, Parkville Victoria 3052, Australia</p>
                <p>📞 +61 3 9345 5522</p>
              </div>
            </div>

            {/* Middle: Quick links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Social icons */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: "f", label: "Facebook" },
                  { icon: "📷", label: "Instagram" },
                  { icon: "𝕏", label: "Twitter" },
                  { icon: "▶", label: "YouTube" },
                  { icon: "in", label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <span className="text-sm font-bold">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Royal Children's Hospital Melbourne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hospital;
