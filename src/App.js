
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>My Novel</Header>

      <Statistic size="small">
        <Statistic.Label>
          Current Novels
        </Statistic.Label>
        <Statistic.Value>
          0
        </Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:"left"}}>
                  Released
                </Statistic.Label>
                <Statistic.Value>1</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:"left"}}>
                  Continue
                </Statistic.Label>
                <Statistic.Value>2</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Book List</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>The second coming of gluttony</Grid.Column>
            <Grid.Column width={3}>200</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>The villain wants to live</Grid.Column>
            <Grid.Column width={3}>100</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new book</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={3} label='Description' placeholder="Title"/>
          <Form.Input icon='tags' width={12} label='Description' placeholder="Contents"/>
        </Form.Group>
          <Button.Group style={{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button>Submit</Button>
          </Button.Group>
      </Form>

    </Container>

  );
}

export default App;
