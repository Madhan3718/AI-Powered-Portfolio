import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { MdOutlineDownload } from 'react-icons/md';
import SectionChatInput from '../SectionChatInput';

interface MeSectionProps {
  onChatSubmit: (message: string) => void;
}

const MeSection: React.FC<MeSectionProps> = ({ onChatSubmit }) => {
  return (
    <div className='w-full max-w-4xl mx-auto p-4 space-y-6'>
      {/* Header with Avatar */}
      <div className='text-center mb-6'>
        <div className='w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden'>
          <img
            src='https://www.toukoum.fr/_next/image?url=%2Flanding-memojis.png&w=2048&q=75'
            alt='Mad'
            className='w-full h-full object-cover'
          />
        </div>
        <h2 className='text-4xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight'>
          Madankumar Budidapalli
        </h2>
        <div className='flex items-center justify-center space-x-6 text-lg font-semibold text-gray-700 mb-6'>
          <div className='flex items-center space-x-1'>
            <Calendar size={16} />
            <span className='font-bold'>23 years old</span>
          </div>
          <div className='flex items-center space-x-1'>
            <MapPin size={16} />
            <span className='font-bold'>Analyst, Narayana Health</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row gap-6 items-start'>
        {/* Profile Image */}
        <div className='flex-shrink-0 lg:w-64'>
          <div className='w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden'>
            <img
              src='profileimg.jpg'
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className='flex-1 space-y-4'>
          <div className='mb-6'>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='text-2xl'>👋</span>
              <span className='text-lg font-medium text-gray-700'>Hey</span>
            </div>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Hi, I'm Madankumar (you can call me Madan). I'm a 23-year-old{' '}
              <span className='font-bold text-blue-700'>
                Analyst - Advanced Analytics & AI
              </span>{' '}
              with nearly 2 years of experience in data analytics, dashboarding,
              machine learning and AI agents. I currently work at{' '}
              <span className='font-bold text-teal-700'>Narayana Health</span>,
              building dashboards, ML models and AI agents for clinical,
              operational and finance use cases.
            </p>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-3 mb-6'>
            <span className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
              Advanced Analytics
            </span>
            <span className='px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium'>
              Machine Learning
            </span>
            <span className='px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium'>
              AI Agents
            </span>
            <span className='px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium'>
              Healthcare Analytics
            </span>
            <span className='px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium'>
              CSE
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className='mt-6 space-y-3'>
        <p className='text-gray-700 leading-relaxed'>
          I am Madankumar Budidapalli, an{' '}
          <span className='font-bold text-blue-700'>
            Analyst in Advanced Analytics & AI
          </span>{' '}
          with nearly 2 years of experience across data analytics, dashboarding,
          machine learning and AI agents. A{' '}
          <span className='font-bold text-indigo-700'>
            Computer Science and Engineering graduate
          </span>{' '}
          from SVEC, Tirupati, I now apply my skills to impactful healthcare
          analytics at{' '}
          <span className='font-bold text-teal-700'>Narayana Health</span>,
          where I build dashboards, train ML models, and create AI agents on top
          of a hospital network's data. Before this, I worked as a{' '}
          <span className='font-bold text-orange-700'>
            Data Application Engineer
          </span>{' '}
          at <span className='font-bold text-orange-700'>Assetmantle</span> in
          the real estate domain.
          <br />
          <br />
          Before diving into the tech world, I was an avid mountain trekker,
          which taught me a lot about endurance and tackling challenges head-on.
          Now, I channel that same energy into my work, diving deep into data to
          find solutions and build useful tools.
        </p>
        <p className='text-gray-700 leading-relaxed'>
          I am passionate about{' '}
          <span className='font-bold text-green-700'>
            leveraging data to create effective solutions
          </span>
          , especially in healthcare, and am keenly focused on the applications
          of AI, ML and AI agents. Whoo! What else do you want to know?
        </p>
      </div>

      {/* Resume Download Card */}
      <div className='w-full max-w-2xl mx-auto mt-8'>
        <div className='bg-gray-50 rounded-2xl shadow flex items-center justify-between p-6'>
          <div>
            <div className='font-bold text-lg text-gray-900 mb-1'>
              Madan's Resume
            </div>
            <div className='text-gray-600 text-sm mb-2'>
              Analyst - Advanced Analytics
            </div>
            <div className='flex items-center space-x-4 text-xs text-gray-500'>
              <span>PDF</span>
              <span>• Updated October 2025</span>
              <span>• 0.2 MB</span>
            </div>
          </div>
          <a
            href='/Mad_Resume.pdf'
            download
            className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors'
            title='Download Resume'
          >
            <MdOutlineDownload className='w-6 h-6' />
          </a>
        </div>
      </div>

      {/* Chat Input */}
      <SectionChatInput
        onSubmit={onChatSubmit}
        placeholder='Ask me anything about my background...'
      />
    </div>
  );
};

export default MeSection;
