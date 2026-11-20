import { createContext, useContext, useState } from "react";

const EnquiryModalContext = createContext(null);

export function EnquiryModalProvider({ children }) {
  const [state, setState] = useState({
    isOpen: false,
    title: "",
    payload: {},
  });

  const openEnquiryModal = (payload = {}, title = "") => {
    setState({ isOpen: true, title, payload });
  };

  const updateEnquiryPayload = (updates = {}) => {
    setState((prev) => ({
      ...prev,
      payload: {
        ...prev.payload,
        ...updates,
      },
    }));
  };

  const closeEnquiryModal = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <EnquiryModalContext.Provider
      value={{ state, openEnquiryModal, updateEnquiryPayload, closeEnquiryModal }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used inside EnquiryModalProvider");
  }
  return ctx;
}