/// <reference types="vitest/globals" />

import "@testing-library/jest-dom/vitest";
import * as axeMatchers from "vitest-axe/matchers";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

expect.extend(axeMatchers);
afterEach(() => cleanup());
