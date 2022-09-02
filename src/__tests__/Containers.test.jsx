import React from 'react';
import { describe, it, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { ShippingScreen } from '../containers/ShippingScreen';

// Container Rendering Tests
describe('ShippingScreen rendering test', () => {
  test('Shipping screen should render without any issues', async () => {
    await render(<ShippingScreen/>)
  })
})

// Data Fetch Test
