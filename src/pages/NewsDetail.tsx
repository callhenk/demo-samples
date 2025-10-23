import { useParams, useNavigate } from "react-router-dom";
import HeaderWithDualNav from "@/components/hospital/HeaderWithDualNav";
import { Calendar, ArrowLeft } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock news article data - in a real app, this would come from an API
  const articles: Record<
    string,
    {
      title: string;
      date: string;
      image: string;
      content: string;
    }
  > = {
    "1": {
      title: "Community Open Day Highlights",
      date: "March 15, 2024",
      image:
        "https://picsum.photos/1000/500?random=2",
      content: `
        <h2>A Successful Day for Our Community</h2>
        <p>Hundreds of families joined us on Saturday for our annual community open day celebration. The event featured facility tours, interactive health education stations, and the chance to meet members of our medical and support teams.</p>

        <h3>What Families Experienced</h3>
        <p>Visitors of all ages enjoyed:</p>
        <ul>
          <li>Guided tours of our emergency department and pediatric wards</li>
          <li>Hands-on demonstrations from our clinical teams</li>
          <li>Information sessions about health and wellness for children</li>
          <li>Entertainment and activities for kids</li>
          <li>Free health screenings</li>
        </ul>

        <h3>Community Response</h3>
        <p>Feedback from attendees was overwhelmingly positive. Families appreciated the opportunity to familiarize themselves with our facility and meet the caring professionals who serve our community every day.</p>

        <p>"This event really helped me feel comfortable bringing my child here in the future," said one parent attendee. "Everyone was so welcoming and took time to answer our questions."</p>

        <h3>Save the Date</h3>
        <p>We're already planning next year's open day. Keep an eye on our website and social media for announcements about upcoming community events.</p>
      `,
    },
    "2": {
      title: "New Clinic Hours Now in Effect",
      date: "March 12, 2024",
      image:
        "https://images.unsplash.com/photo-1579154204601-01d82b27ebcc?w=1200&h=600&fit=crop",
      content: `
        <h2>Extended Hours to Better Serve You</h2>
        <p>Effective immediately, several of our most popular clinics have expanded their operating hours to reduce wait times and provide greater access to care.</p>

        <h3>Clinics with Extended Hours</h3>
        <ul>
          <li><strong>Pediatric Primary Care:</strong> Now open until 7 PM on weekdays</li>
          <li><strong>Urgent Care:</strong> Extended weekend hours 8 AM to 6 PM</li>
          <li><strong>Dermatology:</strong> Added Thursday evening appointments</li>
          <li><strong>Behavioral Health:</strong> Additional afternoon and evening slots available</li>
        </ul>

        <h3>How to Schedule</h3>
        <p>You can now schedule appointments online through our patient portal or call our appointment line. We recommend booking in advance to secure your preferred time slot.</p>

        <h3>Coming Soon</h3>
        <p>We're evaluating additional clinics for expanded hours based on patient demand. Check back soon for more updates.</p>
      `,
    },
    "3": {
      title: "Research Spotlight: Teen Wellbeing Study",
      date: "March 8, 2024",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
      content: `
        <h2>Understanding Teen Mental Health</h2>
        <p>Our research team recently completed a major study examining factors that support mental health and resilience in adolescents. The findings provide valuable insights for families, educators, and healthcare providers.</p>

        <h3>Key Findings</h3>
        <ul>
          <li>Strong peer relationships are a primary protective factor</li>
          <li>Physical activity shows significant correlation with mental wellbeing</li>
          <li>Family communication and support remain critically important</li>
          <li>School engagement is linked to better overall mental health outcomes</li>
        </ul>

        <h3>What This Means</h3>
        <p>These findings support existing recommendations for holistic teen health support that addresses physical, social, and emotional wellbeing.</p>

        <h3>Next Steps</h3>
        <p>Our team is developing practical resources for families and schools based on this research. Stay tuned for free educational materials launching next month.</p>
      `,
    },
  };

  const article = articles[id || "1"];

  if (!article) {
    return (
      <div>
        <HeaderWithDualNav />
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <p>Article not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderWithDualNav />

      {/* Article Header */}
      <article className="max-w-[800px] mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-[hsl(var(--hospital-blue-strong))] font-semibold hover:text-[hsl(var(--hospital-blue-bright))] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </button>

        {/* Featured image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
        />

        {/* Article meta */}
        <div className="flex items-center text-sm font-semibold text-[hsl(var(--hospital-text-muted))] mb-6">
          <Calendar className="w-4 h-4 mr-2" />
          {article.date}
        </div>

        {/* Article title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--hospital-text-strong))] mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Article content */}
        <div
          className="prose max-w-none text-[hsl(var(--hospital-text-muted))] leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: article.content
              .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-[hsl(var(--hospital-text-strong))] mt-8 mb-4">')
              .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-[hsl(var(--hospital-text-strong))] mt-6 mb-3">')
              .replace(/<p>/g, '<p class="mb-4">')
              .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 mb-4">')
              .replace(/<li>/g, '<li class="mb-2">'),
          }}
        />
      </article>

      {/* Footer */}
      <footer className="bg-[hsl(var(--hospital-text-strong))] text-white mt-20">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
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
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
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
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["f", "📷", "𝕏", "▶", "in"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-sm font-bold">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Royal Children's Hospital Melbourne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsDetail;
