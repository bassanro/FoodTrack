import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";
import { Button, Container, NumberDisplay } from "./styles";
import { ItemEntry } from "./../itemEntry";
interface Props {
  shoppingItem: Item[];
}

export const Home = observer(function(props: Props) {
  const { applicationStore } = React.useContext(AppContext);

  const clickedReduce = (event: React.MouseEvent<HTMLButtonElement>) => {
    applicationStore.decrement;
  };

  const clickedIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    applicationStore.increment;
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>

      <ItemEntry
        clickedReduce={applicationStore.decrement}
        clickedIncrement={applicationStore.increment}
        counter={applicationStore.counter}
      />
    </div>
  );
});
