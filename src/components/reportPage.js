import React, { useState } from 'react';
import {
  Camera,
  MapPin,
  Upload,
  X,
  AlertTriangle,
  Info,
} from 'lucide-react';

const ReportPage = () => {
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    urgency: '', 
    address: '',
  });

  // Simulated image upload preview
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setImages(prev => [...prev, ...newImages].slice(0, 4)); // Limit to 4 images
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  // Simulated geolocation
  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    setTimeout(() => {
      setLocation('123 Main St, City Center');
      setFormData(prev => ({ ...prev, address: '123 Main St, City Center' }));
      setIsGettingLocation(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, images });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">Report an Issue</h1>
            </div>
            <p className="text-gray-500 mt-2">
              Help improve your community by reporting issues that need attention.
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Title */}
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Issue Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Brief title describing the issue"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select category</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="safety">Safety & Security</option>
                  <option value="environment">Environment</option>
                  <option value="utilities">Utilities</option>
                  <option value="traffic">Traffic & Transportation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Urgency Level */}
              <div className="space-y-2">
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Urgency Level</label>
                <select
                  id="urgency"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                >
                  <option value="">Select urgency level</option>
                  <option value="low">Low - Can be addressed eventually</option>
                  <option value="medium">Medium - Needs attention soon</option>
                  <option value="high">High - Requires immediate attention</option>
                </select>
              </div>

              {/* Location Input */}
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="location"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter location or use current location"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md flex items-center"
                    onClick={getCurrentLocation}
                    disabled={isGettingLocation}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {isGettingLocation ? 'Getting Location...' : 'Use Current'}
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Detailed Description</label>
                <textarea
                  id="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                  placeholder="Provide a detailed description of the issue..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Images</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((img) => (
                    <div key={img.id} className="relative">
                      <img
                        src={img.url}
                        alt="Uploaded preview"
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(img.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  {images.length < 4 && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-teal-500 hover:text-teal-500">
                      <label className="cursor-pointer text-center">
                        <Camera className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm">Add Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                          multiple
                        />
                      </label>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">Upload up to 4 images (optional)</p>
              </div>

              {/* Guidelines Alert */}
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start">
                <Info className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                <p className="text-blue-700">
                  Please ensure your report is accurate and includes specific details. 
                  This helps city officials address the issue more effectively.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;