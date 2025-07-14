import { ExternalLink, Target, Lightbulb, Users, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import PramodImage from '../Assets/Pramod.jpg';
import HemanthImage from '../Assets/hemanth-img.png';
import SruithiImage from '../Assets/sruthi-img.jpg';


const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Innovission"
        subtitle="Empowering Students and Job Seekers to Build Skills for a Better Future"
        backgroundImage="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Mission"
                subtitle="Bridging the Skills Gap Through Affordable, Practical Learning"
              />
              <p className="text-gray-600 mb-6">
                At Innovission, we believe that everyone deserves equal access to quality education and career opportunities. Our mission is to bridge the skills gap in India by offering affordable, accessible, and hands-on learning experiences tailored for students and job seekers.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to helping individuals develop the technical, professional, and soft skills necessary to succeed in today’s fast-changing job market. Through our platform, we aim to foster a community of lifelong learners, empowering each other to grow, achieve, and succeed together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn btn-primary">
                  Our Values
                </a>
                <a href="#" className="btn btn-outline">
                  Our Team
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Making quality education accessible to everyone regardless of their background or financial constraints.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly evolving our teaching methods and curriculum to keep pace with industry trends.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent-100 text-accent-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Fostering a supportive learning environment where peers help each other grow and succeed.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">
                Measuring our success by the positive difference we make in our students' lives and careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Collaboration with Innovision"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle
                title="Collaboration with Innovision"
                subtitle="Strategic partnerships to enhance learning experiences"
              />
              <p className="text-gray-600 mb-6">
  Our collaboration with Innovision Tech Solutions allows us to offer cutting-edge courses in emerging technologies. Together, we provide students with industry-relevant skills and hands-on experience with real-world projects.
</p>

<ul className="list-disc list-inside text-gray-600 mb-6">
  <li>Equip students with real-world project experience</li>
  <li>Provide access to mentorship from industry experts</li>
  <li>Create opportunities for tech meetups and networking</li>
  <li>Build bridges between students and potential employers</li>
</ul>
              <a
                href="#"
                className="btn btn-primary flex items-center w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About Our Partnership
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
<section className="section-padding bg-gradient-to-r from-primary-900 to-primary-800 text-white">
  <div className="container-custom">
    <SectionTitle
      title="NCAT 2025 Preparation Campaign"
      subtitle="Your complete companion for excelling in one of India's most competitive exams"
      align="center"
    />

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
        <p className="text-primary-100">
          Learn from expert mentors with proven success in helping students crack top competitive exams. Gain practical strategies and techniques to boost your performance.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Structured Learning Resources</h3>
        <p className="text-primary-100">
          Access high-quality study materials, practice sets, and mock tests thoughtfully curated to cover every aspect of the NCAT syllabus.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Performance Insights</h3>
        <p className="text-primary-100">
          Receive detailed performance analysis from mock tests, with actionable feedback to strengthen your weak areas and enhance your scores effectively.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <a href="/events" className="btn bg-white text-primary-900 hover:bg-gray-100">
        Get Started with the Campaign
      </a>
    </div>
  </div>
</section>


      {/* Founder Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Founder's Story"
            subtitle="The journey behind Innovission"
            align="center"
          />

          <div className="card p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img
                src={PramodImage}
                alt="Founder"
                className="rounded-full w-32 h-32 object-cover border-4 border-primary-100"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">V Pramod Reddy</h3>
                <p className="text-primary-600 mb-4">Founder & CEO, Innovission</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-primary-600">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                As the Founder and CEO of Innovission, my journey began with a simple observation — students often struggle to connect academic theory with real-world application. That realization sparked the creation of Innovission, a student-driven initiative designed to close this gap through innovation, collaboration, and hands-on learning.
              </p>
              <p className="mb-4">
                What started as a passion project — sharing insights on coding, design, and career development — has evolved into a dynamic platform where learners become creators. Through workshops, mentorship, and content, we've fostered a growing movement that aligns with our mission: "Upskill Bharat."
              </p>
              <p>
                The path has had its challenges, but the impact on students’ growth and confidence drives our vision forward. Today, Innovission stands as a thriving hub led by passionate minds, reaching hundreds of learners across the country. And we’re just getting started. Join us as we continue to shape a future where education meets opportunity, and innovation fuels change.
              </p>
            </div>

          </div>

          <div className="card p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img
                src={HemanthImage}
                alt="Co-Founder"
                className="rounded-full w-32 h-32 object-cover border-4 border-primary-100"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">K S Hemanth Kumar</h3>
                <p className="text-primary-600 mb-4">Founder & COO, Innovission</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/hemanthkumar-k-s?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 hover:text-primary-600" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                As the Founder and COO of Innovission, and currently pursuing my engineering degree, I bring a unique blend of academic insight and real-world leadership. I serve as the technical backbone of our organization, steering the vision and operations to bridge the gap between learning and industry relevance.
              </p>
              <p className="mb-4">
                With a strong passion for technology and education, I lead our technical initiatives—from building scalable platforms to architecting seamless digital experiences that empower learners. Balancing my role as a student and a leader allows me to stay connected to the challenges faced by today’s youth, and solve them through innovative solutions.
              </p>
              <p className="mb-4">
                I actively provide technical support to our team, guide development processes, and drive strategic decisions that shape our growth. From mentoring peers to launching impactful programs, my focus is on ensuring that Innovission delivers practical, future-ready learning.
              </p>
              <p>
                At Innovission, we believe in transforming education through action and empathy. I’m proud to be building something meaningful—by students, for students—to create a better future, one learner at a time.
              </p>
            </div>


          </div>

          <div className="card p-8 md:p-12 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <img
              src={SruithiImage}
                alt="Founder & CTO"
                className="rounded-full w-32 h-32 object-cover border-4 border-primary-100"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Sruthi</h3>
                <p className="text-primary-600 mb-4">CMO, Innovission</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-primary-600">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                As the Chief Marketing Officer of Innovission, I bring creativity, strategy, and purpose to everything we share with the world. My journey started with a passion for communication and storytelling, and today, I lead our efforts to connect with students, educators, and innovators across the country.
              </p>
              <p className="mb-4">
                At Innovission, I focus on building our brand identity, managing campaigns, and growing a community that believes in the power of "learning by doing." From social media outreach to event promotion, I ensure that every initiative we take reaches and resonates with the people it’s meant to impact.
              </p>
              <p>
                I believe that marketing is more than promotion — it’s about making meaningful connections. I’m proud to be part of a team that’s reimagining education and excited to keep amplifying our mission, one message at a time.
              </p>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default AboutPage;