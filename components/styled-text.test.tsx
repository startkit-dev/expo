import { create } from "react-test-renderer"

import { MonoText } from "./styled-text"

describe("<MonoText />", () => {
  it(`renders correctly`, () => {
    const tree = create(<MonoText>Snapshot test!</MonoText>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
