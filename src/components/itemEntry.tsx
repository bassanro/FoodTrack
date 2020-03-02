import * as React from "react";
import { observer } from "mobx-react";
import { Card, Button } from "react-bootstrap";
import { NumberDisplay } from "./Home/styles";
import { AppContext } from "../AppContext";

interface IProps {
  clickedReduce: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickedIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
  counter: number | null;
}

export const ItemEntry: React.FC<IProps> = observer(
  ({ clickedReduce, clickedIncrement, counter }) => {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.gffoodservice.com.au/content/uploads/2019/05/Helgas_168849_Gluten-Free-Loaf_Soy-and-Linseed_500g_web-ready.png"
          />
          <Card.Body>
            <Card.Title>Gluten Free Bread</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <div className="text-center">
              <Button variant="primary" onClick={clickedReduce}>
                -
              </Button>
              <NumberDisplay data-testid="counter-value">
                {counter}
              </NumberDisplay>
              <Button variant="primary" onClick={clickedIncrement}>
                +
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
);
