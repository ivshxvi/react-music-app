import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react'
import  UserEvent  from "@testing-library/user-event";

import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Home from '.'

describe("Clicker component", () => {
    beforeEach(() => {
        render(<Home/>)
    })

    afterEach(() => {
        cleanup()
    })

    it("Displays a paragraph with appropriate text", () => {
        const elem = screen.getByRole("paragraph")
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe("Kanye West fan page")
    })

    
})