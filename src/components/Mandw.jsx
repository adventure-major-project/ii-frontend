import React from "react";

const Mandw = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">Methodology</h1>
        <img src="/client_server_model.png" alt="methodology" className="mt-6" />
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 p-5">Workflow</h1>
        <img src="/workflow_diagram.png" alt="workflow" className="mt-6" />
      </div>
    </div>
  );
};

export default Mandw;
