import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react'
import  UserEvent  from "@testing-library/user-event";

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import FavPage from '.'

describe("Clicker component", () => {
    beforeEach(() => {
        render(<FavPage/>)
    })

    afterEach(() => {
        cleanup()
    })

    
    
})