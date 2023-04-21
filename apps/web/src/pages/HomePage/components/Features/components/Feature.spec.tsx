import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FixtureIcon from './fixtures/icon-chat.png';
import Feature from './Feature';

test('It renders', async () => {
  const { container } = render(
    <Feature
      alt="My Icon"
      icon={FixtureIcon}
      subtitle="My subtitle"
      title="My Title"
    />
  );

  const image = container.querySelector('img');
  expect(image).to.have.attribute('src', FixtureIcon);
  expect(image).to.have.attribute('alt', 'My Icon');

  const title = container.querySelector('h3');
  expect(title).to.have.text('My Title');

  const subtitle = container.querySelector('p');
  expect(subtitle).to.have.text('My subtitle');
});
