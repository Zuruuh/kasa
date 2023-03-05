const ACCORDION_STATES = {
  OPENED: 'opened',
  CLOSED: 'closed',
} as const;

Object.freeze(ACCORDION_STATES);

export { ACCORDION_STATES };

export type AccordionState =
  (typeof ACCORDION_STATES)[keyof typeof ACCORDION_STATES];

const ACCORDION_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

Object.freeze(ACCORDION_SIZES);

export { ACCORDION_SIZES };

export type AccordionSize =
  (typeof ACCORDION_SIZES)[keyof typeof ACCORDION_SIZES];

type BaseAccordionProps = {
  label: string;
  defaultState?: AccordionState;
  size?: AccordionSize;
};

export interface SizeClassNameWrapper {
  text: string;
  label: string;
}

export type AccordionProps =
  | (BaseAccordionProps & { content: string })
  | (BaseAccordionProps & { children: React.ReactNode });
