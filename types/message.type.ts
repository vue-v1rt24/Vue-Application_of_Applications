export enum EnumType {
  PRIMARY = 'primary',
  DANGER = 'danger',
  WARNING = 'warning',
}

export interface IMessage {
  value: string;
  type: EnumType;
}
