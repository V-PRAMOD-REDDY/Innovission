import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, X, Award, Star } from 'lucide-react';

interface CertificateGeneratorProps {
  name: string;
  onClose: () => void;
}

const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({ name, onClose }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      // In a real implementation, you would use html2canvas and jsPDF
      // For now, we'll simulate the download
      const link = document.createElement('a');
      link.download = `${name}_Portfolio_Certificate.pdf`;
      link.href = '#'; // Would be the generated PDF blob URL
      link.click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Award className="h-6 w-6 mr-2 text-yellow-600" />
            Certificate of Completion
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Certificate */}
        <div className="p-8">
          <div
            ref={certificateRef}
            className="bg-gradient-to-br from-blue-50 to-purple-50 border-8 border-yellow-400 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="absolute top-4 right-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>

            {/* Certificate Content */}
            <div className="relative z-10">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Certificate of Completion
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 inline-block">
                  {name || 'Portfolio Creator'}
                </h2>
                <p className="text-lg text-gray-600">
                  has successfully completed the Portfolio Creation Program
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-2">
                  and demonstrated proficiency in creating professional portfolios
                </p>
                <p className="text-gray-600">
                  using modern web technologies and design principles
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-left">
                  <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">INNOVISSION</p>
                  <p className="text-xs text-gray-500">Portfolio Builder</p>
                </div>

                <div className="text-right">
                  <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                  <p className="text-sm text-gray-600">Authorized Signature</p>
                  <p className="font-medium">INNOVISSION Team</p>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 grid-rows-6 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-gray-300"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={downloadCertificate}
              className="btn btn-primary flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Certificate
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateGenerator;