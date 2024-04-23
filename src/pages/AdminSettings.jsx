import React, { useState } from "react";
import HiringFlow from "../components/AdminSettings/HiringFlow";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center w-full">
      <div className="p-8 w-full max-w-screen-lg">
        <div className="flex space-x-4 justify-center">
          <div
            className={`cursor-pointer flex-1 px-4 py-2 rounded-t-lg bg-gray-200 ${
              activeTab === "general" && "bg-gray-400"
            }`}
            onClick={() => handleTabClick("general")}
          >
            General
          </div>
          <div
            className={`cursor-pointer flex-1 px-4 py-2 rounded-t-lg bg-gray-200 ${
              activeTab === "hiringFlow" && "bg-gray-400"
            }`}
            onClick={() => handleTabClick("hiringFlow")}
          >
            Hiring Flow
          </div>
          <div
            className={`cursor-pointer flex-1 px-4 py-2 rounded-t-lg bg-gray-200 ${
              activeTab === "other" && "bg-gray-400"
            }`}
            onClick={() => handleTabClick("other")}
          >
            Other
          </div>
        </div>

        <div className="p-4 bg-gray-100 rounded-b-lg mt-2">
          {activeTab === "general" && <div>General Settings</div>}
          {activeTab === "hiringFlow" && (
            <div>
              <HiringFlow />
            </div>
          )}
          {activeTab === "other" && <div>Other Settings Content</div>}
        </div>
      </div>
    </div>
  );
}
