import { createContext, useEffect, useState } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {

  // ✅ LOAD FROM LOCAL STORAGE
  const [addresses, setAddresses] = useState(() => {
    const saved =
      localStorage.getItem("addresses");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [selectedAddress, setSelectedAddress] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "selectedAddress"
        );

      return saved
        ? JSON.parse(saved)
        : null;
    });

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      "addresses",
      JSON.stringify(addresses)
    );

  }, [addresses]);

  useEffect(() => {

    localStorage.setItem(
      "selectedAddress",
      JSON.stringify(selectedAddress)
    );

  }, [selectedAddress]);

  // ✅ ADD ADDRESS
  const addAddress = (address) => {

    const newAddress = {
      ...address,
      id: Date.now(),
    };

    setAddresses((prev) => [
      ...prev,
      newAddress,
    ]);
  };

  // ✅ DELETE ADDRESS
  const deleteAddress = (id) => {

    const updatedAddresses =
      addresses.filter(
        (addr) => addr.id !== id
      );

    setAddresses(updatedAddresses);

    // ✅ REMOVE SELECTED ADDRESS ALSO
    if (
      selectedAddress &&
      selectedAddress.id === id
    ) {

      setSelectedAddress(null);

    }
  };

  // ✅ TOGGLE SELECT / DESELECT
  const toggleSelectedAddress =
    (addr) => {

      if (
        selectedAddress?.id ===
        addr.id
      ) {

        setSelectedAddress(null);

      } else {

        setSelectedAddress(addr);

      }
    };

  return (

    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        deleteAddress,
        selectedAddress,
        setSelectedAddress:
          toggleSelectedAddress,
      }}
    >

      {children}

    </AddressContext.Provider>

  );
};