export const NEXT_QUEUE = "NEXT_QUEUE";
export const PREVIUS_QUEUE = "PREVIUS_QUEUE";
export const RETURN_FIRST_MOVIE = "RETURN_FIRST_MOVIE";

export const nextQue = () => ({ type: NEXT_QUEUE });

export const previusQue = () => ({ type: PREVIUS_QUEUE });

export const returnFirstMov = () => ({ type: RETURN_FIRST_MOVIE });
