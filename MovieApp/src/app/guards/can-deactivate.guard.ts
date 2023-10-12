import { CanDeactivateFn } from '@angular/router';
import { CanBeDirty } from '../models/can-be-dirty';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log(component, currentRoute, currentState, nextState);
  let canBeDirty: CanBeDirty = component as CanBeDirty;
  return (canBeDirty == undefined)
  ? true
  : (!canBeDirty.isDirty);
};
