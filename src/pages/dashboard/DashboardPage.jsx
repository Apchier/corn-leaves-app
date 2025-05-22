import React from "react";
import {
  BarChart3,
  CalendarClock,
  Leaf,
  Upload,
  BarChart4,
  History,
  User,
  Check,
  AlertTriangle,
  Calendar,
  PieChart,
  BarChart2,
  PercentSquare,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const mockStatistics = {
  totalDetections: 157,
  mostCommonDisease: {
    name: "Common Rust",
    count: 42,
  },
  lastDetectionDate: "2025-06-10T15:32:00Z",
};

const mockDiseaseDistribution = [
  { name: "Common Rust", count: 42, color: "#ef4444" },
  { name: "Northern Leaf Blight", count: 35, color: "#f97316" },
  { name: "Gray Leaf Spot", count: 28, color: "#a3a3a3" },
  { name: "Healthy", count: 52, color: "#22c55e" },
];

const mockRecentDetections = [
  {
    id: "1",
    imageSrc:
      "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=400",
    diseaseName: "Common Rust",
    detectionDate: "2025-06-10T15:32:00Z",
    confidence: 92.5,
  },
  {
    id: "2",
    imageSrc:
      "https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=400",
    diseaseName: "Healthy",
    detectionDate: "2025-06-09T11:23:00Z",
    confidence: 98.3,
  },
  {
    id: "3",
    imageSrc:
      "https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=400",
    diseaseName: "Northern Leaf Blight",
    detectionDate: "2025-06-08T09:45:00Z",
    confidence: 87.6,
  },
  {
    id: "4",
    imageSrc:
      "https://images.pexels.com/photos/60017/corn-corn-on-the-cob-corn-kernels-corn-cob-60017.jpeg?auto=compress&cs=tinysrgb&w=400",
    diseaseName: "Gray Leaf Spot",
    detectionDate: "2025-06-07T16:17:00Z",
    confidence: 89.2,
  },
  {
    id: "5",
    imageSrc:
      "https://images.pexels.com/photos/2866355/pexels-photo-2866355.jpeg?auto=compress&cs=tinysrgb&w=400",
    diseaseName: "Common Rust",
    detectionDate: "2025-06-06T14:08:00Z",
    confidence: 94.0,
  },
];

const DashboardPage = () => {
  const [chartType, setChartType] = React.useState("pie");
  const lastDetectionDate = mockStatistics.lastDetectionDate
    ? format(new Date(mockStatistics.lastDetectionDate), "MMMM d, yyyy")
    : "N/A";

  return (
    <div className="min-h-screen bg-[#f1f8f6]">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Leaf className="text-[#2d6a4f]" size={28} />
              <span className="font-bold text-xl text-[#1b4332]">
                Dashboard
              </span>
            </div>
            <p className="text-gray-600">
              Monitor corn leaf disease detection statistics and history
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-[#1b4332]">Admin</span>
              <button><User size={20} className="text-[#1b4332]" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 py-6 px-4">
          {/* Total Detections */}
          <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Total Detections
                </h3>
                <p className="text-2xl font-bold text-[#1b4332] mt-1">
                  {mockStatistics.totalDetections}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-xs font-medium text-green-500">
                    +12%
                  </span>
                  <span className="text-xs text-gray-500 ml-1">
                    from last week
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-[#f1f8f6] text-[#2d6a4f]">
                <BarChart3 size={20} />
              </div>
            </div>
          </div>

          {/* Most Common Disease */}
          <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Most Common Disease
                </h3>
                <p className="text-2xl font-bold text-[#1b4332] mt-1">
                  {mockStatistics.mostCommonDisease.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {mockStatistics.mostCommonDisease.count} detections
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#f1f8f6] text-[#2d6a4f]">
                <Leaf size={20} />
              </div>
            </div>
          </div>

          {/* Last Detection */}
          <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Last Detection
                </h3>
                <p className="text-2xl font-bold text-[#1b4332] mt-1">
                  {lastDetectionDate}
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#f1f8f6] text-[#2d6a4f]">
                <CalendarClock size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Disease Distribution */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {/* Disease Distribution */}
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-[#1b4332]">
                    Disease Distribution
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setChartType("pie")}
                      className={`p-2 rounded-md transition-colors ${
                        chartType === "pie"
                          ? "bg-[#2d6a4f] text-white"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      <PieChart size={18} />
                    </button>
                    <button
                      onClick={() => setChartType("bar")}
                      className={`p-2 rounded-md transition-colors ${
                        chartType === "bar"
                          ? "bg-[#2d6a4f] text-white"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      <BarChart2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="h-[300px]">
                  {chartType === "pie" ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChartComponent>
                        <Pie
                          data={mockDiseaseDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="count"
                          nameKey="name"
                          animationDuration={500}
                        >
                          {mockDiseaseDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value} cases`, "Count"]}
                        />
                        <Legend />
                      </PieChartComponent>
                    </ResponsiveContainer>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={mockDiseaseDistribution}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [`${value} cases`, "Count"]}
                        />
                        <Legend />
                        <Bar
                          dataKey="count"
                          name="Number of Cases"
                          animationDuration={500}
                        >
                          {mockDiseaseDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Detections */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg font-medium text-[#1b4332] mb-4">
              Recent Detections
            </h3>

            <div className="space-y-4">
              {mockRecentDetections.map((detection) => {
                const isHealthy =
                  detection.diseaseName.toLowerCase() === "healthy";
                const formattedDate = format(
                  parseISO(detection.detectionDate),
                  "MMM d, yyyy • h:mm a"
                );

                return (
                  <div
                    key={detection.id}
                    className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-[#f1f8f6]"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={detection.imageSrc}
                        alt={detection.diseaseName}
                        className="w-16 h-16 rounded-md object-cover border border-gray-200"
                      />
                      <div
                        className={`absolute -top-2 -right-2 p-1 rounded-full ${
                          isHealthy ? "bg-green-500" : "bg-amber-500"
                        }`}
                      >
                        {isHealthy ? (
                          <Check size={12} className="text-white" />
                        ) : (
                          <AlertTriangle size={12} className="text-white" />
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between items-start">
                        <h4
                          className={`text-sm font-medium ${
                            isHealthy ? "text-green-600" : "text-amber-600"
                          }`}
                        >
                          {detection.diseaseName}
                        </h4>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                          {detection.confidence}% confidence
                        </span>
                      </div>

                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        {formattedDate}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <button className="text-sm font-medium text-[#2d6a4f] hover:text-[#1b4332] transition-colors">
                View All Detections
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
