import { Container, Header, Segment, Statistic,Grid } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1">Budget</Header>
        <Statistic size="small">
          <Statistic.Label>your balance:</Statistic.Label>
          <Statistic.Value>2,550.53</Statistic.Value>
        </Statistic>
        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color='green'>
                  <Statistic.Label style={{textAlign:'left'}}>
                    Incoming:
                  </Statistic.Label>
                  <Statistic.Value>1,045.50</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
              <Statistic size="tiny" color='red'>
                  <Statistic.Label style={{textAlign:'left'}}>
                    Expenses:
                  </Statistic.Label>
                  <Statistic.Value>625.50</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
