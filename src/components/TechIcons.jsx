import React from "react";

export const TechIcon = ({ name, className = "w-4 h-4" }) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Python
  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.833 0 6.22 2.64 6.22 2.64l.006 2.735h5.783v.822H3.88S0 5.753 0 11.854c0 6.1 3.39 5.882 3.39 5.882h2.023v-2.836s-.11-3.39 3.334-3.39h5.733s3.224.053 3.224-3.17V2.64S18.107 0 11.914 0zm-3.28 1.83a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zM12.086 24c6.081 0 5.694-2.64 5.694-2.64l-.006-2.734h-5.783v-.823h8.128s3.88.444 3.88-5.657c0-6.1-3.39-5.882-3.39-5.882h-2.023v2.836s.11 3.39-3.334 3.39H9.612s-3.224-.053-3.224 3.17v5.698S5.893 24 12.086 24zm3.28-1.83a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z" />
      </svg>
    );
  }

  // React
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  // Angular
  if (norm.includes("angular")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.5l8.84 3.15-1.34 11.63L12 21.5l-7.5-4.22L3.16 5.65 12 2.5zm0 2.3l-5.6 12.3h2.15l1.15-2.85h4.6l1.15 2.85h2.15L12 4.8zm-1.5 7.6l1.5-3.7 1.5 3.7h-3z" />
      </svg>
    );
  }

  // Java
  if (norm === "java") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
      </svg>
    );
  }

  // C++ / C / C#
  if (norm === "cpp" || norm === "c" || norm === "csharp") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // JavaScript
  if (norm.includes("javascript") || norm === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm13.7 14.5c1.4 0 2.3-.7 2.3-2 0-1.4-.9-1.9-2.2-2.5l-.8-.3c-.8-.4-1.2-.7-1.2-1.3 0-.7.6-1.1 1.5-1.1.9 0 1.5.3 1.9.9l1.1-.9c-.6-.9-1.6-1.4-3-1.4-1.7 0-2.8.9-2.8 2.3 0 1.3.8 1.9 2 2.4l.8.3c.9.4 1.4.8 1.4 1.4 0 .8-.7 1.2-1.7 1.2-1.2 0-2-.6-2.4-1.4l-1.2.8c.6 1.2 1.8 1.9 3.7 1.9zm-6.2-.2v-6.9h-1.5v5.4c0 1.1-.5 1.5-1.4 1.5-.4 0-.8-.1-1.1-.2l-.4 1.2c.4.2 1 .3 1.7.3 1.7 0 2.7-.8 2.7-2.3z" />
      </svg>
    );
  }

  // Spring Boot
  if (norm.includes("spring")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  }

  // .NET
  if (norm.includes("net")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <path d="M7 8v8M12 8v8M17 8v8" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.186V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.99 11.5c-.322-.44-1.27-.604-1.99-.446-.118-.89-.728-1.558-1.503-1.558-.333 0-.64.126-.88.337-.367-.184-.812-.27-1.305-.205-.595.078-1.144.38-1.57.854a8.673 8.673 0 00-4.043-1.127H.085a.084.084 0 00-.085.084v1.836C0 17.5 4.925 21.5 11 21.5c7.098 0 11.95-4.225 12.99-9.5.006-.034.008-.07.008-.105a.72.72 0 00-.008-.395" />
      </svg>
    );
  }

  // Kubernetes
  if (norm.includes("kubernetes")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M6 6l12 12M6 18L18 6" />
      </svg>
    );
  }

  // AWS
  if (norm.includes("aws")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 17.2c-2.3 1.7-5.5 2.6-8.4 2.6-4 0-7.7-1.5-10.4-4-.2-.2 0-.5.2-.3 2.9 1.7 6.4 2.7 10.1 2.7 2.6 0 5.4-.7 7.9-2.1.4-.2.7.2.2.6zm2.4-.7c-.3-.4-1.9-.6-2.9-.8-.3 0-.4-.3-.2-.5 1.5-.9 3.8-.6 4.1-.3.3.4-.1 2.7-1.5 3.8-.2.2-.4.1-.4-.2.1-1 .9-2 1-2.1zM12 6.5c-3 0-5.5 1.8-5.5 4.7 0 2.2 1.4 3.7 3.5 4.3 1.5.4 3.3.4 4.8-.1v-2.3c-.9.5-2 .7-3 .7-1.4 0-2.3-.7-2.3-1.8h7.9c.1-.5.1-.9.1-1.3 0-2.6-2-4.2-5.5-4.2zm-2.4 4c0-.9.9-1.8 2.4-1.8 1.4 0 2.3.8 2.3 1.8h-4.7z" />
      </svg>
    );
  }

  // Redis
  if (norm.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.579 6.271l-9.043-5.221a1.077 1.077 0 00-1.072 0L2.421 6.271A1.074 1.074 0 001.885 7.2v9.6a1.074 1.074 0 00.536.929l9.043 5.221a1.077 1.077 0 001.072 0l9.043-5.221a1.074 1.074 0 00.536-.929V7.2a1.074 1.074 0 00-.536-.929zm-9.579-3.957l7.357 4.248-3.486 2.012-7.357-4.248 3.486-2.012zm-8.115 5.86l7.043 4.067v3.918l-7.043-4.067V8.174zm9.187 11.903v-3.918l7.043-4.067v3.918l-7.043 4.067z" />
      </svg>
    );
  }

  // MySQL / PostgreSQL / Databases
  if (norm.includes("sql") || norm.includes("database") || norm.includes("dynamo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // RabbitMQ / Kafka / Message Queue
  if (norm.includes("rabbit") || norm.includes("kafka")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }

  // Git / GitHub
  if (norm.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6M9 6h5a4 4 0 0 1 4 4v5" />
      </svg>
    );
  }

  // Postman
  if (norm.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    );
  }

  // Default code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
