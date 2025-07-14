import HeroImage from '../Assets/Herosection-img.webp';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  subtitle,
  backgroundImage = HeroImage,
}: PageHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-r from-primary-950 to-primary-900 pt-20">
      <div className="absolute inset-0 opacity-20">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default PageHeader;
