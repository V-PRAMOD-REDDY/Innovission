import React from 'react';
import {
  Users,
  MessageSquare,
  ExternalLink,
  Twitter,
  Shield,
  Award,
  Heart,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

// Local Images
import headerImage from '../assets/images/community/header-bg.jpg';
import guidelinesImage from '../assets/images/community/guidelines.jpg';
import dashboardPreview from '../assets/images/community/dashboard-preview.jpg';
import rahulSharma from '../assets/images/community/contributors/rahul-sharma.jpg';
import priyaPatel from '../assets/images/community/contributors/priya-patel.jpg';
import vikramSingh from '../assets/images/community/contributors/vikram-singh.jpg';
import ananyaReddy from '../assets/images/community/contributors/ananya-reddy.jpg';

const contributors = [
  {
    name: 'Shoyab',
    role: 'Video Editor',
    avatar: rahulSharma,
    contributions: 120,
  },
  {
    name: 'Priya Patel',
    role: 'Python Instructor',
    avatar: priyaPatel,
    contributions: 95,
  },
  {
    name: 'Kiran Kumar',
    role: 'Content Writter',
    avatar: vikramSingh,
    contributions: 87,
  },
  {
    name: 'Santhi',
    role: 'Aptitude Trainer',
    avatar: ananyaReddy,
    contributions: 75,
  },
];

const CommunityPage = () => {
  return (
    <>
      <PageHeader
        title="Join Our Community"
        subtitle="Connect, learn, and grow with fellow students and professionals"
        backgroundImage={headerImage}
      />

      {/* Community Platforms Section - OMITTED FOR BREVITY */}

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Community Guidelines"
                subtitle="Our principles for fostering a supportive and inclusive community"
              />

              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Respect Everyone</h3>
                    <p className="text-gray-600">
                      Treat all community members with respect, regardless of their background or opinions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Constructive Communication</h3>
                    <p className="text-gray-600">
                      Provide constructive feedback and engage in discussions that help everyone grow.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Help Others</h3>
                    <p className="text-gray-600">
                      Share your knowledge and support fellow learners. We grow together.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Stay Positive</h3>
                    <p className="text-gray-600">
                      Create a welcoming and motivating environment for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={guidelinesImage}
                alt="Community Guidelines"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Top Contributors"
            subtitle="Celebrating members who make our community vibrant and helpful"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="relative mb-6">
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{contributor.name}</h3>
                <p className="text-primary-600 text-sm mb-4">{contributor.role}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">
                    {contributor.contributions} Contributions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={dashboardPreview}
                alt="Dashboard Preview"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 md:order-2">
              <SectionTitle
                title="Community Dashboard"
                subtitle="Track your progress and engage with the community through our interactive dashboard"
              />

              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Achievement Tracking</h3>
                    <p className="text-gray-600">
                      Monitor your learning progress, earn badges, and celebrate milestones.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Peer Connections</h3>
                    <p className="text-gray-600">
                      Connect with learners who share your interests and grow together.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Forums & Discussions</h3>
                    <p className="text-gray-600">
                      Join topic-specific forums, ask questions, and share knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="#" className="btn btn-primary">
                  Join to Access Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;
