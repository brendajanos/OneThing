import FontPicker from 'font-picker-react';
import renderer from 'react-test-renderer';

describe("Setting the pomodoro timer component", () => {
  it("matches the snapshot", () =>{
    const tree = renderer.create(<FontPicker />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})