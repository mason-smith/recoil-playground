import { Dispatch, SetStateAction } from 'react';

// Local Dependencies
import { State } from 'src/data/states';

export interface LocationSelectProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  stateVal: State;
  setStateVal: Dispatch<SetStateAction<State>>;
}
