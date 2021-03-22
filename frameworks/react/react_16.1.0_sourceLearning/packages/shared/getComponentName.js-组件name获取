
import type {Fiber} from 'react-reconciler/src/ReactFiber';

function getComponentName(fiber: Fiber): string | null {
  const {type} = fiber;
  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

export default getComponentName;
