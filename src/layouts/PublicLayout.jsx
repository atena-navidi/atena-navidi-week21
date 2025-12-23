
//next-admin-panel/src/layouts/PublicLayout.jsx
const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  );
};

export default PublicLayout;
