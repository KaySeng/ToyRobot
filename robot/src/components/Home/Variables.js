// Directions
export const NORTH = 'NORTH';
export const EAST = 'EAST';
export const SOUTH = 'SOUTH';
export const WEST = 'WEST';

// Regex
export const REGEX = {
    PLACE: /^PLACE\s+[0-5]+\s*,\s*[0-5]+\s*,\s*(WEST||NORTH||EAST||SOUTH)$/,
    MOVE: /^MOVE$/,
    LEFT: /^LEFT$/,
    RIGHT: /^RIGHT$/,
    REPORT: /^REPORT$/,
  };
  