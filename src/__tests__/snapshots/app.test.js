import renderer from "react-test-renderer";
import App from "../../components/App";

it("renders App correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
