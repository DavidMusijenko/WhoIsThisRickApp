import FastImage from 'react-native-fast-image';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer.create(<FastImage />).toJSON();

  expect(tree).toMatchSnapshot();
});
