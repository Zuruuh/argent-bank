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
  expect(image).to.have.attribute('src');
  expect(image).to.have.attribute('alt');

  const title = container.querySelector('h3');
  expect(title?.textContent).not.to.be.empty;

  const subtitle = container.querySelector('p');
  expect(subtitle?.textContent).not.to.be.empty;
});
