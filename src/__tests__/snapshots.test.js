import renderer from 'react-test-renderer';
import App from '../components/App';
import Button from '../components/Button';
import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import Home from '../components/Home';
import Quote from '../components/Quote';

it('renders App correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders ButtonPanel correctly', () => {
  const tree = renderer.create(<ButtonPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Button correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Display correctly', () => {
  const tree = renderer.create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Quote correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
