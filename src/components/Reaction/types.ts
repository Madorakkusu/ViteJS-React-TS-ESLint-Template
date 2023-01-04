export type ReactionType = PositionType & {
  comment: string;
};

export type PositionType = {
  positionPercentageX: number;
  positionPercentageY: number;
};
