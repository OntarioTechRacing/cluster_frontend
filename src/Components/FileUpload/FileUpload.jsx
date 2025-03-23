import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css';

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [description, setDescription] = useState('');
  const [jobs] = useState([
    { id: 1, name: 'Job 1', status: 'Running', progress: 45, description: '' },
    { id: 2, name: 'Job 2', status: 'Completed', progress: 100, description: '' },
    { id: 3, name: 'Job 3', status: 'Incomplete', progress: 90, description: '' },
  ]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'text/plain': ['.cas'] },
    onDrop: acceptedFiles => setUploadedFile(acceptedFiles[0]),
  });

  return (
    <div className="file-upload-container">
      <h1 className="status-header">Server Cluster Status</h1>
      
      {/* White upload box */}
      <div {...getRootProps()} className="upload-dropzone white-box">
        <input {...getInputProps()} />
        <p className="drop-text">Drag & drop your files here</p>
        <p className="import-text">or import from:</p>
        
        <div className="source-buttons">
          {['My device', 'Google Drive', 'Dropbox', 'Link'].map((source) => (
            <button 
              key={source}
              className="source-button"
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {uploadedFile && (
        <div className="upload-details">
          <div className="file-name">
            <span>File Name:</span> {uploadedFile.name}
          </div>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
          />
        </div>
      )}

      {/* Status Table */}
      <div className="status-table-container">
        <table className="status-table">
          <thead>
            <tr>
              {['File Name', 'Status', 'Progress', 'Description'].map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.name}</td>
                <td>
                  <span className={`status-badge ${
                    job.status === 'Completed' ? 'completed' :
                    job.status === 'Running' ? 'running' : 'incomplete'
                  }`}>
                    {job.status}
                  </span>
                </td>
                <td>
                  <div className="progress-container">
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: `${job.progress}%` }}
                      />
                    </div>
                    <span className="progress-text">{job.progress}%</span>
                  </div>
                </td>
                <td>{job.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileUpload;