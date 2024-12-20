import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Settings, 
  LogOut, 
  Edit2, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle,
  Search,
  Bell,
  ChevronRight
} from 'lucide-react';

// Mock data for demonstration
const mockUser = {
  username: "Jane Doe",
  bio: "Passionate about making a difference.",
  location: "Lagos, Nigeria",
  avatar: "/api/placeholder/150/150",
  posts: [
    {
      id: 1,
      description: "Large pothole on main street needs urgent attention",
      images: ["/api/placeholder/400/300"],
      timestamp: "2024-12-20T10:00:00",
      upvotes: 15,
      downvotes: 2,
      comments: 5,
      type: "Road",
      status: "Unresolved",
      location: { lat: 6.5244, lng: 3.3792 }
    },
    {
      id: 2,
      description: "Broken street light causing safety concerns",
      images: ["/api/placeholder/400/300"],
      timestamp: "2024-12-19T15:30:00",
      upvotes: 8,
      downvotes: 1,
      comments: 3,
      type: "Infrastructure", 
      status: "Resolved",
      location: { lat: 6.5244, lng: 3.3792 }
    }
  ]
};

const ProfileHeader = ({ user, onEditProfile, onLogout }) => {
  return (
    <div className="flex flex-col items-center py-8 px-4 bg-white">
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-32 h-32 rounded-full object-cover"
        />
        <button className="absolute bottom-0 right-0 p-2 bg-orange-500 rounded-full text-white">
          <Camera size={20} />
        </button>
      </div>
      
      <h1 className="mt-4 text-2xl font-bold text-teal-900">{user.username}</h1>
      <p className="mt-2 text-gray-600">{user.bio}</p>
      
      <div className="flex items-center mt-2 text-gray-600">
        <MapPin size={16} className="mr-1" />
        <span>{user.location}</span>
      </div>
      
      <div className="flex gap-4 mt-6">
        <button
          onClick={onEditProfile}
          className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          <Edit2 size={16} className="mr-2" />
          Edit Profile
        </button>
        <button
          onClick={onLogout}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-teal-900">{mockUser.username}</h3>
          <span className="text-sm text-gray-500">
            {new Date(post.timestamp).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <p className="mb-4">{post.description}</p>
        <img
          src={post.images[0]}
          alt="Report"
          className="w-full rounded-lg"
        />
      </div>
      
      <div className="p-4 border-t flex justify-between items-center">
        <div className="flex gap-4">
          <button className="flex items-center gap-1 text-gray-600 hover:text-teal-900">
            <ThumbsUp size={18} />
            <span>{post.upvotes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-teal-900">
            <ThumbsDown size={18} />
            <span>{post.downvotes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-teal-900">
            <MessageCircle size={18} />
            <span>{post.comments}</span>
          </button>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          post.status === 'Resolved' ? 'bg-teal-100 text-teal-800' : 'bg-orange-100 text-orange-800'
        }`}>
          {post.status}
        </span>
      </div>
    </div>
  );
};

const PostsTab = ({ posts }) => {
  return (
    <div className="p-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const MapTab = () => {
  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search locations or posts..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
          Filters
        </button>
      </div>
      
      <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Map View (OpenStreetMap integration)</p>
      </div>
    </div>
  );
};

const SettingsTab = () => {
  return (
    <div className="p-4">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-teal-900">Account Details</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  defaultValue="jane.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  defaultValue="+234 123 456 7890"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-teal-900">Notification Preferences</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell size={18} />
                  <span>Push Notifications</span>
                </div>
                <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                  <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CityWatchProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  
  const renderTabContent = () => {
    switch(activeTab) {
      case "posts":
        return <PostsTab posts={mockUser.posts} />;
      case "map":
        return <MapTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader 
        user={mockUser}
        onEditProfile={() => console.log('Edit profile')}
        onLogout={() => console.log('Logout')}
      />
      
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex border-b bg-white">
          <button 
            onClick={() => setActiveTab("posts")}
            className={`flex-1 py-4 border-b-2 ${activeTab === "posts" ? "border-teal-500" : "border-transparent"}`}
          >
            Posts
          </button>
          <button 
            onClick={() => setActiveTab("map")}
            className={`flex-1 py-4 border-b-2 ${activeTab === "map" ? "border-teal-500" : "border-transparent"}`}
          >
            Map View
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`flex-1 py-4 border-b-2 ${activeTab === "settings" ? "border-teal-500" : "border-transparent"}`}
          >
            Settings
          </button>
        </div>
        
        {renderTabContent()}
      </div>
      
      <footer className="mt-12 py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 City Watch. Making our cities better together.</p>
          <div className="mt-2">
            <a href="#" className="text-teal-500 hover:underline">Terms of Service</a>
            <span className="mx-2">·</span>
            <a href="#" className="text-teal-500 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CityWatchProfile;