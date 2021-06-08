import renderer from 'react-test-renderer';
import Display from '../../components/Display';

it('renders Display correctly', () => {
  const tree = renderer.create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});
