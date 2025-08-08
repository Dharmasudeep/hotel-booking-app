export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Booking {
  name: string;
  email: string;
  date: Date;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface Table {
  id: number;
  number: number;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved';
  currentBooking?: {
    name: string;
    time: string;
    guests: number;
  };
}