import React, { useState } from 'react';
import { Utensils, CalendarRange } from 'lucide-react';
import BookingForm from './components/BookingForm';
import TablesDashboard from './components/TablesDashboard';

function App() {
  const [activeView, setActiveView] = useState<'booking' | 'dashboard'>('booking');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Utensils className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">La Belle Cuisine</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveView('booking')}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  activeView === 'booking'
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <CalendarRange className="h-5 w-5 mr-1.5" />
                Book a Table
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  activeView === 'dashboard'
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Utensils className="h-5 w-5 mr-1.5" />
                Tables Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeView === 'booking' ? (
        <>
          {/* Hero Section */}
          <div 
            className="relative h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <Utensils className="h-12 w-12" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">La Belle Cuisine</h1>
                <p className="text-xl md:text-2xl">Experience fine dining at its best</p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                Reserve Your Table
              </h2>
              <BookingForm />
            </div>

            {/* Restaurant Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday<br />
                  5:00 PM - 11:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  123 Gourmet Street<br />
                  Culinary District, TC 12345
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">
                  +1 (555) 123-4567<br />
                  info@labellecuisine.com
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <TablesDashboard />
      )}
    </div>
  );
}

export default App;