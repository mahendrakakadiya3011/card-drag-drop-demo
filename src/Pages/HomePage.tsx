import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided
} from "@hello-pangea/dnd";
import Card from "../Component/Card";
import { cardData } from "./data";
import { CardsModel } from "./HomePage.model";
import "./HomePage.css";

export default function HomePage() {
  const [oldCardData, setOldCardData] = useState<CardsModel[]>([...cardData]);
  const [newCardData, setNewCardData] = useState<CardsModel[]>([...cardData]);

  useEffect(() => {
    const setTheUpdateCardData = async () => {
      if (JSON.stringify(oldCardData) !== JSON.stringify(newCardData)) {
        //here we can add the logic for API call to set the updated list with order on every 5 seconds if both old and updated is not same
        setOldCardData([...newCardData]);
      }
    };

    const intervalId = setInterval(() => {
      setTheUpdateCardData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [oldCardData, newCardData]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    const reorderedCards = Array.from(newCardData);
    const [removed] = reorderedCards.splice(source.index, 1);
    reorderedCards.splice(destination.index, 0, removed);

    setNewCardData(reorderedCards);
  };

  return (
    <div>
      <div className="App">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="cards"
            direction="horizontal"
            isCombineEnabled={false}>
            {(provided: DroppableProvided) => (
              <div
                className="card-container"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {newCardData.map((card: CardsModel, index: number) => (
                  <Draggable
                    key={card.id.toString()}
                    draggableId={card.id.toString()}
                    index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <Card cardData={card} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
