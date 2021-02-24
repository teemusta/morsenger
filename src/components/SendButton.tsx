import React from 'react';

export interface IButtonProps {
  label: string;
  onClick?(e: React.MouseEvent<any>): any;
}

export class SendButton extends React.PureComponent<IButtonProps, void> {
  render() {
    const {
      label,
      onClick,
    } = this.props;

    return (
      <button key={label} onClick={onClick}>{label}</button>
    );
  }
}
