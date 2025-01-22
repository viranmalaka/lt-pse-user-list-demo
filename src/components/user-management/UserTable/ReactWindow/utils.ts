export const getRowStyle = (flex: number) => {
  return {
    width: `${flex * 5}%`,
    maxWidth: `${flex * 5}%`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
};
