import React from 'react';
import { describe, it, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RefillBox } from '../components/RefillBox';
import { StarterBox } from '../components/StarterBox';

afterEach(cleanup);

// Component Rendering Tests
describe('StarterBox Render', () => {
  test('Should render without issues', async () => {
    await render(<StarterBox/>)
  })
});

describe('RefillBox Render', () => {
  test('RefillBox should render with no isues', async () => {
    await render(<RefillBox/>)
  })
})