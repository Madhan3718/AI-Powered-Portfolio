import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from '../ProjectModal';
import SectionChatInput from '../SectionChatInput';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  year: string;
  image: string;
  color: string;
  tags: string[];
}

interface ProjectsSectionProps {
  onChatSubmit: (message: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onChatSubmit }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Fusion Vendor Master AI Agent',
      subtitle: 'Narayana Health - Finance',
      description: 'AI agent automating vendor master updates for MSMED compliance',
      fullDescription: 'I built an AI agent/bot that automatically updates vendor profile and site details in the Fusion ERP based on the MSMED classification check against Udyam registration data. It handles four update scenarios defined in the BRD. Earlier this was a manual process done only once a year across thousands of vendor records; the bot lets it run monthly, giving better MSMED compliance for vendor payments and cleaner vendor master data cutting manual effort by ~20 hrs/week.',
      technologies: ['Python', 'Gemini LLM', 'Fusion ERP', 'AI Agents', 'Automation'],
      githubUrl: '',
      images: [],
      year: '2025',
      image: '🤖',
      color: 'from-blue-500 to-indigo-600',
      tags: ['AI Agent', 'Healthcare', 'Finance']
    },
    {
      id: 2,
      title: 'AKI Surveillance & Prediction',
      subtitle: 'Narayana Health - Clinical',
      description: 'LLM-powered clinical decision support + ML prediction for Acute Kidney Injury',
      fullDescription: 'I built a clinical decision-support pipeline in Python that joins supplementary clinical data onto encounter-level data and uses a Gemini LLM prompt to analyse the likely cause (etiology) of AKI. The prompt returns structured JSON with a clinical cause classification and nephrology referral recommendations. I also trained the AKI prediction model, running hyperparameter tuning to find the best-performing model, and presented actual vs. predicted values along with patterns found in the clinical context.',
      technologies: ['Python', 'Gemini LLM', 'Machine Learning', 'Clinical Analytics', 'Hyperparameter Tuning'],
      githubUrl: '',
      images: [],
      year: '2025',
      image: '🏥',
      color: 'from-red-500 to-pink-600',
      tags: ['ML', 'LLM', 'Healthcare']
    },
    {
      id: 4,
      title: 'Traffic Insights',
      subtitle: 'E-Commerce Analytics',
      description: 'Traffic insights and growth narrative for e-commerce',
      fullDescription: 'A comprehensive analytics project that provides deep insights into e-commerce traffic patterns and growth narratives. This project analyzes user behavior, conversion rates, and provides actionable insights for business growth.',
      technologies: ['SQL', 'Data Analysis', 'PowerBI', 'Excel (Pivot tables)', 'Data Storytelling'],
      githubUrl: 'https://github.com/Madhan3718/Traffic-Insights-and-Growth-Narrative-for-an-E-Commerce',
      images: [
        '/insights1.png',
        '/insights2.png',
        '/pbdashboard.png'
      ],
      year: '2024',
      image: '📈',
      color: 'from-purple-500 to-blue-600',
      tags: ['SQL', 'Analytics', 'PowerBI']
    },
    {
      id: 5,
      title: 'GenAI Workflows',
      subtitle: 'Automation',
      description: 'Automating data science and analysis workflows using GenAI',
      fullDescription: 'An innovative project that leverages Generative AI to automate complex data science workflows. This process streamlines the data analysis and dashboard making also entire data science pipeline from data preprocessing to model deployment using GenAI tools like Claude, Julius, Google Vertex AI etc making it more efficient and accessible.',
      technologies: ['Python', 'GenAI', 'Machine Learning', 'Automation'],
      githubUrl: 'https://github.com/Madhan3718/Automating-Data-science-workflows-using-GenAI',
      images: [
        '/EDA1julius.png',
        '/Sales_Dashboard.png',
        '/Screenshot (120).png'
      ],
      year: '2024',
      image: '💼',
      color: 'from-orange-400 to-pink-500',
      tags: ['GenAI', 'NoCode', 'Automation']
    },
    {
      id: 6,
      title: 'AI Portfolio',
      subtitle: 'Personal Project',
      description: 'Interactive AI-powered portfolio website',
      fullDescription: 'A modern, interactive portfolio website powered by AI that showcases projects, skills, and experiences. Features real-time AI chat integration, beautiful animations, and responsive design.',
      technologies: ['React', 'TypeScript', 'AI Integration', 'Deployment'],
      githubUrl: 'https://github.com/Madhan3718/AI-portfolio',
      images: [
        '/pf1.png',
        '/pf2.png',
        '/pf3.png'
      ],
      year: '2024',
      image: '🌐',
      color: 'from-red-500 to-purple-600',
      tags: ['React', 'AI', 'Portfolio']
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-2xl">👨‍💻</div>
        </div>
        <h2 className="text-4xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">Projects</h2>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className={`relative bg-gradient-to-br ${project.color} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="absolute top-4 left-4">
              <span className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                {project.subtitle}
              </span>
            </div>
            
            <div className="flex flex-col h-full justify-between min-h-[200px]">
              <div className="text-center mt-6">
                <div className="text-4xl mb-3">{project.image}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="absolute top-4 right-4">
              <ExternalLink size={16} className="text-white/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Project Description */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20">
        <p className="text-gray-700 mb-6 leading-relaxed">
          You can check out all my projects above! At Narayana Health, I work on AI agents, ML models and dashboards for clinical, operational and finance use cases. My personal projects span e-commerce analytics, GenAI automation, and web development. If you want to know more about a specific project or what I'm currently diving into, just let me know! What kind of projects are you curious about? 😄
        </p>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      
      {/* Chat Input */}
      <SectionChatInput 
        onSubmit={onChatSubmit}
        placeholder="Ask me about my projects..."
      />
    </div>
  );
};

export default ProjectsSection;