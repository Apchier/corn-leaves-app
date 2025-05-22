import React, { createContext, useContext, useState } from 'react';

const mockDiseases = [
  {
    id: '1',
    name: 'Common Rust',
    count: 42,
    color: '#ef4444',
    description: 'A fungal disease characterized by small, circular to elongated, cinnamon-brown pustules on leaves and stems.',
    severity: 'high',
    createdAt: '2024-11-10T09:00:00Z',
  },
  {
    id: '2',
    name: 'Northern Leaf Blight',
    count: 35,
    color: '#f97316',
    description: 'Characterized by large, cigar-shaped lesions that are tan in color with dark borders.',
    severity: 'medium',
    createdAt: '2024-11-15T10:30:00Z',
  },
  {
    id: '3',
    name: 'Gray Leaf Spot',
    count: 28,
    color: '#a3a3a3',
    description: 'Rectangular lesions that are initially small and water-soaked, later turning gray to tan with yellow halos.',
    severity: 'medium',
    createdAt: '2024-12-05T14:15:00Z',
  },
  {
    id: '4',
    name: 'Healthy',
    count: 52,
    color: '#22c55e',
    description: 'No disease detected, plant appears to be in good health.',
    severity: 'low',
    createdAt: '2025-01-20T11:45:00Z',
  },
];

const mockRecentDetections = [
  {
    id: '1',
    imageSrc: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=400',
    diseaseName: 'Common Rust',
    detectionDate: '2025-06-10T15:32:00Z',
    confidence: 92.5,
    location: 'Field A-7',
    plantType: 'Sweet Corn',
  },
  {
    id: '2',
    imageSrc: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=400',
    diseaseName: 'Healthy',
    detectionDate: '2025-06-09T11:23:00Z',
    confidence: 98.3,
    location: 'Field B-3',
    plantType: 'Dent Corn',
  },
  {
    id: '3',
    imageSrc: 'https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=400',
    diseaseName: 'Northern Leaf Blight',
    detectionDate: '2025-06-08T09:45:00Z',
    confidence: 87.6,
    location: 'Field A-2',
    plantType: 'Flint Corn',
  },
  {
    id: '4',
    imageSrc: 'https://images.pexels.com/photos/60017/corn-corn-on-the-cob-corn-kernels-corn-cob-60017.jpeg?auto=compress&cs=tinysrgb&w=400',
    diseaseName: 'Gray Leaf Spot',
    detectionDate: '2025-06-07T16:17:00Z',
    confidence: 89.2,
    location: 'Field C-5',
    plantType: 'Sweet Corn',
  },
  {
    id: '5',
    imageSrc: 'https://images.pexels.com/photos/2866355/pexels-photo-2866355.jpeg?auto=compress&cs=tinysrgb&w=400',
    diseaseName: 'Common Rust',
    detectionDate: '2025-06-06T14:08:00Z',
    confidence: 94.0,
    location: 'Field A-9',
    plantType: 'Popcorn',
  },
];

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [diseases] = useState(mockDiseases);
  const [recentDetections] = useState(mockRecentDetections);

  const value = {
    diseases,
    recentDetections,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};