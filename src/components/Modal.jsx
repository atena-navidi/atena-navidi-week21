const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md z-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;
