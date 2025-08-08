import React from 'react';
import { Users, Clock, CalendarClock } from 'lucide-react';
import type { Table } from '../types';

const tables: Table[] = [
  {
    id: 1,
    number: 1,
    capacity: 2,
    status: 'occupied',
    currentBooking: {
      name: 'John Smith',
      time: '19:00',
      guests: 2
    }
  },
  {
    id: 2,
    number: 2,
    capacity: 4,
    status: 'reserved',
    currentBooking: {
      name: 'Sarah Johnson',
      time: '20:00',
      guests: 4
    }
  },
  {
    id: 3,
    number: 3,
    capacity: 6,
    status: 'available'
  },
  {
    id: 4,
    number: 4,
    capacity: 2,
    status: 'available'
  },
  {
    id: 5,
    number: 5,
    capacity: 4,
    status: 'reserved',
    currentBooking: {
      name: 'Michael Brown',
      time: '19:30',
      guests: 3
    }
  },
  {
    id: 6,
    number: 6,
    capacity: 8,
    status: 'occupied',
    currentBooking: {
      name: 'Emma Wilson',
      time: '18:30',
      guests: 6
    }
  }
];

const getStatusColor = (status: Table['status']) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-800';
    case 'occupied':
      return 'bg-red-100 text-red-800';
    case 'reserved':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function TablesDashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Floor Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((table) => (
            <div
              key={table.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Table {table.number}</h3>
                  <div className="flex items-center mt-1">
                    <Users className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">Capacity: {table.capacity}</span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(
                    table.status
                  )}`}
                >
                  {table.status}
                </span>
              </div>

              {table.currentBooking && (
                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Current Booking</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{table.currentBooking.name}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{table.currentBooking.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{table.currentBooking.guests} guests</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Today's Bookings</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Table
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tables
                .filter((table) => table.currentBooking)
                .sort((a, b) => {
                  if (!a.currentBooking || !b.currentBooking) return 0;
                  return a.currentBooking.time.localeCompare(b.currentBooking.time);
                })
                .map((table) => (
                  <tr key={table.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {table.currentBooking?.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {table.currentBooking?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Table {table.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {table.currentBooking?.guests}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(
                          table.status
                        )}`}
                      >
                        {table.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}