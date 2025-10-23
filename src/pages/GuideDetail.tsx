import { useParams, useNavigate } from "react-router-dom";
import HeaderWithDualNav from "@/components/hospital/HeaderWithDualNav";
import { ArrowLeft, BookOpen } from "lucide-react";

const GuideDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock guide data
  const guides: Record<
    string,
    {
      title: string;
      category: string;
      icon: string;
      image: string;
      introduction: string;
      sections: {
        heading: string;
        content: string;
      }[];
      resources: string[];
    }
  > = {
    guide: {
      title: "Your Guide to Our Hospital",
      category: "General Information",
      icon: "🏥",
      image: "https://picsum.photos/1000/500?random=8",
      introduction:
        "Welcome to General Hospital. This guide will help you navigate our facilities, understand our services, and make the most of your visit.",
      sections: [
        {
          heading: "Getting Here",
          content: `
            <p>Our hospital is conveniently located in the heart of the city with excellent public transportation access.</p>
            <ul>
              <li><strong>Address:</strong> 123 Health Street, City, State 12345</li>
              <li><strong>Parking:</strong> On-site parking available; contact us for details</li>
              <li><strong>Public Transit:</strong> Direct access to bus and train lines</li>
              <li><strong>Accessibility:</strong> Full wheelchair access to all areas</li>
            </ul>
          `,
        },
        {
          heading: "What to Bring",
          content: `
            <p>To make your visit smooth, please bring the following:</p>
            <ul>
              <li>Insurance card and photo ID</li>
              <li>List of current medications</li>
              <li>Medical history or previous medical records</li>
              <li>Vaccination records (for pediatric visits)</li>
            </ul>
          `,
        },
        {
          heading: "Our Services",
          content: `
            <p>We offer a comprehensive range of pediatric healthcare services including:</p>
            <ul>
              <li>Emergency Department (24/7)</li>
              <li>Primary Care Clinic</li>
              <li>Specialty Services (Cardiology, Neurology, etc.)</li>
              <li>Mental Health Services</li>
              <li>Urgent Care</li>
              <li>Dental Services</li>
            </ul>
          `,
        },
        {
          heading: "Visiting Hours",
          content: `
            <p>We welcome family visits during our operating hours:</p>
            <ul>
              <li><strong>Weekdays:</strong> 8 AM - 8 PM</li>
              <li><strong>Weekends:</strong> 9 AM - 7 PM</li>
              <li><strong>Emergency Department:</strong> 24 hours</li>
              <li>Parents/guardians may stay overnight</li>
            </ul>
          `,
        },
        {
          heading: "Patient Rights",
          content: `
            <p>As a patient or patient representative, you have the right to:</p>
            <ul>
              <li>Receive respectful, compassionate care</li>
              <li>Know about your medical condition and treatment options</li>
              <li>Privacy and confidentiality of your medical information</li>
              <li>Ask questions and understand your care plan</li>
              <li>Access your medical records</li>
            </ul>
          `,
        },
      ],
      resources: [
        "Hospital Map (PDF)",
        "Parking Information",
        "Insurance & Billing FAQ",
        "Patient Rights & Responsibilities",
      ],
    },
    "health-info": {
      title: "Kids Health Information",
      category: "Health Education",
      icon: "👶",
      image: "https://picsum.photos/1000/500?random=9",
      introduction:
        "Understanding your child's health helps you provide better care at home and know when to seek medical attention.",
      sections: [
        {
          heading: "Common Childhood Illnesses",
          content: `
            <p>Learn about common conditions affecting children and when to seek care.</p>
            <ul>
              <li>Cold and Flu</li>
              <li>Ear Infections</li>
              <li>Asthma</li>
              <li>Eczema</li>
              <li>Allergies</li>
            </ul>
          `,
        },
        {
          heading: "Healthy Habits for Kids",
          content: `
            <p>Building healthy habits early sets children up for lifelong wellness.</p>
            <ul>
              <li>Nutrition and balanced eating</li>
              <li>Physical activity and exercise</li>
              <li>Sleep and rest</li>
              <li>Dental hygiene</li>
              <li>Hand washing and hygiene</li>
            </ul>
          `,
        },
        {
          heading: "Growth and Development",
          content: `
            <p>Every child develops at their own pace. Understanding typical developmental milestones helps you support your child.</p>
            <ul>
              <li>Infant development (0-12 months)</li>
              <li>Toddler development (1-3 years)</li>
              <li>Preschool development (3-5 years)</li>
              <li>School-age development (5-12 years)</li>
              <li>Teen development (12+ years)</li>
            </ul>
          `,
        },
        {
          heading: "Vaccinations",
          content: `
            <p>Vaccines are an important part of keeping children healthy. They protect against many serious diseases.</p>
            <ul>
              <li>Vaccination schedule</li>
              <li>How vaccines work</li>
              <li>Common vaccine questions answered</li>
              <li>Side effects and what to expect</li>
            </ul>
          `,
        },
      ],
      resources: [
        "Developmental Milestone Charts",
        "Vaccination Schedule",
        "Healthy Eating Guide for Kids",
        "Activity Guidelines by Age",
      ],
    },
  };

  const guide = guides[id || "guide"];

  if (!guide) {
    return (
      <div>
        <HeaderWithDualNav />
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <p>Guide not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderWithDualNav />

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-[hsl(var(--hospital-blue-strong))] font-semibold hover:text-[hsl(var(--hospital-blue-bright))] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </button>

        {/* Hero Image */}
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
        />

        {/* Header */}
        <div className="mb-12 max-w-[1000px]">
          <div className="text-5xl mb-4">{guide.icon}</div>
          <div className="inline-block px-3 py-1 bg-[hsl(var(--hospital-bg-soft))] rounded-full text-sm font-semibold text-[hsl(var(--hospital-blue-strong))] mb-4">
            {guide.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--hospital-text-strong))] mb-6 leading-tight">
            {guide.title}
          </h1>
          <p className="text-lg text-[hsl(var(--hospital-text-muted))]">
            {guide.introduction}
          </p>
        </div>

        {/* Main content */}
        <div className="prose max-w-[1000px] mb-16">
          {guide.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold text-[hsl(var(--hospital-text-strong))] mb-4">
                {section.heading}
              </h2>
              <div
                className="text-[hsl(var(--hospital-text-muted))]"
                dangerouslySetInnerHTML={{
                  __html: section.content
                    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2">')
                    .replace(/<li>/g, '<li class="mb-2">')
                    .replace(/<p>/g, '<p class="mb-4">'),
                }}
              />
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="bg-[hsl(var(--hospital-bg-soft))] rounded-xl p-8 max-w-[1000px]">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-[hsl(var(--hospital-blue-strong))] mr-3" />
            <h3 className="text-2xl font-bold text-[hsl(var(--hospital-text-strong))]">
              Additional Resources
            </h3>
          </div>
          <ul className="space-y-3">
            {guide.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center text-[hsl(var(--hospital-blue-strong))] font-semibold hover:text-[hsl(var(--hospital-blue-bright))] transition-colors"
                >
                  📄 {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

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

export default GuideDetail;
