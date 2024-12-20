import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Settings,
  User,
  MapPin,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Camera,
  FileText,
  Send,
  ChevronLeft,
  ChevronRight,
  Search,
  Menu
} from 'lucide-react';

// Dummy data for reports
const REPORTS = [
  {
    id: 1,
    reporter: '@JaneDoe',
    avatar: '/api/placeholder/40/40',
    description: 'Streetlight malfunctioning near the park entrance.',
    location: 'Downtown Park, City Center',
    images: ['https://media.istockphoto.com/id/1076480852/photo/broken-street-lamp-in-city.jpg?s=612x612&w=0&k=20&c=MKylMMDuFgkXy7uUYog7oo7aQQ5ATyBqemfopYHYsKc='],
    timestamp: '2 hours ago',
    upvotes: 35,
    downvotes: 2,
    comments: [
      { id: 1, user: '@CityOfficer', text: 'We\'ve logged this issue and will address it soon.' },
      { id: 2, user: '@LocalResident', text: 'This has been an ongoing problem.' }
    ]
  },
  {
    id: 2,
    reporter: '@FixItNow',
    avatar: '/api/placeholder/40/40',
    description: 'Potholes on Main Street causing traffic congestion.',
    location: 'Main Street',
    images: ['https://www.shutterstock.com/image-photo/damaged-road-cracked-asphalt-blacktop-260nw-491384599.jpg', 'https://media.istockphoto.com/id/531854696/photo/broken-road-in-the-woods.jpg?s=612x612&w=0&k=20&c=5fKL04SLoJSji7M8LsjJbjlOtFxf91fu6h0c5ZJvvns=', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Udb7PC5L3jUkx_7mA_gDLCtrDlpTNSTSg&s'],
    timestamp: '4 hours ago',
    upvotes: 87,
    downvotes: 10,
    comments: []
  },
  // Add more reports from the dummy data
  {
    id: 3,
    reporter: '@lagosWatch',
    avatar: '/api/placeholder/40/40',
    description: 'Bad drainage on Main Street causing traffic congestion.',
    location: 'Main Street',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29gxZquOF_Ohp4uxqXXKBSogzdZPRjXCR5Q&s', 'https://www.shutterstock.com/image-photo/poor-drainage-pastures-causes-clogged-260nw-2273898137.jpg'],
    timestamp: '4 hours ago',
    upvotes: 17,
    downvotes: 10,
    comments: []
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="City Watch Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-teal-900">City Watch</span>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                className="pl-10 w-full border rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-5 w-5" />
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="h-5 w-5" />
            </button>
            <button 
              onClick={() => navigate('/report')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
            >
              Report Issue
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <div className="relative h-96 bg-teal-900">
    <img
      src="/api/placeholder/1920/600"
      alt="City Watch Hero"
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Empowering Citizens to Improve Communities
      </h1>
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-md">
        Start Reporting Now
      </button>
    </div>
  </div>
);

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt="Report"
        className="w-full h-64 object-cover rounded-md"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ReportCard = ({ report }) => {
  const [isCommenting, setIsCommenting] = useState(true);
  const [comment, setComment] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-4 pb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={report.avatar} alt={report.reporter} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-semibold">{report.reporter}</div>
            <div className="text-sm text-gray-500">{report.timestamp}</div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-start space-x-2">
          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
          <span className="text-gray-600">{report.location}</span>
        </div>
        <p className="text-gray-700">{report.description}</p>
        <ImageCarousel images={report.images} />
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
            <ThumbsUp className="h-5 w-5" />
            <span>{report.upvotes}</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
            <ThumbsDown className="h-5 w-5" />
            <span>{report.downvotes}</span>
          </button>
          <button
            className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded"
            onClick={() => setIsCommenting(!isCommenting)}
          >
            <MessageSquare className="h-5 w-5" />
            <span>{report.comments.length}</span>
          </button>
        </div>
      </div>
      {isCommenting && (
        <div className="border-t p-4">
          <div className="w-full space-y-4">
            {report.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-2">
                <div className="font-medium">{comment.user}:</div>
                <div>{comment.text}</div>
              </div>
            ))}
            <div className="flex space-x-2">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CommunityStats = () => (
  <div className="bg-teal-900 text-white py-12 mt-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold mb-2">12,345</div>
          <div className="text-teal-100">Reports Submitted</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">8,910</div>
          <div className="text-teal-100">Issues Resolved</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">2,456</div>
          <div className="text-teal-100">Active Users</div>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => (
  <div className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-teal-100 rounded-full">
              <Camera className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Snap a Picture</h3>
          <p className="text-gray-600">Take a photo of the issue you want to report</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-teal-100 rounded-full">
              <FileText className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Add Details</h3>
          <p className="text-gray-600">Provide information about the location and issue</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-teal-100 rounded-full">
              <Send className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Submit Report</h3>
          <p className="text-gray-600">Share your report with the community</p>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About City Watch</h3>
          <p className="text-gray-400">Empowering citizens to improve their communities through active participation and reporting.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">Email: support@citywatch.com</li>
            <li className="text-gray-400">Phone: (555) 123-4567</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Social media icons would go here */}
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/api/placeholder/24/24" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/api/placeholder/24/24" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/api/placeholder/24/24" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Reports in Your City</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPORTS.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </main>

      <HowItWorks />
      <CommunityStats />
      <Footer />
    </div>
  );
};

export default HomePage;