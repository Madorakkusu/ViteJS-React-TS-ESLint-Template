export type ReactionType = PositionType & {
  comment: string;
  isEmoji: boolean;
};

export type PositionType = {
  positionPercentageX: number;
  positionPercentageY: number;
};
