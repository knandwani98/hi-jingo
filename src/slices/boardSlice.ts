import { VAL } from "@/lib/constants";
import { StoreState } from "@/lib/store";
import {
  emptyArrayTill,
  getRandomTicketNumbers,
  uniqueRandomNumber,
} from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

interface BoardSliceTypes {
  randomTicketDataA: number[] | unknown[];
  randomTicketDataB: number[] | unknown[];
  revealedTokenGrid: unknown[];
  revealedTokenData: number[];
  revealedToken: number;
}

const initialState: BoardSliceTypes = {
  randomTicketDataA: emptyArrayTill(VAL.NUM_OF_GRID),
  randomTicketDataB: emptyArrayTill(VAL.NUM_OF_GRID),
  revealedTokenGrid: emptyArrayTill(VAL.MAX_NUMBER),
  revealedTokenData: [],
  revealedToken: 0,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getRandomTicketA: (state) => {
      state.randomTicketDataA = getRandomTicketNumbers(VAL.NUM_OF_GRID);
    },
    getRandomTicketB: (state) => {
      state.randomTicketDataB = getRandomTicketNumbers(VAL.NUM_OF_GRID);
    },

    getRandomToken: (state) => {
      const data = [...state.revealedTokenData];

      const getUniqueRandomNumber = uniqueRandomNumber(data);

      state.revealedToken = getUniqueRandomNumber;

      data.push(getUniqueRandomNumber);

      state.revealedTokenData = data;

      //
      const gridData = state.revealedTokenGrid;
      gridData.splice(data.length - 1, 1, getUniqueRandomNumber);
      state.revealedTokenGrid = gridData;
    },
  },
});

export const { getRandomTicketA, getRandomTicketB, getRandomToken } =
  boardSlice.actions;

export const BOARD_STATES = {
  getRandomTicketDataA: (state: StoreState) => state.board.randomTicketDataA,
  getRandomTicketDataB: (state: StoreState) => state.board.randomTicketDataB,
  getRevealedTokensData: (state: StoreState) => state.board.revealedTokenData,
  getRevealedToken: (state: StoreState) => state.board.revealedToken,
  getRevealedTokenGrid: (state: StoreState) => state.board.revealedTokenGrid,
};

export const BOARD_ACTIONS = {
  getRandomTicketA,
  getRandomTicketB,
  getRandomToken,
};

export default boardSlice.reducer;
