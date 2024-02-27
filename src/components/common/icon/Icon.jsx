const Icon = ({ name }) => {
  const icons = {
    coeur: (
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.58 0C11.08 0 9.05 1.87 9.05 3.59C9.05 1.87 7.02 0 4.52 0C2.02 0 0 2.02 0 4.52C0 6.29 1.09 7.64 2.5 8.57C4.06 9.6 8.43 11.85 9.05 12.94C9.67 11.85 14.04 9.6 15.6 8.57C17.01 7.64 18.1 6.29 18.1 4.52C18.1 2.02 16.07 0 13.57 0L13.58 0Z"
          fill="white"
        />
      </svg>
    ),
    close: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.85 0.92L13.93 0L7.43 6.51L0.92 0L0 0.92L6.51 7.43L0 13.93L0.92 14.85L7.43 8.35L13.93 14.85L14.85 13.93L8.35 7.43L14.85 0.92Z"
          fill="white"
        />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
