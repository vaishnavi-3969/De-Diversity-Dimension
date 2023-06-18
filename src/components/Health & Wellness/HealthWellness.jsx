import React from 'react';

const doctorsData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Family Medicine',
      address: '123 Main Street, City',
      email: 'john.doe@example.com',
      phone: '+1 123-456-7890',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Psychiatry',
      address: '456 Elm Street, City',
      email: 'jane.smith@example.com',
      phone: '+1 987-654-3210',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      specialty: 'Cardiology',
      address: '789 Oak Street, City',
      email: 'michael.johnson@example.com',
      phone: '+1 555-123-4567',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 4,
      name: 'Dr. Emily Wilson',
      specialty: 'Dermatology',
      address: '321 Maple Street, City',
      email: 'emily.wilson@example.com',
      phone: '+1 555-987-6543',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 5,
      name: 'Dr. Robert Thompson',
      specialty: 'Orthopedics',
      address: '456 Pine Street, City',
      email: 'robert.thompson@example.com',
      phone: '+1 555-456-7890',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 6,
      name: 'Dr. Olivia Davis',
      specialty: 'Pediatrics',
      address: '789 Cedar Street, City',
      email: 'olivia.davis@example.com',
      phone: '+1 555-789-0123',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 7,
      name: 'Dr. William Wilson',
      specialty: 'Neurology',
      address: '123 Elm Street, City',
      email: 'william.wilson@example.com',
      phone: '+1 555-234-5678',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 8,
      name: 'Dr. Ava Anderson',
      specialty: 'Gynecology',
      address: '456 Oak Street, City',
      email: 'ava.anderson@example.com',
      phone: '+1 555-678-9012',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 9,
      name: 'Dr. James Wilson',
      specialty: 'Ophthalmology',
      address: '789 Maple Street, City',
      email: 'james.wilson@example.com',
      phone: '+1 555-901-2345',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 10,
      name: 'Dr. Chloe Thompson',
      specialty: 'Allergy & Immunology',
      address: '123 Pine Street, City',
      email: 'chloe.thompson@example.com',
      phone: '+1 555-345-6789',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  ];
const HealthWellness = () => {
  const handleBookConsultation = (doctor) => {
    console.log('Booking consultation with', doctor.name);
    alert("Consulation booked!");
  };

  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Health and Wellness</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 bg-gray-900 px-6 py-6 ">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="bg-gray-800 rounded-lg shadow-lg p-4 text-center hover:scale-105">
              <img className="w-[250px] h-25 object-cover rounded-md mb-4" src={doctor.imageUrl} alt={doctor.name} />
              <h3 className="text-white text-xl font-bold mb-2">{doctor.name}</h3>
              <p className="text-gray-200 mb-2">{doctor.specialty}</p>
              <p className="text-gray-200 mb-2">{doctor.address}</p>
              <p className="text-gray-200 mb-2">{doctor.email}</p>
              <p className="text-gray-200 mb-4">{doctor.phone}</p>
              <button
                onClick={() => handleBookConsultation(doctor)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;
