import { createContext } from "react";
import { Todo } from "../types";

export const TodoStateContext = createContext<{ todos: Todo[] } | null>(null);
