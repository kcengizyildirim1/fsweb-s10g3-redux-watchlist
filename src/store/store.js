import React from "react";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { reducers } from "./index";

export const store = createStore(reducers, applyMiddleware(logger));
