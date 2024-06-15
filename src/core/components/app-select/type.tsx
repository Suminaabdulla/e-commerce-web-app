import { ActionMeta, GetOptionLabel, GetOptionValue, MultiValue, Options, SingleValue } from 'react-select';

type Props<T> = {
  options: T[] | readonly T[];
  innerPlaceHolder?: string;
  name?: string;
  value?: T;
  defaultValue?: T;
};

export default Props;