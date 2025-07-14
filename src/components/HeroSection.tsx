import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-r from-primary-950 to-primary-900 overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <img
          src={imageUrl}
          alt="Students collaborating"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={ctaLink}
              className="btn btn-accent text-lg group"
            >
              {ctaText}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a
                href={secondaryCtaLink}
                className="btn bg-white text-primary-900 hover:bg-gray-100 text-lg"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;