import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group p-8 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
            <Icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;