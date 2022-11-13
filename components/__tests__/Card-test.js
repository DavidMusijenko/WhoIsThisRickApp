import renderer from 'react-test-renderer';
import Card from '../Card/Card';

//write a test for the Card component
//it should render correctly
//it should match the snapshot
//it should have a title prop
//it should have a description prop
//it should have a image prop

it(`renders correctly`, () => {
  const tree = renderer.create(<Card />).toJSON();

  expect(tree).toMatchSnapshot();
});
