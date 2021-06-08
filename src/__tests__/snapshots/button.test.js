import renderer from 'react-test-renderer';
import Button from '../../components/Button';

it('renders Button correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
