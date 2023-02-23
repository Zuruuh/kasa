const ACCORDION_STATES = {
  OPENED: 'opened',
  CLOSED: 'closed',
} as const;

Object.freeze(ACCORDION_STATES);

export { ACCORDION_STATES };

export type AccordionState =
  (typeof ACCORDION_STATES)[keyof typeof ACCORDION_STATES];

export interface AccordionProps {
  label: string;
  content: string;
  defaultState?: AccordionState;
}
