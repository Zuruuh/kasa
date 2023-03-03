const ACCORDION_STATES = {
  OPENED: 'opened',
  CLOSED: 'closed',
} as const;

Object.freeze(ACCORDION_STATES);

export { ACCORDION_STATES };

export type AccordionState =
  (typeof ACCORDION_STATES)[keyof typeof ACCORDION_STATES];

type BaseAccordionProps = {
  label: string;
  defaultState?: AccordionState;
  content?: string;
  children?: React.ReactNode;
};

export type AccordionProps =
  | (BaseAccordionProps & { content: string })
  | (BaseAccordionProps & { children: React.ReactNode });
