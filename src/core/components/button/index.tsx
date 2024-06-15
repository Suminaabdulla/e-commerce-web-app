
'use client'
// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface FilledButtonProps extends ButtonProps {
  minwidth?: number;
  buttonRef?: ButtonProps['ref'];
}

interface OutlinedButtonProps extends ButtonProps {
  buttonColor?: string;
}

interface LabelBadgeProps extends BoxProps {
  labelColor?: string;
  badgeBg?: string;
}

export const OutlinedButton = styled((props: OutlinedButtonProps) => {
  const { buttonColor, ...rest } = props;
  return <Button {...rest} variant='outlined' disableRipple={false} />;
})(({ theme, buttonColor = theme.palette.primary.main }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '12px',
  borderRadius: theme.shape.borderRadius,
  color: buttonColor,
  borderColor: buttonColor,
  backgroundColor: theme.palette.common.white,

  [':hover']: {
    borderColor: buttonColor,
    backgroundColor: theme.palette.common.white
  },

  ['& svg']: {
    fontSize: '16px'
  }
}));

export const FilledButton = styled((props: FilledButtonProps) => {
  const { buttonRef, ...rest } = props;
  return <Button {...rest} ref={buttonRef} variant='contained' disableRipple={false} />;
})(({ theme, color = theme.palette.primary.main, minwidth = 130 }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '12px',
  boxShadow: 'none !important',
  minWidth: `${minwidth}px`,
  backgroundColor: color,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,

  ['span']: {
    fontWeight: 300,
    marginLeft: 2
  },

  [':hover']: {
    backgroundColor: color
  },

  ['& svg']: {
    fontSize: '16px'
  }
}));

export const LabelBadge = styled(Box)<LabelBadgeProps>(
  ({ theme, labelColor = theme.palette.text.primary, badgeBg = theme.palette.primary.light }) => ({
    backgroundColor: badgeBg,
    padding: theme.spacing(1.5, 3),
    borderRadius: 3,
    color: labelColor,
    fontSize: 13,
    margin: theme.spacing(2, 0, 0, 2)
  })
);
