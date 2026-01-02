
export default function InfoCard({ icon, title, text, color }) {
  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    teal: "bg-teal-600",
  };

  return (
    <div className="flex flex-col md:flex-col-3 gap-2 bg-gray-100 pr-20 p-4 md:p-0 rounded-lg">
      <div className="flex flex-start items-center gap-2">
        {/* Icon inside a circular background */}
        <div
          className={`flex items-center justify-center text-center rounded-full w-6 h-6 ${colorMap[color]} text-white text-[10px]`}
        >
          {icon}
        </div>

        {/* Title Line (Icon + Title) */}
        <div className="flex items-center">
          <h4 className="text-md font-bold text-gray-800">{title}</h4>
        </div>
      </div>
      {/* Second line text */}
      <p className="text-[11px] text-gray-600 w-[200px]">{text}</p>
    </div>
  );
}