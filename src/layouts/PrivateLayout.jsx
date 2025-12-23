const PrivateLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default PrivateLayout;


