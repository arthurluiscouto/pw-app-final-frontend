import react, { useState, useEffect } from "react";
import { Form, Card, Image, Icon } from "semantic-ui-react";
import "./styles/AppStyle.css";

function App() {
  const [name, setName] = useState('')
  const [userName, setUsername] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [repos, setRepos] = useState('')
  const [avatar, setAvatar] = useState('')
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)

  return (
    <>
      <div className='navbar'>Github Search</div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='GitHub user' name='github user'
              onChange={handleSearch} />
            <Form.Button content='Search' />
          </Form.Group>
        </Form>
      </div>
      { error ? (<h1>{error}</h1>) : (
        <div className="card">
          <Card>
            <Image src={avatar}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Nome: {name} </Card.Header>
              <Card.Header>Username: {userName} \n </Card.Header>
            </Card.Content>

            <Card.Content extra>
              <a>
                <Icon name='user' />
                {repos} Repositories
            </a>
            </Card.Content>
            
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {followers} followers
            </a>
            </Card.Content>

            <Card.Content extra>
              <a>
                <Icon name='user' />
                {following} following
            </a>
            </Card.Content>
          </Card>
        </div>
      )}
    </>
  );
}

export default App;
