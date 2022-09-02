import React from 'react';
import ReactDOM from 'react';
import { describe, it, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RefillBox } from '../components/RefillBox';
import { StarterBox } from '../components/StarterBox';

afterEach(cleanup);

describe('StarterBox test Summary Test', () => {
  const { getByText } = render(<StarterBox/>)
});