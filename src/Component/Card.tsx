import React, { useState, useEffect } from "react";
import { CardModel } from "../Pages/HomePage.model";
import "./Card.css";

export default function Card({ cardData }: CardModel) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="card">
        <p className="card-title">{cardData?.title}</p>
        {!isLoaded && <div className="image-loading">Loading...</div>}
        <img
          src={cardData?.image}
          alt={cardData?.title}
          onLoad={() => setIsLoaded(true)}
          className="card-image"
          style={{ opacity: isLoaded ? 1 : 0 }}
          onClick={onOpen}
        />
      </div>
      {isOpen && (
        <div className="overlay-wrapper" onClick={handleClose}>
          <img
            src={cardData?.image}
            alt="overlay-image"
            className="overlay-image"
          />
        </div>
      )}
    </>
  );
}
